import React, { Component } from 'react';
// import { GAinit, GAlogPageView } from '../../components/common/GoogleAnalytics';
import getAppConfigParm  from '../../config/AppConfig';
import getContentMetadata from '../api/contentmgr/getContentMetadata';
import SSPageHeader from '../../common/SSPageHeader';
import BlogPost from "./BlogPost";                                /* #nbchange */
import Footer from "../../common/RosyFooter";
import getContentMetaData from '../api/contentmgr/getContentMetadata';
import getContent from '../api/contentmgr/getContent';

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
      const { slug, metadata, mdxSource } = this.props;

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
              
              <BlogPost slug={slug} metadata={this.props.metadata} mdxSource={mdxSource} />                                     
              
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

  const metadata  = await getContentMetaData(slug);
  const mdxSource = await getContent(metadata.cid);
  // const rawMdx = await getContent(metadata.cid);
  // console.log("this is raw mdx")
  // console.log(rawMdx)
  // const mdxSource = '# Some ** mdx** text, with a component';
  // const mdxSource = await serialize(source)
  
  /* return 404 if  no metadata found for slug */
  if (!metadata) {
    return { notFound: true };
  }

  /* used to redirect */
  // if (haveProblem) {
  //   return { redirect: '/some/path' };
  // }
  
  // Render your page
  return { 
    props: {
      metadata,
      mdxSource
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
// If fallback is set to true, nextjs may take some to time to load data. It is highly
// recommended you show "Loading..." text or spinner until data is available. The
// alternative is to set fallback: 'blocking', where nextjs will wait for data before
// showing page and the check to show Loading is not needed.
//************************************************************************************ 
export async function getStaticPaths() {
  console.log(">> Inside getStaticPaths");

  const metadataArray = await getContentMetaData();

  // generate paths; paths is an array of ojects structured as follows:
  // { params: {<your dynamic segment id: "dynamic segment id value"} }
  const generatedPaths =  metadataArray.map((metadata) => {
    return {params: {slug: metadata.slug}}
  });

  console.log("Generated paths");
  console.log(JSON.stringify(generatedPaths,null,2));

  return {
    paths: generatedPaths,
    fallback: true
  }

}

export default BlogPage;                                              
