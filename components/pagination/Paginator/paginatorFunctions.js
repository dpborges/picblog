import { logger }  from '../../../utils/logging';

/* helper to calculate previous page number based on curPage. 
   Only go backwards if curPage is greater than 1, for anything else, default to 1  */ 
export function getPrevPage(curPage) {
  let validatedPage = 1;
  if (curPage > 1) {
    validatedPage = curPage - 1 
  } else if (curPage === 1 || curPage === 0 || curPage === undefined || !curPage ) {
    validatedPage = 1;
  }
  return validatedPage;
}

/* Calculate next page number based on curPage. I   */ 
export function getNextPage(curPage, numPages)  {
  let validatedPage = 1;
  let noError       = true;

  /* check for missing inputs */
  if (!curPage || !numPages) {
    logger.error(`Function getNextPage missing argument or has a value of 0: curPage:${curPage} numPages:${numPages}`);
    noError = false;
  } else if (!curPage > 0 || !numPages > 0) { /* check for invalid inputs */
    logger.error(`Function getNextPage arguments invalid for either curPage: ${curPage} or numPages: ${numPages}`);
    noError = false;
  };
  
  if (noError) {/* calculate next Page */
    if (curPage < numPages) {
      validatedPage = curPage + 1;
    } else if (curPage === numPages || curPage === 0 || curPage === undefined || !curPage ) {
      validatedPage = curPage;
    }
  }

  return validatedPage;
}

//*****************************************************************************
// These are functions needed to support findDisplayGroupForCurPage
//*****************************************************************************

/* displaySize is the number of items, aka pages/links, we want to show between prev and next. 
   We want to avoid where we only have 3 pages, or 3 hrefList items, and a displaySize of 5, for example.
   That is, display size cannot be greater than number of pages, or href items, to show.  */
export function getDisplaySize(displaySize, hrefListLength) {
  return displaySize > hrefListLength ? hrefListLength : displaySize;
}


/* Finds the Navigator display group (items/pages between prev and next ) the current page is in */
export function findDisplayGroupForCurPage (curPage, hrefList, displaySize) {
  // console.log(`>> Inside findDisplayGroupForCurPage`);
  // console.log(`          findDisplayGroupForCurPage curPage: ${curPage}`);
  // console.log(`          findDisplayGroupForCurPage displaySize: ${displaySize}`);
  // console.log(`          findDisplayGroupForCurPage hrefList: ${hrefList}`);
  const getGroupStart = (groupNum, hrefList, displaySize) => {
    return ((groupNum * displaySize) - displaySize) + 1;
  }

  /* if display size is greater than number of items in hreflist, make display size same as hrefList size */
  displaySize = displaySize > hrefList.length ? hrefList.length : displaySize;
  console.log(`    displaySize ${displaySize}`);

  const numDisplayGroups = Math.ceil(hrefList.length / displaySize );  /* get number of display groups */
  console.log(`    numDisplayGroups ${numDisplayGroups}`);
  
  /* loop through each display group, calculate start and end and see if curPage is in that group's range */
  for (let groupNum = 1; groupNum <= numDisplayGroups; groupNum++) {
    console.log(`    for loop interation groupNum => ${groupNum}`);
    break;
    let groupStart = getGroupStart(groupNum, hrefList, displaySize, groupNum);
    let groupEnd   = (groupStart + displaySize) - 1;
    console.log(`    groupStart ${groupStart}`);
    if (groupEnd > hrefList.length) { groupEnd = hrefList.length}; /* if  displaySize exceeds size of hrefList, then reset it to hrefList size as this is the last group */
    console.log(`    groupEnd ${groupEnd}`);
    if (curPage >= groupStart && curPage <= groupEnd) {
      console.log(`    return object {groupEnd: ${groupEnd}, groupStart:${groupStart}}`);
      return { groupNum, groupStart, groupEnd }
    } 
  }
}