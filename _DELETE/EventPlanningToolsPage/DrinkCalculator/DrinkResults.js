import React from 'react';
import styled from 'styled-components';
import { setMedia, setColor } from '../../../styles/CommonStyles';
import { HorizRule } from '../../../components/decorators/HorizRule';
import calcDrinks from './calcDrinks';
import drinkDataSet from './drinkDataSet';
import RowLayout from './RowLayout';

const DrinkResults = (props) => {

  const renderResults = () => {
    // pass in array of items the numGuests and the numHours; it returns and array wity the results
    let drinkResults = calcDrinks(drinkDataSet, props.numGuests, props.numHours)

    // console.log(`This is a row[0]: ${row[0]}`)
    let resultsJsx = drinkResults.map(row => {
      let type = row[0];
      let quantity = row[3];
      let unitOfMeasure = row[1];
      return (
        <div key={type}>
            <RowLayout row={[type, quantity, unitOfMeasure]} />
       </div>
      )
    })
    return resultsJsx
  }

  return (
    <div style={{marginLeft: '.5em'}}>
        {renderResults(drinkDataSet)}
        <Note>(Note: Champagne for toasting purposes only. Hours are not factored in)</Note>
        <HorizRule color={setColor.lightgrey} pctWidth="100%" thickness=".1em" mb="1em" mt="1em"/>
    </div>
  );
}

export default DrinkResults;

// ***********************************************************************************
// Styled Components
// ***********************************************************************************

const Note = styled.div`
  color: ${({ theme }) => theme.color.secondary};
  font-size: ${({ theme }) => theme.fontSize.xxsmall};
  font-weight: ${({ theme }) => theme.fontWeight.norma};
  margin-top: .5rem;
  width: 75%;

  @media only screen and (max-width: ${setMedia.tabletMax}) {
    font-size: .9em;
    margin-top: 1rem;
    width: 98%;
  }
`;

// const ResultsContainer = styled.div`
//   display: flex;
//   justify-content: space-between;
//   margin-top: 2rem;

//   ${mediaQuery.lessThan("tablet")`
//      margin: 1.5rem 0 0 0;
//      margin-top: 3rem;
//   `}
// `;

// const TypeColumn = styled.div`
//   color: ${props => props.theme.color.text};
//   font-size: ${({ theme }) => theme.fontSize.small};
//   /* padding-top: 1px; */
//   width: 20%;

//   ${mediaQuery.lessThan("tablet")`
//     font-size: ${({ theme }) => theme.fontSize.xsmall};
//     flex-direction: column;
//     width: 20%;
//   `}  
// `;

// const UnitColumn = styled.div`
//   align-self: flex-start;
//   color: ${props => props.theme.color.text};
//   font-size: ${({ theme }) => theme.fontSize.small};
//   /* padding-top: 1px; */
//   padding-right: 8px;
//   /* text-align: left; */
//   width: 12rem;
//   /* margin-left: -5rem; */

//   ${mediaQuery.lessThan("tablet")`
//     font-size: ${({ theme }) => theme.fontSize.xsmall};
//     flex-direction: column;
//     // padding-bottom: 2rem;
//     width: 9rem;
//   `}  
// `;



// const QuantityColumn = styled.div`
//   align-self: flex-start;
//   color: ${props => props.theme.color.text};
//   font-size: ${({ theme }) => theme.fontSize.small};
//   margin-right: 16rem;
//   /* padding-top: 1px; */
//   padding-right: 5px;
//   text-align: right;
//   width: 10rem;
  

//   ${mediaQuery.lessThan("tablet")`
//     font-size: ${({ theme }) => theme.fontSize.xsmall};
//     // flex-direction: column;
//     width: 5rem;
//   `}  
// `;




// const Size = styled.span`
//   font-size: ${({ theme }) => theme.fontSize.small};

//   ${mediaQuery.lessThan("tablet")`
//     font-size: ${({ theme }) => theme.fontSize.xsmall};
//   `}  
// `;