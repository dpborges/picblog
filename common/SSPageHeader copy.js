import React, { Component } from "react";
import Image from 'next/image';
// import { connect } from 'react-redux';
// import { HashLink as Link } from 'react-router-hash-link';
// import { withStyles } from '@material-ui/core/styles';
import DropDownMenu from '../components/menus/DropDownMenu'
// import { LinkContainer } from "react-router-bootstrap";
import { Navbar, Container, NavDropdown, Nav, Dropdown } from "react-bootstrap";
import getAppConfigParm from '../config/AppConfig';
// import { startLogout } from '../actions/auth';
import { BurgerMenuIcon } from '../components/icons/BurgerMenuIcon';
import ImgWithFallback from '../components/formatting/ImgWithFallback';
// import '../../styles/base.scss';
// import '../../styles/style.module.scss'
// import '../../styles/reusable-classes.scss';
// import '../../styles/axolotstyle.scss';
// import '../../styles/axolotresponsive.scss';
import styles from '../styles/page-header.module.scss';

// import '../../styles/drop-down-menu.scss';
// import '../../styles/burgermenu-icon.scss';

class SSPageHeader extends Component {

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
        this.setState({ scrollWithOffset });
    }

    // Handlers 
    closeNavbar() {
        if (window.matchMedia("screen and (max-width: 991px)").matches) {
            document.getElementById("collaspe-btn").click();
        }
    }

    logout = (e) => {
        console.log("INSIDE LOGOUT HANDLER")
        // e.preventDefault();
        this.props.startLogout();  // dispatch logout action
    }


    render() {

        // let { isAuthenticated } = this.props.auth;
        // let isAuthenticated  = true;
        let siteUrl = getAppConfigParm("siteUrl");
        let blogUrl = getAppConfigParm("blogUrl");

        // Resources used for DropDown Menu
        let resources=  [
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
                    style={{minHeight: '7rem', backgroundColor: 'white !important'}}
                >
                    <Container style={{backgroundColor: 'white !important'}}>
                        {/*
                            <LinkContainer exact to="/">
                                <Navbar.Brand className="navbar-brand">
                                  Axo<span>lot</span>  */}
                                <a href={`${siteUrl}`}>
                                  <div className={styles.logoContainer}>
                                   {/*
                                    <img className="ss-page-header__logo" src="/images/pitch-in-club-logo.jpg" alt="Pitch In Club Logo" /> 
                                      <ImgWithFallback className={styles.pageHeaderLogo} src="/images/pitch-in-club-logo.webp" 
                                        fallback="/images/pitch-in-club-logo.jpg" alt="Pitch In Club Logo" >
                                      </ImgWithFallback>
                                    */}
                                      <Image src="/images/pitch-in-club-logo.jpg" alt="Pitch In Club Logo" width={72} height={72} />
                                      <p className={styles.pageHeaderTitle}>PITCH IN <span className={styles.pageHeaderTitlePart2}>CLUB</span> </p>
                                  </div>
                                </a>
                           {/*     </Navbar.Brand>
                           </LinkContainer> */}

                            <Navbar.Toggle
                                aria-controls="basic-navbar-nav"
                                id="collaspe-btn"
                                style={{borderColor: 'white'}}
                               > 
                               <BurgerMenuIcon />  
                            </Navbar.Toggle>

                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="ml-auto">
                                <ul className={`${styles.topNavlinks} ${styles.ddFlexContainer}`}>
                                    <li className={styles.topNavlink}>
                                        <a href={`${siteUrl}`} className={styles.pageHeaderNavlink}>
                                            <div className={styles.linktextSize}>Home</div>
                                        </a>
                                    </li>
                                    <li className={styles.topNavlinkAlt}>
                                        <div className={styles.dropdownContainer}>
                                            <DropDownMenu title="Resources" list={resources} toggleSelected={this.toggleSelected} 
                                                altHeaderClass="dropDownHeaderNb"  config={{displayHeader: false, upDownArrow: false}} 
                                            />
                                        </div>
                                    </li>
                                    <li className={styles.topNavlink}>
                                        <a href={`${blogUrl}`} className={styles.pageHeaderNavlink}>
                                            <div className={styles.linktextSize}>Blog</div>
                                        </a>
                                    </li>
                                </ul>
                           </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
                </div>
            </React.Fragment>
        );
    }
}

// const mapStateToProps = (state) => {
//     return {
//         auth: state.auth
//     }
// };

// const mapDispatchToProps = (dispatch) => ({
//     startLogout: () => dispatch(startLogout())
// })

// export default NavBarMultiPage;
// export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(NavBarMultiPage));

// export default connect(mapStateToProps, mapDispatchToProps)(SSPageHeader);
// export default connect(mapStateToProps)(SSPageHeader);

export default SSPageHeader;


//  {/* PIC Change  - Replace the "Home" drop down with a simple link 
//                                 <Dropdown>
//                                     <NavDropdown title="Home" id="nav-dropdown">
//                                         <LinkContainer exact to="/">
//                                             <NavDropdown.Item>
//                                                 Home Version One
//                                             </NavDropdown.Item>
//                                         </LinkContainer>
//                                         <LinkContainer to="/home-two">
//                                             <NavDropdown.Item>
//                                                 Home Version Two
//                                             </NavDropdown.Item>
//                                         </LinkContainer>
//                                         <LinkContainer to="/home-three">
//                                             <NavDropdown.Item>
//                                                 Home Version Three
//                                             </NavDropdown.Item>
//                                         </LinkContainer>
//                                         <LinkContainer to="/home-four">
//                                             <NavDropdown.Item>
//                                                 Home Version Four
//                                             </NavDropdown.Item>
//                                         </LinkContainer>
//                                         <LinkContainer to="/home-five">
//                                             <NavDropdown.Item>
//                                                 Home Version Five
//                                             </NavDropdown.Item>
//                                         </LinkContainer>
//                                         <LinkContainer to="/home-six">
//                                             <NavDropdown.Item>
//                                                 Home Version Six
//                                             </NavDropdown.Item>
//                                         </LinkContainer>
//                                         <LinkContainer 
//                                             to="/home-seven"
//                                             onClick={() => window.location.refresh()}
//                                         >
//                                             <NavDropdown.Item>
//                                                 Home Version Seven
//                                             </NavDropdown.Item>
//                                         </LinkContainer>
//                                         <LinkContainer to="/one-page-template">
//                                             <NavDropdown.Item>
//                                                 One Page Template
//                                             </NavDropdown.Item>
//                                         </LinkContainer>
//                                     </NavDropdown>
//                                     {/* <Dropdown.Menu className="super-colors">
                                        
//                                     </Dropdown.Menu> 
//                                 </Dropdown>
                              

//                                 <LinkContainer to="/">
//                                     <Nav.Link>Home</Nav.Link>
//                                 </LinkContainer>

//                                   */}

//                                   <a href={getAppConfigParm("siteUrl")} >
//                                   <div className="ss-page-header-navlink">Home</div>
//                               </a>

//                               <Dropdown>
//                                   <NavDropdown title="Resources" id="nav-dropdown">
//                                       <LinkContainer to="/resources/features">
//                                           <NavDropdown.Item>
//                                               <div className="ss-page-header-dd-list-item">Features</div>
//                                           </NavDropdown.Item>
//                                       </LinkContainer>
                                  
//                                       <LinkContainer to="/resources/type-of-events">
//                                           <NavDropdown.Item>
//                                               <div className="ss-page-header-dd-list-item">Type of Events</div>
//                                           </NavDropdown.Item>
//                                       </LinkContainer>
//                                       <LinkContainer to="/resources/helping-hands">
//                                           <NavDropdown.Item>
//                                               <div className="ss-page-header-dd-list-item">Helping Hands List</div>
//                                           </NavDropdown.Item>
//                                       </LinkContainer>
//                                       <LinkContainer to="/resources/contribution-list">
//                                           <NavDropdown.Item>
//                                               <div className="ss-page-header-dd-list-item">Contribution List</div>
//                                           </NavDropdown.Item>
//                                       </LinkContainer>
//                                       <LinkContainer to="/resources/how-to-create-event">
//                                           <NavDropdown.Item>
//                                               <div className="ss-page-header-dd-list-item">How to Create Event</div>
//                                           </NavDropdown.Item>
//                                       </LinkContainer>
//                                       <LinkContainer to="/resources/how-to-pitch-in">
//                                           <NavDropdown.Item>
//                                               <div className="ss-page-header-dd-list-item">How to Pitch In</div>
//                                           </NavDropdown.Item>
//                                       </LinkContainer>
//                                       <LinkContainer to="/about-us">
//                                           <NavDropdown.Item>
//                                               <div className="ss-page-header-dd-list-item">About Us</div>
//                                           </NavDropdown.Item>
//                                       </LinkContainer>

                                      
//                                       {/* PIC Change - removed these as I only had these here so I can other page templates 
//                                       <LinkContainer to="/home4">
//                                           <NavDropdown.Item>TBD-PageFour</NavDropdown.Item>
//                                       </LinkContainer>
//                                       <LinkContainer to="/home5">
//                                           <NavDropdown.Item>TBD-PageFive</NavDropdown.Item>
//                                       </LinkContainer>
//                                       */}
//                                       {/* PIC Change - removed as not needed at this point in time 
//                                       <LinkContainer to="/pricing">
//                                           <NavDropdown.Item>Pricing</NavDropdown.Item>
//                                       </LinkContainer>
//                                       */}
//                                   </NavDropdown>
//                               </Dropdown>
//                           {/* 
//                               <LinkContainer to="/about">
//                                   <Nav.Link>About</Nav.Link>
//                               </LinkContainer>
//                           */}    
//                           {/* PIC Change - Remove these two links as they are not needed at this time.
//                               <LinkContainer to="/services">
//                                   <Nav.Link>Services</Nav.Link>
//                               </LinkContainer>

//                               <LinkContainer to="/team">
//                                   <Nav.Link>Team</Nav.Link>
//                               </LinkContainer>
                         
//                               <LinkContainer to="/faq">
//                                   <Nav.Link>Faq</Nav.Link>
//                               </LinkContainer>
                         
//                               <LinkContainer to="/">
//                                   <Nav.Link>Blog</Nav.Link>
//                               </LinkContainer>
                          
//                               <a style={{textDecoration: 'none', fontSize: '1rem', marginLeft: '1rem'}} href={getAppConfigParm("blogUrl")} >
//                                   <div className="ss-page-header-navlink">Blog</div>
//                               </a>

//                               { !isAuthenticated && 
//                                 (
//                                   <LinkContainer to="/login">
//                                       <Nav.Link>Log In</Nav.Link>
//                                   </LinkContainer>                                  
//                               ) }

//                               { !isAuthenticated && 
//                                   (
//                                   <LinkContainer to="/signup">
//                                       <Nav.Link>Sign Up</Nav.Link>
//                                   </LinkContainer>
//                               ) }
                          
//                               { isAuthenticated &&  (
//                                   <Nav.Link onClick={this.logout}  style={{textDecoration: 'none'}} >Log out</Nav.Link>
//                               ) }
//                           */}