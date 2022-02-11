import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import { Link } from 'react-router-dom';
// import { HashLink as Link } from 'react-router-hash-link';
import Head from 'next/head';
import Image from 'next/image';
import { GAinit, GAlogPageView } from '../../common/GoogleAnalytics';
import SSPageHeader from '../../common/SSPageHeader.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt } from '@fortawesome/pro-light-svg-icons';
import { faHandHoldingHeart} from '@fortawesome/pro-light-svg-icons';
import { faUsers } from '@fortawesome/pro-light-svg-icons';
import { faList } from '@fortawesome/pro-light-svg-icons';
import { faSmile } from '@fortawesome/pro-light-svg-icons';
// import  { FooterSection }      from './FooterSection';
import Footer from '../../common/Footer-Axolot.js'
import  { VictoryIcon }      from '../../components/icons/VictoryIcon';
import { HorizRule } from '../../components/decorators/HorizRule';
import getAppConfigParm  from '../../config/AppConfig';
// import BannerSection from '../../components/formatting/BannerSection.js';

import styles  from "../../styles/helping-hands-page.module.scss";
import styles2 from "../../styles/list-styles.module.scss";
import styles3 from "../../styles/cta-button.module.scss";

const titleSection = () =>  (
  <div className={styles["hhlp-title-container"]}>
    <div className={styles["hhlp-text-backdrop"]}>
      <div className={styles["hhlp-text-block"]}>
        <h1 className={styles["hhlp-title"]}>Event Help Made Easy With A Helping Hands List</h1>
      </div>
    </div>
  </div>
)

const textSection1 = () => (
    <div className={styles["hhlp-h2-section"]}>
      <h2 className={styles["hhlp-h2-style"]}>Need Party Help? Make a Helping Hands List!</h2>
      <p className={styles["hhlp-para"]}>Between setting up an event, running it while it’s happening, 
          and then cleaning up afterward, it can be hard to have fun at the events you host.
      </p>
      <p className={styles["hhlp-para"]}>
          Hiring professionals can be tempting, but that can quickly add up. 
      </p>
      <p className={styles["hhlp-para"]}>
          The best way to get party help is to make a Helping Hands List. 
      </p>
      <p className={styles["hhlp-para"]}>
          Make it fun, make it a group effort, and minimize stress by using the Pitch In Club’s Helping Hands 
          List feature. They provide a helpful list of tasks/duties for event participants to take part in. 
    
      </p>
      <p className={styles["hhlp-para"]}>
          <a className="blue-anchor-text" href={getAppConfigParm("siteUrl")}> Sign up for free </a> for 
          the Pitch In Club app, one of the best event apps on the market, and make 
          your Helping Hands List today! 
      </p>
    </div>
)

const textSection2 = () => (
    <div className={styles["hhlp-h2-section"]}>
        <h2 className={styles["hhlp-h2-style"]}>How It Works</h2>
        <p className={styles["hhlp-para"]}>Using the Helping Hands List feature is easy!</p>
        <p className={styles["hhlp-para"]}>First, make your event within the Pitch In Club event dashboard.</p>
        <p className={styles["hhlp-para"]}>Then, click on the List tab. The Helping Hands List will be the second feature listed.</p>
        <p className={styles["hhlp-para"]}>
            Create your Helping Hands List tasks and then add the number of people needed. The Helping Hands List feature 
            allows you to reorder items, using drag and drop, and fix typos quickly using the 'edit' and 'delete' icon.
        </p>
        <p className={styles["hhlp-para"]}>Once you are done filling it out and click the Save/Next button you will automatically go to the Invites tab. </p>
        <p className={styles["hhlp-para"]}>That’s it!</p>
        <p className={styles["hhlp-para"]}>It’s simple, it’s easy, it will revolutionize the way you throw parties.</p>
    </div>
)

const textSection3 = () => (
    <div className={styles["hhlp-h2-section"]}>
        <h2 className={styles["hhlp-h2-style"]}>Use Helping Hands List for All Kinds of Tasks </h2>
        <p className={`${styles["hhlp-para"]} rc-mt-2`}> You can use the Helping Hands List feature to complete all kinds of tasks.</p>
        <p className={styles["hhlp-para"]}>Some examples include…</p>
        <ul className={styles2["square-list-style"]}>
            <li className={styles2["resource-list-item-text"]}>Decorating</li>
            <li className={styles2["resource-list-item-text"]}>Preparing Food</li>
            <li className={styles2["resource-list-item-text"]}>Event Planning</li>
            <li className={styles2["resource-list-item-text"]}>Event Set Up</li>
            <li className={styles2["resource-list-item-text"]}>Recruiting Event Volunteers</li>
            <li className={styles2["resource-list-item-text"]}>Event Clean Up</li>
        </ul>
        <p className={styles["hhlp-para"]}>...and so much more! </p>
    </div>
)

const textSection4 = () => {
    let contributionsListUrl = `${getAppConfigParm("siteUrl")}/resources/contribution-list`

    return (
    <div className={styles["hhlp-h2-section"]} style={{marginBottom: '3rem'}}>
      <h2 className={styles["hhlp-h2-style"]}>Make a Helping Hands List Today!</h2>
      {appScreenShotSection()}
      <p className={styles["hhlp-para"]} style={{textAlign: 'center', margin: '2.5rem 0 3rem 0'}}>
        You can use the Helping Hands List feature to complete all kinds of tasks.
      </p>
      <p className={styles["hhlp-para"]}>
        <a className="blue-anchor-text" href={getAppConfigParm("siteUrl")}> Sign up for free </a>
        to use the Helping Hands List feature today. 
      </p>
      <p className={styles["hhlp-para"]}>
        Remember, if you don't ask, you won't know if people are willing to Pitch In.
      </p>
      <p className={styles["hhlp-para"]}>
        If you would also like people to contribute food, beverages, or other items, take a look at the Pitch In Club's 
        <a className="blue-anchor-text" href={contributionsListUrl} > Contribution Lists Feature </a>.
      </p>
    </div>
    )
}

/* This section that contains screenshot of helping hands list */
const appScreenShotSection = () => (
  <div className={styles["hhlp-screenshot-container"]}  >
    <div className="rc-mt-1">&nbsp;</div>
    <div className="rc-flex-container-center">
        <Image src="/images/helping-hands-list-ui.png" alt="Helping Hands List image" 
          height={672}
          width={725}
        /> 
    </div>
    <div className="rc-horiz-spacer-small">&nbsp;</div>
  </div>
);

// const usageSection = () => (
//     <div>
//         <div className="rc-flex-container-center">
//             <div>
//                 <div className="rc-horiz-spacer-medium">&nbsp;</div>
//                 <div className="hhlp-usage-section-heading">
//                     <div className="hhlp-usage-section-heading-text">Ideas for using a Helping Hands List</div>                  
//                 </div>
//                 <div className="rc-horiz-spacer-medium">&nbsp;</div>
//             </div>
//         </div>
//      </div>
//  )


 /* Resuable code fragment used to render an image with an annotated section below. 
   Note: If the text parameter is not passed, the annotated section is not rendered */
//  const annotatedImage = (imagePath, altName, text) => (
//     <div style={{padding: '2rem'}}>
//         <div className="rc-text-align-center">
//             <img className="hhlp-image-style" src={imagePath} alt={altName} /> 
//         </div>
//         <div className="hhlp-annot-style-container">
//             { text && <div className="hhlp-annot-style"><p>{text}</p></div>  }
//         </div>
//     </div>
// );


/* Return JSX for image section 1 which shows two images side by side on desktop view and column view on mobile */
// const imageSectionRow1 = (imagePath, altName, text) => (
//     <div className="rc-flex-container-center-r2c"> 
        
//         {annotatedImage("/images/help-decorate.jpg", "people helping decorate", "Get help with decorating")}
        
//         <div className="rc-horiz-spacer-medium"></div> 
        
//         {annotatedImage("/images/help-prepare-food.jpg", "people helping prepare food", "Get a group together to help prepare food")}

//     </div>
// )


// const imageSectionRow2 = (imagePath, altName, text) => (
//     <div className="rc-flex-container-center-r2c"> 
        
//         {annotatedImage("/images/hang-lighting.jpg", "hanging lights outdoors", "Hang Outdoor Lighting")}
        
//         <div className="rc-horiz-spacer-medium"></div> 
        
//         {annotatedImage("/images/move-furniture.jpg", "move sofa", "Help rearrange to make room for guests")}
        
//     </div>
// )

// const imageSectionRow3 = (imagePath, altName, text) => (
//     <div className="rc-flex-container-center-r2c"> 
        
//         {annotatedImage("/images/take-picture-of-event.jpg", "take picture of event", "Have volunteers take pictures and post on a shared site")}
        
//         <div className="rc-horiz-spacer-medium"></div> 
        
//         {annotatedImage("/images/help-with-cleanup.jpg", "clean up after event", "Ask for voluteers to help get things back in order")}
        
//     </div>
// )
 
// const processSection = () => (
//     <div className="hhlp-process-container">
//         <h2 className="hhlp-process-title">Use our Simple Step Wise Process</h2>
//         <div className="process-box-container">
//            <div className="process-box">
//                <FontAwesomeIcon className="process-box__icon" icon={faCalendarAlt} />
//                <p className="process-box__heading">Schedule Event</p>
//                <p className="process-box__text">Quickly Schedule an Event</p>
//            </div>
//            <div className="process-box">
//                <FontAwesomeIcon className="process-box__icon" icon={faUsers} />
//                <p className="process-box__heading">Add People</p>
//                <p className="process-box__text">Add People To Your Event or Function</p>
//            </div>
//            <div className="process-box">
//                <FontAwesomeIcon className="process-box__icon" icon={faList} />
//                <p className="process-box__heading">List Items</p>
//                <p className="process-box__text">Create List of Contributions and/or Help Needed</p>
//            </div>
//            <div className="process-box">
//                <FontAwesomeIcon className="process-box__icon fal" icon={faHandHoldingHeart} />
//                <p className="process-box__heading">Pitch In</p>
//                <p className="process-box__text">Invite People to Pitch In</p>
//            </div>
//            <div className="process-box">
//               <div className="process-box__victory-icon" > 
//                 <VictoryIcon  />
//               </div>
//                    <p className="process-box__victory-heading">Your Done</p>
//                    <p className="process-box__victory-text">Applaud yourselves for Job Well Done</p>
//               </div>
//            </div>
//         <div className="rc-horiz-spacer-medium">&nbsp;</div>
//     </div>
// );



/* This section provides list of application features */
const ctaBlock = (siteUrl) => (
    <div className={styles["hhlp-ctablock-container"]}>
        {/* <div className="features-horiz-spacer2"></div> */}
        <div className="rc-horiz-spacer-small">&nbsp;</div>  
        <div style={{display: 'flex', justifyContent: 'center', marginTop: '.5rem'}}>
        <a href={getAppConfigParm("siteUrl")} className={styles3["cta-button"]}>
          <p className={styles3["cta-button-text"]}>Give It Try</p>
        </a>
    </div>
        <div className="rc-horiz-spacer-small">&nbsp;</div>    
        <div style={{display: "flex", justifyContent: "center", marginBottom: "1rem"}}></div>
    </div>
)

// Helping Hands Page
class HelpingHandsPage extends Component  {

    componentDidMount = () => {
        let env = getAppConfigParm("env");
        if (env === 'test' || env === 'prod') {
            if (!window.GA_INITIALIZED) {
                GAinit();
                window.GA_INITIALIZED = true;
            }
            GAlogPageView()
        }
    }

    render() {

        let siteUrl = getAppConfigParm("siteUrl");
    
        return  (  // use destructing to obtain function prop
            <div id="title">
                <Head>
                    <title>Event Help | Helping Hands List | Pitch In Club</title>
                    <meta property="og:title" content="Event Help | Helping Hands List | Pitch In Club" />
                    <meta name="description" content="Need event help? Use the Helping Hands List feature in the best party planner app, the Pitch In Club. Click here to plan your next party now!"/>
                    <meta name="keywords"  content="helping hands,get help,organize,volunteer sign up,sign ups,todo list,decorate" />
                </Head>
                <SSPageHeader />
                {titleSection()}
                
                <div className={styles["hhlp-subtitle-container"]}>
                  <h3 className={styles["hhlp-subtitle"]}>Make Organizing Group Events a Group Effort With a Helping Hands List</h3>
                </div>

                <HorizRule pctWidth="50%" color="#CC6600" thickness=".5rem" mt="2rem" mb="3rem" />

                <div className={styles["hhlp-h2-sections-container"]}>
                  {textSection1()}
                  {textSection2()}
                  {textSection3()}
                </div>

                {/*processSection()*/}

                <div className={styles["hhlp-h2-sections-container"]}>
                  {textSection4()}
                </div>
                
                
                {/*
                {usageSection()}
                {imageSectionRow1()}
                <div className="rc-horiz-spacer-large">&nbsp;</div>    
                {imageSectionRow2()}
                <div className="rc-horiz-spacer-large">&nbsp;</div>    
                {imageSectionRow3()}
                <div className="rc-horiz-spacer-large">&nbsp;</div>    
                */}

                {ctaBlock(siteUrl)}
                <Footer />
            </div>
        );
    }
}   


// const mapDispatchToProps = (dispatch) => ({
//     startLogin: () => dispatch(startLogin())
// })

// export default connect(undefined, mapDispatchToProps)(LoginPage);
// export default connect()(HelpingHandsPage);
export default HelpingHandsPage;

