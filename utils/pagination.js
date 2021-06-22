import getContentMetaData from '../pages/api/contentmgr/getContentMetadata';
import { appTrace, fileTrace } from '../utils/logging';

// **************************************************************************
// To see initial analysis of the functional approach used here, refer to the 
// pagination google spreadsheet. The functions used here are vanilla, in other words, there is no 
// currying or composition involved. I would be looking to wrap these up in R.compose 
// in the future. The primary interface for this utility is called getPageLinks(idList). 
// It can be found at the bottom of the file. This interface is not being called
// by my picblog, but serves as the model for implemention. That actual implememtation
// can be found in BlogListPage getStaticProps().
//
// The utility can be described as follows:
//
// Input: 
//    idList - this is an array of objects containing the ids of the items you are 
//             paginating, along with any other properties you may need to show on a page.
//             
// Process:    for getPageLinks(idList)
//    > Make a local copy of the idList passed in using array spread operator.
//    > Call sortByStringProp() to sort localIdList by a string property of choice,
//         ..in this case, I sort by createDate string.
//    > Determine total number of items
//    > Split array into chunks, which are subarrays, containing the number of items you 
//        want on each page (PAGE_LIMIT)
//    > Call buildHrefsForPages() to build a list of hrefs (urls) for each
//      page. Each url in the list maps to a page that has multiple items.
//      The number of items on each page is defined by the PAGE_LIMIT
//
// Output:
//    hrefList  - an array of urls associated to each page , for example
//                ["/blog/page/1", "/blog/page/2", "/blog/page/3", ....]
//                The array index corresponds to each of the page's url...
//                idList[0] maps to page 1 url, idList[1] maps to page 2 url, etc.
//
// Note: the object array, that is passed as input to getPageLinks(), needs to be constructed 
// from your datasource (eg.database, api, filesystem, etc) first. This maintains
// a separation from your referentially transparent code from the impure functions (eg. db calls).
// When you pass array into getPageLinks(idList), it will be split into page chunks. The getPageLinks()
// function will then return an array of hrefs (aka urls) based on total number of pages.
// One url for each page.
// 
// Future implementation - current implementation constructs the hrefList via one
// database call. This is fine if you're paginating 10's or couple of 100 items,
// but when you need to paginate an entire database it will require a lazy evaluation process
// where you get first 100 items, build the hrefList, then when user clicks item 101, 
// you get next 100 items, build the hrefList, and so on. With this approach it would
// behoove you to push down the sorting and filtering to the database to ensure you're 
// iterating over the same result in subsequent iterations, that you used during 
// the first iteration.
// 
// **************************************************************************

const trace = appTrace;

// **************************************************************************
// IMPORTANT: Below are the functional components. At end of file see main 
// function called getPageLinks(). This function was used as a model to implement
// in getStaticProps().
// **************************************************************************

/* returns resultSet as an array of ids. Normally this would come from a database.
   In future release, should be implemented as an IO Monad */
export async function getMetadataList(dbquery) {  /* in future, use dbquery to pass to database function */

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
export async function sortByStringProp(objectArray, propertyname, order = 'asc' ) {
  trace('> Inside sortByStringProp');
  trace(`   order: ${order}`);
  
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


/* Builds an array of hrefs for all the pages (subarrays) in the paginatedLIst */
export function buildHrefsForPages(baseurl, paginatedList) {
  trace("> Inside buildHrefsForPages");

  let hrefList = [];
  
  let pageCount = paginatedList.length;
  trace(`    pageCount: ${pageCount}`); 

  for (let i = 0; i < pageCount; i++ ) {
    let pageNo = i + 1;  /* add 1 to account for 0 base */
    hrefList.push(baseurl + "/" + pageNo); /* add 1 to account for 0 base */
  }

  return hrefList;

}

// ***************************************************************************
// THE IS MAIN PAGINATION INTERFACE; This interface serves as model implementation.
// Actual implementation can be found BlogListPage getStaticProps(). In the 
// Future I would like to wrap the process in R.compose and make one call and 
// get back the hrefList.
// ***************************************************************************
export async function getPageLinks(idList) {
  trace("> Inside getPageLinks");

  let PAGE_LIMIT = 2;

  let localIdList = [...idList]; /* create local copy of idList */

  sortByStringProp(localIdList, 'createDate', 'desc'); /* modifies original array */
  // let sortedIdList = [...idList];  /* clone sortedIdList */
  // console.log("     sortedIdList");
  // console.log(JSON.stringify(sortedIdList, null, 2));

  let totalItems = localIdList.length;

  /* create a paginated list of items */ 
  let numPages =  Math.ceil(totalItems / PAGE_LIMIT);
  let paginatedList = chunk(idList, PAGE_LIMIT)
  
  /* initialize page no */
  // let pageno = 1;

  /* get the items for given pageno */
  // let singlePage = getItemsForPage(paginatedList, pageno)
 
  /* build a list of hrefs for the paginated list, using "/blog" as base href url */
  let hrefList = buildHrefsForPages("/blog", paginatedList);
}
