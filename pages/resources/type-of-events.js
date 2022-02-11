import React, { Component } from 'react';
import Head from 'next/head';
import { GAinit, GAlogPageView } from '../../common/GoogleAnalytics';
import SSPageHeader from '../../common/SSPageHeader.js'
import getAppConfigParm  from '../../config/AppConfig';
import Footer from '../../common/Footer-Axolot.js'
import { HorizRule } from '../../components/decorators/HorizRule';
import BannerSection from '../../components/formatting/BannerSection';

import styles from "../../styles/typeevents.module.scss";
import styles2 from "../../styles/features.module.scss";
import styles3 from "../../styles/list-styles.module.scss";
import styles4 from "../../styles/cta-button.module.scss";

const titleSection = () => (
  <div>
      <div className={styles["typeevents-title-container"]}>
        <div className={styles["typeevents-text-block-container"]}>
          <div className={styles["typeevents-text-backdrop"]}>
              <div className={styles["typeevents-text-block"]}>
                  <h1 className={styles["typeevents-title"]}>The Best Group Planning App for All Types of Events</h1>
              </div>
          </div>
        </div>
      </div>
      <div className={styles["typeevents-subtitle-container"]}>
        <h3 className={styles["typeevents-subtitle"]}>Whatever Your Event May Be, The Pitch In Club Makes Planning Easy </h3>
      </div>
  </div>
);

/* Resuable code fragment used to render an image with an annotated section below. 
   Note: If the text parameter is not passed, the annotated section is not rendered */
// const annotatedImage = (imagePath, altName, text) => (
//     <div style={{padding: '2rem'}}>
//         <div className="rc-text-align-center">
//             <img className="typeevents-image-style" src={imagePath} alt={altName} /> 
//         </div>
//         <div className="typeevents-annot-style-container">
//             { text && <div className="typeevents-annot-style"><p className="typeevents-annot-text">{text}</p></div>  }
//         </div>
//     </div>
// );


/* Return JSX for image section 1 which shows two images side by side on desktop view and column view on mobile */
// const imageSection1 = (imagePath, altName, text) => (
//     <div className="rc-flex-container-center-r2c"> 
        
//         {annotatedImage("/images/cookout.jpg", "cookout image", "Barbeque's and outdoor events")}
        
//         <div className="rc-horiz-spacer-medium"></div> 
        
//         {annotatedImage("/images/family-reunion.jpg", "family reunion image", "Family reunions")}
        
//     </div>
// )

/* Return JSX for image section 2 which shows two images side by side on desktop view and column view on mobile */
// const imageSection2 = (imagePath, altName, text) => (
//     <div className="rc-flex-container-center-r2c"> 
        
        
//         {annotatedImage("/images/volunteer-sign-up-ecology.jpg", "volunteer for ecology effort image", "Support ecology")}
        
//         <div className="rc-horiz-spacer-medium">&nbsp;</div> 
        
//         {annotatedImage("/images/volunteer-sign-up-clean.jpg", "Volunteer clean environment", "Support clean enviroment")}
        
//     </div>
// )

/* Return JSX for image section 3 which shows two images side by side on desktop view and column view on mobile */
// const imageSection3 = (imagePath, altName, text) => (
//     <div className="rc-flex-container-center-r2c"> 
        
//         {annotatedImage("/images/tailgate-party.jpg", "Tailgate party image", "Tailgate party")}
        
//         <div className="rc-horiz-spacer-large"></div> 
        
//         {annotatedImage("/images/dance-party.jpg", "Dance Party Image", "Dance Party")}
        
//     </div>
// )


const textSection1 = () => (
  <div className={styles["typeevents-h2-section"]}>
    <h2 className={styles["typeevents-h2-style"]}>Organize Any Event With The Premiere Party Planning App</h2>
    <p className={styles["typeevents-para"]}>BBQ? Church fundraiser? Business lunch? </p>
    <p className={styles["typeevents-para"]}>
        No matter what the event is, the Pitch in Club makes party planning easy. Our event planner 
        allows you to create events, schedule them, make sign up lists, send out reminders, and more! 
        Everything you could need for every event is right at your fingertips in our easy-to-use dashboard. 
    </p>
    <p className={styles["typeevents-para"]}>
        <a className={styles["blue-anchor-text"]} href={getAppConfigParm("siteUrl")}> Plan Your Next Party Now </a>
        using our event app! It will be so simple you will want to throw another party to celebrate. 
    </p>
  </div>
)

const textSection2 = () => (
  <div className={styles["typeevents-h2-section"]}>
      <h2 className={styles["typeevents-h2-style"]}>Personalize Your Party </h2>
      <p className={styles["typeevents-para"]}>Our party planning process is easy to personalize, making it 
          perfect for event planners who organize a wide variety of events.
      </p>
      <p className={styles["typeevents-para"]}>
          You can use the same process to organize a high tea with four friends as you use to organize a 
          family reunion with 50 aunts, uncles, cousins, and grandparents. 
      </p>
      <p className={styles["typeevents-para"]}>
          Our dashboard is completely adaptable to whatever your party needs may be, having a bare-bones 
          outline of four easy steps that provides plenty of room for customizability.
      </p>
  </div>
)

const textSection3 = () => (
  <div className={styles["typeevents-h2-section"]}>
      <h2 className={styles["typeevents-h2-style"]}>Types of Events</h2>
      <p className={styles["typeevents-para"]}>You can organize all kinds of events and parties quickly 
          and easily using the Pitch In Club!
      </p>
      <p className={styles["typeevents-para"]}>Some events include: </p>
      <ul className={styles3["square-list-style"]}>
        <li className={styles3["resource-list-item-text"]}>BBQ</li>
        <li className={styles3["resource-list-item-text"]}>Family Reunion</li>
        <li className={styles3["resource-list-item-text"]}>Volunteer Efforts</li>
        <li className={styles3["resource-list-item-text"]}>Birthday Party</li>
        <li className={styles3["resource-list-item-text"]}>Work Lunch</li>
        <li className={styles3["resource-list-item-text"]}>Sports Watch Party</li>
        <li className={styles3["resource-list-item-text"]}>Dinner Party</li>
        <li className={styles3["resource-list-item-text"]}>Potluck Style Event</li>
        <li className={styles3["resource-list-item-text"]}>Outdoor Sports Event</li>
        <li className={styles3["resource-list-item-text"]}>Camping Trip</li>
        <li className={styles3["resource-list-item-text"]}>Office Events</li>
        <li className={styles3["resource-list-item-text"]}>Cocktail Parties</li>
        <li className={styles3["resource-list-item-text"]}>Church Events</li>
      </ul>
      
      <p className={styles["typeevents-para"]}>
          ...and so much more! 
      </p>
      <p className={styles["typeevents-para"]}>
          If it is a group gathering, the Pitch In Club can help you organize it. 
      </p>
  </div>
)

const textSection4 = () => (
  <div className={styles["typeevents-h2-section"]}>
      <h2 className={styles["typeevents-h2-style"]}>Take the Hassle out of Party Planning! </h2>
      <p className={styles["typeevents-para"]}>Parties are fun so who says the planning has to be any different? 
          You can plan an event in minutes using the Pitch In Club.
      </p>
      <p className={styles["typeevents-para"]}>
          To make sure you have the best party possible, use the best organizer app on the market.
      </p>
  </div>
)

/* CTA block at bottom of page  */
const ctaBlock = () => (
  <div className={styles2["features-ctablock-container"]}  style={{marginTop: '3rem'}}>
    <div style={{display: 'flex', justifyContent: 'center'}}>
    <a href={getAppConfigParm("siteUrl")} className={styles4["cta-button"]}>
          <p className={styles4["cta-button-text"]}>Start Planning Now</p>
        </a>
    </div>
  </div>
)

// Type Event Types Page component
class TypeEventsPage extends Component {  // use destructing to obtain function prop

    componentDidMount = () => {
        let env = getAppConfigParm("env");
        if (env === 'test' ||env === 'prod') {
            if (!window.GA_INITIALIZED) {
                GAinit();
                window.GA_INITIALIZED = true;
            }
            GAlogPageView()
        }
    }

    render() {
        return (
        <div>
            <Head>
                <title>Group Planning App for All Types of Events | Pitch In Club</title>
                <meta property="og:title" content="Group Planning App for All Types of Events | Pitch In Club" />
                <meta name="description" content="The Pitch In Club group planning app makes party planning simple and fun! You can use it for every type of event - from a potluck to a dance party!" />
                <meta name="keywords"  content="family reunion,volunteer effort,birthday party,BBQ,Barbeque,Housewarming,Cocktail Party
                tailgate,potluck,retirement party,house party,dance party,bbq for 25 guests,planning a barbeque for 50,tailgating 101, 
                planning a dinner party for 10" />
            </Head>
            <SSPageHeader />

                {titleSection()}
                
                <HorizRule pctWidth="65%" color="#CC6600" thickness=".5rem" mt="2rem" mb="3rem" />

                <div className={styles["typeevents-h2-sections-container"]}>
                    {textSection1()}
                    {textSection2()}
                    {textSection3()}
                    {textSection4()}
                </div>

            {/*
                <div style={{display: "flex", justifyContent: "center"}}>
                    <h2 className="typeevents-image-title">Organize family events...</h2>
                </div>
                <div className="rc-horiz-spacer-tiny">&nbsp;</div>
                {imageSection1()}
                <div className="features-horiz-spacer4">&nbsp;</div>  

                <div style={{display: "flex", justifyContent: "center"}}>
                    <h2 className="typeevents-image-title">Create a Volunteer Sign Up</h2>
                </div>
                <div className="features-horiz-spacer4">&nbsp;</div>    
                {imageSection2()}
                <div className="features-horiz-spacer4">&nbsp;</div>    


                <div style={{display: "flex", justifyContent: "center"}}>
                    <h2 className="typeevents-image-title">Friendly Gatherings</h2>
                </div>
                <div className="features-horiz-spacer4">&nbsp;</div>    
                {imageSection3()}
                <div className="features-horiz-spacer4">&nbsp;</div>  

                <div className="typeevents-final-text-container">
                    <h2 className="typeevents-final-text">Organize Theme parties, Office Parties, Family Reunions, Cocktail Parties, HouseWarming, and more... </h2>
                </div>  
                <div className="typeevents-final-text-container">
                    <h2 className="typeevents-final-text">The "Pitch In Club" makes Group Planning Easy</h2>
                </div>  
                <div className="features-horiz-spacer4">&nbsp;</div>  
            */}
                {ctaBlock()}

            <Footer />
        </div>
        )
    }  /* end of render() */
}; /* end of class defintion */
   
// const mapDispatchToProps = (dispatch) => ({
//     startLogin: () => dispatch(startLogin())
// })

// export default connect(undefined, mapDispatchToProps)(LoginPage);
export default TypeEventsPage;

