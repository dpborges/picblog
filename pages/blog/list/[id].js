import React, { useEffect } from 'react';
import memoize from 'lodash/memoize';
// import { GAinit, GAlogPageView } from '../../components/common/GoogleAnalytics';
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
import { getMetadataList, sortByStringProp, getItemsForPage, buildHrefsForPages} from '../../../utils/pagination';
import { dayOfMonth, shortMonthName } from '../../../utils/date';

// import useSticky from '../helpers/useSticky';

// import '../../styles/rosystyle.scss';   /* template style */

// import styles from '../../../styles/blogdetail.module.scss';
import styles from '../../../styles/blogdetail.module.scss';

/* memoize (cache results) of getMetadataList */
const m_getMetadataList = memoize(getMetadataList);

const TRACE = false;

// const active = {
//     color: '#2980B7',
//     fontSize: '1.1rem'
// }

// const  Blog = > {
const BlogListPage =  (props) =>  {
    console.log(">> Inside BlogListPage");
    
    const { hrefList, blogItems, curPage } = props;
    console.log("   curPage in BlogListPage ", curPage);
    console.log("   type of curPage  ", typeof(curPage));
    // console.log('hrefList ', JSON.stringify(hrefList,null,2))
    // console.log('blogItems ', JSON.stringify(blogItems,null,2))

    // const { isSticky, elementRef } = useSticky();

    useEffect ( () => {
        // let env = getAppConfigParm("env");
        // if (env === 'prod' ) {
        //     if (!window.GA_INITIALIZED) {
        //         GAinit();
        //         window.GA_INITIALIZED = true;
        //     }   
        //     GAlogPageView()
        // }
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
                      <BlogImage src={blog.images[0].src} alt={blog.images[0].alt} />,
                    </div>
                    </div>
                  </a>
                </Link>
                <div className="blog-info">
                    <div className="date-box">
                      { theDay } <span className="month">{ theMonth }</span>
                    </div>
                    <div className="title-meta">
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
  console.log('>> Inside getStaticProps for BlogListPage')

  const pagenum = context.params.id;      /* id string is the pagenum passed with /blog/list/n  */
  let PAGE_NUM  = parseInt(pagenum, 10);  /* convert string pagenum to number  */
  // let PAGE_NUM  = pagenum;  /* convert string pagenum to number  */

  console.log('>> getStaticProps');
  const pagenumtype = typeof(PAGE_NUM);
  console.log(`    pagenum, ${pagenum} is of type ${pagenumtype}`);


  /* Create metadata array of items and obtain count */
  console.time("PERF >> getMetadataList");
  let metadataList  = await m_getMetadataList();
  console.timeEnd("PERF >> getMetadataList");
  let totalItems = metadataList.length;
  console.log(`    totalItems in metadataList, ${totalItems} `);

  /* sort metadata array by given property and specified order */
  sortByStringProp(metadataList, 'createDate', 'desc'); /* modifies original array */

  let numPages =  Math.ceil(totalItems / PAGE_LIMIT);    /* Calculate number of pages*/
  let paginatedList = chunk(metadataList, PAGE_LIMIT);   /* create a paginated list based on PAGE_LIMIT */
  
  // console.log(`    paginatedList, ${JSON.stringify(paginatedList,null,2)} `);
  console.log(`    PAGE_NUM, ${PAGE_NUM} `);
  // console.log(`    PAGE_LIMIT, ${JSON.stringify(PAGE_LIMIT)} `);
 
  console.log(`    getting items for page:  ${PAGE_NUM} `);
  let blogItems = getItemsForPage(paginatedList, PAGE_NUM); /* get blog items for page PAGE_NUM */
  // console.log(`    items for page ${PAGE_NUM}  :  ${JSON.stringify(blogItems,null,2)} `);
 
  /* maps a url to each page (sub-array) in the paginated list */
  let hrefList = buildHrefsForPages("/blog/list", paginatedList);
  console.log('>> getStaticProps hrefList');
  console.log("    ", hrefList);

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

  if (TRACE ) {
    console.log('=====================  (01)  =============================')
    console.log('>> Inside getStaticPaths for BlogListPage')
  }

  let generatedPaths = await getPageIdPaths();
  
  if (TRACE ) {
    console.log("    generated paths");
    console.log(`    ${JSON.stringify(generatedPaths)} `);
  }

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
let PAGE_LIMIT = 6;

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