
// Function to estimate right side ad sizes based on wordcount.
export default function getRightSideAdSize(wordCount) {

  // Initial adlist sizing 
  // let adjustedWordCount = wordCount + 175; /* add 170 wowrds for space taken by image and title */
  let adjustedWordCount = wordCount; /* add 170 wowrds for space taken by image and title */
  // Estimate size 
  let adListSize = ["small", "small"];  

  if (adjustedWordCount >= 400 && adjustedWordCount <= 500) {
    adListSize = ["medium"];
  }

  if (adjustedWordCount >= 501 && adjustedWordCount <= 550) {
    adListSize = ["medium", "single-skyscraper"];
  }

  if (adjustedWordCount >= 551 && adjustedWordCount <= 650) {
    adListSize = ["medium", "small", "single-skyscraper"];
  }

  if (adjustedWordCount >= 651 && adjustedWordCount <= 750) {
    adListSize =  ["medium", "small", "medium" ];
  }

  if (adjustedWordCount >= 751 && adjustedWordCount <= 850) { 
    adListSize =  ["large", "medium", "small"];
  }

  if (adjustedWordCount >= 851 && adjustedWordCount <= 950) { 
    adListSize =  ["large", "medium", "medium", "single-skyscraper", "single-med-rect"];
  }

  if (adjustedWordCount >= 951 && adjustedWordCount <= 1150) { 
    adListSize =  ["large", "large", "medium", "small"];
  }

  if (adjustedWordCount >= 1151 && adjustedWordCount <= 1250) { 
    adListSize =  ["large", "large", "large", "small"  ];
  }

  // TUNED SIZES  ABOVE THIS POINT

  // if (adjustedWordCount >= 1151 && adjustedWordCount <= 1250) {
  //   adListSize =  ["large", "medium", "small"];
  // }

  // if (adjustedWordCount >= 1251 && adjustedWordCount <= 1350) {
  //   adListSize = ["small", "large", "small"];
  // }

  // if (adjustedWordCount >= 1351 && adjustedWordCount <= 1450) { 
  //   adListSize =  ["small", "large", "small", "small"];
  // }

  // if (adjustedWordCount >= 1451 && adjustedWordCount <= 1550) { 
  //   adListSize = ["small", "large", "small", "medium"];
  // }

  // if (adjustedWordCount >= 1551 && adjustedWordCount <= 1650) { 
  //   adListSize = ["small", "large", "small", "medium", "small"];
  // }

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