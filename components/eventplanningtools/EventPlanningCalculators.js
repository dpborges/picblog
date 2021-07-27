import React, { Fragment } from 'react';
// import EventPlanningCalculators from './pages/EventPlanningCalculators';  /* This component is the entry point to your application */
import EventPlanningToolsPage from './EventPlanningToolsPage';  /* This component is the entry point to your application */
import { ThemeProvider }       from 'styled-components';
import styled from 'styled-components';
import merge from 'lodash.merge';

// import { GlobalStyle } from '../../styles/GlobalStyles';  /* Removed Global Styles, so it does not impact existing css project Globals */
import { theme }     from '../../styles/theme';
import EPToolsWidgetContainer from './EPToolsWidgetContainer';  /* This component is the entry point to your application */

// IMPORTANT! Place GlobalStyle as a sibling to your application component; typically used when you have your own application.
export default function EventPlanningCalculators(props) {

   // If there is an options merge default theme with user defined theme, otherwise theThems is the default theme.
   let theTheme = props.options ? merge(theme,props.options) : theme;

   return (
     <Fragment>
       <ThemeProvider theme={theTheme} >
         <EPToolsWidgetContainer>
            <EventPlanningToolsPage />
         </EPToolsWidgetContainer>
       </ThemeProvider>
     </Fragment>
   );
}
   
    
// const Header1 = styled.h1`
//    color: ${props => props.theme.color.text};
//    font-size: ${props => props.theme.fontSize.default};
//    ${props => props.theme.fontFamily.secondary};
// `;


// <EventPlanningToolsPage />
    // <GlobalStyle />   /* removed  