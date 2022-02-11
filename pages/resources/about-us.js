import React from 'react';
import Link  from 'next/link';
import Head from 'next/head';
import { GAinit, GAlogPageView } from '../../common/GoogleAnalytics';
// import SSRPageHeader from '../../components/common/SSRPageHeader.js'
import SSPageHeader from '../../common/SSPageHeader';
import LinkButton1 from '../../components/buttons/LinkButton1.js';
import Footer from "../../common/Footer-Axolot";
import getAppConfigParm  from '../../config/AppConfig';

import styles  from '../../styles/about-us-page.module.scss';
 
class Faq extends React.Component {

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

        return (
            <React.Fragment>
            {/* note that Head holds copy of tags so you can inject in server side html template */}
            <Head>
                <title>About Us | Pitch In Club | Event Management Simplified</title>
                <meta property="og:title" content="About Us | Pitch In Club | Event Management Simplified" />
                <meta name="description" content="Pitch In Club is a leader in event planning. Our application allows you to seamlessly collaborate with guests and volunteers. Learn more here." />
                <meta name="keywords"    content="pitch in,help out,volunteer effort,birthday party,BBQ,housewarming,cocktail party,
                    retirement party,contribution list, helping hands list"   />
            </Head>

            <SSPageHeader />
            
            <div className="page-title">
                <div className="pattern-2" />
                <div className="bg-top" />
                <div className="bg-bottom" />
                <div className="d-table" />
            </div>
            
            <section>
              <div className={styles.aboutBodySection} >
                {/* <a className={styles2.withButtonEffect1}  href="#">Read More</a> */}
                  <p className={styles.aboutHeadingTitle}>About Us</p>
                  <h1 className={styles.aboutH1} style={{textAlign: 'center', padding: '0 2%'}}>
                    The Pitch In Club's App Makes Event Management Easy
                  </h1>
                  <p className={`${styles.aboutBodyPara} ${styles.aboutContainerMod}`} style={{textAlign: 'center'}} >
                      Our Journey to revolutionizing Event Planning...
                  </p>
                  <h2 className={styles.aboutH2} >
                      Events involve more than one person. Their planning process should too.
                  </h2>
                  <p className={`${styles.aboutBodyPara} ${styles.aboutContainerMod}`}>
                      With this in mind, we came up with an innovative platform fueled by ideas that would change event planning 
                      as we know it. The idea was....
                  </p>
                  <p className={styles.aboutBodyPara} >
                      > To make a platform that allowed for seamless and effortless collaboration between event organizers and helpers.
                  </p>
                  <p className={styles.aboutBodyPara}>
                      > To create a unique tool that has the capabilities of creating events, scheduling, and tracking them, all from a single easy to use app.
                  </p>
                  <p className={styles.aboutBodyPara}>
                      > To make events fun again, for their attendees and organizers.
                  </p>
                  <h2 className={styles.aboutH2}>
                      Created to Help you Create Events.
                  </h2>
                  <p className={styles.aboutBodyPara}>
                      The Pitch In Club was established by <a className="blue-anchor-text" href="http://linkedin.com/in/daniel-borges-5383066"> Dan Borges </a>
                      in 2019. The application’s user-friendly dashboard helps you track attendees, 
                      helping hands, and contributions. It’s simple-to-use functions allow you to send invites and reminders, create sign-ups, drag and 
                      drop list items, track attendance, and more .
                  </p>
                  <p className={styles.aboutBodyPara}>It is the most seamless and unified event organizing tool in the industry.</p>
                  <p className={styles.aboutBodyPara}>
                      Since its inception, Pitch In Club has helped countless users organize events. It has helped on projects that 
                      range from office luncheons to family picnics, from birthday parties to barbecues. This innovative platform is 
                      adaptable to your specific event planning needs.                          
                  </p>
                  <p className={styles.aboutBodyPara}>
                      Today, we’ve transformed that vision and turned an idea into an innovative platform that offers the industry’s 
                      leading solutions for event planning where you can schedule an event, publish a Contribution List and/or a Helping 
                      Hands List and people can volunteer or sign-up to help out. All for the purpose of 
                      creating entertaining events minus the stress of planning.
                  </p>
                  <h2 className={styles.aboutH2}>
                      Event Management Made Simple
                  </h2>
                  <p className={styles.aboutBodyPara}>You can create unlimited events in mere minutes. The platform is free to sign up for and easy to use.</p>
                  <p className={styles.aboutBodyPara}>Simply use the dashboard’s tools to create and schedule events.</p>
                  <p className={styles.aboutBodyPara}>
                      You can then publish a Contribution List and/or a Helping Hands List to encourage people to collaborate on, volunteer for, 
                      or contribute to the event.
                  </p>
                  <p className={styles.aboutBodyPara}>
                      The tracking software will take care of the rest, automatically sending reminders to all participants before the event.
                  </p>
                  <p className={styles.aboutBodyPara}>You can sit back, relax, and actually enjoy the event that you are hosting.</p>
                  <h2 className={styles.aboutH2} style={{padding: '0 2%'}}>
                    Never Be Stressed About Organizing an Event Again
                  </h2>
                  <p className={styles.aboutBodyPara} style={{textAlign: 'center'}}><a className="blue-anchor-text" href={`${siteUrl}`} >Sign up</a> free now</p>
              </div>
            </section>
            <Footer />
        </React.Fragment>
        );
    }
}
 
export default Faq;