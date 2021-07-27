import React from 'react';
import styled from 'styled-components';
import { setMedia } from '../../../styles/CommonStyles';
// import { Button } from 'react-native-elements'
// import { Label } from '../../../components/formElements/Label';
import { HorizRule } from '../../../components/decorators/HorizRule';
import { setColor } from '../../../styles/CommonStyles';
import calcFoodServings from './calcFoodServings';
import foodDataSet from './foodDataSet';
import RowLayout from './RowLayout';
import ColumnHeading from './ColumnHeading';
import DrinkResults from '../DrinkCalculator/DrinkResults';


const FoodResults = (props) => {
    // Calculate the quantify for each of the food groups  (eg. appetizers, otherSides, meals, desserts)
  let appetizerResults  = calcFoodServings(foodDataSet, "appetizersOnly",  props.numGuests, props.numHours);
  let otherSidesResults = calcFoodServings(foodDataSet, "otherSides",  props.numGuests, props.numHours)

  // Render the results for the food group specified
  const renderResults = (forFoodGroup) => {
    
    // pass in array of items the numGuests and the numHours; it returns and array wity the results

    // console.log(`This is a row[0]: ${row[0]}`)
    let resultsJsx = forFoodGroup.map(row => {
      let type = row[0];
      let quantity = row[2];
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
    <div>
      <SubSectionHeader>Appetizers</SubSectionHeader>
      <HorizRule color={setColor.lightgrey} pctWidth="100%" thickness="1px" mb=".5em"/>
      <ColumnHeading  text="Type of Food" />
      <HorizRule color={setColor.lightgrey} pctWidth="100%" thickness="1px" mb="1em" mt=".5em"/>
      <SectionContainer>
        {renderResults(appetizerResults)}
      </SectionContainer>

      <HorizRule color={setColor.lightgrey} pctWidth="100%" thickness="1px" mb=".1em" mt="2em"/>
      <SubSectionHeader>Other Sides</SubSectionHeader>
      <HorizRule color={setColor.lightgrey} pctWidth="100%" thickness="1px" mb="1em"/>
      <SectionContainer>
        {renderResults(otherSidesResults)}
      </SectionContainer>

      <HorizRule color={setColor.lightgrey} pctWidth="100%" thickness="1px" mb=".1em" mt="2em"/>
      <SubSectionHeader>Drinks</SubSectionHeader>
      <HorizRule color={setColor.lightgrey} pctWidth="100%" thickness="1px" mb=".5em"/>
      <ColumnHeading  text="Type of Drink" />
      <HorizRule color={setColor.lightgrey} pctWidth="100%" thickness="1px" mb="1em" mt=".5em"/>
      <DrinkResults numGuests={props.numGuests} numHours={props.numHours} />
   


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
  margin-left: .5em;

  @media only screen and (max-width: ${setMedia.tabletMax}) {
    font-size: 1.1em;
    margin-left: .2em;
  }
`;

const SectionContainer = styled.div`
  margin-left: .5em;
`;
