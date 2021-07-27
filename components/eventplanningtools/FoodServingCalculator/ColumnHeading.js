import React from 'react';
import styled, { css } from 'styled-components';
import { setMedia } from '../../../styles/CommonStyles';


// Return column heading
function ColumnHeading(props) {

  return (
    <ColumnHeadingsContainer>
      <Heading style={{textAlign: 'left'}}>Type of Food</Heading>
      <Heading ta="center">Quantity</Heading>
      <div>&nbsp;</div>
      <Heading style={{textAlign: 'left'}} pr="2rem">Unit of Measure </Heading>
    </ColumnHeadingsContainer>
  )
}

export default ColumnHeading

const ColumnHeadingsContainer = styled.div`
  font-size: ${props => props.theme.fontSize.default};
  display: grid;
  grid-template-columns: 40% 5em 30% 20%;
  margin-left: .5em;

  @media only screen and (max-width: ${setMedia.tabletMax}) {
    grid-template-columns: 40% 5em 10% 34%;
    width: 95%;
    margin: 0;
    margin-left: .2em;
  }
`;


const Heading = styled.div`
   color: ${({ theme }) => theme.color.primary};
   font-size: 1em;
   font-weight: ${({ theme }) => theme.fontWeight.bold};
   margin: .2rem 0;
   text-align: left;
 
   @media only screen and (max-width: ${setMedia.tabletMax}) {
    font-size: .9em;
    ${props => props.ta && css`text-align: ${props.ta};` };
    margin: 0;
    padding: 0;
  }
`;



// const Heading = styled.div`
//    color: ${({ theme }) => theme.color.primary};
//    font-size: ${({ theme }) => theme.fontSize.small};
//    font-weight: ${({ theme }) => theme.fontWeight.bold};
//    margin: 1rem 0;
//    width: 20%;
//    ${props => props.ta && css`text-align: ${props.ta};` };
//    ${props => props.pr && css`padding-right: ${props.pr};` };
   
//    @media only screen and (max-width: ${setMedia.tabletMax}) {
//     font-size: ${({ theme }) => theme.fontSize.xsmall};
//     ${props => props.ta && css`text-align: ${props.ta};` };
//     line-height: 1.5rem;
//   }
// `;
