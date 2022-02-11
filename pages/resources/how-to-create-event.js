import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import PropTypes from "prop-types";
// import {Helmet} from 'react-helmet';
import Head  from 'next/head';
import Image from 'next/image';
import { GAinit, GAlogPageView } from '../../common/GoogleAnalytics';
// import NavBarMultiPage from "../components/common/NavBarMultiPage";
import SSPageHeader from '../../common/SSPageHeader.js';
import Footer from '../../common/Footer-Axolot.js'
import  getAppConfigParm  from '../../config/AppConfig';

class HowToCreateEvent extends React.Component {

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

        const aboutData = this.props.aboutsData.map((about, index) => (
            <React.Fragment key={index}>
            <Head>
                <title>How To Create Event using Pitch In Club</title>
                <meta property="og:title" content="How To Create Event using Pitch In Club" />
                <meta name="description" content="How to Create an Event using the Pitch In Club app" />
                <meta name="keywords"  content="simple stepwise process,schedule event,add people,create helping hands list,
                    create contribution list,send invites "   />
            </Head>
                {index % 2 === 1 ? (
                    <div className="row mt-100">
                        <div className="col-lg-6 col-md-6">
                            <div className="img">
                                <img src={about.image} alt="img" />
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                            <div className="about-text mb-0">
                                <span>{about.position}</span>
                                <h3>{about.title}</h3>
                                <p>{about.description}</p>
                                {about.blockQuote && (
                                    <blockquote className="blockquote">
                                        <p className="mb-0">
                                            {about.blockQuote}
                                        </p>
                                    </blockquote>
                                )}
                                {about.listItemOne ||
                                about.listItemTwo ||
                                about.listItemThree ||
                                about.listItemFour ? (
                                    <ul>
                                        {about.listItemOne && (
                                            <li>
                                              {/* <i className="icofont-ui-check" /> */}
                                              > {about.listItemOne}
                                            </li>
                                        )}
                                        {about.listItemTwo && (
                                            <li>
                                              {/* <i className="icofont-ui-check" /> */}
                                              > {about.listItemTwo}
                                            </li>
                                        )}
                                        {about.listItemThree && (
                                            <li>
                                              {/* <i className="icofont-ui-check" /> */}
                                              > {about.listItemThree}
                                            </li>
                                        )}
                                        {about.listItemFour && (
                                            <li>
                                              {/* <i className="icofont-ui-check" /> */}
                                              > {about.listItemFour}
                                            </li>
                                        )}
                                    </ul>
                                ) : null}
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="row mt-100">
                        <div className="col-lg-6 col-md-6">
                            <div className="about-text mt-0">
                                <span>{about.position}</span>
                                <h3>{about.title}</h3>
                                <p>{about.description}</p>
                                {about.blockQuote && (
                                    <blockquote className="blockquote">
                                        <p className="mb-0">
                                            {about.blockQuote}
                                        </p>
                                    </blockquote>
                                )}
                                {about.listItemOne ||
                                about.listItemTwo ||
                                about.listItemThree ||
                                about.listItemFour ? (
                                    <ul>
                                        {about.listItemOne && (
                                            <li>
                                                {/* <i className="icofont-ui-check" /> */}
                                               > {about.listItemOne}
                                            </li>
                                        )}
                                        {about.listItemTwo && (
                                            <li>
                                                {/* <i className="icofont-ui-check" /> */}
                                                > {about.listItemTwo}
                                            </li>
                                        )}
                                        {about.listItemThree && (
                                            <li>
                                                {/* <i className="icofont-ui-check" /> */}
                                                > {about.listItemThree}
                                            </li>
                                        )}
                                        {about.listItemFour && (
                                            <li>
                                                {/* <i className="icofont-ui-check" /> */}
                                                {about.listItemFour}
                                            </li>
                                        )}
                                    </ul>
                                ) : null}
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                          <Image src={about.image} alt="image" 
                            height={562}
                            width={530}
                          /> 
                        </div>
                    </div>
                )}
            </React.Fragment>
        ));
        return (
            <React.Fragment>
                <SSPageHeader pageName="contact" />
                <div className="page-title">
                    <div className="pattern-2" />
                    <div className="bg-top" />
                    <div className="bg-bottom" />
                    <div className="d-table">
                        <div className="d-table-cell">
                            <div className="container">
                                <div className="page-title-content">
                                    <h3>{this.props.sectionName}</h3>
                                    <ul>
                                        <li>
                                            <a href={`${siteUrl}`}>Home</a>
                                        </li>
                                        <li>
                                            &nbsp; &gt; &nbsp;
                                        </li>
                                        <li>Resources / How to Create Event </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <section id="about" className="about-area ptb-50">
                    <div className="container">
                        <div className="section-title">
                            <h3>Creating an Event</h3>
                            <p>
                                Four easy steps. Check out Stepwise Process below.
                            </p>
                        </div>
                {/*
                        <div className="row">
                            <div className="col-lg-6 col-md-12">
                                <div className="about-content">
                                    <h3>{this.props.aboutTitle}</h3>
                                    <p>{this.props.aboutDescription}</p>
                                    {/*
                                    <ul className="pull-left">
                                        {this.props.aboutListItemOne && (
                                            <li>
                                                <i className="icofont-ui-check" />
                                                {this.props.aboutListItemOne}
                                            </li>
                                        )}

                                        {this.props.aboutListItemTwo && (
                                            <li>
                                                <i className="icofont-ui-check" />
                                                {this.props.aboutListItemTwo}
                                            </li>
                                        )}
                                        {this.props.aboutListItemThree && (
                                            <li>
                                                <i className="icofont-ui-check" />
                                                {this.props.aboutListItemThree}
                                            </li>
                                        )}
                                        {this.props.aboutListItemFour && (
                                            <li>
                                                <i className="icofont-ui-check" />
                                                {this.props.aboutListItemFour}
                                            </li>
                                        )}
                                    </ul>
                                        
                                    <ul>
                                        {this.props.aboutListItemFive && (
                                            <li>
                                                <i className="icofont-ui-check" />
                                                {this.props.aboutListItemFive}
                                            </li>
                                        )}
                                        {this.props.aboutListItemSix && (
                                            <li>
                                                <i className="icofont-ui-check" />
                                                {this.props.aboutListItemSix}
                                            </li>
                                        )}
                                        {this.props.aboutListItemSeven && (
                                            <li>
                                                <i className="icofont-ui-check" />
                                                {this.props.aboutListItemSeven}
                                            </li>
                                        )}
                                        {this.props.aboutListItemEight && (
                                            <li>
                                                <i className="icofont-ui-check" />
                                                {this.props.aboutListItemEight}
                                            </li>
                                        )}
                                    </ul>
                                    <div>&nbsp;</div>
                                    <div>
                                        <a
                                            href={this.props.aboutBtnLink}
                                            className="btn btn-primary"
                                        >
                                            {this.props.aboutBtnText}
                                        </a> 
                                    </div>
                            
                                </div>
                            </div>
                                    
                            <div className="col-lg-6 col-md-12">
                                <div className="about-img">
                                    <img
                                        src={this.props.aboutImage}
                                        alt="about"
                                    />
                                </div>
                            </div>
                            
                        </div>
                                        */}
                        {aboutData}
                      
                    </div>
                       
                </section>
                <Footer pageName="contact" />
            </React.Fragment>
        );
    }
}

//Props Types
HowToCreateEvent.propTypes = {
    sectionName: PropTypes.string,
    sectionTitle: PropTypes.string,
    sectionDescription: PropTypes.string,
    aboutImage: PropTypes.string,
    aboutTitle: PropTypes.string,
    aboutDescription: PropTypes.string,
    aboutListItemOne: PropTypes.string,
    aboutListItemTwo: PropTypes.string,
    aboutListItemThree: PropTypes.string,
    aboutListItemFour: PropTypes.string,
    aboutListItemFive: PropTypes.string,
    aboutListItemSix: PropTypes.string,
    aboutListItemSeven: PropTypes.string,
    aboutListItemEight: PropTypes.string,
    aboutBtnText: PropTypes.string,
    aboutBtnLink: PropTypes.string,
    aboutsData: PropTypes.array
};

//Default Props
HowToCreateEvent.defaultProps = {
    // aboutImage: require("../assets/img/about.png"),
    // aboutTitle: "We are branding strategy service from 2001 for our customers.",
    // aboutDescription:
    //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    // aboutListItemOne: "Creative Design",
    // aboutListItemTwo: "Retina Ready",
    // aboutListItemThree: "Responsive Design",
    // aboutListItemFour: "Creative Design",
    // aboutListItemFive: "Modern Design",
    // aboutListItemSix: "Awesome Design",
    // aboutListItemSeven: "Digital Marketing & Branding",
    // aboutListItemEight: "Creative Design",
    // aboutBtnText: "Read More",
    // aboutBtnLink: "#0",
    aboutsData: [
        // {
        //     // image: require("../assets/img/create-event-step01.png"),
        //     image: "/images/create-event-step01.png",
        //     position: ".01",
        //     title: "Get Started with 1 Click",
        //     description:
        //         "Log into the Pitch In Club App and just click the plus icon (bottom right) to get started. ",
        //     listItemOne: "",
        //     listItemTwo: "Clean Interface",
        //     listItemThree: "Modern Design",
        //     listItemFour: "Minimal Clicks"
        // },
        {
            // image: require("../assets/img/create-event-step01.png"),
            image: "/images/create-event-step01.png",
            position: "01",
            title: "Enter Event Details",
            description:
                "First tab  you will encounter is the Events tab. Fill out the form with your event details and event message. As the organizer, your name will appear on the invite, otherwise, you can change it to something else by selecting 'Other' under the Organizer Name.",
            listItemOne: "Simple Form",
            listItemTwo: "Organizer Name override (optional)",
            listItemThree: "One Click to save info and automatically move to the People tab",
            listItemFour: ""
        },
        {
            // image: require("../assets/img/3.png"),
            image: "/images/create-event-step02.png",
            position: "02",
            title: "Create List of People",
            description:
                "Use the People tab, to create and manage list of people you plan to invite to your event. Click on Save/Next button to save and automatically move to the Lists tab.",
            blockQuote:
                "Sort list by name or email address; Fix typos quickly by editing or deleting entries in the list."
        },
        {
            // image: require("../assets/img/4.png"),
            image: "/images/create-event-step3a.png",
            position: "3a",
            title: "Create Contribution List",
            description:
                "The Lists tab allows you to toggle between 2 lists, the Contribution List and the Helping Hands List. The Contribution List is the first list you'll see when you land on Lists Tab.",
            blockQuote:
                "You can reorder Contribution items using drag and drop feature and Fix typos quickly using the 'edit' or 'delete' icon."
        },
        {
            // image: require("../assets/img/4.png"),
            image: "/images/create-event-step3b.png",
            position: "3b",
            title: "Create Helping Hands List",
            description:
                "Create your Helping Hands List items with number of people needed, then click the Save/Next button to automatically go to the Invites tab",
            blockQuote:
                "Both the Helping Hands List and contribution list allows you to reorder items using drag and drop and fix typos quickly using the 'edit' and 'delete' icons"
        },
        {
            // image: require("../assets/img/4.png"),
            image: "/images/create-event-step04.png",
            position: "04",
            title: "Send Invites",
            description:
                "Last step - Send out your invites.",
            blockQuote:
                "If you forget someone, you can always come back, add them to the list, and send an individual invite." 
        }
    ]
};
 
export default HowToCreateEvent;