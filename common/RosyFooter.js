import React, { Component } from "react";
import PropTypes from "prop-types";
// import Icofont from 'react-icofont';
// import { Link } from 'react-router-dom';

// import TwitterIcon from '../components/icons/TwitterIcon'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from '../styles/faicon.module.scss';
// import "bootstrap/dist/css/bootstrap.css";
// import '../../styles/rosystyle.module.scss';
// import styles from  '../styles/rosy-footer.module.scss';

const RosyFooter = (props) => {
    
    return (
        <div className="rosy-footer-container" >
            <div className="rosy-footer-text">{`© ${new Date().getFullYear()} All Rights Reserved.`}</div>
            <div className="rosy-footer-content-container">
                <div className="rosy-footer-social-icons bottom">
                    <ul className="rosy-footer-icon-list">
                        <li className="rosy-footer-text">Follow Us On:</li>
                        <li>
                          <a href="https://www.facebook.com/pitchinclub" >
                          <FontAwesomeIcon icon={["fab", "facebook-f"]}  className={styles.facebookIcon}  />
                          </a>
                        </li>
                        <li>
                          <a href="https://twitter.com/pitchinclub" >
                            <FontAwesomeIcon icon={["fab", "twitter"]} className={styles.twitterIcon}  />
                          </a>
                        </li>
                        <li>
                          <a href="https://www.linkedin.com/company/pitch-in-club">
                           <FontAwesomeIcon icon={["fab", "linkedin-in"]} className={styles.linkedinIcon}  />
                          </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div> 
    )
}


export default RosyFooter;