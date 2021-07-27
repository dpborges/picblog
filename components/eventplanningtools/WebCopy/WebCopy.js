import React, { Fragment } from  'react';
import styled, { ThemeProvider }    from 'styled-components';
import { theme } from '../../../styles/theme';
import Page from '../layout/Page';
import getAppConfigParm  from '../../../config/AppConfig';
import { setColor, setMedia } from '../../../styles/CommonStyles';

let content = {};

content["pageTitle"] = `Event Planning Tools | Plan Your Event Smartly | Pitch In Club`;

content["metaDescription"] = `With our event planning tools, you can easily estimate the
      number of invited guests that will attend your event, as well as esimate the required amounts 
      of food and beverages.`;

content["mainTitle"] = `Event Planning Made Easy`;   

content["mainPara1"] = `Events come in all shapes and sizes. From watch parties at home to 
       large outdoor events with dozens or hundreds of guests. A lot goes into planning the event, 
       including providing sufficient food and beverages for all of the guests. Without smart planning
       in advance, it's easy to end up with either not enough food or drink for your guests or far too much.`; 

content["mainPara2"] = `Getting an estimated guest attendance is your first step when planning an event.
      With the Pitch In Club event planning tools, you can easily estimate the number of invited  
      guests that will attend your event.`;

content["mainPara3a"] = `With our event planning tools, you can estimate how much 
       food and drinks you'll need to ensure everyone is well-catered for. What's more, you 
       can easily tie these tools in with the `;
content["mainPara3b"] = ` allowing guests to offer a helping hand via the app's contribution list.`;


content["mainPara4"] = `So take the guesswork out of planning  and check out our smart event planning 
       tools listed below.  `

/**
 * This component was use to provide web copy to the Event Planning Tools Page 
 */
const WebCopy = (props) => {

  let { display } = props;
  let siteUrl = getAppConfigParm("siteUrl");
  let contribListUrl = `${siteUrl}/resources/contribution-list`

  // Event Planner use This count can in turn be used for food and drink estimates. 
  return (
    <ThemeProvider theme={theme}>
      <Page>
        <TextSection>
          { display === "mainTitle" && <MainTitle>{content["mainTitle"]}</MainTitle> }
          { display === "mainPara1" && <Text>{content["mainPara1"]}</Text> }
          { display === "mainPara2" && <Text>{content["mainPara2"]}</Text> }
          { display === "mainPara3" && 
          <Text>
            {content["mainPara3a"]}
            <BlogLink href={contribListUrl}> Pitch In Club Contribution List Feature </BlogLink> 
            {content["mainPara3b"]}
          </Text> 
          }
          { display === "mainPara4" && <Text>{content["mainPara4"]}</Text> }
        </TextSection>
      </Page>
    </ThemeProvider>
  )
}

export default WebCopy;

const MainTitle = styled.h2`
  color: ${setColor.black} !important;
  margin: -1em 0em;
  text-align: center;

  @media only screen and (max-width: ${setMedia.tabletMax}) {
    font-size: ${props => props.theme.fontSize.small};
  }
`;

const Text = styled.div`
  color: ${setColor.black} !important;
  font-size: 1.2em;
  padding: 0em .7em;
  margin-bottom: -.75em;
  line-height: 1.4em;

  @media only screen and (max-width: ${setMedia.tabletMax}) {
    font-size: ${props => props.theme.fontSize.xsmall};
    line-height: 1.4em;
    margin-bottom: .2em;
    padding-left: 1em;
    padding-right: 1em;
  }
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

const TextSection = styled.div`
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
