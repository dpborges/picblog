import React, { Component } from 'react';
import PropTypes from "prop-types";
import Head from 'next/head';
import getAppConfigParm  from '../../config/AppConfig';
import PageBanner from './subcomponents/PageBanner';
import MobileAd from './subcomponents/MobileAd';
import BlogImage from './subcomponents/BlogImage';
import BlogInfo from './subcomponents/BlogInfo';
import BlogContent from './subcomponents/BlogContent';
import RightSideAds from './subcomponents/RightSideAds';

// import ImgWithFallback from '../../components/image/ImgWithFallback';

// import Icofont from 'react-icofont';  /* using on  webpage with <i> tag versus Icofont React component */
// import { Link } from 'react-router-dom';
//Import Component
// import Sidebar from "./Sidebar"; 
// import Comments from "./Comment";
// import { TopWebLeaderBoard } from '../../../components/advertisements/TopWebLeaderBoard';

// I moved color file below from from Rosy assets folder to my styles directory hoping it would be locally
// scoped. Unfortunately, when I uncommented it, the colors look fine on the single blog post, but colors
// are overflowing to the main Blog landing page. So I uncommented it for now.

// *******************************************************************************
// To make changes quickly,  I have labeled them as #nbchange
// *******************************************************************************

// import "../../styles/ads.scss";
// import "../../styles/reusable-classes.scss";
// import '../../styles/rosystyle.scss';
// import '../../styles/blogdetail.scss';

import styles from '../../styles/blogdetail.module.scss';
// import { Right } from 'react-bootstrap/lib/Media';
// import { Right } from 'react-bootstrap/lib/Media';

// This  is copy of Single.js file from the Rosy Template

class BlogPost extends Component {                                        /* #nbchange */

   
     /**
     * This is the ref callback will be called every page  render/re-render, but the this.state.height will only be set once.
     * Note whiteSpace is the the number to tweak in order to get Ads to show up properly on the page and not go past bottom of post.
     */
    // refCallBack = element => {
    //     let whiteSpace = 200;   /* This number represents whitespace on top and bottom of the post itself which we don't want included in your height 
    //                             otherwise, Ads may extend beyond the bottom of the post. If you increase it, it will reduce the overall available */

    //     /* when page is rendered the first time, refCallBack will be fired, height will be set in the state and page will be rendered again*/
    //     if (element && !this.state.heightSet) {
    //         let rect = element.getBoundingClientRect();
    //         let adSpaceHeight = rect.height - whiteSpace;
    //         this.setState({height: adSpaceHeight, heightSet: true });
    //     }
    // }

    render() {

        let showAd =  getAppConfigParm("showAd");
        let siteUrl = getAppConfigParm("siteUrl");
        let blogUrl = getAppConfigParm("blogUrl");

        return (
        <div>
            <Head>
                <title>{`${this.props.SingleTitle}`}</title>
                <meta property="og:title" content={`${this.props.SingleTitle}`} />
                <meta name="description"  content="If you're planning a party, you might not be sure how much food to buy and prepare. Here's how to calculate food serving sizes and get the right amount." />
                <meta name="keywords"     content="food serving sizes, portion sizes, serving recommendations for food, serving in cups, one serving size"/>
            </Head> 
            <React.Fragment>

                <PageBanner 
                  title="Blog Details" 
                  subtitle="Great ideas for making it easier, more enjoyable, and less stressful to organize that special event or function you have in mind." 
                />

                <MobileAd showAd={showAd} />
              
                <div className={styles.topLevelContainer} >
                  <div className={styles.blogContainer} >
                    <div style={{display: 'flex', flexDirection: 'column', width: '100%'}}>
                      <BlogImage src={this.props.Images[1]} alt={this.props.SingleImageAlt} />
                      <BlogInfo day={this.props.SingleDate} month={this.props.SingleMonth} title={this.props.SingleTitle} />
                      <BlogContent showAd={showAd} siteUrl={siteUrl} blogUrl={blogUrl} />
                        {/* <div style={{width: '300px', height: '600px', border: '1px dotted black'}}></div> */}
                      </div>
                      <RightSideAds showAd={showAd} 
                        adList={["medium", "small", "single-medium-rectangle", "single-medium-rectangle"]}
                        style={{width: '300px'}} 
                      />
                  </div>
                </div>

            </React.Fragment>
        </div>
        ); /* end of return */
    } /* end of render() */
}  /* end of class */
BlogPost.propTypes = {
    Title: PropTypes.string,
    Content: PropTypes.string,
    Images:PropTypes.array,
    SingleTitle: PropTypes.string,
    SingleDate: PropTypes.string,
    SingleMonth: PropTypes.string,
    authorLink: PropTypes.string,
    authorName: PropTypes.string,
    CommentsLink: PropTypes.string,
    TotalComments: PropTypes.string,
    TagLink: PropTypes.string,
    TagName: PropTypes.string,
    PostContent: PropTypes.string,
    FacebookLink: PropTypes.string,
    TwitterLink: PropTypes.string,
    InstagramLink: PropTypes.string,
    linkedinLink: PropTypes.string,

};

//Default Props
BlogPost.defaultProps = {
    Title: "Blog Details",
    // Content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ac augue at erat hendrerit dictum. Praesent porta, purus eget sagittis imperdiet.",
    // SingleImage: require("../../../public/man-saying-shh-surprise-party.jpg"),
    Images: ["/images/portioned-food-on-table.webp", "/images/portioned-food-on-table.jpg"],
    SingleImageAlt: "portioned food on table",
    SingleTitle: "Party Planning 101: Calculating Food Serving Sizes for Your Guests",
    SingleDate: "28",
    SingleMonth: "Jan",
    authorLink: "/#0",
    authorName: "Jone",
    CommentsLink: "/#0",
    TotalComments: "0",
    TagLink: "/#0",
    TagName: "Business",
    PostContent: "<PUT CONTENT N-LINE IN THE JSX>",
    FacebookLink: "/#0",
    TwitterLink: "/#0",
    InstagramLink: "/#0",
    linkedinLink: "/#0",
}

export default BlogPost;                                 /* #nbchange */

