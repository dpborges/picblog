import { logger }  from '../../../utils/logging';

// ********************************************************************************
// There are quite a number of helper functions in this file to support
// buildDisplayGroupForCurPagePrimary, which is the primary function used by the Paginator component,
// for rendering purposes.  In addition, the other functions used by the
// Paginator Component itself (index.js) are:  getPrevPage, and getNextPage
// ********************************************************************************

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

/* Calculate next page number based on curPage.    */ 
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

/* Predicate functions */
export function isPageInLastGroup(pageNum, hrefList, displaySize) {
  let groupNum = getNumDisplayGroups(hrefList, displaySize);  /* num display group same as last display group */
  let groupStartPage = getGroupStartPage(groupNum, hrefList, displaySize)
  return pageNum >= groupStartPage ? true : false;
}
/* Predicate function to check arguments passed to buildDisplayGroupForCurPage */
export function checkArguments(curPage, hrefList, displaySize, errorCb) {
  let errMsg = "";
 
  if (!curPage || !hrefList || !displaySize) {  /* check for missing arguments */
    errMsg = `buildDisplayGroupForCurPage - missing one of its arguments; Critical Error, Fix ASAP`;
  } else if (displaySize >  hrefList.length ) { /* check for displaySize out of range */
    errMsg = `buildDisplayGroupForCurPage - displaySize cannot be greater than hrefList size. fix error`;
  } else if (curPage > hrefList.length) {      /* check for curPage out of range */
    errMsg = `buildDisplayGroupForCurPage - curPage cannot be greater than hrefList size. fix error`;
  }
  return errMsg; /* if not assiged a string, will return a falsy value */
}

/* Note, checking for missing values is not required here because the enclosing function, 
 'findDisplayGroupForCurPage', will do this for. What we want to watch for is displaySize.
  The displaySize is the number of items, aka pages or links, we want to show between prev and next. 
  Avoid case where display is greater than hreflist length (number of pages/links). If so, 
  set displaySize to hrefList.length.  */
export function validateDisplaySize(displaySize, hrefListLength) {
  hrefListLength = !hrefListLength ? 1 : hrefListLength;
  displaySize = !displaySize ? 1 : displaySize;
  if (!hrefListLength) {logger.warn("getDisplaySize hrefListLength parameter was not provided: defaulted to 1")};
  if (!displaySize) {logger.warn("getDisplaySize displaySize parameter was not provided: defaulted to 1")};
  return displaySize > hrefListLength ? hrefListLength : displaySize;
}

export function getNumDisplayGroups(hrefList, displaySize) {
  return Math.ceil(hrefList.length / displaySize );
}

/* returns the starting page for the display group rendered in paginator component. If there is 
   no groupNum provided, it will default to 1. Note, hreflist and displaySize will be validated by 
   enclosing function. We just need to check that groupNum is not out of range */
export function getGroupStartPage(groupNum=1, hrefList, displaySize) {
  let numDisplayGroups = getNumDisplayGroups(hrefList, displaySize)
  if ( groupNum >  numDisplayGroups ) {
    groupNum = 1;
    logger.error("getGroupStartPage groupNum is out range. Defaulting groupNum to 1 to fail gracefully; fix issue");
  }
  return ((groupNum * displaySize) - displaySize) + 1;
}

/* returns the end page for the display group rendered in paginator component. Note, displaySize 
   will be validated by enclosing function. We just need to check both arguments are provided */
export function getGroupEndPage(groupStartPage, hrefList, displaySize) {
    if ( !groupStartPage ||  !displaySize ) {
      logger.error("getGroupEndPage - one of the arguments were missing; fix bug asap")
    }
    
    /* If startPage is in the last group, the end page depends on the number of pages left in the last group. 
    If pages left are same as displaySize, we add displaySize to groupStartPage to determine endPage. 
    If pages left are less than displaySize, we need to calculate and add that number to groupStartPage 
    to determine endPage. */
    let pageInLastGroup = isPageInLastGroup(groupStartPage, hrefList, displaySize);
    
    if (pageInLastGroup) {
       displaySize = (hrefList.length - groupStartPage) + 1; /* calc number of pages left and override displaySize*/
    }

    return (groupStartPage + displaySize) - 1;
}

/* Builds the Navigator display group (items/pages between prev and next ) for the current page  */
export function buildDisplayGroupForCurPage(curPage, hrefList, displaySize) {

  /* return this default if you run into problems */
  let defaultDisplayGroupObject = { groupNum: 1, groupStart: 1, groupEnd: 1 };

  let errorMsg = checkArguments(curPage, hrefList, displaySize);
  if (errorMsg) {
    logger.error(errorMsg);
    return defaultDisplayGroupObject; /* exit with some default values after logging error message */
  }

  const cleanDisplaySize = validateDisplaySize(displaySize, hrefList.length)
  const numDisplayGroups = getNumDisplayGroups(hrefList, displaySize);  /* get number of display groups */
    
  /* loop through each display group, calculate start and end and see if curPage is in that group's range */
  for (let groupNum = 1; groupNum <= numDisplayGroups; groupNum++) {
    
    let groupStartPage = getGroupStartPage(groupNum, hrefList, displaySize);
    let groupEndPage   = getGroupEndPage(groupStartPage, hrefList, displaySize);
    
    if (curPage >= groupStartPage && curPage <= groupEndPage) {
      return  { groupNum, groupStart: groupStartPage, groupEnd: groupEndPage };
      break;
    } 
  }
  
  logger.error(`buildDisplayGroupForCurPage - 1 or more args may be out of range; critical Error, Fix ASAP`);
  return defaultDisplayGroupObject;
}