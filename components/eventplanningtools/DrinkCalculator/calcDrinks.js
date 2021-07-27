// ************************************************************
// Function used for Guest List Calculator
// ************************************************************

const calcDrinks = (dataSet, numGuests, numHours) => {

    // Set rule of thumbs for alcoholic beverages
    const numDrinksPer750mlBottle   = 16;

    // Set rule of thumbs for wine
    const numGlassesPersonPerHour = 1.2;
    const numGlassesPerBottle     = 4;

    // Set rule of thumbs for beer
    const amountExtraBeerForFirstHourPerPerson = .5;
    const bottleOfBeerPerPersonPerhour = 1;

    // Set rule of thumbs for punch
    const ouncesPerPersonPerHour = 5;
    const ouncesForAllGuestsPerHour = numGuests *  ouncesPerPersonPerHour;

    // Set rule of thumbs for champagne
    const numberOfFlutesPerBottle = 6;

   let drinkResults = dataSet;

   // For each drink type calculate the quantity.
   drinkResults.forEach((drinkType) => {
     if (drinkType[0] === "Alcoholic Beverage") {
          drinkType[3] = Math.ceil((numGuests * numHours) / numDrinksPer750mlBottle);
       }
       if (drinkType[0] === "Wine") {
          drinkType[3] = Math.round((numGlassesPersonPerHour * numGuests * numHours) / numGlassesPerBottle);
       }
       if (drinkType[0] === "Beer") {
          let amountExtraForAllGuestsFirstHalfHour  = numGuests * amountExtraBeerForFirstHourPerPerson;
          let numberOfBeerBottlesForAllGuests = (bottleOfBeerPerPersonPerhour * numGuests * numHours) + amountExtraForAllGuestsFirstHalfHour;
          drinkType[3] = Math.round(numberOfBeerBottlesForAllGuests);
       }
       if (drinkType[0] === "Punch") {
          drinkType[3] = Math.round(((ouncesForAllGuestsPerHour * numHours) + ouncesForAllGuestsPerHour) / 128);
       }
       if (drinkType[0] === "Champagne") {
          let fixedNumHours = 1;
          let numberOfBottles = numGuests / numberOfFlutesPerBottle * fixedNumHours;
        drinkType[3] = Math.round(numberOfBottles);
       }
   })
   return drinkResults;
}

export default calcDrinks;