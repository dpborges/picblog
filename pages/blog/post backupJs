import React, { Component } from 'react';
import PropTypes from "prop-types";
import Head from 'next/head';
import Image from 'next/image';
import getAppConfigParm  from '../../config/AppConfig';
import { displayAd } from '../../common/ad/helpers/displayAd';
import displayAdsList from '../../common/ad/helpers/displayAdsList';
import displayAdsOnRight from '../../common/ad/helpers/displayAdsOnRight';
import VisibilityWrapper from '../../common/VisibilityWrapper';
import StandardBanner from './subcomponents/PageBanner';

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

// This  is copy of Single.js file from the Rosy Template

class BlogContent extends Component {                                        /* #nbchange */

    constructor(props) {
        super(props);

        this.state = {
            scrolled: false,
            height: 700,
            heightSet: false
        }
    }

    // handleScroll = () => {
    //         const isTop = window.scrollY < 580; /* 580 is number of pixels you need to scroll down for skyscraper to reach top */
    //         if (isTop !== true) {               /* we are no longer in the 0 - 579 pixel range */
    //             this.setState({ scrolled: true}) 
    //         } else {                            /* we are no longer in the  0 - 579 pixel range */
    //             this.setState({ scrolled: false}) 
    //         }
    // }

    componentDidMount() {
        // window.addEventListener('scroll', this.handleScroll, false);

        
    }

    componentWillUnmount() {
        // window.removeEventListener('scroll', this.handleScroll, false);
    }

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
                <div>
                  <div className="diplay-table" >
                    <StandardBanner 
                        title="Blog Details" 
                        subtitle="Various ideas for making it easier, more enjoyable, and less stressful to organize that special event or function you have in mind." 
                    />
                  </div>
                </div>
                <section id="blog" className={`our-blog main-blog ${styles.blogContainer}`} >
                    <div style={{display: 'flex', justifyContent: 'center'}}>
                        <VisibilityWrapper show={showAd} contentType="advertisement" >
                            {displayAd("mobile-leader-board", "mobile", {marginTop: '-2rem'})}
                            {displayAd("in-feed-horizontal", "tablet" )}
                        </VisibilityWrapper>
                    </div>
                    <div className={`container ${styles.postContentContainer}`} ref={this.refCallBack} style={{border: '2px solid green', display: 'flex'}}>
                        <div className={`row ${showAd} ? 'rc-flex-container' : 'rc-flex-container-center'`} >
                            <div className={`${showAd} ? "col-lg-8" : "col-lg-9" `}>
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className={`blog-details ${styles.blogDetailViewportWidth}`} style={{border: '4px dotted black'}}>
                                            <div className="post-img" style={{height: '250px'}}>
                                                <Image src={this.props.Images[1]} 
                                                       alt={this.props.SingleImageAlt}
                                                       width={410}
                                                       height={250}
                                                       layout='responsive'
                                                       priority='true'
                                                 />
                                            </div>
                                            <div className="blog-info">
                                                <div className="date-box">
                                                {this.props.SingleDate} <span className="month">{this.props.SingleMonth}</span>
                                                </div>
                                                <div className="title-meta">
                                                    <h1 className={styles.blogDetailTitle}>{this.props.SingleTitle}</h1>
                                                </div>
                                            </div>
                                            <div className="post-content">
                                                {/* <p className={styles.content}>{this.props.PostContent}</p>  */}
                                                    <div>&nbsp;</div>
                                                    <p className={styles.content}>
                                                        Are you hosting a house welcoming party for yourself or a loved one? Do you want a way to consolidate the food you 
                                                        prepare for church social events? If so, then you need to properly calculate the food serving sizes of your events.
                                                    </p>
                                                    <p className={styles.content}>
                                                        Doing so can help control your overall budget. You'll be able to find the Goldilocks fit between too little food 
                                                        and too much. You will get a higher return on your investment, knowing all the food you bought was consumed.
                                                    </p>
                                                    <p className={styles.content}>
                                                        Be sure to read below for a party planning 101 guide on how to calculate the serving sizes of food for your guests.
                                                    </p>
                                                    <div style={{display: 'flex', justifyContent: 'center'}}>
                                                        <VisibilityWrapper show={showAd} contentType="advertisement" >
                                                            {displayAd("medium-rectangle", "mobile")}
                                                            {displayAd("medium-rectangle", "tablet")}
                                                        </VisibilityWrapper>
                                                    </div> 
                                                    <h2 className={styles.h2tag}>1. Invest in an Event Planning Tool</h2>
                                                    <p className={styles.content}>
                                                        Many times, it's helpful to look at the big picture and calculate accordingly. Many party hosts wind up over 
                                                        serving or undeserving their guests because they weren't prepared.
                                                    </p>
                                                    <p className={styles.content}>
                                                        They didn't take the time to do things like organize a guest list or get a proper headcount before the day of. 
                                                        In doing so, they had to take a wild guess with the food amount they served each person attending.
                                                    </p>
                                                    <p className={styles.content}>
                                                        For example, say you purchased enough food for 20 people, but then 40 people showed up. Now everybody only 
                                                        gets one half of the food you'd intended for them to get. A bit of organization could have prevented that.
                                                    </p>
                                                    <p className={styles.content}>
                                                        That's why it's always helpful to use in an 
                                                        <a className={styles.blueAnchor} href={`${siteUrl}/resources/event-planning-tools`}> event planning tool </a>.
                                                        It allows you to schedule each of your events in thorough detail. You can schedule the event easily, add to 
                                                        or edit your guest list, and track who's coming and what they're pitching in.
                                                    </p>
                                                    <p className={styles.content}>
                                                        This tool alone can help you effectively
                                                        <a className={styles.blueAnchor} href="https://www.thebalancesmb.com/how-to-build-a-basic-event-budget-1223749"> organize your event budget</a>.
                                                        You can see what people are bringing, then purchase items to fill in wherever necessary. You will maximize your 
                                                        guest list and ensure that everyone chips in for your party.
                                                    </p>
                                                    <div style={{display: 'flex', justifyContent: 'center'}}>
                                                        <VisibilityWrapper show={showAd} contentType="advertisement" >
                                                            {displayAd("medium-rectangle", "mobile")}
                                                            {displayAd("medium-rectangle", "tablet")}
                                                        </VisibilityWrapper>
                                                    </div> 
                                                    <h2 className={styles.h2tag}>2. Think in Terms of Courses</h2>
                                                    <p className={styles.content}>
                                                        If you want to ensure that everyone gets their fair share of food, you have to look at your food/catering on a course by course basis. 
                                                        Most event planners just look at an overall perspective.
                                                    </p>
                                                    <p className={styles.content}>
                                                        But what if a few people over serve themselves on the appetizers? Then those that didn't get enough appetizers are overcompensating 
                                                        on the main course... you see the dilemma.
                                                    </p>
                                                    <p className={styles.content}>
                                                        Instead, focus on delegating the right amount for each course you're serving. If you plan to offer appetizers, 
                                                        the main course, and a dessert, then supply the right amount to guarantee each of your guests gets a well-balanced meal. Here are a few courses to think through:
                                                    </p>
                                                    <ul className={`${styles.indentList} ${styles.content}`}>
                                                        <li className={styles.squareBullet}>Appetizers</li>
                                                        <li className={styles.squareBullet}>Entrees</li>
                                                        <li className={styles.squareBullet}>Fruit Trays</li>
                                                        <li className={styles.squareBullet}>Veggie Trays</li>
                                                        <li className={styles.squareBullet}>Salads</li>
                                                        <li className={styles.squareBullet}>Deserts</li>
                                                        <li className={styles.squareBullet}>
                                                            <a className={styles.blueAnchor} href="https://www.goodhousekeeping.com/food-recipes/party-ideas/g30794570/finger-food-ideas/"> Finger Foods</a>
                                                            &nbsp;(served during the entirety of your event)
                                                        </li>
                                                        <li className={styles.squareBullet}>Coffee</li>
                                                        <li className={styles.squareBullet}>Beer and Alcohol (if you've decided to serve alcohol)</li>
                                                    </ul>
                                                    <div>&nbsp;</div>
                                                    <p className={styles.content}>
                                                        Truth be told, you can pick any combination of these; or none of them. Some people choose to keep the food light 
                                                        so that it doesn't become the focal point of the event. This is common during art shows, corporate events, networking events, etc. 
                                                    </p>
                                                    <p className={styles.content}>
                                                        Whichever course of action you take (pun intended), be sure to stick to the 1 pound rule. It says that you 
                                                        should offer one pound of food for every adult in attendance. If there will be children, then calculate 1/2 pound for each of them.
                                                    </p>
                                                    <div style={{display: 'flex', justifyContent: 'center'}}>
                                                        <VisibilityWrapper show={showAd} contentType="advertisement" >
                                                            {displayAd("medium-rectangle", "mobile")}
                                                            {displayAd("medium-rectangle", "tablet")}
                                                        </VisibilityWrapper>
                                                    </div> 
                                                    <h2 className={styles.h2tag}>3. Careful With Variety</h2>
                                                    <p className={styles.content}>
                                                        You might think that variety is a good idea for an event, but there's a catch. If you offer too many options, you'll 
                                                        quickly notice that people are tearing through one option and barely touching the others.
                                                    </p>
                                                    <p className={styles.content}>
                                                        If you know your guest list well enough to predict which dish will be popular with the majority of them, offer 
                                                        that dish in large quantities. That way, everyone will be guaranteed to get at least one serving of it.
                                                    </p>
                                                    <p className={styles.content}>
                                                        During these unprecedented times, you'll want to make everything packaged anyway. This cuts back on the temptation 
                                                        for people to hog one particular food dish, giving you more control in the process. Not to mention that it's safer for the health of your guests.
                                                    </p>
                                                    <div style={{display: 'flex', justifyContent: 'center'}}>
                                                        <VisibilityWrapper show={showAd} contentType="advertisement" >
                                                            {displayAd("medium-rectangle", "mobile")}
                                                            {displayAd("medium-rectangle", "tablet")}
                                                        </VisibilityWrapper>
                                                    </div> 
                                                    <h2 className={styles.h2tag}>4. Think About the Time of the Event</h2>
                                                    <p className={styles.content}>
                                                        The time of your event plays a huge role in the food serving sizes that you should offer.
                                                    </p>
                                                    <p className={styles.content}>
                                                        For example, if you set a networking event for 6 pm on a weeknight (directly after people get off from work) 
                                                        and say "food will be provided", you'd better have a heavy spread.
                                                    </p>
                                                    <p className={styles.content}>
                                                        However, if your event is in those in-between spots, such as 10am to 11am or 3pm to 4pm, you can 
                                                        get away with serving lighter portions.
                                                    </p>
                                                    <div style={{display: 'flex', justifyContent: 'center'}}>
                                                        <VisibilityWrapper show={showAd} contentType="advertisement" >
                                                            {displayAd("medium-rectangle", "mobile")}
                                                            {displayAd("medium-rectangle", "tablet")}
                                                        </VisibilityWrapper>
                                                    </div> 
                                                    <h2 className={styles.h2tag}>5. Offer Different Platters</h2>
                                                    <p className={styles.content}>
                                                        Remember the tip about avoiding variety? Your event's platters are the exception to that rule. 
                                                        People love platters for events they've come to expect them.
                                                    </p>
                                                    <p className={styles.content}>
                                                        Platters are also a great way to provide lighter food options for those that might be on a diet, 
                                                        watching what they eat, or have dietary restrictions you weren't aware of.
                                                    </p>
                                                    <p className={styles.content}>
                                                        Think about offering platters such as:
                                                    </p>
                                                    <div>
                                                    <ul className={`${styles.indentList} ${styles.content}`}>
                                                        <li className={styles.squareBullet}>Veggie Platters</li>
                                                        <li className={styles.squareBullet}>Cheese Platters</li>
                                                        <li className={styles.squareBullet}>Sandwich Platters</li>
                                                        <li className={styles.squareBullet}>Dip Platters</li>
                                                        <li className={styles.squareBullet}>Charcuterie Boards</li>
                                                    </ul>
                                                    </div>
                                                    <div>&nbsp;</div>
                                                    <p className={styles.content}>
                                                        These are exceptional options for events where people will be mingling and walking to and from. 
                                                        They can grab a handful of snacks and converse with people as they chip away at their plate.
                                                    </p>
                                                    <div style={{display: 'flex', justifyContent: 'center'}}>
                                                        <VisibilityWrapper show={showAd} contentType="advertisement" >
                                                            {displayAd("medium-rectangle", "mobile")}
                                                            {displayAd("medium-rectangle", "tablet")}
                                                        </VisibilityWrapper>
                                                    </div> 
                                                    <h2 className={styles.h2tag}>Calculate Your Food Serving Sizes With These Tips</h2>
                                                    <p className={styles.content}>
                                                        Now that you have seen several ways to provide ample food serving sizes for your guests, 
                                                        be sure to use this advice to your advantage.
                                                    </p>
                                                    <p className={styles.content}>
                                                        If you need people to pitch in to help with food preparations, you may want to consider using the 
                                                        <a className={styles.blueAnchor} href={`${siteUrl}/resources/helping-hands}`}> “Helping Hands List”  
                                                         </a> feature in this
                                                        <a className={styles.blueAnchor} href={`${siteUrl}`}> free event planning tool</a>.
                                                    </p>
                                                    <p className={styles.content}>
                                                        Be sure to read this article for more information on
                                                        <a className={styles.blueAnchor} href={`${blogUrl}/resources/event-planning-tools`}> planning outdoor events </a>
                                                        and everything that you should think through.
                                                    </p>

                                                    <div style={{display: 'flex', justifyContent: 'center'}}>
                                                        <VisibilityWrapper show={showAd} contentType="advertisement" >
                                                            {displayAd("medium-rectangle", "mobile")}
                                                            {displayAd("medium-rectangle", "tablet")}
                                                        </VisibilityWrapper>
                                                    </div> 
                                            </div> 
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Sidebar: src/components*/}
                            {/*  <Sidebar /> */}
                            <div className={styles.rightSideAds} style={{border: '2px dashed blue'}}>
                              <VisibilityWrapper show={showAd} contentType="advertisement">
                                  {displayAdsOnRight("medium")}
                                  {displayAdsOnRight("small")}
                                  {displayAd("medium-rectangle", "desktop", {marginLeft: '2.4rem', marginBottom: '3rem'})}
                              </VisibilityWrapper> 
                            </div>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        </div>
        ); /* end of return */
    } /* end of render() */
}  /* end of class */
BlogContent.propTypes = {
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
BlogContent.defaultProps = {
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

export default BlogContent;                                 /* #nbchange */


{/*
<div className={`${this.state.scrolled ? 'ad-web-skyscraper-scrolled??' : 'ad-web-skyscraper'} right-ad-container rc-mt-1pt5 rc-ml-1`}>
                                <h3 className="ad-web-skyscraper">-- Add Section Skyscraper</h3>
                            </div>


   <VisibilityWrapper show={false} contentType="advertisement" >
                            <div style={{marginTop: '1.5rem', marginLeft: '1rem', postition: 'sticky', top:`${this.state.top}`}}>
                                <h3 className="ad-web-skyscraper">-- Add Section Skyscraper</h3>
                            </div>
                           </VisibilityWrapper>    

  <div className={`${this.state.scrolled ? 'container-fixed' : 'container-relative'} rc-mt-1pt5 rc-ml-1`}>
                                <h3 className="ad-web-skyscraper">-- Add Section Skyscraper</h3>
                            </div>

*/}


{/* <div className="container">
                                <div className="row">
                                    <div className="col-lg-7">
                                     <div style={{marginLeft:'5%'}}>
                                      <h1 className="table-cell-title">{this.props.Title}</h1>
                                      
                                      <p className="table-cell-subtitle table-cell-subtitle-w">
                                          Various ideas for making it easier, more enjoyable, and less stressful, to organize 
                                          that special event or function you have in mind.
                                      </p>
                                    </div>
                                    </div>
                                </div>
                            </div>  */}
                


                //             <div className="bread-cumbs-area bread-cumbs-bg" style={{width: '100vw'}}>
                //     <div className="diplay-table" style={{height: '200px'}}>
                //         <div className="display-table-cell">    
                //     <StandardBanner />
                            
                //         </div>  
                //     </div>
                // </div> 