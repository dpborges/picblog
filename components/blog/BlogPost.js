import React, { Component, useState, useEffect } from 'react';
import PropTypes from "prop-types";
import Head from 'next/head';
import getAppConfigParm  from '../../config/AppConfig';
import PageBanner from './PageBanner';
import MobileAd from './MobileAd';
import { BlogContent } from './BlogContent';
import RightSideAds from './RightSideAds';
// import getContentMetaData from '../../pages/api/contentmgr/getContentMetadata';
import getRightSideAdSize from './helpers/getRightSideAdSize';

import styles from '../../styles/blogdetail.module.scss';

const BlogPost = (props) => { 

    const { slug, metadata, mdxSource } = props;

    const showAd =  getAppConfigParm("showAd");
    const siteUrl = getAppConfigParm("siteUrl");
    const blogUrl = getAppConfigParm("blogUrl");

    const wordCount = metadata.wordCount;

    let adListSize  = getRightSideAdSize(wordCount);

    return (
    <div>
      <Head>
          <title>{`${metadata.title}`}</title>
          <meta property="og:title" content={`${metadata.title}`} />
          <meta name="description"  content="If you're planning a party, you might not be sure how much food to buy and prepare. Here's how to calculate food serving sizes and get the right amount." />
          <meta name="keywords"     content="food serving sizes, portion sizes, serving recommendations for food, serving in cups, one serving size"/>
      </Head> 
      <React.Fragment>

          <PageBanner 
            title="Blog Details" 
            subtitle="Great ideas for making it easier, more enjoyable, and less stressful to organize that special event or function you have in mind." 
          />

          <MobileAd showAd={showAd} 
            adStyle={{
              forMobile: {marginTop: '0rem', marginBottom: '3rem'}, 
              forTablet: {marginTop: '0rem', marginBottom: '5rem'}
            }} 
            adType={{forTablet: "in-feed-horizontal", forMobile: "mobile-leader-board" }}
          />
          
          <div className={styles.topLevelContainer} >
            <div className={styles.blogContainer} >
                <div style={{display: 'flex', flexDirection: 'column', width: '100%'}}>
                  <BlogContent metadata={metadata} mdxSource={mdxSource} 
                      showAd={showAd} siteUrl={siteUrl} blogUrl={blogUrl} 
                  />
                </div>
                <RightSideAds showAd={showAd} 
                  adList={adListSize}
                  style={{width: '300px'}} 
                />
            </div>
          </div>
          
      </React.Fragment>
    </div>
    )
}  /* end of class */

export default BlogPost;                                

