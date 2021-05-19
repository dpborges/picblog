import React, { Component } from "react";
import Image from 'next/image';
import DropDownMenu from '../components/menus/DropDownMenu'
import { Navbar, Container, NavDropdown, Nav, Dropdown } from "react-bootstrap";
import getAppConfigParm from '../config/AppConfig';
import { BurgerMenuIcon } from '../components/icons/BurgerMenuIcon';
// import BurgerMenu  from '../components/menus/BurgerMenu';
import NavToggle from '../components/formatting/NavToggle';
import ImgWithFallback from '../components/formatting/ImgWithFallback';

import styles from '../styles/page-header.module.scss';

// Function used to build the Navigation Links
const textNavElements = (siteUrl, resources, blogUrl, toggleSelected  ) => {
    return (
    <ul className={`${styles.topNavLinks} ${styles.ddFlexContainer}`}>

      <li className={styles.topNavLink}>
          <a href={`${siteUrl}`} className={styles.pageHeaderNavlink}>
              <div className={styles.linktextSize}>Home</div>
          </a>
      </li>
      <li className={styles.topNavLinkAlt}>
          <div className={styles.dropdownContainer}>
              <DropDownMenu title="Resources" list={resources} 
                  altHeaderClass="dropDownHeaderNb"  config={{displayHeader: false, upDownArrow: false}} 
              />
          </div>
      </li>
      <li className={styles.topNavLink}>
          <a href={`${blogUrl}`} className={styles.pageHeaderNavlink}>
              <div className={styles.linktextSize}>Blog</div>
          </a>
      </li>

    </ul>
  )
}

const BurgerMenu = (props) => {
  function handleClick() {
    props.onClickHandler();
  }

  return (
    <div onClick={handleClick}>
      <BurgerMenuIcon />
    </div>
  )
}

class SSPageHeader extends Component {

    constructor(props) {
      super(props);
      this.state = { showBurgerMenu: false };
      this.handleBurgerMenuClick = this.handleBurgerMenuClick.bind(this);
    }

    componentDidMount() {
      let elem = document.getElementById("navbar");
      document.addEventListener("scroll", () => {
          // if (window.scrollY > 170) {
          /* window.scrollY returns number of pixels scrolled */
          if (window.scrollY > 106 ) {    /* if scrolled more than n pixels (height of navbar) */
              elem.classList.add("is-sticky");
          } else {
              elem.classList.remove("is-sticky");
          }
      });
      let scrollWithOffset = (el, offset) => {
          const elementPosition = el.offsetTop - offset;
          window.scroll({
              top: elementPosition,
              left: 0,
              behavior: "smooth"
          });
      };
      this.setState({ 
        scrollWithOffset
      });
    }

    handleBurgerMenuClick() {
      console.log("Inside onClickhandler with SSHeader")
      this.setState({ showBurgerMenu: !this.state.showBurgerMenu })
    }

    // Handlers 
    // closeNavbar() {
    //     if (window.matchMedia("screen and (max-width: 991px)").matches) {
    //         document.getElementById("collaspe-btn").click();
    //     }
    // }

    // logout = (e) => {
    //     console.log("INSIDE LOGOUT HANDLER")
    //     // e.preventDefault();
    //     this.props.startLogout();  // dispatch logout action
    // }

    render() {

        // let { isAuthenticated } = this.props.auth;
        // let isAuthenticated  = true;
        let siteUrl = getAppConfigParm("siteUrl");
        let blogUrl = getAppConfigParm("blogUrl");

        // Resources used for DropDown Menu
        let resources =  [
            {key: 0, title: "Resources",            selected: false, listname: "resources", path: ""},
            {key: 1, title: "Faq",                  selected: false, listname: "resources", path: `${siteUrl}/resources/faq`},
            {key: 1, title: "Features",             selected: false, listname: "resources", path: `${siteUrl}/resources/features`},
            {key: 2, title: "Type of Events",       selected: false, listname: "resources", path: `${siteUrl}/resources/type-of-events`},
            {key: 3, title: "Helping Hands List",   selected: false, listname: "resources", path: `${siteUrl}/resources/helping-hands`},
            {key: 4, title: "Contribution List",    selected: false, listname: "resources", path: `${siteUrl}/resources/contribution-list`},
            {key: 5, title: "How to Create Event",  selected: false, listname: "resources", path: `${siteUrl}/resources/how-to-create-event`},
            {key: 6, title: "How to Pitch In",      selected: false, listname: "resources", path: `${siteUrl}/resources/how-to-pitch-in`},
            {key: 7, title: "Event Planning Tools", selected: false, listname: "resources", path: `${siteUrl}/resources/event-planning-tools`},
            {key: 8, title: "About Us",             selected: false, listname: "resources", path: `${siteUrl}/resources/about-us`}
        ]
        
        // Construct NavLinks component using the textNavElements function
        const NavLinks = () => {
          return (
            <div>
              {textNavElements(siteUrl, resources, blogUrl)}
            </div>
          )
        }

        const BurgerMenuWithCb = () => <BurgerMenu onClickHandler={this.handleBurgerMenuClick} />

        return (
          <React.Fragment>
          <div className={styles.pageHeaderOutline} >
              <Navbar 
                  sticky="top"
                  id="navbar"
                  bg="light"
                  expand="lg"
                  className="navbar navbar-expand-lg navbar-lightXX bg-lightXX"
                  collapseOnSelect={true}
                  style={{backgroundColor: 'white !important'}}
              >
                  <Container style={{backgroundColor: 'white !important'}}>
                    <div className={styles.pageHeaderContainer}>
                      <a href={`${siteUrl}`}>
                          {/*
                          <img className="ss-page-header__logo" src="/images/pitch-in-club-logo.jpg" alt="Pitch In Club Logo" /> 
                            <ImgWithFallback className={styles.pageHeaderLogo} src="/images/pitch-in-club-logo.webp" 
                              fallback="/images/pitch-in-club-logo.jpg" alt="Pitch In Club Logo" >
                            </ImgWithFallback>
                          */}
                          <div className={styles.logoAndTextWrapper}>
                            <div className={styles.logoContainer}>
                              <Image src="/images/pitch-in-club-logo.jpg" alt="Pitch In Club Logo" width={65} height={65} />
                            </div>
                            <div className={styles.logoTextContainer}>
                              <p className={styles.pageHeaderTitle}>PITCH IN <span className={styles.pageHeaderTitlePart2}>CLUB</span> </p>
                            </div>
                          </div>
                      </a>

                      <NavToggle 
                        component1={BurgerMenuWithCb}
                        component2={NavLinks}
                      />
                    </div>
                      {this.state.showBurgerMenu && (
                        <div className={styles.pageHeaderMobileNavHide} >
                            <NavLinks />
                        </div>
                      )}
                  </Container>
              </Navbar>
              </div>
          </React.Fragment>
        );
    }
}

export default SSPageHeader;


