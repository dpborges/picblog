
// ************************************************************
// Function used for Guest List Calculator
// ************************************************************

const calcFoodServings = (dataSet, foodType,  numGuests, numHours) => {
    
  //  Initialize food groups  (eg. appetizers, meals, desserts)
   let appetizerResults = [];
   let otherSideResults = [];

   // Calculate Quantity for appetizers
   if (foodType === "appetizersOnly") { 
      appetizerResults = dataSet[foodType] ;  // pull the appetizers array off the dataSet Object

      // For each drink type calculate the quantity.
      appetizerResults.forEach((appetizer) => {

        // Do calculation for an appetizer only event
        if (appetizer[0] === "Appetizers") {
          let appetizerPerPersonPerHour = 8; // rule of thumb
          let result = appetizerPerPersonPerHour * numGuests * numHours;  // do calculation
          // console.log(` appetizers only result is ${result}`)
          appetizer[2] = result    // update array with result
        }
      })
      return appetizerResults;
   };

   // Calculate Quantity for Other Sides
   if (foodType === "otherSides") { 
     otherSideResults = dataSet[foodType];

      // For each drink type calculate the quantity.
     otherSideResults.forEach((side) => {

        // Calculate quantity
        if (side[0] === "Fruit/Veggie Platter") {
          let portionOfPlatterPerPerson = .1; // rule of thumb
          let result = portionOfPlatterPerPerson * numGuests * numHours;  // do calculation
          side[2] = Math.round(result)    // update array with result
        }

        if (side[0] === "Dips") {
          let ouncesPerPersonPerHour = .8; // rule of thumb
          let result = ouncesPerPersonPerHour * numGuests * numHours;  // do calculation
          side[2] = Math.round(result)    // update array with result
        }

        if (side[0] === "Chips") {
          let ouncesPerPersonPerHour = 1.6; // rule of thumb
          let result = (ouncesPerPersonPerHour * numGuests * numHours) / 16;  // do calculation
          side[2] = Math.round(result)   // update array with result
        }

        if (side[0] === "Canapes") {
          let piecesPerPersonPerHour = 2.5; // rule of thumb
          let result = (piecesPerPersonPerHour * numGuests) * numHours;  // do calculation
          side[2] = Math.round(result)   // update array with result
        }

        if (side[0] === "Cheese") {
          let poundsPerPersonPerHour = .25; // rule of thumb
          let result = (poundsPerPersonPerHour * numGuests) * numHours;  // do calculation
          side[2] = Math.round(result)   // update array with result
        }

    })
    return otherSideResults; 
   };


}     

export default calcFoodServings;