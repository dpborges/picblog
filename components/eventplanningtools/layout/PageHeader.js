import React from  'react';
import PropTypes from 'prop-types'
import styled from 'styled-components';
import { setColor, setMedia }  from '../../../styles/CommonStyles';
import { H1 }  from '../../../styles/normalized-css';
// import { theme } from '../Styles/theme';

const SHOWOUTLINE = false;  /* for debugging purposes */
// const DESKTOP  = "1170px";   /* Same value as what is defined in MediaSettings.js */
// ${SHOWOUTLINE && `border: 2px solid green;`} 

// PageHeader renders the header text as an h1 tag. You can optionally add a background
// and define the width, to expand background color as desired.
export default function PageHeader(props) {

    return (
      <HeaderContainer bgcolor={({theme}) => theme.color.primary }>
        <HeaderText fgcolor={({ theme }) => theme.color.white} > 
          Event Planning Calculators
        </HeaderText>
      </HeaderContainer>
    )
}


const HeaderContainer = styled.div`
    font-size: ${props => props.theme.fontSize.default};
    background-color: ${props => props.bgcolor ? props.bgcolor : props.theme.color.primary};
    display: flex;
    align-items: center;
    vertical-align: center;
    height: 4em;
    width: 100%;

    @media only screen and (max-width: ${setMedia.tabletMax}) {
      padding: 0;
    }
`;

const HeaderText = styled(H1)`
    color: ${props => props.fgcolor ? props.fgcolor : setColor.white};
    font-weight: bold;
    letter-spacing: 1px;
    padding-left: .5em;
    word-spacing: 2px;

    @media only screen and (max-width: ${setMedia.tabletMax}) {
      font-size: 1.4em;
      margin-top: .5em;
      padding: .5em 0 .5em .5em;
      text-align: center;
    }
`;

PageHeader.propTypes = {
  bgcolor: PropTypes.string,
  fgcolor: PropTypes.string
};

PageHeader.defaultProps = {
  bgcolor: "white",
  fgcolor: "black"
}
