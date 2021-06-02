import React, { useEffect } from 'react';
// import { GAinit, GAlogPageView } from '../../components/common/GoogleAnalytics';
import getAppConfigParm  from '../../../config/AppConfig';
import PropTypes from "prop-types";
import { chunk } from 'lodash';
import Link from 'next/link';
import Head from 'next/head';
import BlogImage from '../subcomponents/BlogImage';
import SSPageHeader from '../../../common/SSPageHeader';
import PageBanner from '../subcomponents/PageBanner';
import Footer from "../../../common/RosyFooter";
import { faBalanceScale } from '@fortawesome/pro-light-svg-icons';
import { getMetadataList, sortyByStringProp, getItemsForPage, buildHrefsForPages} from '../../../utils/pagination';
import { dayOfMonth, shortMonthName } from '../../../utils/date';
import useSticky from '../helpers/useSticky';

// import '../../styles/rosystyle.scss';   /* template style */

// import styles from '../../../styles/blogdetail.module.scss';
import styles from '../../../styles/blogdetail.module.scss';

const active = {
    color: '#2980B7',
    fontSize: '1.1rem'
}

// const  Blog = > {
const BlogListPage =  (props) =>  {

    const { hrefList, blogItems } = props;
    console.log('hrefList ', JSON.stringify(hrefList,null,2))
    console.log('blogItems ', JSON.stringify(blogItems,null,2))

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


    const blogdata = blogItems.map(( blog, index) => {

     let theDay = dayOfMonth(new Date(blog.createDate + "T10:30:00Z"));
     let theMonth = shortMonthName(new Date(blog.createDate + "T10:30:00Z"));

     return (
            <div className="col-md-6 col-lg-6" key={index}>
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
       
    //BlogOne loop END
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

        <section id="blog" className="our-blogx main-blog">
            <div className={styles.blogListItemsContainer} >
              <div>
                  <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center'}} >
                    { blogdata }
                  </div>
                  <div className="pagination-area text-center" style={{display: 'flex', justifyContent: 'center' }}>
                      <ul className="pagination">
                          <li><Link href="/blog">{/* <Icofont icon="icofont-simple-left" />*/} Prev</Link></li>
                          <li><Link href="/blog" style={active}>1</Link></li>
                          <li><Link href="/blog/2">2</Link></li>
                          <li><Link href="/blog/3">3</Link></li>
                          <li><Link href="/blog/4">4</Link></li>
                          <li><Link href="/blog/5">5</Link></li>
                            {/* <li><Link href="/#0">3</Link></li>  */}
                          <li><Link href="/blog/2">Next {/* <Icofont icon="icofont-simple-right" />*/}</Link></li>
                      </ul>
                  </div>
              </div>  
            </div>
        </section>

        <Footer />
      </React.Fragment>
    );

    return jsx;    
}

// *********************************************************************************
// getStatic props returns an a array of links (hrefs) used for rendering navigation 
// component and an array of metadata objects needed to render the page items for the 
// given page number passed in as pagenum.
// *********************************************************************************
export async function getStaticProps(context) {
  console.log('>> Inside getStaticProps')

  const { id } = context.params;
  let PAGE_NUM   = pagenum;  /* use id as page num */

  /* set page limit (aka items per page) */
  let PAGE_LIMIT = 2;

  /* Create metadata array of items and obtain count */
  let metadataList     = await getMetadataList();
  let totalItems = metadataList.length;

  /* sort metadata array by given property and specified order */
  sortyByStringProp(metadataList, 'createDate', 'desc'); /* modifies original array */

  let numPages =  Math.ceil(totalItems / PAGE_LIMIT);    /* Calculate number of pages*/
  let paginatedList = chunk(metadataList, PAGE_LIMIT);   /* create a paginated list based on PAGE_LIMIT */
    
  let blogItems = getItemsForPage(paginatedList, PAGE_NUM); /* get item for a single page */
 
  let hrefList = buildHrefsForPages("/blog/list", paginatedList);
  console.log("    hrefList ", hrefList);

  return { 
    props: {
      hrefList,
      blogItems
    } 
  };

}

export async function getStaticPaths() {
  // console.log(">> Inside getStaticPaths");

  // const metadataArray = await getContentMetaData();  /* returns all metadata objects */
  // console.log("   this is metadataArray: ", metadataArray)

  // generatedPaths returns an array of ojects structured as follows:
  // { params: {<your dynamic segment id: "dynamic segment id value"} }
  // const generatedPaths =  metadataArray.map((metadata) => {
  //   console.log("   slug inside getStaticPaths: ", metadata.slug)
  //   return {params: {slug: metadata.slug}}
  // });

  // console.log("Generated paths");
  // console.log(JSON.stringify(generatedPaths,null,2));

  let generatedPaths = [
    { params: {id: "1"} },
    { params: {id: "2"} },
    { params: {id: "3"} },
    { params: {id: "4"} },
    { params: {id: "5"} },
    { params: {id: "6"} },
    { params: {id: "7"} }
    // { params: {id: "4"} },
    // { params: {id: "5"} }
  ];

  return {
    paths: generatedPaths,
    fallback: false
  }

}

export default BlogListPage;
