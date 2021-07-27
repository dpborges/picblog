
// ************************************************************
// Function used for Guest List Calculator
// ************************************************************

const calcFoodServings = (dataSet, foodType,  numGuests, numHours) => {
    
  //  Initialize food groups  (eg. appetizers, meals, desserts)
   let appetizerResults = [];
   let otherSideResults = [];
   let mealResults = [];
   let dessertResults = [];

   // NOTE: meals are not served over a period of time hence they are calculated over a factor of 1 hour.
   let mealHours = 1; 

   // Calculate Quantity for appetizers
   if (foodType === "appetizersB4Meal") { 
      appetizerResults = dataSet[foodType] ;  // pull the appetizers array off the dataSet Object

      appetizerResults.forEach((appetizer) => {
        // Do calculation for when serving appetizer before a meal
        if (appetizer[0] === "Appetizers before meal") {
          let appetizerPerPersonPerHour = 5; // rule of thumb
          let result = appetizerPerPersonPerHour * numGuests * mealHours;
          // console.log(` appetizers b4 meal result is ${result}`)
          appetizer[2] = result
        }
      })
      return appetizerResults;
   } /*else  if (foodType === "appetizersOnly") { 
    console.log(`Inside calcFoodServings/conditional for appetizersOnly`)
    appetizerResults = dataSet[foodType] ;  // pull the appetizers array off the dataSet Object

    console.log(`   ..enter forEach`)
    // For each drink type calculate the quantity.
    appetizerResults.forEach((appetizer) => {
      
      // Do calculation for when serving appetizer before a meal
      if (appetizer[0] === "Appetizers Only") {
        let appetizerPerPersonPerHour = 8; // rule of thumb
        let result = appetizerPerPersonPerHour * numGuests * numHours;
        // console.log(` appetizers b4 meal result is ${result}`)
        appetizer[2] = result
      }

    })
    return appetizerResults;
  };
*/

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
    })
    return otherSideResults; 
   };


   // Calculate Quantity for Meal 
   if (foodType === "meal") { 
     mealResults = dataSet[foodType];

     // For each drink type calculate the quantity.
     mealResults.forEach((meal) => {

        if (meal[0] === "Poultry, Meat, or Fish") {
          let ouncesPerPersonPerHour = 8; // rule of thumb
          let result = (ouncesPerPersonPerHour * numGuests * mealHours) / 16;  // do calculation
          meal[2] = Math.round(result)    // update array with result
        }

        if (meal[0] === "Boneless Beef Roast") {
          let ouncesPerPersonPerHour = 8; // rule of thumb
          let result = (ouncesPerPersonPerHour * numGuests * mealHours) / 16;  // do calculation
          meal[2] = Math.round(result)    // update array with result
        }

        if (meal[0] === "Pork Roast or Ham") {
          let ouncesPerPersonPerHour = 8; // rule of thumb
          let result = (ouncesPerPersonPerHour * numGuests * mealHours) / 16;  // do calculation
          meal[2] = Math.round(result)    // update array with result
        }

        if (meal[0] === "Casseroles") {
          let numPeoplePer13by9Dish = 5; // rule of thumb
          let result = numGuests / numPeoplePer13by9Dish;  // do calculation
          meal[2] = Math.round(result)    // update array with result
        }

        if (meal[0] === "Rice or Grains") {
          let ouncesPerPersonPerHour = 1.5; // rule of thumb
          let measure = numGuests < 10 ? "Ounces" : "Lbs";
          let resultInOunces = ouncesPerPersonPerHour * numGuests * mealHours;  // do calculation
          let resultInPounds = resultInOunces / 16;  // do calculation
          let result = measure === "Ounces" ? resultInOunces : resultInPounds;
          meal[1] = measure;
          meal[2] = Math.round(result)    // update array with result with result
        }

        if (meal[0] === "Potato Salad") {
          let ouncesPerPersonPerHour = 5; // rule of thumb
          let measure = numGuests < 4 ? "Ounces" : "Lbs";
          let resultInOunces = ouncesPerPersonPerHour * numGuests * mealHours;  // do calculation
          let resultInPounds = resultInOunces / 16;  // do calculation
          let result = measure === "Ounces" ? resultInOunces : resultInPounds;
          meal[1] = measure;
          meal[2] = Math.round(result)    // update array with result with result
        }


        if (meal[0] === "Vegetables") {
          let ouncesPerPersonPerHour = 4; // rule of thumb
          let measure = numGuests < 4 ? "Ounces" : "Lbs";
          let resultInOunces = ouncesPerPersonPerHour * numGuests * mealHours;  // do calculation
          let resultInPounds = resultInOunces / 16;  // do calculation
          let result = measure === "Ounces" ? resultInOunces : resultInPounds;
          meal[1] = measure;
          meal[2] = Math.round(result)    // update array with result with result
        }

        if (meal[0] === "Salad") {
          let ouncesPerPersonPerHour = 2.5; // rule of thumb
          let measure = numGuests < 7 ? "Ounces" : "Lbs";
          let resultInOunces = ouncesPerPersonPerHour * numGuests * mealHours;  // do calculation
          let resultInPounds = resultInOunces / 16;  // do calculation
          let result = measure === "Ounces" ? resultInOunces : resultInPounds;
          meal[1] = measure;
          meal[2] = Math.round(result)    // update array with result with result
        }

        // if (meal[0] === "Salad") {
        //   let ouncesPerPersonPerHour = 2.5; // rule of thumb
        //   let measure = numGuests < 7 ? "Ounces" : "Lbs";
        //   let resultInOunces = ouncesPerPersonPerHour * numGuests * mealHours;  // do calculation
        //   let resultInPounds = resultInOunces / 16;  // do calculation
        //   let result = measure === "Ounces" ? resultInOunces : resultInPounds;
        //   meal[1] = measure;
        //   meal[2] = Math.round(result)    // update array with result with result
        // } 

        if (meal[0] === "Salad Dressing") {
          let tableSpoonsPerPerson = 2 // rule of thumb
          let numberOfTablespoonsPerCup  = 16;
          let result = (tableSpoonsPerPerson * numGuests * mealHours) / numberOfTablespoonsPerCup;
          meal[2] = result > 0 ? result.toFixed(1) : 0;    // update array with result with result
        }

        if (meal[0] === "Baked Beans") {
          let cupsPerPerson = .5 // rule of thumb
          let numOuncesPerCup = 8;
          let measure = numGuests < 5 ? "Cups" : "Lbs";
          let resultInCups = cupsPerPerson * numGuests * mealHours;  // do calculation
          let resultInPounds = (resultInCups * numOuncesPerCup) / 16;  // do calculation
          let result = measure === "Cups" ? resultInCups : resultInPounds;
          meal[1] = measure;
          meal[2] = Math.round(result);    // update array with result with result
        }

        if (meal[0] === "Rolls or Bread") {
          let rollsPerPerson = 2 // rule of thumb
          let result = rollsPerPerson * numGuests * mealHours;
          meal[2] = Math.round(result)    // update array with result with result
        }
      })
      // Return meal results
      return mealResults;  
    }

    // Calculate Quantity for Other Sides
    if (foodType === "dessert") { 
        dessertResults = dataSet[foodType];

        // For each dessert calculate the quantity.
        dessertResults.forEach((dessert) => {

          // Calculate quantity
          if (dessert[0] === "Cookies") {
            let portionPerPerson = 3; // rule of thumb
            let result = portionPerPerson * numGuests * mealHours;  // do calculation
            dessert[2] = Math.round(result)    // update array with result
          }

          if (dessert[0] === "9 Inch Layer Cake") {
            let numPeoplePer9InchCake = 10; // rule of thumb
            let result =  (numGuests * mealHours) / numPeoplePer9InchCake;  // do calculation
            dessert[2] = Math.round(result)    // update array with result
          }

          if (dessert[0] === "9 Inch Pie") {
            let numPeoplePer9InchPie = 7; // rule of thumb
            let result =  (numGuests * mealHours) / numPeoplePer9InchPie;  // do calculation
            dessert[2] = Math.round(result)    // update array with result
          }

          if (dessert[0] === "Cup Cakes") {
            let cupCakesPerPerson = 2; // rule of thumb
            let result =  cupCakesPerPerson * numGuests * mealHours;  // do calculation
            dessert[2] = Math.round(result)    // update array with result
          }

          if (dessert[0] === "Ice Cream") {
            let ouncesPerPerson = 8; // rule of thumb
            let ouncesPerQuart  = 32;
            let result =  (ouncesPerPerson * numGuests * mealHours) / ouncesPerQuart;  // do calculation
            dessert[2] = Math.round(result)    // update array with result
          }

          if (dessert[0] === "Coffee/Tea") {
            let ouncesPerPerson = 8; // rule of thumb
            // let ouncesPerQuart  = 32;
            // let result =  (ouncesPerPerson * numGuests * mealHours) / ouncesPerQuart;  // do calculation
            let result =  (ouncesPerPerson * numGuests * mealHours) / 8;  // do calculation
            dessert[2] = Math.round(result)    // update array with result
          }

          
        })
        return dessertResults; 
    };
}     

export default calcFoodServings;