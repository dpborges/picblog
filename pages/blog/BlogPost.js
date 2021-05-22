import React, { Component, useState, useEffect } from 'react';
import PropTypes from "prop-types";
import Head from 'next/head';
import getAppConfigParm  from '../../config/AppConfig';
import PageBanner from './subcomponents/PageBanner';
import MobileAd from './subcomponents/MobileAd';
import BlogContent from './subcomponents/BlogContent';
import RightSideAds from './subcomponents/RightSideAds';

import styles from '../../styles/blogdetail.module.scss';
import getContentMetaData from '../api/contentmgr/getContentMetadata';

const BlogPost = (props) => { 
   
  const metadata = {
    "id": "1234",
    "title": "Party Planning 101: Calculating Food Serving Sizes for Your Guests",
    "slug": "calculating-food-serving-sizes-for-your-guests",
    "cid": "6782",
    "createDate": "2021-05-21",
    "updateDate": "2021-05-21",
    "images": [{"src": "/images/portioned-food-on-table.jpg", "alt": "portioned food on table"}]
  }

    const { slug } = props;
    const showAd =  getAppConfigParm("showAd");
    const siteUrl = getAppConfigParm("siteUrl");
    const blogUrl = getAppConfigParm("blogUrl");
    // const metadata = getContentMetaData();
    console.log(`>>Inside Blog Post`)
    // console.log(`   metadata: ${metadata}`)

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

          <MobileAd showAd={showAd} />
          
          <div className={styles.topLevelContainer} >
            <div className={styles.blogContainer} >
              <div style={{display: 'flex', flexDirection: 'column', width: '100%'}}>
                <BlogContent metadata={metadata} showAd={showAd} siteUrl={siteUrl} blogUrl={blogUrl}  />
              </div>
              <RightSideAds showAd={showAd} 
                adList={["medium", "small", "single-medium-rectangle", "single-medium-rectangle"]}
                style={{width: '300px'}} 
              />
            </div>
          </div>
      </React.Fragment>
    </div>
    )
}  /* end of class */

export default BlogPost;                                

