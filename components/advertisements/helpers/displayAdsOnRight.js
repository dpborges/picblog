import React from 'react'
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
      <div>{displayAd("skyscraper", "desktop", advertStyle)}</div>
      <div>{displayAd("skyscraper", "desktop", advertStyle)}</div>
  </div>
)
let mediumAdvert = (
  <div style={containerStyle}>
      <div>{displayAd("skyscraper", "desktop", advertStyle)}</div>
      <div>{displayAd("medium-rectangle", "desktop", advertStyle)}</div>
      <div>{displayAd("skyscraper", "desktop", advertStyle)}</div>
      <div>{displayAd("medium-rectangle", "desktop", advertStyle)}</div>
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

let xxlargeAdvert = (
  <div style={containerStyle}>
      <div>{displayAd("skyscraper", "desktop", advertStyle)}</div>
      <div>{displayAd("medium-rectangle", "desktop", advertStyle)}</div>
      <div>{displayAd("skyscraper", "desktop", advertStyle)}</div>
      <div>{displayAd("medium-rectangle", "desktop", advertStyle)}</div>
      <div>{displayAd("skyscraper", "desktop", advertStyle)}</div>
      <div>{displayAd("medium-rectangle", "desktop", advertStyle)}</div>
      <div>{displayAd("medium-rectangle", "desktop", advertStyle)}</div>
      <div>{displayAd("skyscraper", "desktop", advertStyle)}</div>
      <div>{displayAd("medium-rectangle", "desktop", advertStyle)}</div>
      <div>{displayAd("skyscraper", "desktop", advertStyle)}</div>
      <div>{displayAd("medium-rectangle", "desktop", advertStyle)}</div>
  </div>
)

let singleSkyScraper = (
  <div style={containerStyle}>
      <div>{displayAd("skyscraper", "desktop", advertStyle)}</div>
  </div>
)

let singleMedRectangle = (
  <div style={containerStyle}>
      <div>{displayAd("medium-rectangle", "desktop", advertStyle)}</div>
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
   } else if (contentHeight === "single-med-rect") { // use on bottom of page as filler as has not top margin
      advertJsx = singleMedRectangle
   } else if (contentHeight === "single-skyscraper") { // use on bottom of page as filler as has not top margin
      advertJsx = singleSkyScraper
   }
   return advertJsx
}

export default displayAdsOnRight;

