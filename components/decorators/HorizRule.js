import React from 'react';
import PropTypes from 'prop-types';

export const HorizRule = (props) =>  {

    let color = props.color;
    let pctWidth =  props.pctWidth;
    let thickness = props.thickness;
    let mt = props.mt || '.2rem';
    let mb = props.mb || '.2rem';

    let hrStyle = {
        backgroundColor: color,
        border: color,
        width: pctWidth,
        height: thickness,
        marginBottom: mb,
        marginTop: mt
    }

    return (
        <hr style={hrStyle} />
    )
}

HorizRule.propTypes = {
    color:                PropTypes.string.isRequired,
    pctWidth:             PropTypes.string.isRequired,
    thickness:            PropTypes.string.isRequired,
    mt:                   PropTypes.string, 
    mb:                   PropTypes.string, 
}; 





