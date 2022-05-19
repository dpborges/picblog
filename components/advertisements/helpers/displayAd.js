import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import GoogleAd from '../GoogleAd';

// import "../../../styles/reusable-classes.scss";

/**
 * Displays a single ad.
 * Props:
 *      type:   is the type of ad(web-leader-board, mobile-leader-board, skyscraper, in-feed-horizontal, etc)
 *      device: is (eg mobile, tablet, desktop).
 *      style:  is an object representing an in-line style that is merged with base style for given device. 
 *              Typically, the style passed to displayAd helper function are margin adjustments. 
 * Process:
 *      Initialize default style for each device type (the default style currently sets the border).
 *      The default style is merged with the style passed in the style prop and is used as the GoogleAd Style.
 *      The device name is used to define className used for the particular device. That className is used 
 *      for the GoogleAd wrapper. The className dictates whether to Google Ad would show on a mobile, tablet, or desktop.
 *      Render the GoogleAd component passing in the adType and the adStyle
 * Output:
 *      Display a GoogleAd component 
 *      The witdh and height are set witin the GoogleAd component itself based on the Ad Unit being displayed.
 *      testMode: if set to true,  ad container will display border
 *
 * */
export function displayAd (type, device, style) {

    // Set testMode
    let testMode  = false;

    // Initialize the style used for testing and the one used for production mode
    let showBorder = {border: '1px solid red'};
    let hideBorder = {border: 'none'}

    // Set the borderStyle for all Ads 
    /* When test mode is on, show border. When testmode is off (prod mode), remove border */
    let borderStyle = testMode ? showBorder : hideBorder;
 
    /* Set defaults if adType and device parameters are not provided  */
    let adType     = type   ? type   : "medium-rectangle";   
    let deviceType = device ? device : "desktop";

    // console.log(`This is adType      ${adType}`)
    // console.log(`This is device type ${deviceType}`)

    // Set default adStyle based on device and ad type and merge with style passed in from parent
    let defaultStyle = {};
    let adStyle = {};

    if (device === "mobile" && type === "mobile-leader-board") {
        defaultStyle = {marginTop: '2rem', marginBottom: '2rem'};
        adStyle = Object.assign(borderStyle, defaultStyle, style) ;
    } else 
    if (device === "mobile" && type === "medium-rectangle") {
        defaultStyle = {marginTop: '1rem', marginBottom: '3rem'};
        adStyle = Object.assign(borderStyle, defaultStyle, style ) ;
    } else  
    if (device === "tablet" && type === "medium-rectangle") {
        defaultStyle = {marginTop: '1rem', marginBottom: '3rem'};
        adStyle = Object.assign(borderStyle, defaultStyle, style) ;
    } else
    if (device === "tablet" && type === "in-feed-horizontal") {
        defaultStyle = {marginTop: '1rem', marginBottom: '3rem'};
        adStyle = Object.assign(borderStyle, defaultStyle, style) ;
    } else
    if (device === "desktop") {
        defaultStyle = borderStyle;
        adStyle = Object.assign(borderStyle, defaultStyle, style) ;
    }

    // console.log(`This adStyle used for device ${device} and adtype ${adType} is ${JSON.stringify(adStyle,null,2)}`)
    return (
        <div className={`display-on-${deviceType}`} key={uuidv4()}>
          <GoogleAd type={adType} adStyle={adStyle} /> 
        </div>
    )
}
    