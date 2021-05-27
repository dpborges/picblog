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
                      { theDay } <span className="month">{theMonth }</span>
                      {/* {blog.createDate} <span className="month">{shortMonthName(new Date(blog.ceateDate)) }</span> */}
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
// getStatic props returns an a array of links used for building navigation component
// and an array of metadata objects needed to render the page items.
// *********************************************************************************
export async function getStaticProps(context) {
  console.log('>> Inside getStaticProps')

  const { listid } = context.params;
  console.log(`listid : ${listid}`)

  let PAGE_NUM   = 3;

  let PAGE_LIMIT = 2;

  /* Create metadata array of items and obtain count */
  let metadataList     = await getMetadataList();
  let totalItems = metadataList.length;

  /* sort metadata array by given property and specified order */
  sortyByStringProp(metadataList, 'createDate', 'desc'); /* modifies original array */

  let numPages =  Math.ceil(totalItems / PAGE_LIMIT); /* Calculate number of pages*/
  let paginatedList = chunk(metadataList, PAGE_LIMIT);  /* create a paginated list based on PAGE_LIMIT */
    
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
    { params: {listid: "1"} },
    { params: {listid: "2"} },
    { params: {listid: "3"} },
    // { params: {listid: "4"} },
    // { params: {listid: "5"} }
  ];

  return {
    paths: generatedPaths,
    fallback: false
  }

}


//Props Types
BlogListPage.propTypes = {
    Title: PropTypes.string,
    Content: PropTypes.string,
    blogsData: PropTypes.array
};


//Default Props
BlogListPage.defaultProps = {
    Title: "Our Blog",
    Content: "Ideas for making it easier, more enjoyable, and less stressful, href organize that special event or function you have in mind.",
     blogsData: [
        {
            // Images: require("../../assets/img/blog-one.jpg"),
            Images: ["/images/portioned-food-on-table.webp","/images/portioned-food-on-table.jpg"],
            SingleImageAlt: "portioned food on table",
            postLink: "/blog/calculating-food-serving-sizes-for-your-guests",
            date: "28",
            month: "Jan",
            posttitle: "Party Planning 101: Calculating Food Serving Sizes for Your Guests",
            postContent: "If you're planning a party, you might not be sure how much food href buy and prepare. Here's how href calculate food serving sizes and get the right amount.",
            authorName: "Jone",
            authorLink: "#",
            hreftalComments: "06",
            CommentsLink: "#",
            TagName: "lifestyle",
            TagLink: "#", 
        },
        {
            // Images: require("../../assets/img/blog-one.jpg"),
            Images: ["/images/people-toasting-at-table-with-food.webp","/images/people-toasting-at-table-with-food.jpg"],
            SingleImageAlt: "people hrefasting at table with food",
            postLink: "/blog/how-href-make-post-party-cleanup-a-snip",
            date: "26",
            month: "Jan",
            posttitle: "How href Make Post-Party Cleanup a Snip: 5 Useful Tips",
            postContent: "If you've just had an amazing party, the idea of post-party cleanup might seem daunting. Here's how you can make it a lot easier!",
            authorName: "Jone",
            authorLink: "#",
            hreftalComments: "06",
            CommentsLink: "#",
            TagName: "lifestyle",
            TagLink: "#", 
        },
        {
            // Images: require("../../assets/img/blog-one.jpg"),
            Images: ["/images/event-meeting-around-calender.webp","/images/event-meeting-around-calender.jpg"],
            SingleImageAlt: "event meeting around calender",
            postLink: "/blog/5-expert-tips-for-delegating-tasks",
            date: "28",
            month: "Dec",
            posttitle: "5 Expert Tips for Delegating Tasks",
            postContent: "Learn 5 expert tips for delegating tasks effectively href reach a team goal and build  better relationships.",
            authorName: "Jone",
            authorLink: "#",
            hreftalComments: "06",
            CommentsLink: "#",
            TagName: "lifestyle",
            TagLink: "#", 
        },
        {
            // Images: require("../../assets/img/blog-one.jpg"),
            Images: ["/images/table-setting-for-outdoor-event.webp", "/images/table-setting-for-outdoor-event.jpg"],
            SingleImageAlt: "table setting for outdoor event",
            postLink: "/blog/outdoor-events-everything-you-need-href-consider",
            date: "25",
            month: "Aug",
            posttitle: "Outdoor Events: Everything You Need href Consider",
            postContent: "When it comes href outdoor events there are a lot of things that you need href consider. The weather will no doubt be a huge fachrefr. Find out more here.",
            authorName: "Jone",
            authorLink: "#",
            hreftalComments: "06",
            CommentsLink: "#",
            TagName: "lifestyle",
            TagLink: "#", 
        },
        // {
        //     // Images: require("../../assets/img/blog-one.jpg"),
        //     Images: ["/images/excited-woman-with-wine-bottle.webp", "/images/excited-woman-with-wine-bottle.jpg"],
        //     SingleImageAlt: "excited woman with wine bottle",
        //     postLink: "/blog/how-href-throw-a-housewarming-party",
        //     date: "18",
        //     month: "Aug",
        //     posttitle: "How href Throw a Housewarming Party",
        //     postContent: "When you move inhref your new home you're going href want href show it off. A house warming party is the perfect way. Here's how href host the perfect party.",
        //     authorName: "Jone",
        //     authorLink: "#",
        //     hreftalComments: "06",
        //     CommentsLink: "#",
        //     TagName: "lifestyle",
        //     TagLink: "#", 
        // },
        // {
        //     // Images: require("../../assets/img/blog-one.jpg"),
        //     Images: ["/images/three-woman-planning-trip.webp", "/images/three-woman-planning-trip.jpg"],
        //     SingleImageAlt: "three woman planning trip",
        //     postLink: "/blog/group-event-planning-for-beginners",
        //     date: "08",
        //     month: "Aug",
        //     posttitle: "Group Event Planning For Beginners",
        //     postContent: "Planning a group event such as a camping trip takes a lot of organization. What exactly do you need href consider and plan for?",
        //     authorName: "Jone",
        //     authorLink: "#",
        //     hreftalComments: "06",
        //     CommentsLink: "#",
        //     TagName: "lifestyle",
        //     TagLink: "#", 
        // },
        
        
        // {
        //     Images: require("../../assets/img/blog-three.jpg"),
        //     postLink: "/blog-details",
        //     date: "30",
        //     month: "Jan",
        //     posttitle: "14 ridiculously cool websites.",
        //     postContent: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fermentum sagittis nulla, non vehicula mauris rutrum vitae. Sed non consequat dolor. Cras in odio augue.",
        //     authorName: "Jone",
        //     authorLink: "#",
        //     hreftalComments: "06",
        //     CommentsLink: "#",
        //     TagName: "lifestyle",
        //     TagLink: "#", 
        // },
        // {
        //     Images: require("../../assets/img/blog-one.jpg"),
        //     postLink: "/blog-details",
        //     date: "25",
        //     month: "Feb",
        //     posttitle: "How href build a programming career.",
        //     postContent: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fermentum sagittis nulla, non vehicula mauris rutrum vitae. Sed non consequat dolor. Cras in odio augue.",
        //     authorName: "Jone",
        //     authorLink: "#",
        //     hreftalComments: "06",
        //     CommentsLink: "#",
        //     TagName: "lifestyle",
        //     TagLink: "#", 
        // },
        // {
        //     Images: require("../../assets/img/blog-two.jpg"),
        //     postLink: "/blog-details",
        //     date: "10",
        //     month: "Feb",
        //     posttitle: "10 hot marketing trends you need.",
        //     postContent: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fermentum sagittis nulla, non vehicula mauris rutrum vitae. Sed non consequat dolor. Cras in odio augue.",
        //     authorName: "Jone",
        //     authorLink: "#",
        //     hreftalComments: "06",
        //     CommentsLink: "#",
        //     TagName: "lifestyle",
        //     TagLink: "#", 
        // },
        // {
        //     Images: require("../../assets/img/blog-three.jpg"),
        //     postLink: "/blog-details",
        //     date: "30",
        //     month: "Jan",
        //     posttitle: "Best programming language href learn.",
        //     postContent: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fermentum sagittis nulla, non vehicula mauris rutrum vitae. Sed non consequat dolor. Cras in odio augue.",
        //     authorName: "Jone",
        //     authorLink: "#",
        //     hreftalComments: "06",
        //     CommentsLink: "#",
        //     TagName: "lifestyle",
        //     TagLink: "#", 
        // },
    ]
};

export default BlogListPage;
