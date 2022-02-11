import React, {useState} from  'react';
import Page from '../components/Page';
import PageHeader from '../components/PageHeader';
import GuestListCalculator from './GuestListCalculator/GuestListCalculator';
import getAppConfigParm  from '../../config/AppConfig';
import VisibilityWrapper from '../../components/common/VisibilityWrapper';
import { displayAd } from '../../components/advertisements/helpers/displayAd';
import displayAdsOnRight from '../../components/advertisements/helpers/displayAdsOnRight';
import DrinkCalculator from './DrinkCalculator';
import FoodServingCalculator from './FoodServingCalculator';
import DrinksAndAppetizersCalculator from './DrinksAndAppetizersCalculator';
import WebCopy from '../EventPlanningToolsPage/WebCopy';

export default function EventPlanningToolsPage(props) {

  let showAd =  getAppConfigParm("showAd");

   let pageContainerStyle={overflowY: 'hidden'};

    // Helper function to manage the state of the expansion panels
    const setPanelCloseFlag = (panelNumber) => {
        if (panelNumber === 1) {
          let wasClosed  =  panel1Closed;  
          setPanel1Closed(prevPanel1Closed => !prevPanel1Closed) // toggle state 
          if (wasClosed) { closePanelsListed([2,3,4]);} /*if was closed and now being opened, close all other panels */
        }
        if (panelNumber === 2) {
            let wasClosed  =  panel2Closed;
            setPanel2Closed(prevPanel2Closed => !prevPanel2Closed); // toggle state 
            if (wasClosed) { closePanelsListed([1,3,4]); } /*if was closed and now being opened, close all other panels */
        }
        if (panelNumber === 3) {
          let wasClosed  =  panel3Closed;
          setPanel3Closed(prevPanel3Closed => !prevPanel3Closed) // toggle state 
          if (wasClosed) { closePanelsListed([1,2,4]); } /*if was closed and now being opened, close all other panels */
        }
        if (panelNumber === 4) {
          let wasClosed  =  panel4Closed;
          setPanel4Closed(prevPanel4Closed => !prevPanel4Closed); // toggle state 
          if (wasClosed) { closePanelsListed([1,2,3]);} /*if was closed and now being opened, close all other panels */
        }
    }
    // Helper function used to close panels other than one clicked on to open
    const closePanelsListed = (panelList) =>  {
        panelList.includes(1) && setPanel1Closed(true);
        panelList.includes(2) && setPanel2Closed(true);
        panelList.includes(3) && setPanel3Closed(true);
        panelList.includes(4) && setPanel4Closed(true);
    }

    // Guest List Calculator Panel
    const [panel1Closed, setPanel1Closed] = useState(true);  
    const onClickHandlerForPanel1 = () => {setPanelCloseFlag(1)}

    // Standard Drink Calculator Panel
    const [panel2Closed, setPanel2Closed] = useState(true);  
    const onClickHandlerForPanel2 = () => {setPanelCloseFlag(2)}

    // Food Servings Calculator Panel
    const [panel3Closed, setPanel3Closed] = useState(true);  
    const onClickHandlerForPanel3 = () => {setPanelCloseFlag(3)}

    // Drinks and Appetizers Calculator Panel
    const [panel4Closed, setPanel4Closed] = useState(true); 
    const onClickHandlerForPanel4 = () => {setPanelCloseFlag(4)}

    const [numGuests, setNumGuests] = useState(0);

    const guestInputFormCb = (numGuests) => {
      // console.log("Inside EventPlanningToolsPage / Callback ");
      // console.log("   numGuests ", numGuests);
      setNumGuests(numGuests);
    }

    // Helper used to show additional Ad on right side when user expands either one of the panels on the page.
    // Since panels vary in size, this function returns the numeric id of the panel that was opened so that you can
    // decide, based on panel size, to add one or more Ads on the right as needed.
    const isPanelOpened = () => {
       if (!panel1Closed) { return 1; }
       if (!panel2Closed) { return 2; }
       if (!panel3Closed) { return 3; }
       if (!panel4Closed) { return 4; }
       return 0;
    }

    return (
      <div>
     
      <WebCopy display="mainTitle" />
      <WebCopy display="mainPara1" />
      <WebCopy display="mainPara2" />
      <WebCopy display="mainPara3" />
      <WebCopy display="mainPara4" />
     
      <Page containerStyle={pageContainerStyle} >
        <div style={{display: 'flex',  flexDirection: 'row'}}>
          <div>
            <PageHeader/>
            <GuestListCalculator 
              formCallBack={guestInputFormCb} 
              onClickHandler={onClickHandlerForPanel1} 
              closed={panel1Closed}
            />
            <DrinkCalculator 
              numGuests={numGuests} 
              onClickHandler={onClickHandlerForPanel2} 
              closed={panel2Closed}
            />
            <FoodServingCalculator 
              numGuests={numGuests} 
              onClickHandler={onClickHandlerForPanel3} 
              closed={panel3Closed}
            />
            <DrinksAndAppetizersCalculator 
              numGuests={numGuests} 
              onClickHandler={onClickHandlerForPanel4} 
              closed={panel4Closed}
            />
          </div>
          <div >
            <VisibilityWrapper show={showAd} contentType="advertisement" >
            <div>
                <div>
                {displayAd("skyscraper", "desktop", {marginLeft: '2.5em'})}
                </div>
             </div>
            </VisibilityWrapper>  
            {isPanelOpened() > 0 && 
              <div style={{marginTop: '2em'}}>
                <VisibilityWrapper show={showAd} contentType="advertisement">
                  {displayAd("skyscraper", "desktop", {marginLeft: '2.5em'})}
                </VisibilityWrapper>  
              </div>
            }
            {isPanelOpened() > 2 && 
              <div style={{marginTop: '2em'}}>
                <VisibilityWrapper show={showAd} contentType="advertisement" >
                {displayAd("medium-rectangle", "desktop", {marginLeft: '2.5em'})}
                </VisibilityWrapper>
              </div>
            }
            {isPanelOpened() === 3 && 
              <div style={{marginTop: '2em'}}>
                <VisibilityWrapper show={showAd} contentType="advertisement" >
                {displayAd("medium-rectangle", "desktop", {marginLeft: '2.5em'})}
                </VisibilityWrapper>
              </div>
            }
          </div>
        </div>
     </Page>
     </div>
    )
}
