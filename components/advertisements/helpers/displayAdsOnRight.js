import React from 'react'
import { v4 as uuidv4 } from 'uuid';
import { displayAd } from './displayAd';

// import "../../../styles/reusable-classes.scss";
/**
 * This helper function displays a list of Google ads vertically down the right side of a block post.
 * The function sets some standard sizes based on the contentHeight paramater.
 */

let containerStyle = { marginTop: '2.2rem', marginLeft: '2.5rem' }; // Style for the container holding all the ads listed vertically
let advertStyle    = { marginBottom: '3rem' }                       // Style for each advert in the container

let smallAdvert = (
    <div style={containerStyle}>
        <div >{displayAd("skyscraper", "desktop", advertStyle)}</div>
        <div >{displayAd("skyscraper", "desktop", advertStyle)}</div>
    </div>
)
let mediumAdvert = (
    <div style={containerStyle}>
        <div >{displayAd("skyscraper", "desktop", advertStyle)}</div>
        <div >{displayAd("medium-rectangle", "desktop", advertStyle)}</div>
        <div >{displayAd("skyscraper", "desktop", advertStyle)}</div>
        <div >{displayAd("medium-rectangle", "desktop", advertStyle)}</div>
    </div>
)
let largeAdvert = (
    <div style={containerStyle}>
        <div >{displayAd("skyscraper", "desktop", advertStyle)}</div>
        <div >{displayAd("medium-rectangle", "desktop", advertStyle)}</div>
        <div >{displayAd("skyscraper", "desktop", advertStyle)}</div>
        <div >{displayAd("medium-rectangle", "desktop", advertStyle)}</div>
        <div >{displayAd("skyscraper", "desktop", advertStyle)}</div>
    </div>
)

let xlargeAdvert = (
    <div style={containerStyle}>
        <div >{displayAd("skyscraper", "desktop", advertStyle)}</div>
        <div >{displayAd("medium-rectangle", "desktop", advertStyle)}</div>
        <div >{displayAd("skyscraper", "desktop", advertStyle)}</div>
        <div >{displayAd("medium-rectangle", "desktop", advertStyle)}</div>
        <div >{displayAd("skyscraper", "desktop", advertStyle)}</div>
        <div >{displayAd("medium-rectangle", "desktop", advertStyle)}</div>
        <div >{displayAd("medium-rectangle", "desktop", advertStyle)}</div>
    </div>
)


const displayAdsOnRight = (contentHeight) => {
    
   // console.log(`>> Inside displayAdsOnRight`)
   
   let advertJsx = smallAdvert;         // set default

   if (contentHeight === "small") {
        advertJsx = smallAdvert
   } else if (contentHeight === "medium") {
       advertJsx = mediumAdvert
   } else if (contentHeight === "large") {
       advertJsx = largeAdvert
   } else if (contentHeight === "xlarge") {
       advertJsx = xlargeAdvert
   }

   return advertJsx
}

export default displayAdsOnRight;

