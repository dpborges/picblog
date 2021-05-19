import React from 'react';
import VisibilityWrapper from '../../../common/VisibilityWrapper';
import { displayAd } from '../../../common/ad/helpers/displayAd';
import { faTableTennis } from '@fortawesome/free-solid-svg-icons';


/* The showAd is a boolean which allows you to enable or disable ads */
export default function MobileAd({showAd , adStyle={}}) {

  return (
    showAd && (
      <div style={{display: 'flex', justifyContent: 'center'}}>
          <VisibilityWrapper show={showAd} contentType="advertisement" >
              {displayAd("mobile-leader-board", "mobile", adStyle.forMobile)}
              {displayAd("in-feed-horizontal", "tablet", adStyle.forTablet )}
          </VisibilityWrapper>
      </div>
    )
  )
}
