import React from 'react';
import VisibilityWrapper from '../../common/VisibilityWrapper';
// import { displayAd } from '../../common/ad/helpers/displayAd';
import { displayAd } from '../../components/advertisements/helpers/displayAd';
// import { faTableTennis } from '@fortawesome/free-solid-svg-icons';

// *****************************************************************************
// MobileAd displays a horizontal Ad for both mobile and tablet.
// The showAd is a boolean which allows you to enable or disable ads 
// *****************************************************************************
export default function MobileAd({
    showAd, adStyle={}, adType={ forMobile: "mobile-leader-board",  forTablet: "medium-rectangle" } 
  }) 
  {
  return (
    showAd && (
      <div style={{display: 'flex', justifyContent: 'center'}}>
        <VisibilityWrapper show={showAd} contentType="advertisement" >
          {displayAd(adType.forMobile, "mobile", adStyle.forMobile)}
          {displayAd(adType.forTablet, "tablet", adStyle.forTablet )}
        </VisibilityWrapper>
      </div>
    )
  )
}