import React from 'react';
import Link  from 'next/link';
import Head from 'next/head';
import {
      Accordion,
      AccordionItem,
      AccordionItemHeading,
      AccordionItemPanel,
      AccordionItemButton
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';
import { GAinit, GAlogPageView } from '../../common/GoogleAnalytics';
// import NavBarMultiPage from "../components/common/NavBarMultiPage";
import SSPageHeader from '../../common/SSPageHeader.js'
import Footer from '../../common/Footer-Axolot.js'
import getAppConfigParm  from '../../config/AppConfig';

// import "../../styles/axolotstyle.scss";

import styles from '../../styles/faq.module.scss';
 
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

    render(){

        let siteUrl = getAppConfigParm("siteUrl");

        return (
            <React.Fragment>

                <Head>
                    <title>FAQ - Pitch In Club</title>
                    <meta property="og:title" content="FAQ - Pitch In Club" />
                    <meta name="description" content="FAQ, Frequently Asked Questions about Pitch In Club" />
                    <meta name="keywords"    content="what is pitchinclub?,free,contribution list,helping hands list,  
                            automatic reminders,dashboard,event status,attendee status,rsvp status"   />
                    <link rel="canonical" href={`${siteUrl}/faq`} />
                </Head>

                <SSPageHeader />
                <div className="page-title">
                    <div className="pattern-2" />
                    <div className="bg-top" />
                    <div className="bg-bottom" />
                    <div className="d-table">
                        <div className="d-table-cell">
                            <div className="containerx">
                                <div className="page-title-content" >
                                    <h3>{this.props.sectionName}</h3>
                                    <ul>
                                        <li className={styles.breadCrumbPosition}>
                                          <Link href="/">Home</Link>
                                        </li>
                                        {/* <li>
                                          <i className="icofont-thin-right" />
                                        </li> */}
                                        <li>&nbsp; > Faq</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{display: 'flex', justifyContent: 'center'}}>
                <section className="faq-area ptb-50 pb-0"  >
                    <div className="container" style={{display: 'flex', justifyContent: 'center'}}>
                        <Accordion>
                            <AccordionItem className={styles.accordianItem}>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        Are there any premium costs I need to know about?
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <p>
                                        No premium plans, no credit cards, no pesky marketing pop up's.
                                        You are free to use all features currently available. 
                                    </p>
                                </AccordionItemPanel>
                            </AccordionItem>

                            <AccordionItem className={styles.accordianItem}>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        How does it work?
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <p>
                                        Create an Event, &nbsp; add People, &nbsp; create a Contribution and/or Helping Hands List, 
                                        &nbsp; and send out Invites. &nbsp; &nbsp;That's it!
                                    </p>
                                </AccordionItemPanel>
                            </AccordionItem>

                            <AccordionItem className={styles.accordianItem}>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                       How do people Pitch In?
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <p className={styles.accordianItem}>
                                       When you send out your invites, recipients will get an email that contains a "View Invitation" button.
                                       When recipient clicks this button they will be able to RSVP and sign up to contribute or lend a helping hand.
                                       &nbsp; As the organizer, you can see a preview of this page on the Invites tab.
                                    </p>
                                </AccordionItemPanel>
                            </AccordionItem>

                            <AccordionItem className={styles.accordianItem}>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        Is there a way to see who is Pitching In?
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <p>
                                        Yes. The home page has a simple dashboard that shows list of events and basic stats. If you click on
                                        the event, you can see who is attending, and who is pitching in.
                                    </p>
                                </AccordionItemPanel>
                            </AccordionItem>

                            <AccordionItem className={styles.accordianItem}>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        Can I create an event without a Contribution or Helping Hands List?
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <p>
                                        Yes. If you would like to simply create an event, send out invites, and track who is coming without
                                        creating a Contribution or Helping Hands List, you can.
                                    </p>
                                </AccordionItemPanel>
                            </AccordionItem>
                        </Accordion>
                    </div>
                </section>
                </div>
                <Footer pageName="faq" />
            </React.Fragment>
        );
    }
}
 
export default Faq;