import React from 'react';
import VisibilityWrapper from '../../common/VisibilityWrapper';
// import { displayAd } from '../../common/ad/helpers/displayAd';
import { displayAd } from '../advertisements/helpers/displayAd';
// import { faTableTennis } from '@fortawesome/free-solid-svg-icons';

// *****************************************************************************
// Desktop displays a square Ad for on the desktop.
// The showAd is a boolean which allows you to enable or disable ads 
// *****************************************************************************
export default function DesktopAd({
    showAd, adStyle={}, adType={ forDesktop: "medium-rectangle" } 
  }) 
  {
  return (
    showAd && (
      <div style={{display: 'flex', justifyContent: 'center'}}>
        <VisibilityWrapper show={showAd} contentType="advertisement" >
          {displayAd(adType.forDesktop, "desktop", adStyle.forDesktop)}
        </VisibilityWrapper>
      </div>
    )
  )
}