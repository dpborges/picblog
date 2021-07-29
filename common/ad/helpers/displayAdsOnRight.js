import React from 'react'
import { displayAd } from './displayAd';

// import "../../../styles/reusable-classes.scss";
/**
 * This helper function displays a list of Google ads vertically down the right side of a block post.
 * Input: listSize  - determines the size of the list of Ads displayed. Supported values are:
 * 'small', 'medium', 'large', 'xlarge'. 
 */

let containerStyle = { marginLeft: '2.5rem' }; // Style for the container holding all the ads listed vertically
let advertStyle    = { marginBottom: '3rem' }                       // Style for each advert in the container

let smallAdvert = (
    <div style={containerStyle}>
        <div>{displayAd("skyscraper", "desktop", advertStyle)}</div>
        <div>{displayAd("medium-rectangle", "desktop", advertStyle)}</div>
    </div>
)
let mediumAdvert = (
    <div style={containerStyle}>
        <div>{displayAd("skyscraper", "desktop", advertStyle)}</div>
        <div>{displayAd("medium-rectangle", "desktop", advertStyle)}</div>
        <div>{displayAd("skyscraper", "desktop", advertStyle)}</div>
        <div >{displayAd("medium-rectangle", "desktop", advertStyle)}</div>
    </div>
)
let largeAdvert = (
    <div style={containerStyle}>
        <div>{displayAd("skyscraper", "desktop", advertStyle)}</div>
        <div>{displayAd("medium-rectangle", "desktop", advertStyle)}</div>
        <div>{displayAd("skyscraper", "desktop", advertStyle)}</div>
        <div>{displayAd("medium-rectangle", "desktop", advertStyle)}</div>
        <div>{displayAd("skyscraper", "desktop", advertStyle)}</div>
    </div>
)

let xlargeAdvert = (
    <div style={containerStyle}>
        <div>{displayAd("skyscraper", "desktop", advertStyle)}</div>
        <div>{displayAd("medium-rectangle", "desktop", advertStyle)}</div>
        <div>{displayAd("skyscraper", "desktop", advertStyle)}</div>
        <div>{displayAd("medium-rectangle", "desktop", advertStyle)}</div>
        <div>{displayAd("skyscraper", "desktop", advertStyle)}</div>
        <div>{displayAd("medium-rectangle", "desktop", advertStyle)}</div>
        <div>{displayAd("medium-rectangle", "desktop", advertStyle)}</div>
    </div>
)


const displayAdsOnRight = (listSize) => {
    
   // console.log(`>> Inside displayAdsOnRight`)
   
   let advertJsx = smallAdvert;         // set default

   if (listSize === "small") {
        advertJsx = smallAdvert
   } else if (listSize === "medium") {
       advertJsx = mediumAdvert
   } else if (listSize === "large") {
       advertJsx = largeAdvert
   } else if (listSize === "xlarge") {
       advertJsx = xlargeAdvert
   }

   return advertJsx
}

export default displayAdsOnRight;

