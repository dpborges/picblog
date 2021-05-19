import React, { Component } from 'react';
// import { GAinit, GAlogPageView } from '../../components/common/GoogleAnalytics';
import getAppConfigParm  from '../../config/AppConfig';
import SSPageHeader from '../../common/SSPageHeader';
import BlogPost from "./post";                                /* #nbchange */
import Footer from "../../common/RosyFooter";

// *******************************************************************************
// To make changes quickly,  I have labeled them as  #nbchange
// *******************************************************************************

// This  is copy of SingleBlog.js from the RosyTemplate
// This page serves as the blog post layout

class BlogPage extends Component {                                    /* #nbchange */

    constructor() {
        super();
        this.state = {env: getAppConfigParm("env")}
    }

    componentDidMount = () => {
        // Google Analytics
        // if (this.state.env  === 'prod') {
        //     if (!window.GA_INITIALIZED) {
        //         GAinit();
        //         window.GA_INITIALIZED = true;
        //     }
        //     GAlogPageView()
        // }
    }

    render() {
        return (
            <div>
                <React.Fragment>
                    {/* NavBar: src/components/NavBar.jsx */}
                    <SSPageHeader />
                    {/* BlogPost: src/components/Blog/BlogPost.jsx */}
                    <BlogPost />                                      { /* #nbchange */}
                    {/* Footer: src/components/Footer.jsx */}
                    <Footer />  
                </React.Fragment>
            </div>
        );
    }
}

export default BlogPage;                                              /* #nbchange */
