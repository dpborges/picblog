import React, { Fragment } from  'react';
import { ExpansionPanel } from '../../../components/surfaces/ExpansionPanel';
import styled from 'styled-components';
import DrinkInputForm from './DrinkInputForm';
import getAppConfigParm  from '../../../config/AppConfig';
import VisibilityWrapper from '../../../components/common/VisibilityWrapper';
import { displayAd } from '../../../components/advertisements/helpers/displayAd';
import { setColor, setMedia } from '../../../styles/CommonStyles';
import { HorizRule } from '../../../components/decorators/HorizRule';

/**
 * TODOS
 * 1. (DONE) Render form  GuestListCalculatorForm that uses Formik with react native elements
 * 2. (DONE) Once form is rendered, see if I can create a numeric input component from React Native Elements Text field
 *    and yup so I can reuse as a numeric input going forward.
 * 3. Once step 1 and 2 are completed, pass down a callback to the form that gets passed the from data when the form is 
 *    successfully submitted
 */

/**
 * The GuestListCalculator makes use of the ExpansionPanel to be able to collapse and expand 
 * the panel to show the content. The content you would like to display must be child of the
 * Expansion panel component.
 */
const DrinkCalculator = (props) => {

  let showAd =  getAppConfigParm("showAd");

  // const [panel1Closed, setPanel1Closed] = useState(true);  /* this is Guest List Panel */
  // const onClickHandlerForPanel1 = () => {setPanel1Closed(prevPanel1Closed => !prevPanel1Closed)}

  // Enter the number of guests and the number of hours for the event. If serving one type of 
  // drink (eg. wine), you can use the estimate provided. If serving more than 1 type of drink 
  // (eg. beer alcohol, and wine), you may need to lower the estimates, according to guest preferences. 
  // If happen you know your guests, you can enter the number of wine drinkers for example, instead of 
  // entering total guests, and use this for your wine estimate. Do the same for the alcohol 
  // and beer drinkers. This will give you the best results.


  return (
    <Fragment>
      <ExpansionPanel text="Standard Drink Calculator"  
          closed={props.closed} 
          onClickHandler={props.onClickHandler} 
          mt="2rem"
          expandedHeight="45em"
      >
      <div style={{display: 'flex', justifyContent: 'center'}}>
        <VisibilityWrapper show={showAd} contentType="advertisement" >
            {displayAd("mobile-leader-board", "mobile", {marginTop: '.5em', marginBottom: '-.4em'})}
            {displayAd("in-feed-horizontal", "tablet", {marginBottom: '-.2em'} )}
        </VisibilityWrapper>
      </div>
      <Text>
        <Guidance>
          For drink estimates, enter number of guests and number of hours for the event, then view results below.
          Estimated quantity for each drink type is based on total number of guests provided. If serving one type of drink, the estimate
          should cover all your guests. 
          If serving more than one type of drink (eg. beer, alcohol, wine), consider lowering estimates
          based on guest preferences. For example, if there are few beer drinkers, consider  
          reducing the beer estimate accordingly. 
        </Guidance>
      </Text>
      <HorizRule color={setColor.lightgrey} pctWidth="100%" thickness="1px" mt="1rem"  />
      <DrinkInputForm name="localguests" placeholder="Num local guests" label="number of local guests" 
          inputContainerStyle={{textAlign: 'right'}} numGuests={props.numGuests}
      />
    </ExpansionPanel>
    </Fragment>
  )
}

export default DrinkCalculator;

// const SectionHeader = styled.h2`
//   color: ${setColor.black};
//   padding-left: 1rem;
//   padding-top: 1rem;
// `;

const Text = styled.div`
  font-size: ${props => props.theme.fontSize.default};
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

