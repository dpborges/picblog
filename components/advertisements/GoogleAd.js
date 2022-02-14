// import React from 'react';
import React, { useEffect }  from 'react';
import PropTypes from 'prop-types'

const TRACE = false;

/**
 * Dependency.
 *    1) Before using this component, it requires placing the google script tag below at the bottom of your index.html header tag:
 *       <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
 *    Note, that I use an index.html template. Be sure to update the template when making permanent changes
 *    2) In order for Google to Show Ads behind registration you must provide GoogleAdsense login credentials.
 *    You also must provide a Disallow Path in your robots.txt file that is also reflected in your GoogleAdsense account.
 * 
 * When you sign up for google adsense you will get some script code with an <ins> tag that that has the
 *    data-ad-client and data-ad-slot attributes. The data-ad-client is your client id. It is used across all your ads. 
 *    The data-ad-slot id is what distinguishes each of Ad Units defined in your Adsense account. The ad-slot id's
 *    defined in Google Adsense are captured in this component using the corresponding Adsense AdUnit Name.
 * 
 * Requirement for this component
 *    For each Ad you are going to display, you need to initialize the adsbygoogle array and then ask google to push an Ad into
 *    the slot. To implement this,  place one of the code snippets code in either useEffect or componentDidMount. I used the former
 *        window.adsbygoogle = window.adsbygoogle || []
 *        window.adsbygoogle.push({})
 *                 or
 *        (window.adsbygoogle = window.adsbygoogle || []).push({});
 * 
 * To use the GoogleAd component, call the displayAd Helper. The helper has a testMode flag. When looking to test ad postioning,
 * set this flag to true. Note the BaseStyles defined below is used for defining the specific AdUnit container.
 * The adStyle prop allows you to augment BaseStyles with additional properties like border, padding, margin, etc, if so desired.
 */

export const GoogleAd = (props) =>  {

    let { type, adStyle } = props;

    let dataAdClient = '';
    let dataAdSlot   = '';

    useEffect ( () => {
      // (window.adsbygoogle = window.adsbygoogle || []).push({});
      window.adsbygoogle = window.adsbygoogle || []
      window.adsbygoogle.push({})
    }, []);
    
    //TRACE && console.log("This it the type prop ", type)
    //TRACE && console.log("This data-ad-client ", dataAdClient)
    //TRACE && console.log("This data-ad-slot ", dataAdSlot)

    let googleAdBaseStyle = {};
    let googleAdStyle   = adStyle || {};

    switch (type) {

     case 'skyscraper':    /* aka vertical display ad */
      googleAdBaseStyle = { display: 'inline-block', width: '300px', height: '600px' }
      googleAdStyle     = Object.assign(googleAdBaseStyle, adStyle)
      dataAdClient      = "ca-pub-6803639993576143"
      dataAdSlot        = "5575088323"
      break;  

    case 'web-leader-board': /* aka horizontal display ad */
      googleAdBaseStyle = { display: 'block', height: '90px', width: '728px' };
      googleAdStyle     = Object.assign(googleAdBaseStyle, adStyle);
      dataAdClient      = "ca-pub-6803639993576143";
      dataAdSlot        = "9594224389";
      break;

    case 'mobile-leader-board':
      googleAdBaseStyle = { display: 'block', height: '50px', width: '318px' }
      googleAdStyle     = Object.assign(googleAdBaseStyle, adStyle)
      dataAdClient      = "ca-pub-6803639993576143"
      dataAdSlot        = "5355596478"
      break;

    
    case 'medium-rectangle':    /* same width as skyscraper; can be used on left or right  of  web as in feed on mobile */
      googleAdBaseStyle = { display: 'block', height: '250px', width: '300px' }
      googleAdStyle     = Object.assign(googleAdBaseStyle, adStyle)
      dataAdClient      = "ca-pub-6803639993576143"
      dataAdSlot        = "7758398531"
      break;

    case 'in-feed-horizontal':  /* can be used for tablet within article; IMPORTANT! THIS IS A CUSTOM SIZED DISPLAY AD SIZED LIKE  AN IN FEED HORIZONTAL */
      googleAdBaseStyle = { display: 'block', minHeight: '90px', width: '468px' }
      googleAdStyle     = Object.assign(googleAdBaseStyle, adStyle)
      dataAdClient      = "ca-pub-6803639993576143"
      dataAdSlot        = "4645150039"
      break;

    case 'in-feed-square':    /* can be used for tablet within article, IMPORTANT! THIS IS A CUSTOM SIZED DISPLAY AD SIZED LIKE  AN IN FEED SQUARE  */
      googleAdBaseStyle = { display: 'block', height: '448px', width: '364px' }  /* THIS IS FAIRLY LARGE - I MAY NOT USE*/
      googleAdStyle     = Object.assign(googleAdBaseStyle, adStyle)
      dataAdClient      = "ca-pub-6803639993576143"
      dataAdSlot        = "1950703938"
      break;

    default:
         console.log(`Warning: Google Ad type "${props.type}" was not found`)
    }

    return (
      <ins className='adsbygoogle'
        style={googleAdStyle}
        data-ad-client={dataAdClient}
        data-ad-slot={dataAdSlot}
      />
    );
}

export default GoogleAd;

/**
 * Note some of the propTypes below, I never used, hence I don't set their defaults.
 * I got these from the React Adsense component. If I need to use them in future and figure out 
 * their default values, I will add them to default props and add them to the ins element properties
 */
GoogleAd.propTypes = {
  dataAdClient:   PropTypes.string,
  dataAdSlot:     PropTypes.string,
  adStyle:        PropTypes.object,
  layout:         PropTypes.string,    /* reserved for future implementation */
  layoutKey:      PropTypes.string,    /* reserved for future implementation */
  format:         PropTypes.string,    /* reserved for future implementation */
  responsive:     PropTypes.bool       /* reserved for future implementation */
  // contentType:    PropTypes.oneOf(['any', 'advertisement', 'premium']),
  // device:         PropTypes.oneOf(['any', 'mobile', 'desktop'])
}

GoogleAd.defaultProps = {
  dataAdClient: 'ca-pub-6803639993576143',
  dataAdSlot:   '7758398531',
  adStyle:       {},
}