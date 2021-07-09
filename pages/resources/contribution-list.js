import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import { Link } from 'react-router-dom';
// import { HashLink as Link } from 'react-router-hash-link';
import   Head from 'next/head';
// import { GAinit, GAlogPageView } from '../../components/common/GoogleAnalytics';
import SSPageHeader from '../../common/SSPageHeader.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt } from '@fortawesome/pro-light-svg-icons';
import { faHandHoldingHeart} from '@fortawesome/pro-light-svg-icons';
import { faUsers } from '@fortawesome/pro-light-svg-icons';
import { faList } from '@fortawesome/pro-light-svg-icons';
import { faSmile } from '@fortawesome/pro-light-svg-icons';
// import  { Footer }      from './FooterSection';
import Footer from '../../common/Footer-Axolot.js'
import BannerSection from '../../components/formatting/BannerSection';
import VictoryIcon  from '../../components/icons/VictoryIcon.js';
import getAppConfigParm  from '../../config/AppConfig';

// import "../../styles/base.scss";
// import '../../styles/reusable-classes.scss';
// import "../../styles/contribution-list-page.scss";

import styles1 from '../../styles/contrib-list.module.scss';

// rc-flex-container-center-col <= from title container

/* This is title section. It contains the main title for this page and a background image */
const renderBannerTitle = () =>  (
    <div className={styles1["clp-content-container"]}>
      <div className={styles1["clp-white-border"]}>
        <div className={styles1["clp-title-container"]}>
          <h1 className={styles1["clp-title"]}>
              Contribution Lists Make Event Organization Simple
          </h1> 
        </div>    
      </div>
    </div>
)

/* Banner section contains the main title for this page and a background image */
const greyShade2 = "#BDC3C7";
const bannerSection = () => {
    return (
      <BannerSection 
        bannerTitleJsx={renderBannerTitle()}
        bannerTitlePosition="fc"
        imgSrc="/images/people-around-food-table.jpg"
        imgHeight={150}
        imgWidth={280}
        imgAlt="people around table of food"
        imgQuality={90}
        opacity="0.7"
      />
    )
}


/* These are the text sections where I added the Web copy */
const textSection1 = () => {

    let helpingHandsUrl = getAppConfigParm("siteUrl") + "/resources/helping-hands";

    return (
        <div className="clp-h2-section rc-mt-4  ">
            <h2 className="clp-h2-style">Make a Contribution List to Make Your Life Easier</h2>
            <p className="clp-para rc-mt-2">Make Party Planning Simple With a Contribution List</p>
            <p className="clp-para rc-mt-2">
                Scared of getting suckered into spending too much on a party? 
            </p>
            <p className="clp-para rc-mt-2">
                Hesitant to host because of all the time it will take you to prepare for your guests? 
            </p>
            <p className="clp-para rc-mt-2">
                Use the contribution list feature in the Pitch In Club app.
            </p>
            <p className="clp-para rc-mt-2">
                This easy to use event management software provides a helpful event list that guests 
                can contribute too. They can add what they are bringing, or sign up for an item that is listed. 
            </p>
            <p className="clp-para rc-mt-2">
                If guests would rather commit their time, instead of their stuff, than they can sign up on the 
                <a className="blue-anchor-text" href={helpingHandsUrl}> Helping Hands List </a>
            </p>
        </div>  
    )
}

const textSection2 = () => {

    let helpingHandsUrl = getAppConfigParm("siteUrl") + "/resources/helping-hands";

    return (
        <div className="clp-h2-section rc-mt-4 rc-mb-4">
            <h2 className="clp-h2-style">How It Works</h2>
            <p className="clp-para rc-mt-2">The Contribution List feature is an excellent event planning tool. </p>
            <p className="clp-para rc-mt-2">It takes almost no time to set one up.</p>
            <p className="clp-para rc-mt-2">First, make your event within the Pitch In Club event dashboard.</p>
            <p className="clp-para rc-mt-2">
                Then, click on the List tab. The Contribution List will be the first feature listed. 
            </p>
            <p className="clp-para rc-mt-2"> Click on it, and fill out what you need to throw your event.</p>
            <p className="clp-para rc-mt-2">
                You can reorder Contribution items using drag and drop feature and Fix typos quickly using 
                the 'edit' or 'delete' icon.
            </p>
            <p className="clp-para rc-mt-2">That’s it! </p>
            <p className="clp-para rc-mt-2">It’s simple, it’s easy, it will revolutionize the way you throw parties.</p>
        </div>  
        )
}

const appScreenShotSection = () => (
    <div className="clp-screenshot-container">
    
        <div className="features-horiz-spacer4">&nbsp;</div>
    {/* commented out button     
        <div style={{display: 'flex', justifyContent: 'center'}}>
            <Link to="/signup" className="button features-signup-button features-signup-button-modx">
                <p className="features-signup-button-text">Start Planning</p>
            </Link>
        </div>
        <div className="features-horiz-spacer1">&nbsp;</div>
        */}
        
        <div>
            <h2 className="clp-screenshot-title">Create Contribution List in a Snap</h2>
            <p className="clp-screenshot-subtitle">(Participants can select one or more of the quantity specified) </p>
        </div>
        <div className="rc-horiz-spacer-tiny">&nbsp;</div>
        <div className="rc-flex-container-center">
            <img className="clp-screenshot-image" src="/images/contribution-list.jpg" alt="Contribution List UI image" />
        </div>
        <div className="rc-horiz-spacer-large">&nbsp;</div>
    </div>
);



const processSection = () => (
    <div className="clp-process-container rc-mb-2">
        <div className="rc-horiz-spacer-small">&nbsp;</div>
        <h2 className="clp-process-title">Simple Step Wise Process</h2>
        <div className="clp-process-box-container">
           <div className="process-box">
               <FontAwesomeIcon className="process-box__icon" icon={faCalendarAlt} />
               <p className="process-box__heading">Schedule Event</p>
               <p className="process-box__text">Quickly Schedule an Event</p>
           </div>
           <div className="process-box">
               <FontAwesomeIcon className="process-box__icon" icon={faUsers} />
               <p className="process-box__heading">Add People</p>
               <p className="process-box__text">Add People To Your Event or Function</p>
           </div>
           <div className="process-box">
               <FontAwesomeIcon className="process-box__icon" icon={faList} />
               <p className="process-box__heading">List Items</p>
               <p className="process-box__text">Create List of Contributions and/or Help Needed</p>
           </div>
           <div className="process-box">
               <FontAwesomeIcon className="process-box__icon fal" icon={faHandHoldingHeart} />
               <p className="process-box__heading">Pitch In</p>
               <p className="process-box__text">Invite People to Pitch In</p>
           </div>
           <div className="process-box">
                <div className="process-box__victory-icon" > 
                    <VictoryIcon  />
                    <div>
                            <p className="process-box__victory-heading">Your Done</p>
                            <p className="process-box__victory-text">Applaud yourselves for Job Well Done</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
);



/* This section provides list of application features */
const ctaBlock = (siteUrl) => {

    let howToPitchInUrl = getAppConfigParm("siteUrl") + "/resources/how-to-pitch-in";

    return (
        <div className="clp-ctablock-container">
            <div className="features-horiz-spacer4"></div>
            <h3 className="clp-cta-section-title">Remember, if you don't ask, you won't know if people are willing to <a href={howToPitchInUrl}className="blue-anchor-text"> Pitch In.</a></h3>
            <div style={{display: 'flex', justifyContent: 'center', marginTop: '5rem'}}>
            <a href={getAppConfigParm("siteUrl")} className="ssr-button features-signup-button  features-signup-button-mod">
                <p className="features-signup-button-text">Give It Try</p>
            </a>
            </div>
            <div className="rc-horiz-spacer-medium">&nbsp;</div>    
            {/*
            <div style={{display: "flex", justifyContent: "center"}}>
            <Link smooth to="/#cta" className="small-text-link" >Back</Link>
            </div>
            */}
        </div>
    )
}

// Contribution List Page
class  ContributionListPage extends Component {

    componentDidMount = () => {
        let env = getAppConfigParm("env");
        if (env === 'prod' ) {
            if (!window.GA_INITIALIZED) {
                GAinit();
                window.GA_INITIALIZED = true;
            }
            GAlogPageView()
        }
    }

    render() {

        let siteUrl = getAppConfigParm("siteUrl");

        return (  // use destructing to obtain function prop
            <div id="title">
                <Head>
                    <title>Contribution Lists | Party Planner App | Pitch In Club</title>
                    <meta property="og:title" content="Contribution Lists | Party Planner App | Pitch In Club" />
                    <meta name="description" content="Use the premiere party planner app, the Pitch In Club, to plan your next event! Its contribution list feature makes group coordination easy." />
                    <meta name="keywords"  content="Thing to Bring,item list,contribution list,house party guide, party planning, bbq,potluck party, 
                        for 25 guests,planning a barbeque for 50,birthday party,retirement party,tailgating 101,planning a dinner party for 10" />
                </Head>
                <SSPageHeader />
                <div style={{backgroundColor: 'black'}}>
                  {bannerSection()}
                </div>
                {/* <div className="clp-h2-sections-container">
                    {textSection1()}
                    {textSection2()}
                </div>
                {appScreenShotSection()}   
                {processSection()}
                {ctaBlock(siteUrl)} */}
                <Footer />
            </div>
        );
    }
}

// const mapDispatchToProps = (dispatch) => ({
//     startLogin: () => dispatch(startLogin())
// })

// export default connect(undefined, mapDispatchToProps)(LoginPage);
// export default connect()(ContributionListPage);
export default ContributionListPage;

