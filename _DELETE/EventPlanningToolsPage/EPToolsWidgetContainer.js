import React from  'react';
import styled from 'styled-components';
import { ThemeProvider }       from 'styled-components';
import { theme } from '../../styles/theme';


// Widget container serves as the top level container and is also used to do a CSS 
// reset for the particular Widget your wrapping in this container. Any top level 
// styles you think end-user is likely to change, should be defined in the theme.
// For font-size is driven by theme.

const EPToolsWidgetContainer = ({children}) => {

  return (
    <div id="pic-event-calculators">
      <WidgetContainer>
        {children}
      </WidgetContainer>
    </div>
  )
}

export default EPToolsWidgetContainer;

// Styles copied from normalize.css; with some additional styles added at the ended.
// I did not include font-size as I will using the default from the theme object for every component
const WidgetContainer = styled.div`
    box-sizing: border-box; 

    /**
    * 1. Correct the line height in all browsers.
    * 2. Prevent adjustments of font size after orientation changes in iOS.
    */
    line-height: 1.15;   /* 1 */
    -ms-text-size-adjust: 100%; /* 2 */
    -webkit-text-size-adjust: 100%; /* 2 */

    margin: 0;        /* remove the margin in all browsers */

    /**   DONE
    * Correct the font size and margin on "h1" elements within "section" and
    * "article" contexts in Chrome, Firefox, and Safari.
    */
    /* h1 {
      font-size: 2em;
      margin: 0.67em 0;
    } */
    /**
    * 1. Correct the inheritance and scaling of font size in all browsers.
    * 2. Correct the odd "em" font sizing in all browsers.
    */
    pre {
      font-family: monospace, monospace; /* 1 */
      font-size: 1em; /* 2 */
    }

    /**
    * Remove the gray background on active links in IE 10.
    */
    a {
      background-color: transparent;
    }

    hr {
      box-sizing: content-box; /* 1 */
      height: 0; /* 1 */
      overflow: visible; /* 2 */
    }

    pre {
      font-family: monospace, monospace; /* 1 */
      font-size: 1em; /* 2 */
    }

    /**
    * Add the correct font weight in Chrome, Edge, and Safari.
    */
    b,
    strong {
      font-weight: bolder;
    }

    /**
    * Add the correct font size in all browsers.
    */
    small {
      font-size: 80%;
    }
    /**
    * Remove the border on images inside links in IE 10.
    */
    img {
    border-style: none;
    }

    /**
    * 1. Change the font styles in all browsers.
    * 2. Remove the margin in Firefox and Safari.
    */
    button,
    input,
    optgroup,
    select,
    textarea {
      font-family: inherit; /* 1 */
      font-size: 100%; /* 1 */
      line-height: 1.15; /* 1 */
      margin: 0; /* 2 */
    }

    /**
    * Show the overflow in IE.
    * 1. Show the overflow in Edge.
    */
    button,
    input { /* 1 */
      overflow: visible;
    }

    /**
    * Correct the inability to style clickable types in iOS and Safari.
    */
    button,
    [type="button"],
    [type="reset"],
    [type="submit"] {
      -webkit-appearance: button;
    }

    /**
    * Remove the inner border and padding in Firefox.
    */
    button::-moz-focus-inner,
    [type="button"]::-moz-focus-inner,
    [type="reset"]::-moz-focus-inner,
    [type="submit"]::-moz-focus-inner {
      border-style: none;
      padding: 0;
    }

    /**
    * Correct the padding in Firefox.
    */
    fieldset {
      padding: 0.35em 0.75em 0.625em;
    }

    /**
    * Remove the default vertical scrollbar in IE 10+.
    */
    textarea {
      overflow: auto;
    }


    /**
    * 1. Add the correct box sizing in IE 10.
    * 2. Remove the padding in IE 10.
    */
    [type="checkbox"],
    [type="radio"] {
      box-sizing: border-box; /* 1 */
      padding: 0; /* 2 */
    }

    /**
    * Correct the cursor style of increment and decrement buttons in Chrome.
    */
    [type="number"]::-webkit-inner-spin-button,
    [type="number"]::-webkit-outer-spin-button {
      height: auto;
    }
    /**
    * 1. Correct the odd appearance in Chrome and Safari.
    * 2. Correct the outline style in Safari.
    */
    [type="search"] {
      -webkit-appearance: textfield; /* 1 */
      outline-offset: -2px; /* 2 */
    }
    /**
    * Remove the inner padding in Chrome and Safari on macOS.
    */
    [type="search"]::-webkit-search-decoration {
      -webkit-appearance: none;
    }

    /**
    * 1. Correct the inability to style clickable types in iOS and Safari.
    * 2. Change font properties to "inherit" in Safari.
    */
    ::-webkit-file-upload-button {
      -webkit-appearance: button; /* 1 */
      font: inherit; /* 2 */
    }

    /**
    * Add the correct display in IE 10.
    */
    [hidden] {
      display: none;
    }

    /**
    * Following styles were added in addtion to normalize css 
    */
    button {
      cursor: pointer;
    }

    button:disabled {
      cursor: default;
    }
`;




