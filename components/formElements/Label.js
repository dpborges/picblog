import React from 'react';
import PropTypes from 'prop-types'
import styled from 'styled-components';
import { setMedia, setWidth, setFontSize, setHeight } from '../../styles/CommonStyles';
// ***********************************************************************************
// Label component 
// ***********************************************************************************
/**
 * This componenent can be used as a standalone label or a label that is associated to
 * an input element on a form. The Label component has an open tag and close tag with 
 * the content in between (as per html spec), hence a label prop is not required. The
 * label text is passed as a children prop instead.
 * 
 * Note: To set  properties in the media query, prefix property name with media (eg. )
 * and pass in with your containerStyle or your labelStyle.
 * 
 * Note, if using with a form, there are two ways to associate a Label with the input 
 * element on a form:
 *   1) Set the id value inside the <input> element to match the htmlFor prop value on 
 *      the Label component.  (  Input id =  Label htmlFor )
 *   2) The second method is to place the input element inside the Label tag as follows:
 *      <Label>
 *           <Input>
 *      </Label>
 */
export const Label = (props) => {

  // Apply any style overrides caller may have provided via props
  const containerStyle      = props.containerStyle ? props.containerStyle : {};
  const labelStyle          = props.labelStyle ? props.labelStyle : {};

  return (
    <View containerStyle={containerStyle}>
      <StyledLabel labelStyle={labelStyle}  {...props} >

        {props.children} 
      </StyledLabel>
    </View>
  )
}

// ***********************************************************************************
// PropTypes and deafault values
// ***********************************************************************************
Label.propTypes = {
  containerStyle:       PropTypes.object,   
  labelStyle:           PropTypes.object,
  label:                PropTypes.string,
  htmlFor:              PropTypes.string,
};

// ***********************************************************************************
// Styled Container and Sub-components
// ***********************************************************************************
/**
 * Style for View element which corresponds to the containerStyle prop and sets width 
 * of the element.
 */
const View = styled.div`
  font-size: ${props => props.theme.fontSize.default};
`;

/**
 * Style for label; prop used to override default style is labelStyle
 * Design pattern: font-size mandatory, with default if value not specified
 *                  mq.width is optional; if user specifies it, use it, otherwise don't specify it and width will default to content width
 */
const StyledLabel = styled.label`
  color:${props => props.theme.color.text};
  ${props => props.theme.fontFamily.secondary};
  font-size: ${props => props.labelStyle.fontSize ? props.labelStyle.fontSize : props.theme.fontSize.xsmall };
  font-weight: ${({ theme }) => theme.fontWeight.bolder};
  height: 1.6em;
  padding-right: .25em;

  @media only screen and (max-width: ${setMedia.tabletMax}) {
    font-size: ${props => props.labelStyle.mq.fontSize ? props.labelStyle.mq.fontSize : props.theme.fontSize.xsmall };
    ${props => props.labelStyle.mq.height && setHeight(props.labelStyle.mq.height)};
    padding-top: 10px;
    width: 3em;
  }

`;

// ${props => props.containerStyle.mq.width && setMediaWidth(props.containerStyle.mq.width)};

// ${props => props.labelStyle.mq.width && setMediaWidth(props.labelStyle.mq.width)};
// font-size: ${props => props.labelStyle.mq.fontSize ? props.labelStyle.mq.fontSize : props.theme.fontSize.xsmall };