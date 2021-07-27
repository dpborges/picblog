import React from 'react';
import styled from 'styled-components';
import { setMedia } from '../../../styles/CommonStyles';
// import { Button } from 'react-native-elements'
// import { Label } from '../../../components/formElements/Label';
import { HorizRule } from '../../../components/decorators/HorizRule';
import { setColor } from '../../../styles/CommonStyles';
import calcFoodServings from './calcFoodServings';
import foodDataSet from './foodDataSet';
import ColumnHeading from './ColumnHeading';

const FoodResults = (props) => {

    // Calculate the quantify for each of the food groups  (eg. appetizers, otherSides, meals, desserts)
  let appetizerResults = calcFoodServings(foodDataSet, "appetizersB4Meal",  props.numGuests, props.numHours);
  let mealResults      = calcFoodServings(foodDataSet, "meal",  props.numGuests, props.numHours)
  let dessertResults   = calcFoodServings(foodDataSet, "dessert",  props.numGuests, props.numHours)

  // Render the results for the food group specified
  const renderResults = (forFoodGroup) => {
    // pass in array of items the numGuests and the numHours; it returns and array wity the results

    // console.log(`This is a row[0]: ${row[0]}`)
    let resultsJsx = forFoodGroup.map(row => {
      return (
        <ResultsContainer key={row[0]}>
            <TypeColumn>{row[0]}</TypeColumn>
            <QuantityColumn>{row[2]}</QuantityColumn>
            <div>&nbsp;</div>
            <UnitColumn>{row[1]}</UnitColumn>
        </ResultsContainer>
      )
    })
    return resultsJsx
  }

  return (
    <div>
      <SubSectionHeader>Appetizers</SubSectionHeader>
      <HorizRule color={setColor.lightgrey} pctWidth="100%" thickness="1px" mb=".5em" />
     
      <ColumnHeading c1text="Type of Food"/>
      <HorizRule color={setColor.lightgrey} pctWidth="100%" thickness="1px" mb="1em" mt=".5em"/>
      {/* <HorizRule color={setColor.lightgrey} pctWidth="100%" thickness="1px" mb="1em"/> */}
      {renderResults(appetizerResults)}

{/*
      <HorizRule color={setColor.lightgrey} pctWidth="100%" thickness="1px" mb="1em" mt="2em"/>
      <SubSectionHeader>Other Sides</SubSectionHeader>
      <HorizRule color={setColor.lightgrey} pctWidth="100%" thickness="1px" mb="1em"/>
      {renderResults(otherSidesResults)}
*/}
      <HorizRule color={setColor.lightgrey} pctWidth="100%" thickness="1px" mb=".5em" mt="2em"/>
      <SubSectionHeader>Meal</SubSectionHeader>
      <HorizRule color={setColor.lightgrey} pctWidth="100%" thickness="1px" mb=".5em"/>
      {/*
      <Note>
         Loem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
         labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
         laboris nisi ut aliquip ex ea commodo consequat
      </Note>
      <HorizRule color={setColor.lightgrey} pctWidth="100%" thickness="1px" mb="1em"/>
*/}

      <ColumnHeading /> 
      <HorizRule color={setColor.lightgrey} pctWidth="100%" thickness="1px" mb="1em" mt=".5em"/>
      {renderResults(mealResults)}

      <HorizRule color={setColor.lightgrey} pctWidth="100%" thickness="1px" mb=".5em" mt="2em"/>
      <SubSectionHeader>Dessert</SubSectionHeader>
      <HorizRule color={setColor.lightgrey} pctWidth="100%" thickness="1px" mb=".5em"/>
  {/*
      <Note>
         Loem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
         labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
         laboris nisi ut aliquip ex ea commodo consequat
      </Note>
      <HorizRule color={setColor.lightgrey} pctWidth="100%" thickness="1px" mb="1em"/>
  */}
      <ColumnHeading />
      <HorizRule color={setColor.lightgrey} pctWidth="100%" thickness="1px" mb="1em" mt=".5em"/>
      {renderResults(dessertResults)}
      <HorizRule color={setColor.lightgrey} pctWidth="100%" thickness="1px" mt="3em" mb="2em"/>

    </div>
  );
}

export default FoodResults;

// ***********************************************************************************
// Styled Components
// ***********************************************************************************

const SubSectionHeader = styled.h3`
  color: ${setColor.black};
  vertical-align: center;
  font-size: 1.2em;
  font-weight: bold;
  margin-top: .2em;
  margin-left: .5rem;

  @media only screen and (max-width: ${setMedia.tabletMax}) {
    font-size: 1.1em;
    margin-left: .2rem;
  }

`;

// const ResultsContainer = styled.div`
//   display: flex;
//   justify-content: space-between;
//   margin-top: 1em;

//   @media only screen and (max-width: ${setMedia.tabletMax}) {
//     margin: .75em 0 0 0;
//   }

// `;

const ResultsContainer = styled.div`
  font-size: ${props => props.theme.fontSize.default};
  display: grid;
  grid-template-columns: 40% 5em 30% 20%;
  height: 2em;
  margin-left: .5em;
  
  @media only screen and (max-width: ${setMedia.tabletMax}) {
    grid-template-columns: 42% 5em 10% 33%;
    height: 2em;
    margin-left: .2em;
  }
`;

const TypeColumn = styled.div`
  /* border: 1px solid green; */
  color: ${({ theme }) => theme.color.text};
  font-size: 1em;
  padding-top: 1px;
  width: 20em;

  @media only screen and (max-width: ${setMedia.tabletMax}) {
    font-size: .9em;
    flex-direction: column;
    line-height: 1em;
    padding-top: 0;
    width: 100%;
  }

`;

const UnitColumn = styled.div`
  align-self: flex-start;
  color: ${({ theme }) => theme.color.text};
  font-size: 1em;
  padding-top: 1px;
  padding-left: 2px;
  width: 12em;

  @media only screen and (max-width: ${setMedia.tabletMax}) {
    font-size: .9em;
    flex-direction: column;
    line-height: 1em;
    padding-bottom: 2em;
    padding-left: 5px;
    margin-left: -1em;
    width: 9em;
  }

`;


const QuantityColumn = styled.div`
  align-self: flex-start;
  color: ${({ theme }) => theme.color.text};
  font-size: 1em;
  padding-top: 1px;
  /* margin-right: 5em; */
  text-align: right;
  width: 4em;
  
  @media only screen and (max-width: ${setMedia.tabletMax}) {
    font-size: .9em;
    line-height: 1em;
    margin-right: 5em;
    width: 3.8em;
  }

`;


// const QuantityColumn = styled.div`
//   align-self: flex-start;
//   color: ${({ theme }) => theme.color.text};
//   font-size: 1em;
//   padding-top: 1px;
//   margin-right: 12.5em;
//   padding-right: 8px;
//   text-align: right;
//   width: 10em;
  
//   @media only screen and (max-width: ${setMedia.tabletMax}) {
//     font-size: ${({ theme }) => theme.fontSize.xsmall};
//     margin-right: 5em;
//     width: 5em;
//   }
