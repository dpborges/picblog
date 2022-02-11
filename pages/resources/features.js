// import "../../styles/button.scss";
import React, { Component } from 'react';
import Head from 'next/head';
import Image from 'next/image';
// import Script from 'next/script'
import { GAinit, GAlogPageView } from '../../common/GoogleAnalytics';
import SSPageHeader from '../../common/SSPageHeader.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt } from '@fortawesome/pro-light-svg-icons';
import { faHandHoldingHeart} from '@fortawesome/pro-light-svg-icons';
import { faUsers } from '@fortawesome/pro-light-svg-icons';
import { faList } from '@fortawesome/pro-light-svg-icons';
import { faSmile } from '@fortawesome/pro-light-svg-icons';
import getAppConfigParm  from '../../config/AppConfig';
import Footer from '../../common/Footer-Axolot.js'
import VictoryIcon  from '../../components/icons/VictoryIcon.js';
// import BannerSection from '../../components/formatting/BannerSection';

import styles1 from "../../styles/features.module.scss";
import styles2 from "../../styles/homepage-sections.module.scss";
import styles3 from "../../styles/cta-button.module.scss";


const titleSection = () => (
  <div className={`${styles1["features-title-container"]}`}>
    <div>
      <div className={styles1["features-text-block"]}>
        <h1 className={styles1["features-title"]}>Features</h1>
        <hr className={styles1["hr-medium-features"]} />
        <h2 className={styles1["features-subtitle"]}>Pitch In Club</h2>
        <p className={styles1["features-subtext"]}>The Simple Event Planning Tool</p>
      </div>
    </div>
  </div>
);


/* This is process section. It explains the simple stepwise process */
const processSection = () => (
    <div className={styles1.featuresStepwiseContainer}>
        {/* commented out Button 
        <div style={{display: 'flex', justifyContent: 'center'}}>
        <a href={getAppConfigParm("siteUrl")} className={styles1.ssr-button features-signup-button  features-signup-button-mod">
             <p className={styles1.features-signup-button-text">More Info?</p>
        </a>
        </div>
        */}
        <div className={styles1.featuresHorizSpacer1} >&nbsp;</div>
        <div>
            <h2 className={styles1.featuresSectionTitle}>Simple Stepwise Process</h2>
            <p className={styles1.featuresStepwiseSubtitle}>Creating an Event is a Breeze</p>
        </div>
        <div className={styles2['process-box-container']}>
           <div className={styles2['process-box']}>
               <FontAwesomeIcon className={styles2['process-box__icon']} icon={faCalendarAlt} />
               <p className={styles2['process-box__heading']}>Schedule Event</p>
               <p className={styles2['process-box__text']}>Quickly Schedule an Event</p>
           </div>
           <div className={styles2['process-box']}>
               <FontAwesomeIcon className={styles2['process-box__icon']} icon={faUsers} />
               <p className={styles2['process-box__heading']}>Add People</p>
               <p className={styles2['process-box__text']}>Add People To Your Event or Function</p>
           </div>
           <div className={styles2['process-box']}>
               <FontAwesomeIcon className={styles2['process-box__icon']} icon={faList} />
               <p className={styles2['process-box__heading']}>List Items</p>
               <p className={styles2['process-box__text']}>Create List of Contributions and/or Help Needed</p>
           </div>
           <div className={styles2['process-box']}>
               <FontAwesomeIcon className={styles2['process-box__icon']} icon={faHandHoldingHeart} />
               <p className={styles2['process-box__heading']}>Pitch In</p>
               <p className={styles2['process-box__text']}>Invite People to Pitch In</p>
           </div>
           <div className={styles2['process-box']}>
                <div className={styles2['process-box__victory-icon']}> 
                 <VictoryIcon  />
                </div>
               <p className={styles2['process-box__victory-heading']}>Your Done</p>
               <p className={styles2['process-box__victory-text']}>Applaud yourselves for Job Well Done</p>
           </div>
        </div>
        <div className={styles1.featuresModifierMb1}>&nbsp;</div>
    </div>
);

/* This is section that list the non-functional features (eg. security , subscription cost , mult-device support) */
const nonfuncFeatureSection = () => (
    <div style={{padding: '3rem 0'}}>
        <div>&nbsp;</div>
        <div>
            <h2 className={styles1.featuresSectionTitle}>Built-in Functionality you'd Appreciate</h2>
        </div>
        <div className={styles1.featuresNonfuncContainer}>
            <div className={styles1.featuresNonfuncLeftSide}>

                <div className={styles1.featuresNonfuncRowBlock}>
                    <div className={styles1.featuresNonfuncColBlock}>
                        <div className={styles1.featuresNonfuncLabel}>Free</div>
                        <p className={styles1.featuresNonfuncText}>No subscription plans / No credit cards</p>
                    </div>
                    <div>
                        <Image className={styles1.featuresCcardImage} width={112} height={112}
                             src="/images/no-credit-card-required-image.jpg" alt="no credit card required image" />
                    </div>
                </div>
            </div>

            <div className={styles1.featuresHorizSpacer1}>&nbsp;</div>

            <div className={styles1.featuresNonfuncRightSide}>
                <div className={styles1.featuresNonfuncRowBlock}>
                    <div className={styles1.featuresNonfuncColBlock}>
                        <div className={styles1.featuresNonfuncLabel}>Secure</div>
                        <p className={styles1.featuresNonfuncText}>Password Encryption and secure communication</p>
                    </div>
                    <div>
                      <Image className={styles1.featuresHttpsImage}
                          src="/images/https-image.jpg" alt="Https characters"
                          width={128} height={40} />
                    </div>
                </div>

                <div className={styles1.featuresHorizSpacer1}>&nbsp;</div>
                
                <div className={styles1.featuresNonfuncRowBlock} >
                <div className={styles1.featuresNonfuncColBlock} >
                    <div className={styles1.featuresNonfuncLabel} >Multi-Device Support</div>
                    <p className={styles1.featuresNonfuncText} >Support for multiple devices</p>
                </div>
                <div>
                    <Image className={styles1.featuresDeviceImage} src="/images/multi-device-support.jpg" alt="Mult-device-support image"
                             width={142} height={56} />
                </div>
            </div>
        </div>
    </div>
    <div className={styles1.featuresHorizSpacer5}>&nbsp;</div>
    </div>
)

/* This section provides list of application features */
const featuresListSection = () => (
    <div>
        <div className={styles1.featuresListContainer} >
                <div className={styles1.featuresHorizSpacer4} >&nbsp;</div>
                <h3 className={styles1.featuresSectionTitle} >Application Features to easily Create and Track Events</h3>
                <div className={styles1.featuresItemsContainer} >
                    <div className={`${styles1.featuresListItem} ${styles1.rcMb1}`} >
                        <div className={styles1.triangleContainer} >
                            <div className={styles1.triangleRight} ></div>
                        </div>
                        <h2 className={styles1.featuresLiText} >Create Unlimited Events</h2>
                    </div>
                    <div className={`${styles1.featuresListItem} ${styles1.rcMb1}`} >
                        <div className={styles1.triangleContainer} >
                            <div className={styles1.triangleRight}></div>
                        </div>
                        <h2 className={styles1.featuresLiText}>Schedule event with date, time, or date ranges</h2>
                    </div>
                    <div className={`${styles1.featuresListItem} ${styles1.rcMb1}`} >
                        <div className={styles1.triangleContainer} >
                            <div className={styles1.triangleRight} ></div>
                        </div>
                        <h2 className={styles1.featuresLiText} >Simple Dashboard to track, attendees, contributions, and helping hands</h2>
                    </div>
                    <div className={`${styles1.featuresListItem} ${styles1.rcMb1}`} >
                        <div className={styles1.triangleContainer} >
                            <div className={styles1.triangleRight} ></div>
                        </div>
                        <h2 className={styles1.featuresLiText} >Search Event by keyword</h2>
                    </div>
                    <div className={`${styles1.featuresListItem} ${styles1.rcMb1}`} >
                        <div className={styles1.triangleContainer} >
                            <div className={styles1.triangleRight} ></div>
                        </div>
                        <h2 className={styles1.featuresLiText}>Separate lists for contributions and helping hands</h2>
                    </div>
                    <div className={`${styles1.featuresListItem} ${styles1.rcMb1}`} >
                        <div className={styles1.triangleContainer} >
                            <div className={styles1.triangleRight} ></div>
                        </div>
                        <h2 className={styles1.featuresLiText}>Automatically sends reminders to all participants before event</h2>
                    </div>
                    <div className={`${styles1.featuresListItem} ${styles1.rcMb1}`} >
                        <div className={styles1.triangleContainer} >
                            <div className={styles1.triangleRight} ></div>
                        </div>
                        <h2 className={styles1.featuresLiText}>Ability to send invites to all participants or individuals</h2>
                    </div>
                    <div className={`${styles1.featuresListItem} ${styles1.rcMb1}`} >
                        <div className={styles1.triangleContainer} >
                            <div className={styles1.triangleRight} ></div>
                        </div>
                        <h2 className={styles1.featuresLiText}>Drag and drop list items for quick reordering</h2>
                    </div>
                    <div className={`${styles1.featuresListItem} ${styles1.rcMb1}`} >
                        <div className={styles1.triangleContainer} >
                            <div className={styles1.triangleRight} ></div>
                        </div>
                        <h2 className={styles1.featuresLiText}>Ability to change organizer name to a group or entity name</h2>
                    </div>
                </div>
                <div className={styles1.featuresHorizSpacer5}>&nbsp;</div>
                <div className={styles1.rcMb1}>&nbsp;</div>
                
        </div>
        
    </div>
)

/* This section provides list of application features */
const ctaBlock = () => (
    <div className={styles1["features-ctablock-container"]}>
      <h3 className={styles1.featuresSectionCtaTitle}>Got an Event in Mind? </h3>
      <div style={{display: 'flex', justifyContent: 'center', marginTop: '2rem'}}>
        <a href={getAppConfigParm("siteUrl")} className={styles3["cta-button"]}>
          <p className={styles3["cta-button-text"]}>Get Started Now</p>
        </a>
      </div>
    </div>
);

//***********************************************************************************
// Features Page
//***********************************************************************************
class FeaturesPage extends Component {  // use destructing to obtain function prop

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
        return (
          <div>
                
            <Head>
                <title>Features - Pitch In Club</title>
                <meta property="og:title" content="Features - Pitch In Club" />
                <meta name="description" content="Features of Pitch In Club" />
                <meta name="keywords"    content="free,secure,contribution list,helping hands list,event search,  
                        automatic reminders,dashboard,event status,attendee status,rsvp status"   />
                {/* <script type="text/javascript" src="/static/modernizr.js"></script> */}
            </Head>
            <SSPageHeader />
            {titleSection()}
            {processSection()}
            {nonfuncFeatureSection()}
            {featuresListSection()}
            {ctaBlock()}
            <Footer style={{backgroundColor: 'grey'}} />
          </div>
        )
    }
};

// const mapDispatchToProps = (dispatch) => ({
//     startLogin: () => dispatch(startLogin())
// })

// export default connect(undefined, mapDispatchToProps)(LoginPage);
export default FeaturesPage;



{/* <FontAwesomeIcon className={styles1.process-box__icon fal" icon={faSmile} />  */}