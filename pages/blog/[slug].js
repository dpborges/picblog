import React, { Component } from 'react';
// import { GAinit, GAlogPageView } from '../../components/common/GoogleAnalytics';
import getAppConfigParm  from '../../config/AppConfig';
import getContentMetadata from '../api/contentmgr/getContentMetadata';
import SSPageHeader from '../../common/SSPageHeader';
import BlogPost from "./BlogPost";                                /* #nbchange */
import Footer from "../../common/RosyFooter";
import getContentMetaData from '../api/contentmgr/getContentMetadata';

//************************************************************************************ 
// Renders blog post using NextJs SSG 
// input:  slug prop , passed in as the dynamic segment id
//************************************************************************************ 
class BlogPage extends Component {                                    

    constructor(props) {
        super(props);
        this.state = {env: getAppConfigParm("env")}
    }

    componentDidMount = () => {
        // Google Analytics
        // if (this.state.env  === 'prod') {
        //     if (!window.GA_INITIALIZED) {
        //         GAinit();
        //         window.GA_INITIALIZED = true;
        //     }
        //     GAlogPageView()
        // }
    }

  
    render() {
      console.log(`>> Inside [slug].js`);

      const { slug, metadata } = this.props;
      // console.log(metadata)

      /* used when setting getStaticPaths fallback to true. This check is not needed if fallback 
        is set to 'blocking'. */
      let serverSideDataAvailable = true;
      if (!serverSideDataAvailable) {
        return <div>Loading...</div>
      }

      return (
        <div>
          <React.Fragment>
              <SSPageHeader />
              
              <BlogPost slug={slug} metadata={this.props.metadata} />                                     
              
              <Footer />  
          </React.Fragment>
        </div>
      );
    }
}

//************************************************************************************ 
// getStaticProps - used for ssg at build time. For incremental ssg, use revalidate. 
// If set to 900 secs, NextJs will revalidate (or regenerate the page) after 15 minutes.
//************************************************************************************ 
export async function getStaticProps(context) {

  const { slug } = context.params;
  console.log(`slug : ${slug}`)

  // const filePath = path.join(process.cwd(), 'data', 'readme.txt')  /* cwd returns project folder */
  // const filedata = await fs.readFile(filePath, "utf-8");
  // console.log("This is readme file contents: ", filedata)

  // const { title } =  getContentMetadata("","calculating-food-serving-sizes-for-your-guests");
  const metadata = await getContentMetaData(slug);
  
  //Boilerplate code for returning a 404 or redirecting user to another page
  // If problem fetching data, you can return a 404 instead
  // let hadProblem1 = false; 
  // if (hadProblem1) {
  //   return { notFound: true };
  // }

  // If had some other problem, you redirect user to another page
  // let hadProblem2 = false; 
  // if (hadProblem2) {
  //   return { redirect: '/some/path' };
  // }
  
  // Render your page
  return { 
    props: {
      metadata
    }, 
    revalidate: 900
  };

}

//************************************************************************************ 
// getStaticPaths - this function returns a list of dynamic segment ids you want nextjs 
// to prerender at build time. You provide the list in an array of objects (in "paths"  
// property) that contains the dynamic segment id name (eg. slug) and their value. Use
// this list for prominents posts. For other post you can set fallback to true which 
// will render pages, not on the list, in just-in-time fashion (at time of request).
// If fallback is set to true, next may take some to time to load data. It is highly
// recommended you show "Loading..." text or spinner until data is available. The
// alternative is to set fallback: 'blocking', where nextjs will wait for data before
// showing page and the check to show Loading is not needed.
//************************************************************************************ 
export async function getStaticPaths() {
  // const metadata = await getContentMetaData()

  return {
    paths: [
      { params: {slug: "calculating-food-serving-sizes-for-your-guests"} }
      // { params: {slug: "second-example} }
    ],
    fallback: true
  }

}


// async function getContentMetaData() {
//   // const getContentMetadata = (slug="") => {
  
//     // const filePath = path.join(process.cwd(), 'data', 'contentmetadata.json')  /* cwd returns project folder */
//     // const filedata = await fs.readFile(filePath, "utf-8");
//     // console.log("This is readme file contents: ", filedata)
  
//     return {
//       id: '1234',
//       title: 'Party Planning 101: Calculating Food Serving Sizes for Your Guests',
//       slug: "calculating-food-serving-sizes-for-your-guests",
//       cid: '6782',
//       createDate: "2021-05-21",
//       updateDate: "2021-05-21",
//       images: [{src: "/images/portioned-food-on-table.jpg", alt: "portioned food on table"}]
//     }
  
// }
  


export default BlogPage;                                              
