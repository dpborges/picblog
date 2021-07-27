import React from 'react';
import PropTypes from 'prop-types';
import styled, { css }  from 'styled-components';
import { setMedia, setWidth, setJustifyContent } from '../../styles/CommonStyles'

/* Button was created to emulate Button from React Native Elements. No width is defined. The width 
   of the button is predicated on length of title. If you need to set width, set it on the 
   containerStyle. If you decide to override a style in your media query (eg see View below), prefix the property name
   with mq in the style object passed in as prop. For example this is passed object { mq: {width: '3rem'} }
   Then use the corresponding set<property> helper function in CommonStyles to set the prop value
   in your styled component.

   Next up: implement the loading prop to disable button when making api calls.
    
*/
export const Button  = (props) => {

  // Apply any style overrides caller may have provided via props, otherwise set default
  const containerStyle   = props.containerStyle ? props.containerStyle : { };
  const buttonStyle      = props.buttonStyle ? props.buttonStyle : { };
  const titleStyle       = props.titleStyle ? props.titleStyle : {color: 'white'};
  const onclickHandler   = props.onclickHandler ? props.onclickHandler : () => "" ;

  /* If button is being used on a form(as a submit button), you don't need the onClickHandler. 
      If the onclickHandler prop is not specified, button will therefore be rendered without the 
      onClick handler and without the button type. */
  return  (
    <View containerStyle={containerStyle} >
      <StyledButton buttonStyle={buttonStyle} onclickHandler={onclickHandler} {...props}
      >
        <Text style={titleStyle}>{props.title}</Text>
      </StyledButton>
      
    </View>
  )
}

// ***********************************************************************************
// Props Definitions
// // ***********************************************************************************
Button.propTypes = {
    title:              PropTypes.string.isRequired, 
    titleStyle:         PropTypes.object, 
    containerStyle:     PropTypes.object,  
    inputContainerStyle:  PropTypes.object,  
    buttonStyle:        PropTypes.object, 
    onClickHandler:     PropTypes.func,
    loading:            PropTypes.bool
}

// ***********************************************************************************
// Styled Components
// ***********************************************************************************

/**
 * View is the Container Style which defines what is considered as the standard height and width. 
 * for the button. By default, there is no width defined, but can be passed via containerStyle. 
 * 
 * */ 
const View = styled.div`
  font-size: ${props => props.theme.fontSize.default};
  width: ${props => props.containerStyle.width};

  @media only screen and (max-width: ${setMedia.tabletMax}) {
    font-size: ${props => props.theme.fontSize.xsmall};
    ${props => props.containerStyle.mq.width && setWidth(props.containerStyle.mq.width)};
    ${props => props.containerStyle.mq.justifyContent && setJustifyContent(props.containerStyle.mq.justifyContent)};
  }
`;

const StyledButton = styled.button`
  color: ${props => props.theme.color.white};
  background-color: ${props => props.theme.color.btn1};
  border-width: 0px;
  border-color: ${props => props.theme.color.btn1};
  height: 2.5em;
  margin-top: 0em;
  margin-bottom: 0em;
  /* padding: 0 14px; */
  outline: none;
  transition: all 500ms;
  width: 100%;

  &:focus { outline: none; };

  &:hover {
    background-color: ${props => props.theme.color.btn1Dark};
    border-color: ${props => props.theme.color.btn1Dark};

    @media only screen and (max-width: ${setMedia.tabletMax}) {
      font-size: ${props => props.theme.fontSize.xsmall};
    }
    
  }
`;

const Text = styled.p`
  font-size: ${props => props.theme.fontSize.xsmall};

  @media only screen and (max-width: ${setMedia.tabletMax}) {
    font-size: ${props => props.theme.fontSize.xsmall};
  }

`;

    