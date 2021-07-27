import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import merge from 'lodash.merge';
import { setMedia, setFontSize  } from '../../styles/CommonStyles';
import { ArrowDownIcon } from '../../components/icons/styled/ArrowDownIcon'
import RotateXOnTrigger from '../animations/RotateXOnTrigger';
// import CollapsibleSectionv1 from '../../animations/CollapsibleSectionv1';
import ExpandableSection from '../animations/ExpandableSection';
import styles from './ExpansionPanelStyles';
/**
 * The expansion panel component provides the expansion bar and the open/close icon (up/down arrow). 
 * The parent component is responsible for managing the panel open/close state and is 
 * responsible for providing whatever expandible content they would like to display via the  
 * children prop. There are 3 props: 
 *    text   - label shown on the expansion bar 
 *    closed - a boolean indicating whether expansion panel is closed or not. default state is closed === true
 *    onClickHandler - callback to onClickHandler implemented on parent; Used to toggle expansion mode from closed to 
 *             not closed (open)
 */ 
export const ExpansionPanel = (props) => {
    let {closed}  = props;

    let stylesFor = props.styles ? merge(styles, props.styles): styles; 

    // Return  JSX
    return (
        <div>
          <PanelContainer mt={props.mt}>
              <ExpansionBar onClick={props.onClickHandler}>
                <ExpansionBarLabel labelStyle={stylesFor.label} >
                    {props.text}
                </ExpansionBarLabel>
                <RotateXOnTrigger trigger={closed}>
                    <ArrowDownIcon />
                </RotateXOnTrigger>
              </ExpansionBar>
          </PanelContainer>
          <ExpandableSection trigger={closed} expandedHeight={props.expandedHeight} inlineStyles={props.inlineStyles}>
            {props.children}
          </ExpandableSection>
        </div>
    )
}

const TestContainer = styled.div `
  ${props => props.labelStyle.fontSize ? setFontSize(props.labelStyle.fontSize) : setFontSize(props.theme.fontSize.medium)};
`;

// Prop Types
ExpansionPanel.propTypes = {
    onClickHandler: PropTypes.func,    /* the handler to call when user clicks on arrow icon */
    text:           PropTypes.string,  /* Text label  to display on the expansion bar */
    closed:         PropTypes.bool    /* indicating if panel closed or not */
};


// Style Components
const PanelContainer = styled.div `
  font-size: ${props => props.theme.fontSize.default};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: ${props => props.mt || "1em"};
`;

const ExpansionBar = styled.div `
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #dcdde1;
  border-radius: 5px 5px 0 0;
  height:  3.5em;
  padding: .6em;
  width: 100%;
  z-index: 10;

  @media only screen and (min-width: 320px) and (max-width: 450px) {
    height:  3.5em;
    width: 100%;
  }
`;

const ExpansionBarLabel = styled.p `
  color: ${props => props.theme.color.text};
  font-size: ${props => props.labelStyle.fontSize};
  font-weight: ${props => props.labelStyle.fontWeight ? props.labelStyle.fontWeight : 'bold'};
  padding-left: .7em;

  @media only screen and (max-width: ${setMedia.tabletMax}) {
    font-size: ${props => props.labelStyle.mq.fontSize ? props.labelStyle.mq.fontSize : props.theme.fontSize.small};
    ${props => props.labelStyle.mq.margin ? setMargin(props.labelStyle.mq.margin) : '0' };
    line-height: 1em;
  }
  
`;

const styleSettings = {

  labelStyle: { 
    fontSize: '1.5em', 
    fontWeight: 'bold',

    mq: {} 
  }
    
}

// font-size: ${props => props.labelStyle.fontSize ? props.labelStyle.fontSize : props.theme.fontSize.medium};
// font-size: ${props => props.labelStyle.mq.fontSize ? props.labelStyle.mq.fontSize : props.theme.fontSize.small};
