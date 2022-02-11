import React, { Fragment, Component } from 'react';
// import ScriptTag from 'react-script-tag';
// import { connect } from 'react-redux';
// import { Link } from 'react-router-dom';
// import { HashLink } from 'react-router-hash-link';
// import {Helmet} from 'react-helmet';
import Head from 'next/head';
import { GAinit, GAlogPageView } from '../../common/GoogleAnalytics';
// import  { FooterSection }   from './FooterSection';
import getAppConfigParm  from '../../config/AppConfig';
import Footer from '../../common/Footer-Axolot.js'
import { HorizRule } from '../../components/decorators/HorizRule';
import VisibilityWrapper from '../../common/VisibilityWrapper';
import { displayAd } from '../../components/advertisements/helpers/displayAd';

import styles1 from "../../styles/typeevents.module.scss";
import styles2 from "../../styles/features.module.scss";
import styles3 from "../../styles/cta-button.module.scss";

import EventPlanningCalculators from '../../components/eventplanningtools/EventPlanningCalculators';
import SSPageHeader from '../../common/SSPageHeader.js'

/* This is title section. It contains the main title for this page and a background image */
const titleSection = (showAd) => (
    <div>
        <div className={styles1["event-planning-tools-container"]}>
            <div className={styles1["typeevents-text-block-container"]}>
              <div className={styles1["typeevents-text-backdrop"]}>
                <div className={styles1["typeevents-text-block"]}>
                  <h1 className={styles1["typeevents-title"]}>Estimate Food, Beverage, and Guest Attendance</h1>
                </div>
              </div>
            </div>
        </div>
        <div style={{display: 'flex', justifyContent: 'center'}}>
          <VisibilityWrapper show={showAd} contentType="advertisement" >
            {displayAd("mobile-leader-board", "mobile", {marginTop: '.5em', marginBottom: '-.3em'})}
            {displayAd("in-feed-horizontal", "tablet", {marginBottom: '-.2em'} )}
            {displayAd("web-leader-board", "desktop", { marginTop: '2em', marginBottom: '-.2em'} )}
          </VisibilityWrapper>
        </div>
    </div>
);


/* CTA block at bottom of page  */
const ctaBlock = () => (
  <div className={styles2["features-ctablock-container"]} style={{marginTop: '5rem'}}>
      <div className={styles1["event-planning-tools-cta-text"]}>The Pitch In Club tools and features are designed to help you organize your event and encourage people to pitch in. If it's too much to Organize Yourself?</div>
      <div style={{display: 'flex', justifyContent: 'center', marginTop: '2rem'}}>
        <a href={getAppConfigParm("siteUrl")} className={styles3["cta-button"]}>
          <p className={styles3["cta-button-text"]}>Try Pitch In Club</p>
        </a>
      </div>
  </div>
)

// Type Event Types Page component
class EventPlanningCalculatorsPage extends Component {  // use destructing to obtain function prop

    constructor() {
        super();
        this.state = {env: getAppConfigParm("env")}
    }

    componentDidMount = () => {
      let { env } = this.state;
      if (env === 'test' || env === 'prod') {
          if (!window.GA_INITIALIZED) {
              GAinit();
              window.GA_INITIALIZED = true;
          }
          GAlogPageView()
      }
    }

    render() {

        let showAd =  getAppConfigParm("showAd");

        return (
        <div>
          <Head>
              <title>Event Planning Tools - Calculators</title>
              <meta property="og:title" content="Event Planning Calculators - Calculators" />
              <meta name="description" content="Estimate Food, Beverage, and Guest Attendance for your next event" />
              <meta name="keywords"  content="event food calculator,party planning food calculator,drink party calculator,guest attendance estimator" />
          </Head>
          <SSPageHeader />

          {titleSection(showAd)}

          <HorizRule pctWidth="65%" color="#CC6600" thickness=".4em" mt="2rem" mb="3rem" />

          <EventPlanningCalculators />

          { ctaBlock() }

          <Footer />
        </div>
        )
    }  /* end of render() */
}; /* end of class defintion */
   
// const mapDispatchToProps = (dispatch) => ({
//     startLogin: () => dispatch(startLogin())
// })

// export default connect(undefined, mapDispatchToProps)(LoginPage);
export default EventPlanningCalculatorsPage;

