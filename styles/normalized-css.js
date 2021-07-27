import React from 'react';
import styled, { css } from 'styled-components';


// ***************************************************************** 
// Normalized h1
// *****************************************************************
/**
 * From Normalize.css
 * Correct the font size and margin on "h1" elements within "section" and
 * "article" contexts in Chrome, Firefox, and Safari.
 */
export const H1 = styled.h1`
  font-size: 2em;
  margin: 0.67em 0;
`;

// *****************************************************************
// Normalized button
// *****************************************************************
export const Button = styled.button`
  /*  1. Change the font styles in all browsers. */
  /*  2. Remove the margin in Firefox and Safari. */
  font-family: inherit; /* 1 */
  font-size: 100%; /* 1 */
  line-height: 1.15; /* 1 */
  margin: 0; /* 2 */
  overflow: visible;

  /* Correct the inability to style clickable types in iOS and Safari. */
  [type="reset"],
  [type="button"],       
  [type="submit"] {
    -webkit-appearance: button;
  }

  /* Remove the inner border and padding in Firefox. */
   button::-moz-focus-inner,
    [type="button"]::-moz-focus-inner,
    [type="reset"]::-moz-focus-inner,
    [type="submit"]::-moz-focus-inner {
      border-style: none;
      padding: 0;
    }

  /* 1. Correct the inability to style clickable types in iOS and Safari. */
  /* 2. Change font properties to "inherit" in Safari.                    */
  ::-webkit-file-upload-button {
    -webkit-appearance: button; /* 1 */
    font: inherit; /* 2 */
  }

  /* Following styles were added in addtion to normalize css */
  button {
    cursor: pointer;
  }

  button:disabled {
    cursor: default;
  }

`;


// *****************************************************************
// Normalized input
// *****************************************************************

export const normalizeInput = (props) => {
  /*  1. Change the font styles in all browsers. */
  /*  2. Remove the margin in Firefox and Safari. */
  return css`
    font-family: inherit; 
    font-size: 100%; 
    line-height: 1.15;
    margin: 0;
    overflow: visible;
  `;
}




