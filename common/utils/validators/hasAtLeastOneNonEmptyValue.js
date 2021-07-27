// Function used with forms where all inputs are optional but form requires 
// at least one input value.
// This function checks to see if there is at least one value provided in an array of  variables
// You can set the empty value check to be a 0 or an empty string "", that is passed as the 
// second argument. It defaults to and empty "" string, therefore you only need to pass a
// an empty value if its considered something other than an empty string.
export const hasAtLeastOneNonEmptyValue = (arrayOfInputs = [], emptyValue = "") => {
   let found = arrayOfInputs.find(inputValue => inputValue !== emptyValue);
   return found ? true : false;
}

