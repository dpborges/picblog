import React, { Fragment } from  'react';
// import { ExpansionPanel } from '../../../../components/surfaces/ExpansionPanel';
import { ExpansionPanel } from '../../../components/surfaces/ExpansionPanel';
import styled from 'styled-components';
import GuestInputForm from './GuestInputForm';
import getAppConfigParm  from '../../../config/AppConfig';
import VisibilityWrapper from '../../../components/common/VisibilityWrapper';
import { displayAd } from '../../../components/advertisements/helpers/displayAd';
import { setColor, setMedia } from '../../../styles/CommonStyles';
import { HorizRule } from '../../../components/decorators/HorizRule';

/**
 * The GuestListCalculator makes use of the ExpansionPanel to be able to collapse and expand 
 * the panel to show the content. The content you display must be child of the Expansion panel component.
 */
const GuestListCalculator = (props) => {

  let showAd =  getAppConfigParm("showAd");

  // Event Planner use This count can in turn be used for food and drink estimates. 
  return (
    <Fragment>
      <ExpansionPanel text="Guest List Calculator"  
          closed={props.closed} 
          onClickHandler={props.onClickHandler} mt="3em"
          expandedHeight="42em"
      >
      <div style={{display: 'flex', justifyContent: 'center'}}>
        <VisibilityWrapper show={showAd} contentType="advertisement" >
            {displayAd("mobile-leader-board", "mobile", {marginTop: '.5em', marginBottom: '-.3em'})}
            {displayAd("in-feed-horizontal", "tablet", {marginBottom: '-.2em'} )}
        </VisibilityWrapper>
      </div>
      <Text>
        <Guidance>
          This tool estimates guest attendance based on whether invitees are local, out of town, or out of state guests. 
          The count can be used as part of your event action plan for estimating food and drinks. If you need to 
          track exactly who is attending, consider using a <BlogLink href="https://pitchinclub.com"> free app </BlogLink> 
          that has an event rsvp tracker.
        </Guidance>
      </Text>
      <HorizRule color={setColor.lightgrey} pctWidth="100%" thickness="1px" mt="1em"  />
      <GuestInputForm name="localguests" placeholder="Num local guests" label="number of local guests" 
          inputContainerStyle={{textAlign: 'right'}} formCallBack={props.formCallBack}
      />
      </ExpansionPanel>
    </Fragment>
  )
}

export default GuestListCalculator;

// That was used as <SectionHeader>some text</SectionHeader> which i decided to emove
// const SectionHeader = styled.h2`
//   color: ${setColor.black};
//   padding-left: 1em;
//   padding-top: 1em;

//   ${mediaQuery.lessThan("tablet")`
//       font-size: ${props => props.theme.fontSize.small};
//   `}
// `;

const Text = styled.div`
  font-size: ${props => props.theme.fontSize.default};
  margin-top: .5em;
`;

const Guidance = styled.p`
  color: ${setColor.black} !important;
  font-size: 1em;
  padding: .5em;
  line-height: 1.4em;

  @media only screen and (max-width: ${setMedia.tabletMax}) {
    font-size: ${props => props.theme.fontSize.xsmall};
    line-height: 1.2em;
    padding-left: 1em;
    padding-right: 1em;
  }
`;

const BlogLink = styled.a`
  text-decoration: none;
  color: ${props => props.theme.color.primary};
  font-weight: ${props => props.theme.fontWeight.normal};
  transition: color .5s;

  &:hover  {
    color: ${props => props.theme.color.lightblue};
  }

`;


