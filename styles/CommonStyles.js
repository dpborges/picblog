
// This the styles file. In this file you can define helper objects
// that allow you to define variations of properties, you can create
// helper functions that returns a string representing a  CSS style ,
// and you can import defaults, like default image.
// import defaultImg from './images/aboutBcg.jpeg';
import { css } from 'styled-components';


// The following are helper objects for color and font styles. These objects serve
// as an abstraction so if you need to change color or font across your project, 
// you would need to change it in one place.
export const setColor = {
    forPlaceholder: "#95A5A6",
    forLabel:       "#757C7C",
    black:      "#3f3838",
    blue:       "#2980B7",
    lightgreen: "#6BB950",
    greyshade3: "#95A5A6",
    lightgrey:  "#BDC3C7",
    mediumgrey: "#969faf",
    orange:     "#CC6600",
    orange2:    "#ad4b0a",
    white:      "#ffffff"
}

export const setFontWeight = {
  normal:      400,
  bold:        700,
  bolder:      900
}

/* Note for font family you can set up the font in variation in one, our they can be separate */
export const setZindexTo = {
  layer1: "z-index: 10",   /* layer above bottom layer (0)*/     
  layer2: "z-index: 20",   /* layer above layer1   */
  layer3: "z-index: 30",   /* layer above layer2   */
  layer4: "z-index: 40"    /* layer above layer3 (top most) */
}

// *****************************************************************************
// Helper Functions to set media type and properties on media queries 
// *****************************************************************************
export const setMedia = {
    mobileMin: "320px",
    mobileMax: "480px",
    tabletMin: "481px",
    tabletMax: "768px",
    laptopMin: "769px",
    laptopMax: "1024px",
    desktopMin: "1025px",
    desktopMax: "1200px",
    largeMin:   "1201x"
}

// *****************************************************************************
// Helper Functions used to set css properties on a conditional basis. When a
// property does not exist, but user decides to add it, you can use these helper
// functions to set it. If prop is passed via a <>styles oject, it will return the
// style, otherwise it returns an empty template string.
// *****************************************************************************


export const setWidth = (width) => {
    return width ? css`width: ${width}` : ``;
}

export const setMargin = (margin) => {
    return width ? css`margin: ${margin}` : ``;
}

export const setJustifyContent = (justifyContent) => {
    return justifyContent ? css`justify-content: ${justifyContent}` : ``;
}

export const setFontSize = (fontSize) => {
    return fontSize ? css`font-size: ${fontSize}` : ``;
}

export const setHeight = (height) => {
    return height ? css`height: ${height}` : ``;
}

export const setTextAlign = (position) => {
   return position ? css`text-align: ${position}` : ``;
}




/* Helper function used for as a reusable flex directives (Lesson 44) */
export const setFlex = ({x,y}={}) => {
    return `display:flex; align-items:${y}; justify-content:${x}`
}

/* Helper function used for set hero background (Lesson 44) */
// export const setBackground = ({img={defaultImg}, color="rgba(0,0,0,0)"}) => {
//     return `background: linear-gradient(${color}, ${color}),
//     url(${img}) center/cover fixed no-repeat;`
// }


/* function use to set letter spacing  */
export const setLetterSpacing = (number = 2) => {
    return `letter-spacing ${number}px;`
}

export const setBorder = ({width="2px", style="solid", color="black"}={}) => {
    return `border: ${width} ${style} ${color};`
}

/* Sizes used with media queries */
const sizes = {
    large:      1200,
    desktop:    992,
    tablet:     768,
    phone:      576     
}

// Iterate through the sizes and create a media template; The instructor 
// pulled this example from the stled-components sites.
export const media = Object.keys(sizes).reduce((acc, label) => {
    acc[label] = (...args) => css`
        @media (min-width: ${sizes[label] / 16}em) {
            ${css(...args)}
        }
   `

   return acc
}, {})

// retun a transtion property 
export const setTransition = ({
    property="all", 
    time="0.3s", 
    timing="ease-in-out"
}={}) => {
    return `transition: ${property} ${time} ${timing}`;
}

// Style used to set a shadow in my rooms card component.
// The shadow style was create from a site called cssmatic.com.
// Instructor went to the link https://www.cssmatic.com/box-shadow
// to crate a shadow, and then copied the css.
export const setShadow = {
    light: `box-shadow: 3px 3px 5px 0px rgba(0,0,0,0.75);`,
    dark: `box-shadow: 6px 6px 5px 0px rgba(0,0,0,0.75);`,
    darkest: `box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);`
}







// Font family

// Media Query Settings 

/* set up media query settings here */