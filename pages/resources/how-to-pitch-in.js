import React from 'react';
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

 
class HowToPitchIn extends React.Component {

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

        const siteUrl   = getAppConfigParm("siteUrl");

        const aboutData = this.props.aboutsData.map((about, index) => (
            <React.Fragment key={index}>
                <Head>
                    <title>How To Pitch In</title>
                    <meta property="og:title" content="How To Pitch In for Something" />
                    <meta name="description" content="How to Pitch In using the 'Pitch In Club'  app" />
                    <meta name="keywords"    content="contribute,help out,do task,change contribution,change task "   />
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
                                              {about.listItemFour}
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
                                        <li>Resources / How to Pitch In </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <section id="about" className="about-area ptb-50">
                    <div className="container">
                        <div className="section-title">
                            <h3>Pitching In</h3>
                            <p>
                              You can &nbsp; 'Pitch In' &nbsp; by contributing, or providing a helping hand. When user receives an Invitation, they will see a section with event details, and a section with list of items (shown below).
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
HowToPitchIn.propTypes = {
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
HowToPitchIn.defaultProps = {
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
            image: "/images/pitch-in-step01.png",
            position: "01",
            title: "Contributing to Event",
            description:
                "To Pitch In, click Yes to RSVP, click 'Count Me In' Button to contribute, then submit response.",
            listItemOne: "One Click RSVP",
            listItemTwo: "One Click Contribution",
            listItemThree: "No need to log in; Name (qty) is automatically recorded"
            // listItemFour: "Contributor Name and Quantity automatically recorded"
        },
        {
            // image: require("../assets/img/3.png"),
            image: "/images/pitch-in-step02.png",
            position: "02",
            title: "Providing a Helping Hand",
            description:
                "To provide a Helping Hand, expand the Helping Hands Panel, Click the  'Count Me In'  button, and submit response",
            blockQuote:
                "If more than one person is helping with an item, you may click the name dropdown to see who else is participating."
        },
        {
            // image: require("../assets/img/4.png"),
            image: "/images/pitch-in-step03.png",
            position: "03",
            title: "Make a Change",
            description:
                "If you would like to make a change, click the name drop down, remove name, make required change,  and resubmit response",
            blockQuote:
                "This feature allows you to make changes or remove your name, if needed. Note, to access invitation again, click 'View Invitation' button on Invitation Email that was sent to you."
        }
    ]
};
 
export default HowToPitchIn;