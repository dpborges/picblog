import { css } from 'styled-components';

// This is the file used by the Theme provider in our GlobalStyles.js
export const theme = {
    color: {
        /* App theme colors */
        primary:    "#2980B7",   // blue
        secondary:  "#95A5A6",   // grey
        text:       "#3f3838",   // default is black
        textAlt:    "#7f8c8d",   // dark grey that is also used for text
        placeHolder: "#BDC3C7",  // light grey color used as placeholder for input fields
        btn1:       "#CC6600",   // primary button - orange
        btn1Dark:   "#ad4b0a",   // primary button alternate - dark orange
        btn2:       "#388e3c",   // secondary button - green
        btn2Dark:   "#2e7d32",   // secondary button alternate - dark green
        btn3:       "#388e3c",   // secondary button - green
        btn3Dark:   "#2e7d32",   // secondary button alternate - dark green
        surface:    "#f2f4f4",   // grey used for background surfaces (eg. forms , separate page sections)
        surfaceAlt: "#e1e9f0",   // light blue used for background surfaces (eg. used to alternate surface colors)
        lightgreen: "#6BB950",
        lightblue:  "#6BB9F0",
        white:      "#ffffff"
    },
    fontFamily: {
        primary:   css`font-family: 'Lato', 'Avenir', 'Adobe Heiti Std', 'Segoe UI', 'Trebuchet MS', 'sans-serif';`,
        secondary: css`font-family: 'Roboto', 'Lato', 'Arial', 'sans-serif';`,
        tertiary:  css`font-family: 'Montserrat', 'Lato', 'Arial', 'sans-serif';`
    },
    fontSize: {
        default:    "16px",
        xsmall:     "1em",  
        small:      "1.4em",
        medium:     "1.8em",
        large:      "2.2em",
        xlarge:     "2.4em",
        xxlarge:    "2.6em" 
    },
    fontWeight: {
        normal:      400,
        bold:        700,
        bolder:      900
    } 
};



