import React from 'react';
import PropTypes from 'prop-types'
import styled from 'styled-components';
import merge from 'lodash.merge';
import { NormalizedInput, normalizeInput } from '../../styles/normalized-css';
import { setColor, setFontWeight, setMedia, setWidth } from '../../styles/CommonStyles';
import styles  from './InputStyles';
import { Label } from './Label';

// ***********************************************************************************
// Input component 
// ***********************************************************************************
/**
 * This input component tries to emulate Input component from "react native 
 *   elements" so as to provide consistency if and when I use react native.  Note that
 *   this input component is used in conjuction with the Label component. The Label
 *   component expects the label text via the children prop, hence this Input component takes
 *   a label prop that gets passed to the Label prop as a child text node (props.label). If there
 *   is no Label prop, the <Label> component will not be rendered.
 *   
 *  
 *   Todos 
 *    - Apply above pattern to inputContainerStyle
 */
export const Input = (props) => {

  let stylesFor = props.styles ? merge(styles, props.styles): styles; 

  return (
    <View containerStyle={stylesFor.container}>
      {props.label && <Label>{props.label}</Label>}
      <StyledInput type="text"  inputStyle={stylesFor.input} {...props} />
      {props.error && <Error errorStyle={stylesFor.error}>{props.error}</Error>}
    </View>
  )
}

// ***********************************************************************************
// Props Definitions
// ***********************************************************************************
/**
 * Prop definitions and prop defaults - there are 4 props that allow you to override existing Styled Component properties.
 * The outline prop defaults to true which shows all 4 sides of border on input field. When set to false it will only
 * show bottom border.
 */
Input.propTypes = {
  styles:           PropTypes.object,
  label:            PropTypes.string,
  outline:          PropTypes.bool,   

};

Input.defaultProps = {
  outline: true,  // defaults to true which shows all 4 sides of border on input field
  label: ""
};



// ***********************************************************************************
// Styled Components
// ***********************************************************************************
/**
 * Style for View element which corresponds to the containerStyle prop 
 * This styles the container around the label, input element, and the error message.
 * Height should account for all these 3 elements, especially if you espect a multi-line error message.
 */
const View = styled.div`
  font-size: ${props => props.theme.fontSize.default};
  height: ${props => props.containerStyle.height};
  width: ${props => props.containerStyle.width && props.containerStyle.width};

  @media only screen and (max-width: ${setMedia.tabletMax}) {
    width: ${props => props.containerStyle.mq.width };
  }
`;


/**
 * Style for Input element / the correspondig prop name is inputContainerElement
 * Provides style for the inputs placeholder, input text, and border. The outline prop is also 
 * evaluated below to determine whether to show full border or just border bottom.
 */
const StyledInput = styled.input` 
    ${normalizeInput()};

    ${props => props.outline && `
      border: 1px solid ${setColor.mediumgrey}; `
    };

    ${props => !props.outline && `
      border: 1px solid ${setColor.mediumgrey}; 
      border-right: transparent; 
      border-left: transparent;
      border-top: transparent;`
    };

    color: ${setColor.black};
    height: ${props => props.inputStyle.height};
    width: 100%;
    font-size: 1em;
    font-weight: ${setFontWeight.normal};
    margin: 0;
    padding: 0 4px;
    text-align: ${props => props.inputStyle.textAlign};;
    outline: none;

    ::placeholder {
      color: ${setColor.lightgrey};
      font-size: 1em;
      font-weight: ${setFontWeight.normal};
      padding: 0 4px;

      @media only screen and (max-width: ${setMedia.tabletMax}) {
        font-size: 1em;
      }

    }

    &:focus { outline: none; };
    &:hover { outline: none; };

    @media only screen and (max-width: ${setMedia.tabletMax}) {
    }
`;

/**
 * Style for Error component; style used to override default errorStyle
 */
const Error = styled.p`
   color: red;
   font-size: .9em;
   height: 1em;
   margin-top: 2px;

   @media only screen and (max-width: ${setMedia.tabletMax}) {
      font-size: .8em;
    }
`;



{/*
    <View containerStyle={stylesFor.container}>
      {props.label && <Label>{props.label}</Label >}
      <StyledInput type="text" inputStyle={stylesFor.input} {...props} />
      <Error errorStyle={stylesFor.error}>{props.error}</Error>
    </View>
*/}