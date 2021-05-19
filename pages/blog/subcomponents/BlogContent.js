import React, { Component } from 'react';
import PropTypes from "prop-types";
// import Head from 'next/head';
// import Image from 'next/image';
// import getAppConfigParm  from '../../config/AppConfig';
// import { displayAd } from '../../common/ad/helpers/displayAd';
// import displayAdsList from '../../common/ad/helpers/displayAdsList';
// import displayAdsOnRight from '../../common/ad/helpers/displayAdsOnRight';
// import VisibilityWrapper from '../../common/VisibilityWrapper';
// import PageBanner from './subcomponents/PageBanner';
import MobileAd from './MobileAd';

import styles from '../../../styles/blogdetail.module.scss';

// *****************************************************************************
// BlogContent renders the blog content itself along with embedded Ads 
// for mobile devices. For the desktop, ads are shown as a separate component 
// (RightSideAds) to the right of the BlogConent. 
// Inputs:  showAd prop - flag to enable/disable ads on mobile
//          siteUrl prop - used to construct external links
//          blogUrl prop - used to construct blog links
// *****************************************************************************

export default function BlogContentSection({showAd, siteUrl, blogUrl}) {

  /* ad styles for display of ads on mobile and tablet*/ 
  const adStyle = {forTablet: {marginTop: '3rem'}, forMobile: {marginTop: '3rem'}}

  return (
  <div className="post-content">
        {/* <p className={styles.content}>{this.props.PostContent}</p>  */}
        <div>&nbsp;</div>
        <p className={styles.content}>
            Are you hosting a house welcoming party for yourself or a loved one? Do you want a way to consolidate the food you 
            prepare for church social events? If so, then you need to properly calculate the food serving sizes of your events.
        </p>
        <p className={styles.content}>
            Doing so can help control your overall budget. You'll be able to find the Goldilocks fit between too little food 
            and too much. You will get a higher return on your investment, knowing all the food you bought was consumed.
        </p>
        <p className={styles.content}>
            Be sure to read below for a party planning 101 guide on how to calculate the serving sizes of food for your guests.
        </p>
        <div style={{display: 'flex', justifyContent: 'center'}}>
        <MobileAd showAd={showAd} adStyle={adStyle} />
        </div> 
        <h2 className={styles.h2tag}>1. Invest in an Event Planning Tool</h2>
        <p className={styles.content}>
            Many times, it's helpful to look at the big picture and calculate accordingly. Many party hosts wind up over 
            serving or undeserving their guests because they weren't prepared.
        </p>
        <p className={styles.content}>
            They didn't take the time to do things like organize a guest list or get a proper headcount before the day of. 
            In doing so, they had to take a wild guess with the food amount they served each person attending.
        </p>
        <p className={styles.content}>
            For example, say you purchased enough food for 20 people, but then 40 people showed up. Now everybody only 
            gets one half of the food you'd intended for them to get. A bit of organization could have prevented that.
        </p>
        <p className={styles.content}>
            That's why it's always helpful to use in an 
            <a className={styles.blueAnchor} href={`${siteUrl}/resources/event-planning-tools`}> event planning tool </a>.
            It allows you to schedule each of your events in thorough detail. You can schedule the event easily, add to 
            or edit your guest list, and track who's coming and what they're pitching in.
        </p>
        <p className={styles.content}>
            This tool alone can help you effectively
            <a className={styles.blueAnchor} href="https://www.thebalancesmb.com/how-to-build-a-basic-event-budget-1223749"> organize your event budget</a>.
            You can see what people are bringing, then purchase items to fill in wherever necessary. You will maximize your 
            guest list and ensure that everyone chips in for your party.
        </p>
        <MobileAd showAd={showAd} adStyle={adStyle} />
        <h2 className={styles.h2tag}>2. Think in Terms of Courses</h2>
        <p className={styles.content}>
            If you want to ensure that everyone gets their fair share of food, you have to look at your food/catering on a course by course basis. 
            Most event planners just look at an overall perspective.
        </p>
        <p className={styles.content}>
            But what if a few people over serve themselves on the appetizers? Then those that didn't get enough appetizers are overcompensating 
            on the main course... you see the dilemma.
        </p>
        <p className={styles.content}>
            Instead, focus on delegating the right amount for each course you're serving. If you plan to offer appetizers, 
            the main course, and a dessert, then supply the right amount to guarantee each of your guests gets a well-balanced meal. Here are a few courses to think through:
        </p>
        <ul className={`${styles.indentList} ${styles.ulSpacing}  ${styles.content}`}>
            <li className={styles.squareBullet}>Appetizers</li>
            <li className={styles.squareBullet}>Entrees</li>
            <li className={styles.squareBullet}>Fruit Trays</li>
            <li className={styles.squareBullet}>Veggie Trays</li>
            <li className={styles.squareBullet}>Salads</li>
            <li className={styles.squareBullet}>Deserts</li>
            <li className={styles.squareBullet}>
                <a className={styles.blueAnchor} href="https://www.goodhousekeeping.com/food-recipes/party-ideas/g30794570/finger-food-ideas/"> Finger Foods</a>
                &nbsp;(served during the entirety of your event)
            </li>
            <li className={styles.squareBullet}>Coffee</li>
            <li className={styles.squareBullet}>Beer and Alcohol (if you've decided to serve alcohol)</li>
        </ul>
        <div>&nbsp;</div>
        <p className={styles.content}>
            Truth be told, you can pick any combination of these; or none of them. Some people choose to keep the food light 
            so that it doesn't become the focal point of the event. This is common during art shows, corporate events, networking events, etc. 
        </p>
        <p className={styles.content}>
            Whichever course of action you take (pun intended), be sure to stick to the 1 pound rule. It says that you 
            should offer one pound of food for every adult in attendance. If there will be children, then calculate 1/2 pound for each of them.
        </p>
        <MobileAd showAd={showAd} adStyle={adStyle} />
        <h2 className={styles.h2tag}>3. Careful With Variety</h2>
        <p className={styles.content}>
            You might think that variety is a good idea for an event, but there's a catch. If you offer too many options, you'll 
            quickly notice that people are tearing through one option and barely touching the others.
        </p>
        <p className={styles.content}>
            If you know your guest list well enough to predict which dish will be popular with the majority of them, offer 
            that dish in large quantities. That way, everyone will be guaranteed to get at least one serving of it.
        </p>
        <p className={styles.content}>
            During these unprecedented times, you'll want to make everything packaged anyway. This cuts back on the temptation 
            for people to hog one particular food dish, giving you more control in the process. Not to mention that it's safer for the health of your guests.
        </p>
        <MobileAd showAd={showAd} adStyle={adStyle} />
        <h2 className={styles.h2tag}>4. Think About the Time of the Event</h2>
        <p className={styles.content}>
            The time of your event plays a huge role in the food serving sizes that you should offer.
        </p>
        <p className={styles.content}>
            For example, if you set a networking event for 6 pm on a weeknight (directly after people get off from work) 
            and say "food will be provided", you'd better have a heavy spread.
        </p>
        <p className={styles.content}>
            However, if your event is in those in-between spots, such as 10am to 11am or 3pm to 4pm, you can 
            get away with serving lighter portions.
        </p>
        <MobileAd showAd={showAd} adStyle={adStyle} />
        <h2 className={styles.h2tag}>5. Offer Different Platters</h2>
        <p className={styles.content}>
            Remember the tip about avoiding variety? Your event's platters are the exception to that rule. 
            People love platters for events they've come to expect them.
        </p>
        <p className={styles.content}>
            Platters are also a great way to provide lighter food options for those that might be on a diet, 
            watching what they eat, or have dietary restrictions you weren't aware of.
        </p>
        <p className={styles.content}>
            Think about offering platters such as:
        </p>
        <div>
        <ul className={`${styles.indentList} ${styles.ulSpacing} ${styles.content}`}>
            <li className={styles.squareBullet}>Veggie Platters</li>
            <li className={styles.squareBullet}>Cheese Platters</li>
            <li className={styles.squareBullet}>Sandwich Platters</li>
            <li className={styles.squareBullet}>Dip Platters</li>
            <li className={styles.squareBullet}>Charcuterie Boards</li>
        </ul>
        </div>
        <div>&nbsp;</div>
        <p className={styles.content}>
            These are exceptional options for events where people will be mingling and walking to and from. 
            They can grab a handful of snacks and converse with people as they chip away at their plate.
        </p>
        <MobileAd showAd={showAd} adStyle={adStyle} />
        <h2 className={styles.h2tag}>Calculate Your Food Serving Sizes With These Tips</h2>
        <p className={styles.content}>
            Now that you have seen several ways to provide ample food serving sizes for your guests, 
            be sure to use this advice to your advantage.
        </p>
        <p className={styles.content}>
            If you need people to pitch in to help with food preparations, you may want to consider using the 
            <a className={styles.blueAnchor} href={`${siteUrl}/resources/helping-hands}`}> “Helping Hands List”  
              </a> feature in this
            <a className={styles.blueAnchor} href={`${siteUrl}`}> free event planning tool</a>.
        </p>
        <p className={styles.content}>
            Be sure to read this article for more information on
            <a className={styles.blueAnchor} href={`${blogUrl}/resources/event-planning-tools`}> planning outdoor events </a>
            and everything that you should think through.
        </p>
        <MobileAd showAd={showAd} adStyle={adStyle} />
    </div> 
  )
}
