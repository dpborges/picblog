import React, { Component } from "react";
import Link from 'next/link';
import PropTypes from "prop-types";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import LinkButton1 from '../components/buttons/LinkButton1.js';
import CaretRightIcon from "../components/icons/CaretRightIcon.js";
import EnvelopeSquareIcon from "../components/icons/EnvelopeSquareIcon.js";
import getAppConfig from '../config/AppConfig';

import styles1 from '../styles/faicon.module.scss';
import styles2 from '../styles/footer-axolot.module.scss';

class Footer extends Component {
    render() {

        const siteUrl = getAppConfig("siteUrl");

        //Support loop start
        const supportLinks = this.props.supportsLinks.map((support, index) => (
            <li key={index}>
                <a href={support.Link}>
                    {/* <i className="icofont-double-right" /> */}
                    {support.Name}
                </a>
            </li>
        ));
        //Support loop END

        return (
            <React.Fragment>
                <footer className={`footer-area ptb-100 ${styles2.footerAreaPositioning}`} > 
                    <div className={styles2.footerSectionsContainer} >
                        <div className="row"  style={{display: 'flex', flexWrap: 'wrap'}}>
                            <div className={styles2.footerSection1} >
                                <div className="single-footer" >
                                  <h4 className="logo">
                                    <a href="#home">
                                      Pitch In<span>&nbsp;Club</span>
                                    </a>
                                  </h4>
                                  <p style={{marginBottom: '1rem'}}>{this.props.siteDescription}</p>
                                  <LinkButton1 link={`${siteUrl}/resources/about-us`} linkText="read more" />
                                </div>
                            </div>
                            {/* This is First List of Resources */}
                            <div className={styles2.footerSection2}  >
                                <div className="single-footer footer-navbar-nav">
                                  <h3>Useful Links</h3>
                                  <ul>
                                      <li>
                                          {footerLink(`${siteUrl}/resources/features`, "Features")}
                                      </li>
                                      <li>
                                          {footerLink(`${siteUrl}/resources/type-of-events`, "Type of Events")}
                                      </li>
                                      <li>
                                          {footerLink(`${siteUrl}/resources/helping-hands`, "Helping Hands List")}
                                      </li>
                                      <li>
                                          {footerLink(`${siteUrl}/resources/contribution-list`, "Contributions List")}
                                      </li>
                                      <li>
                                          {footerLink(`${siteUrl}/resources/faq`, "FAQ")}
                                      </li>
                                  </ul>
                                </div>
                            </div>

                            {/* Second List of Resources */}
                            <div className={styles2.footerSection3} >
                              <div className="single-footer footer-navbar-nav">
                                  <h3 style={{fontSize: '20px'}}>. . more links </h3> 
                                  <ul style={{marginTop: '0rem'}}>
                                      <li>
                                          {footerLink(`${siteUrl}/resources/how-to-create-event`, "How to Create Event")}
                                      </li>
                                      <li>
                                          {footerLink(`${siteUrl}/resources/how-to-pitch-in`, "How to Pitch In")}
                                      </li>
                                      <li>
                                          {footerLink(`${siteUrl}/resources/event-planning-tools`, "Event Planning Tools")}
                                      </li>
                                      <li>
                                          {footerLink(`${siteUrl}/resources/about-us`, "About Us")}
                                      </li>
                                  </ul>
                              </div>
                            </div>

                            <div className={styles2.footerSection4} >
                                <div className={`single-footer`}>
                                    <h3>{this.props.contactInfoTitle}</h3>
                                    <p>{this.props.contactInfoText}</p>
                                    <ul className="contact-info">
                                        <li>
                                          <a href="/contact-form" >
                                            <div style={{display: 'flex', marginLeft: '-1.7rem'}}>
                                              <EnvelopeSquareIcon /> &nbsp;  Contact Form
                                            </div>
                                          </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>

                <div className="copyright-area" style={{height: '7.5rem'}}>
                    <div className="containerx" style={{display: 'flex', justifyContent: 'center'}}>
                        <div className={styles2.copyrightItemsContainer} style={{solid: '1px solid red'}}>
                            <div className="col-lg-6 col-md-7">
                                <p>{`© ${new Date().getFullYear()}  All Rights Reserved.`}</p>
                            </div>
                            <div className="col-lg-5X col-md-5X" style={{display: 'flex', alignItems: 'center'}} >
                                <ul>
                                    <li>
                                      <div className={styles1.iconContainer}>
                                        {/* <a className="icofont-facebook" href="https://www.facebook.com/pitchinclub"> */}
                                        <a href="https://www.facebook.com/pitchinclub">
                                          <FontAwesomeIcon icon={["fab", "facebook-f"]}  />
                                        </a>
                                      </div>
                                    </li>
                                    <li>
                                      <div className={styles1.iconContainer}>
                                        {/* <a className="icofont-linkedin" href="https://www.linkedin.com/company/pitch-in-club/"  > */}
                                        <a href="https://www.linkedin.com/company/pitch-in-club/"  >
                                          <FontAwesomeIcon icon={["fab", "linkedin-in"]} />
                                        </a>
                                      </div>
                                    </li>
                                    <li>
                                      <div className={styles1.iconContainer}>
                                        {/* <a className="icofont-twitter" href="https://twitter.com/pitchinclub"  > */}
                                        <a href="https://twitter.com/pitchinclub"  >
                                           <FontAwesomeIcon icon={["fab", "twitter"]}  /> 
                                        </a>
                                      </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}


//Props Types
Footer.propTypes = {
    siteDescription: PropTypes.string,
    btnText: PropTypes.string,
    btnLink: PropTypes.string,

    usefullLinksTitle: PropTypes.string,

    supportTitle: PropTypes.string,
    supportsLinks: PropTypes.array,

    contactInfoTitle: PropTypes.string,
    contactInfoText: PropTypes.string,
    address: PropTypes.string,
    phone: PropTypes.string,
    email: PropTypes.string,

    fbLink: PropTypes.string,
    twitterlLink: PropTypes.string,
    instagramlLink: PropTypes.string,
    linkedinlLink: PropTypes.string,
    vimeolLink: PropTypes.string
};

//Default Props
Footer.defaultProps = {
    siteDescription:
        "The Simple Event Planning / Tracking Tool that helps with Organizing events and Encourages people to Pitch In",
    btnText: "Read More",
    btnLink: "/resources/about-us",

    usefullLinksTitle2:  "...links continued",

    
    supportTitle: "Support",   /*  Hide by changing color to white */
    supportsLinks: [ ],

    contactInfoTitle: "Contact Info",
    contactInfoText: "Drop us a note below.",
    address: " ",
    phone: " ",
    email: " ",
    // copyRightText: "Copyright \u00a9 2020 All Rights Reserved.",
    fbLink: "",
    twitterlLink: "",
    instagramlLink: "#",
    linkedinlLink: "",
    vimeolLink: "#"
};

/* Small functional componennt used to render Useful links in the footer  */
const footerLink = (linkAddr, linkText) => {
  
  return (
    <a href={linkAddr} >
      <div style={{display: 'flex'}}>
        <CaretRightIcon /> &nbsp;  {linkText}
      </div>
    </a>
  )
}

export default Footer;
