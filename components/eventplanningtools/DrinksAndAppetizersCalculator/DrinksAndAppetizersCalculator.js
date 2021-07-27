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
 * TODOS
 * 1. (DONE) Render form  GuestListCalculatorForm that uses Formik with react native elements
 * 2. (DONE) Once form is rendered, see if I can create a numeric input component from React Native Elements Text field
 *    and yup so I can reuse as a numeric input going forward.
 * 3. Once step 1 and 2 are completed, pass down a callback to the form that gets passed the form data when the form is 
 *    successfully submitted
 */

/**
 * The GuestListCalculator makes use of the ExpansionPanel to be able to collapse and expand 
 * the panel to show the content. The content you would like to display must be child of the
 * Expansion panel component.
 */
const DrinksAndAppetizersCalculator = (props) => {

  let showAd =  getAppConfigParm("showAd");

  return (
    <Fragment>
      <ExpansionPanel text="Drinks and Appetizers Calculator" closed={props.closed} 
          onClickHandler={props.onClickHandler}  
          mt="3rem" labelMediaStyle={{marginTop: "-2px"}}
          expandedHeight="72em"
      >
        <div style={{display: 'flex', justifyContent: 'center'}}>
            <VisibilityWrapper show={showAd} contentType="advertisement" >
              {displayAd("mobile-leader-board", "mobile", {marginTop: '.5em', marginBottom: '-.3em'})}
              {displayAd("in-feed-horizontal", "tablet", {marginBottom: '-.2em'} )}
          </VisibilityWrapper>
        </div>
        <Text>
          <Guidance>
            If you are hosting a drink-and-appetizer-only event, then this feature is perfect for you. 
            You can enter the number of guests and the number of hours the event will last. 
            Our calculator will then provide estimates for appetizers and drinks, with a range of options 
            depending on the type of event and your guests' preferences. 
            In addition to your basic appetizers (eg shrimp cocktail, poppers, 
            kabobs, meatballs, etc), we listed other sides you may consider.
            Keep in mind that the more things you plan to serve, the less you'll need of each item. 
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

export default DrinksAndAppetizersCalculator;

const Text = styled.div`
  margin-top: 1em;
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

