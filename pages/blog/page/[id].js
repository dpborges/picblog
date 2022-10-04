import React, { useEffect } from 'react';
import memoize from 'lodash/memoize';
import { GAinit, GAlogPageView } from '../../../common/GoogleAnalytics';
// import * as R from 'ramda';
import getAppConfigParm  from '../../../config/AppConfig';
import PropTypes from "prop-types";
import { chunk } from 'lodash';
import Link from 'next/link';
import Head from 'next/head';
import BlogImage from '../../../components/blog/BlogImage';
import SSPageHeader from '../../../common/SSPageHeader';
import PageBanner from '../../../components/blog/PageBanner';
import Footer from "../../../common/RosyFooter";
import Paginator from "../../../components/pagination/Paginator";
// import { faBalanceScale } from '@fortawesome/pro-light-svg-icons';
import { getMetadataList, sortByStringProp, 
         getItemsForPage, buildHrefsForPages} from '../../../utils/pagination';
import { dayOfMonth, shortMonthName } from '../../../utils/date';
import { logger, appTrace, fileTrace } from '../../../utils/logging';

// import useSticky from '../helpers/useSticky';

// import '../../styles/rosystyle.scss';   /* template style */

// import styles from '../../../styles/blogdetail.module.scss';
import styles from '../../../styles/blogdetail.module.scss';

const trace = appTrace;  /* asign fileTrace instead, for file level trace */

/* memoize (cache results) of getMetadataList */
const m_getMetadataList = memoize(getMetadataList);

// const active = {
//     color: '#2980B7',
//     fontSize: '1.1rem'
// }

// Note: if changing PAGE_LIMIT, number of items on this BlogList page, 
// at bottom , under getStaticPaths, the displaySize (number of pagination links 
// between prev & next buttons), should be updated to accomodate the recalculated number
// of BlogListPages/Pagination Links needed. For example, if I ahve total of 24 blog posts
// and I've been display 4 on each blog list page, I would need 6 pagination links, or 
// displaySize=6 to page thru the set of posts per listing.
// If i inrease PAGE_LIMIT from 4 to 8, the pagination displaySize will need to be reduced
// to 3 (as 24 divided by 8 = 3).
const BlogListPage =  (props) =>  {
    trace("> Inside BlogListPage");
    
    const { hrefList, blogItems, curPage } = props;

    trace(`    curPage: ${curPage}`);
    // console.log('hrefList ', JSON.stringify(hrefList,null,2))
    // console.log('blogItems ', JSON.stringify(blogItems,null,2))

    // const { isSticky, elementRef } = useSticky();

    useEffect ( () => {
        let env = getAppConfigParm("env");
        if (env === 'test'  || env === "prod") {
            if (!window.GA_INITIALIZED) {
                GAinit();
                window.GA_INITIALIZED = true;
            }   
            GAlogPageView()
        }
    }, []);


    /* Map over blogItems and create array for each blog item and its associated data */
    const blogdata = blogItems.map(( blog, index ) => {

     let theDay = dayOfMonth(new Date(blog.createDate + "T10:30:00Z"));
     let theMonth = shortMonthName(new Date(blog.createDate + "T10:30:00Z"));

     return (
          // <div style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center'}}>
          // {/* <div className="col-md-6 col-lg-6" key={index}> */}
          <div key={index}>
            <div className={styles.blogListItem} style={{maxWidth: '555px', padding: '0 20px 4rem'}}>
                <Link href={blog.path} className="blog-imgxx" >
                  <a>
                    <div style={{perspective: '555px', overflow: 'hidden'}}  >
                    <div className={styles.blogListImageStyle}>
                      <BlogImage src={blog.images[0].src} alt={blog.images[0].alt} />
                    </div>
                    </div>
                  </a>
                </Link>
                <div className="blog-info">
                    <div className="date-box">
                      { theDay } <span className="month">{ theMonth }</span>
                    </div>
                    <div className="title-meta" style={{marginBottom: '1.5rem'}}>
                      <h2><Link style={{textDecoration: 'none'}} href={blog.path}><div className={styles.blogListTitle}>{ blog.title }</div></Link></h2>
                    </div>
                </div>
                <div className="post-content">
                    <p style={{color: '#7F8C8D'}}>{blog.excerpt}</p>
                </div>
            </div>
          </div>
      )
    });
       
    // Construct jsx for entirety of the page with Header, page banner, blog items and footer.
    let jsx = (
      <React.Fragment>
        <Head>
            <title>Pitch In Club Blog</title>
            <meta property="og:title" content="Pitch In Club Blog" />
            <meta name="description" content="Blog with Ideas for making it easier, more enjoyable, and less stressful, href organize that special event or function you have in mind." />
            <meta name="keywords"    content="calculating food serving sizes, post party clean up, house warming party, group event planning, volunteer event planning"   />
        </Head> 
        
        <SSPageHeader />

        <PageBanner 
          title="Blog Details" 
          subtitle="Great ideas for making it easier, more enjoyable, and less stressful to organize that special event or function you have in mind." 
        />

        <div className={styles.blogListItemsContainer} >
          { blogdata } 
        </div>

        <div style={{marginBottom: '6rem'}} >
          <Paginator displaySize={5} hrefList={hrefList} curPage={curPage}  />
        </div>

        <Footer />
      </React.Fragment>
    );

    /* Return the page's jsx */
    return jsx;    
}

// *********************************************************************************
// getStatic props returns an a array of links (hrefs) used for rendering navigation 
// component and an array of metadata objects needed to render the page items for the 
// given page number passed in as pagenum.
// *********************************************************************************
export async function getStaticProps(context) {
  trace('> Inside getStaticProps for BlogListPage')

  const pagenum = context.params.id;      /* id string is the pagenum passed with /blog/page/n  */
  let PAGE_NUM  = parseInt(pagenum, 10);  /* convert string pagenum to number  */

  trace(`    PAGE_NUM: ${PAGE_NUM}`)

  /* Create metadata array of items and obtain count */
  let metadataList  = await m_getMetadataList();
  let totalItems = metadataList.length;
  trace(`    totalItems in metadataList, ${totalItems} `);

  /* sort metadata array by given property and specified order */
  sortByStringProp(metadataList, 'createDate', 'desc'); /* modifies original array */

  let numPages =  Math.ceil(totalItems / PAGE_LIMIT);    /* Calculate number of pages*/
  let paginatedList = chunk(metadataList, PAGE_LIMIT);   /* create a paginated list based on PAGE_LIMIT */
  
  // trace(`    paginatedList, ${JSON.stringify(paginatedList,null,2)} `);
 
  let blogItems = getItemsForPage(paginatedList, PAGE_NUM); /* get blog items for page PAGE_NUM */
 
  /* maps a url to each page (sub-array) in the paginated list */
  let hrefList = buildHrefsForPages("/blog/page", paginatedList);
  trace(`    hrefList: ${hrefList}`);

  return { 
    props: {
      hrefList,
      blogItems,
      curPage: PAGE_NUM
    }
  }
}

/* getStaticProps will generate a list of ids, 1 thru n, that correspond to the number of pages in our blog */ 
export async function getStaticPaths() {
  trace('> Inside getStaticPaths for BlogListPage')

  let generatedPaths = await getPageIdPaths();
  
  trace("    generated paths", );
  trace(`      ${JSON.stringify(generatedPaths)} `);

  return {
    paths: generatedPaths,
    fallback: false
  }

}

export default BlogListPage;

// *********************************************************************************
// helper function for getStaticPaths 
// *********************************************************************************

/* set number of items per page */
let PAGE_LIMIT = 8;

async function getPageIdPaths() {
  let metadataList     = await m_getMetadataList();
  let totalItems = metadataList.length;
  let numPages =  Math.ceil(totalItems / PAGE_LIMIT);    /* Calculate number of pages*/
  let pageIdPaths = [];
  let pageId = 0;
  for (let i = 0; i < numPages; i++) {
    pageId = i + 1; /* add 1 to account for zero base array */
    pageIdPaths.push({ params: {id: pageId.toString()} })
  }
  return pageIdPaths;
}