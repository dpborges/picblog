import React from 'react';
import VisibilityWrapper from '../../common/VisibilityWrapper';
import { displayAd } from '../../components/advertisements/helpers/displayAd';
import displayAdsOnRight from '../../components/advertisements/helpers/displayAdsOnRight';
// import displayAdsOnRight from '../../common/ad/helpers/displayAdsOnRight';

import styles from '../../styles/blogdetail.module.scss';

// *************************************************************************
// Displays a list of Ads to be displayed on the right side of a block post.
// Inputs: showAd - flag used to enable / disable Ads.
//         adList - an array of list sizes (eg ["small", "medium", "single-medium-rectangle"] )
// *************************************************************************

export default function RightSideAds({showAd, adList}) {

  return (
    showAd && (
      <div className={styles.rightSideAds} >
        <VisibilityWrapper show={showAd} contentType="advertisement">
          {
              adList.map((listSize) => {
                switch(listSize) {
                  case "small":
                    return displayAdsOnRight("small");  
                    break;
                  case "medium":
                    return displayAdsOnRight("medium");  
                    break;
                  case "large":
                    return displayAdsOnRight("large");  
                    break;
                  case "xlarge":
                    return displayAdsOnRight("xlarge");  
                    break;
                  case "single-med-rect":
                    return displayAdsOnRight("single-med-rect");
                    break;
                  case "single-skyscraper":
                    return displayAd("skyscraper", "desktop", {marginLeft: '2.4rem', marginBottom: '3rem'});
                    break;
                  default:
                    return displayAdsOnRight("small"); 
                  }
               })
            }
        </VisibilityWrapper> 
     </div>
    )
  )
}
