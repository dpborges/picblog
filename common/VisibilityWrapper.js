import PropTypes from 'prop-types';
import React from 'react'

const TRACE = true;

/**
   This component serves as a wrapper that lets you set a flag to choose whether you want to render() the 
   underlying child component or not. 
   The contentType prop lets you use the Visibility wrapper for different types of content(children). 
   For example, say user has premium plan. In that case you want to suppress Advertisements and allow them to view premium content.
        You would wrap advertisement with this component and pass following props: show = false and contentType = "advertisement",
        You would also wrap premium content with this compoment and pass props: show = true and contentType = "premium"

   Note1: If you provide no props, default behavior is show = true for 'any' content type
        If you provide a contentType, oneOf validation prop will check if it is a valid contentType. If so, the component 
        will acknowledge the show prop that was passed in. If not valid, it will always default to show = true.
*/

/* All null implies */
export const VisibilityWrapper = ({ show, contentType, children }) =>  {
    //TRACE && console.log(">> VisibilityWrapper")
    //TRACE && console.log(`  input show: ${show}`)
    //TRACE && console.log(`  contentType: ${contentType}`)

    let showContent = false
    if (contentType === "any"  && show) {
        showContent = true;
    } else if (contentType === "any"  && show) {
        showContent = true;
    } else if (contentType === "premium" && show ) {
        showContent = true;
    } else { showContent = show}

    //TRACE && console.log(`  (msg) below is show after decision logic`)
    //TRACE && console.log(`  var showContent: ${showContent}`)

    return (
        showContent && (
            <div>
                {children}
            </div>
        )
    )
}   

export default VisibilityWrapper;

VisibilityWrapper.propTypes = {
    show:           PropTypes.bool,
    contentType:    PropTypes.oneOf(['any', 'advertisement', 'premium'])
}

VisibilityWrapper.defaultProps = {
    show: true,
    contentType: 'any'
}