import React from 'react';
import styled, { css } from 'styled-components';
import { setMedia } from '../../../styles/CommonStyles';

// Return column heading
function ColumnHeading(props) {

  let col1Text = props.c1text ? props.c1text : "Type of Food";

  return (
    <ColumnHeadingsContainer>
      <Heading style={{textAlign: 'left'}}>{col1Text}</Heading>
      <Heading style={{textAlign: 'left'}}>Quantity</Heading>
      <div>&nbsp;</div>
      <Heading style={{textAlign: 'left'}}>Unit of Measure </Heading>
    </ColumnHeadingsContainer>
  )
}

export default ColumnHeading


// Styled Components
const ColumnHeadingsContainer = styled.div`
  font-size: ${props => props.theme.fontSize.default};
  display: grid;
  grid-template-columns: 40% 5em 30% 20%;
  margin-left: .5em;

  @media only screen and (max-width: ${setMedia.tabletMax}) {
    grid-template-columns: 40% 5em 7% 34%;
    width: 95%;
    margin: 0;
    margin-left: .2em;
  }
`;

const Heading = styled.div`
   color: ${({ theme }) => theme.color.primary};
   font-size: 1em;
   font-weight: ${({ theme }) => theme.fontWeight.bold};
   margin: .2em 0;
   width: 100%;
   
   @media only screen and (max-width: ${setMedia.tabletMax}) {
    font-size: .9em;
    ${props => props.ta && css`text-align: ${props.ta};` };
    line-height: 1em;
  }

`;
