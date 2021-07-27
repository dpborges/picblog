import React, { Fragment } from  'react';
import { ExpansionPanel } from '../../../components/surfaces/ExpansionPanel';
import styled from 'styled-components';
import { setMedia } from '../../../styles/CommonStyles'
import FoodInputForm from './FoodInputForm';
import getAppConfigParm  from '../../../config/AppConfig';
import VisibilityWrapper from '../../../common/VisibilityWrapper';
import { displayAd } from '../../../components/advertisements/helpers/displayAd';
import { setColor } from '../../../styles/CommonStyles';
import { HorizRule } from '../../../components/decorators/HorizRule';

/**
 * The GuestListCalculator makes use of the ExpansionPanel to be able to collapse and expand 
 * the panel to show the content. The content you would like to display must be child of the
 * Expansion panel component.
 */
const FoodServingCalculator = (props) => {

  let showAd =  getAppConfigParm("showAd");

  return (
    <Fragment>
      <ExpansionPanel text="Food Serving Calculator" closed={props.closed} 
         onClickHandler={props.onClickHandler}  
         mt="3rem"
         expandedHeight="80em"
      >
        <div style={{display: 'flex', justifyContent: 'center'}}>
          <VisibilityWrapper show={showAd} contentType="advertisement" >
              {displayAd("mobile-leader-board", "mobile", {marginTop: '.5em', marginBottom: '-.3em'})}
              {displayAd("in-feed-horizontal", "tablet", {marginBottom: '-.2em'} )}
          </VisibilityWrapper>
        </div>
        <Text>
          <Guidance>
            Enter the number of guests that will be attending the event, then view results below to 
            get some ideas of what to serve and quantities needed.
            Keep in mind that the more options you have, the less you'll need of each type of food. 
          </Guidance>
        </Text>
        <HorizRule color={setColor.lightgrey} pctWidth="100%" thickness="1px" mt="2rem"  />
        <FoodInputForm name="localguests" placeholder="Num local guests" label="number of local guests" 
            inputContainerStyle={{textAlign: 'right'}} numGuests={props.numGuests}
        />
      </ExpansionPanel>
    </Fragment>
  )
}

export default FoodServingCalculator;

const Text = styled.div`
   margin-top: 1rem;
`;

const Guidance = styled.p`
  color: ${setColor.black} !important;
  font-size: 1em;
  padding: .5em;
  line-height: 1.4em;

  @media only screen and (max-width: ${setMedia.tabletMax}) {
    font-size: ${props => props.theme.fontSize.xsmall};
    line-height: 1.2em;
    padding-left: .5em;
    padding-right: .5em;
  }

`;

