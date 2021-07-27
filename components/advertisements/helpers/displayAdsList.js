import React from 'react'
import { v4 as uuidv4 } from 'uuid';
import GoogleAd from '../GoogleAd';
import { displayAd } from './displayAd';

// import "../../../styles/reusable-classes.scss";
/**
 * This helper takes the height provided via the parameter to try to fit as many Ads as possible 
 * vertically in that space. It will first try to add a couple of skyscrapers. When it starts depleting 
 * the space, it starts trying to add medium rectangles.
 * 
 * Page/Parent Requirements
 * The Page using this helper should define a ref on the container they will display the advertisements.
 * The refCallback will use the element.getBoundingClientRect() to get the height of the container. Since the height will
 * not be known until the page is rendered, you should set an initial height to render at least one advertisement
 * on the initial page render. Once the refCallback is fired, the height will be set for the page, and the page
 * will be re-rendered with actual height of container. For BlogDetail Page, I have initialized the height to 700.
 * Also note that the refCallback has a whiteSpace variable used to subtract from the height container. Otherwise,
 * some of the Ads may flow into the bottom whitespace area. Recommend tweaking the whiteSpace variable for each
 * page so Ads look natural on the page and do not flow beyond the end of the post.
 *
 * params: height - height in pixels available for Advertisements 
 *         currentAllocation - how much space has been allocated
 */

export const displayAdsList = (height, ml) => {
    
    /* Initialization */
    let marginLeft = ml ? ml : '2rem'; /*default to '2rem' */
    const heightOfSkyScraper = 602;
    const heightOfMediumRect = 254;
    let adsList = [];      /* intialize empty array to hold number of ads to render on right hand side */

    /* Helper function to return an advertisement of particular type (eg, skyscraper, medium-rectangle). 
       This is the fundamental jsx to render a Google Ad.  */
    // const adOfType = (type) => {
    //     return (
    //         <div className="display-on-desktop" key={uuidv4()}>
    //             <GoogleAd type={type} adStyle={{border: '1px solid lightgrey', marginTop: '2.2rem', marginLeft: marginLeft }} />
    //         </div>
    //     )
    // }

    const adOfType = (type) => {
        return (
            <div className="display-on-desktop" key={uuidv4()}>
                {displayAd(type, "desktop", {marginTop: '2.2rem', marginLeft: marginLeft})}
            </div>
        )
    }


    /* Helper function that returns the height remaining (in pixels) given the current Height Allocation used  */
    const getRemainingHeight = (currentHeightAllocation) => {
        return height - currentHeightAllocation;
    }

    /* Helper used to push an Ad to the array list. First argument is current allocation (number), second is adType(string) or type of Ad. */
    const pushGoogleAdToList = (currentAllocation, type) => {
        let pushedSuccessfully = false;

        /* set the height of current Ad type */
        let heightOfAdType = 0;
        if (type === "skyscraper") {
            heightOfAdType = heightOfSkyScraper
        } else if (type === "medium-rectangle") {
            heightOfAdType = heightOfMediumRect
        }
        
         /* use height of Ad type to determine remainingHeight and if it will fit into the remaining space  */
        let remainingHeight = getRemainingHeight(currentAllocation);
        if (remainingHeight > heightOfAdType) {  /* add skyScraper if space available */
            adsList.push(adOfType(type)); 
            pushedSuccessfully = true;
        }
        return pushedSuccessfully;
    }

    /* Main code starts pushing ads to the list. As it pushes an Ad it calculates new height allocation (amount used) */
    let heightAllocation = 0;                                 /* used to track cumalative height allocation */
    pushGoogleAdToList(heightAllocation, "skyscraper");       /* add first skyScraper */
    heightAllocation += heightOfSkyScraper; /* calculate new height allocation by adding size of component we just pushed */
    pushGoogleAdToList(heightAllocation, "skyscraper");       /* pass in new allocation to see if you can add skyScraper*/    
    heightAllocation += heightOfSkyScraper; /* calculate new height allocation by adding size of component we just pushed */

    /* As we move towards end of blogpost, use conditional logic to add some medium-rectangles if space available */
    let pushSuccessful = false;
    pushSuccessful = pushGoogleAdToList(heightAllocation, "medium-rectangle");
    if (pushSuccessful) {
        heightAllocation = heightAllocation + heightOfMediumRect; /* calculate new height allocation by adding size of component we just pushed */
    }
    pushSuccessful = pushGoogleAdToList(heightAllocation, "medium-rectangle");
    if (pushSuccessful) {
        heightAllocation = heightAllocation + heightOfMediumRect; /* calculate new height allocation by adding size of component we just pushed */
    }
    pushSuccessful = pushGoogleAdToList(heightAllocation, "medium-rectangle");
    if (pushSuccessful) {
        heightAllocation = heightAllocation + heightOfMediumRect; /* calculate new height allocation by adding size of component we just pushed */
    }
    pushSuccessful = pushGoogleAdToList(heightAllocation, "skyscraper");
    if (pushSuccessful) {
        heightAllocation = heightAllocation + heightOfSkyScraper; /* calculate new height allocation by adding size of component we just pushed */
    }
    pushSuccessful = pushGoogleAdToList(heightAllocation, "medium-rectangle");
    if (pushSuccessful) {
        heightAllocation = heightAllocation + heightOfMediumRect; /* calculate new height allocation by adding size of component we just pushed */
    }
    // } else if (pushSuccessful) {
    //     pushSuccessful = pushGoogleAdToList(heightAllocation, "medium-rectangle");
    //     if (pushSuccessful) { heightAllocation = heightAllocation + heightOfMediumRect;}
    // } else if (pushSuccessful) {
    //     pushSuccessful = pushGoogleAdToList(heightAllocation, "medium-rectangle");
    //     if (pushSuccessful) { heightAllocation = heightAllocation + heightOfMediumRect;}
    // } else {
    //     pushSuccessful = pushGoogleAdToList(heightAllocation, "medium-rectangle");
    //     if (pushSuccessful) { heightAllocation = heightAllocation + heightOfMediumRect;}
    // }

    // /* For the larger blog post; lets run thru same logic we did above again to see if you can squeeze in an additional Ad  */
    // pushSuccessful = pushGoogleAdToList(heightAllocation, "medium-rectangle");
    // if (pushSuccessful) {
    //     heightAllocation = heightAllocation + heightOfMediumRect;
    // } else {
    //     pushSuccessful = pushGoogleAdToList(heightAllocation, "medium-rectangle");
    //     if (pushSuccessful) { heightAllocation = heightAllocation + heightOfMediumRect;}
    // }

    /* Return the GooglAd JSX element inside the Ads List Array  */
    return (
        <div>
            {adsList}
        </div>
    )
}


export default displayAdsList;