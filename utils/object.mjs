// **************************************************************************
// Miscellaneous object related utilities
// **************************************************************************

// Function filterObjArray
/* Filters an array of objects for properties that match the filter Object  */
export function filterObjArrayBy(inputArray, filterObj) {
  let filteredData = inputArray.filter((contentmdObj) => {    
    return isPropsInObj(filterObj, contentmdObj)
  })
  return filteredData;
}

/* Helper function for filterObjArray, to check if properties and value in object 1 exist in object 2. 
   Used primarily to filter array of objects with matching properties. This only useful
   when looking for exact matches, for example, id="6733", type="post", lang="en" etc */
function isPropsInObj (obj1, obj2) {
  let props = Object.keys(obj1);
  let propsIn = false;
  let matchCount = 0;
  for (let i = 0; i < props.length; i++) {
    let propName  = props[i];
    let propValue = obj1[propName];
    if (obj1[propName] === obj2[propName]) {
      matchCount++;
    }
  }
  return matchCount === props.length; /* returns true if all props on obj1 match props in obj2 */
}

// const obj1 = {a: 1, k: 6};
// const obj2 = {a: 1, b: 2, c: 3, d: 4};

// let result = isPropsInObj(obj1, obj2);
// console.log(`match status: ${result}`);


