import getContentMetaData from '../pages/api/contentmgr/getContentMetadata';

// **************************************************************************
// I have outlined a functional approach to doing pagination in a google 
// spreadsheet (in google docs). Started out by defining functions needed for 
// current implementation. I would be looking to wrap these up in R.compose in future 			
// **************************************************************************

let PAGE_LIMIT = 2;

// **************************************************************************
// IMPORTANT: Below are the functional components. At end of file see main 
// function called getPaginationHrefList.
// **************************************************************************

/* returns resultSet as an array of ids. Normally this would come from a database.
   In future release, should be implemented as an IO Monad */
export async function getMetadataList(dbquery) {  /* in future use dbquery to pass to database function */

  const resultSet = await getContentMetaData();

  // console.log("This is result set")
  // console.log(JSON.stringify(resultSet,null,2))
  return resultSet;
}

/* Sorts an object array by a string property 
   Inputs:  - an object array, 
            - the property name you want to sort by, 
            - and order = 'asc' || 'desc 
   Output:  objectArray in sorted order by property name   */
export async function sortyByStringProp(objectArray, propertyname, order = 'asc' ) {
  console.log('>> Inside sortyByStringProp');
  console.log(`   order: ${order}`);
  
  function compareStrings(s1, s2) {  /* declare compare function */
      let s1Lower = s1.[propertyname].toLowerCase();
      let s2Lower = s2.[propertyname].toLowerCase();
      switch (order) {
        case 'desc':
          if (s1.[propertyname] < s2.[propertyname]) { return  1 }
          if (s1.[propertyname] > s2.[propertyname]) { return -1 }
          return 0;
          break;

        case 'asc':
          if (s1.[propertyname] > s2.[propertyname]) { return  1 }
          if (s1.[propertyname] < s2.[propertyname]) { return -1 }
          return 0;
          break;
        default: 
          return 0;
      }
  }

  objectArray.sort(compareStrings);  /* execute function */

  return objectArray;  /* return sorted list */
}

/* Pulls out single element from array that has been grouped into pages. 
   Input:  paginatedList - an array of subarrays listing elements on a page
           pageno - or page number 
   Output: a single subarray with all elements for a given page      */ 
export function getItemsForPage(paginatedList, pageno) {
  
  let singlePage = paginatedList[pageno - 1]

  return singlePage;

}


/* Builds an array of hrefs for all the pages in the paginatedLIst */
export function buildHrefsForPages(baseurl, paginatedList) {
  console.log(">> Inside buildHrefsForPages");

  let hrefList = [];
  
  let pageCount = paginatedList.length; 

  for (let i = 0; i < pageCount; i++ ) {
    let pageNo = i + 1;  /* add 1 to account for 0 base */
    hrefList.push(baseurl + "/" + pageNo); /* add 1 to account for 0 base */
  }

  return hrefList;

}

// ***************************************************************************
// BELOW ARE THE TWO MAIN FUNCTIONS MAKING UP THE PAGINATION INTERFACE
// ***************************************************************************
export async function getPageLinks(idList) {

  let localIdList = [...idList]; /* create local copy of idList */

  sortyByStringProp(localIdList, 'createDate', 'desc'); /* modifies original array */
  // let sortedIdList = [...idList];  /* clone sortedIdList */
  // console.log("     sortedIdList");
  // console.log(JSON.stringify(sortedIdList, null, 2));

  let totalItems = localIdList.length;

  /* create a paginated list of items */ 
  let numPages =  Math.ceil(totalItems / PAGE_LIMIT);
  console.log('   numPages: ', numPages);
  let paginatedList = chunk(idList, PAGE_LIMIT)
  
  /* initialize page no */
  let pageno = 1;

  /* get the items for given pageno */
  let singlePage = getItemsForPage(paginatedList, pageno)
 
  /* build a list of hrefs for the paginated list, using "/blog" as base href url */
  let hrefList = buildHrefsForPages("/blog", paginatedList);
  console.log("    hrefList ", hrefList);
}

export async function getPageItems(pageno) {

  let PAGE_LIMIT = 2;

  let idList     = await getMetadataList();
  let totalItems = await getDbCount(idList);

  sortyByStringProp(idList, 'createDate', 'desc'); /* modifies original array */


  let numPages =  Math.ceil(totalItems / PAGE_LIMIT);
  let paginatedList = chunk(idList, PAGE_LIMIT)
  
  let singlePage = getItemsForPage(paginatedList, pageno)
 
  return singlePage;
}