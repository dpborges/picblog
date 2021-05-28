
// Function to estimate right side ad sizes based on wordcount.
export default function getRightSideAdSize(wordCount) {

// Initial adlist sizing 
const smallAdList  = ["small", "single-medium-rectangle" ]; /* 250 and 449 */ 
const mediumAdList = ["medium", "single-medium-rectangle", "single-medium-rectangle"]; /* 500 and 889 */ 
const largeAdList  = ["large", "small", "single-medium-rectangle"]; /* 890 and 1150 */
const xlargeAdList = ["large", "single-medium-rectangle", "small", "single-medium-rectangle"  ]; /* 890 and 1150 */

let adjustedWordCount = wordCount + 175; /* add 170 wowrds for space taken by image and title */
// Estimate size 
let adListSize = ["small", "small"];  
// if ( wordCount >= 250 && wordCount <= 449 )  {adListSize = smallAdList}
// if ( wordCount >= 500 && wordCount <= 889 )  {adListSize = mediumAdList}
// if ( wordCount >= 890 && wordCount <= 1160 ) {adListSize = largeAdList}
// if ( wordCount >= 1161 )                     {adListSize = xlargeAdList}

if (adjustedWordCount < 375) adListSize = 
    ["small", "single-medium-rectangle", "single-medium-rectangle"];

if (adjustedWordCount >= 501 && adjustedWordCount <= 650) adListSize = 
    ["small", "small"];

if (adjustedWordCount >= 651 && adjustedWordCount <= 750) adListSize = 
    ["small", "small", "single-medium-rectangle", "single-medium-rectangle"];

if (adjustedWordCount >= 751 && adjustedWordCount <= 950) adListSize = 
    ["large", "single-medium-rectangle"];

if (adjustedWordCount >= 951 && adjustedWordCount <= 1150) adListSize = 
    ["large", "small"];

if (adjustedWordCount >= 1151 && adjustedWordCount <= 1250) adListSize = 
    ["large", "small", "single-medium-rectangle"];

if (adjustedWordCount >= 1251 && adjustedWordCount <= 1350) adListSize = 
    ["small", "large", "small"];

if (adjustedWordCount >= 1351 && adjustedWordCount <= 1450) adListSize = 
    ["small", "large", "small", "single-medium-rectangle"];

if (adjustedWordCount >= 1451 && adjustedWordCount <= 1550) adListSize = 
    ["small", "large", "small", "single-medium-rectangle", "single-medium-rectangle"];

if (adjustedWordCount > 1550 ) adListSize = 
    ["large", "large",  "single-medium-rectangle"];

console.log("adjustedWordCount ", adjustedWordCount);
console.log("adListSize ", adListSize);

return adListSize;

}

/*
  small < 375 words  small 
    376 - 500  "small", "single-medium-rectangle", "single-medium-rectangle"
    501 - 650  "small", "small"
    651 - 750  ["small", "small", "single-medium-rectangle", "single-medium-rectangle"]
    751 - 950  ["large", "single-medium-rectangle"]
    951 - 1150 ["large", "small"];
    1151 - 1250 ["large", "small", "single-medium-rectangle"]
    1251 - 1350  ["small", "large", "small"]
    1351 - 1450  ["small", "large", "small", "single-medium-rectangle"]
    1451 - 1550  ["small", "large", "small", "single-medium-rectangle", "single-medium-rectangle"]
*/