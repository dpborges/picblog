import React from 'react'
import Link   from 'next/link';
import PgntnItem from './PgntnItem';
import PrevLink from './PrevLink';
import NextLink from './NextLink';
import { getPrevPage, getNextPage, 
         buildDisplayGroupForCurPage, 
         getGroupStartPage, getNumDisplayGroups}  from './paginatorFunctions';

import styles from '../../../styles/blogdetail.module.scss';
import { appTrace, fileTrace } from '../../../utils/logging';

const trace = appTrace;

// ****************************************************************************************
// Paginator component displays a pagination component based on 3 props: hrefList, displaySize,
// and current page. 
// hrefList  is an array of urls (eg [ "/blog/page/1", "/blog/page/2", ... ] built with
//           the help of a pagination utility (refer to /utils/pagination.js).
// displaySize is the number of items you want to display between the Prev and Next links
// curPage   is current page number for content currently displayed above Paginator. 
//           (See renderPgntnItems() function below).        
// ****************************************************************************************
export default function Paginator({hrefList, displaySize, curPage}) {
  // trace("> Paginator function");
  // trace(`    Paginator hrefList:  ${hrefList}`);
  // trace(`    Paginator displaySize: ${displaySize}`);
  // trace(`    Paginator curPage: ${curPage}`);

  /* convert curPage String to number */
  curPage = parseInt(curPage, 10);

  /* calc prev and next page no's based on curPage; subtract 1 to align with zero based array */
  const prevPageno = getPrevPage(curPage) - 1;     /* subtract 1 if indexing the zero based hrefList array  */
  const nextPageno = getNextPage(curPage, hrefList.length) - 1 ; /* same commment as above */
  trace(`    Paginator prevPageno:  ${prevPageno}`);
  trace(`    Paginator nextPageno:  ${nextPageno}`);
  trace(`    hrefList[prevPageno]:  ${hrefList[prevPageno]}`);

  return (
    <div className={styles.blogListItemsContainer} >
      <div>
        <div  style={{display: 'flex', justifyContent: 'center' }}>
          <PrevLink  urlStr={hrefList[prevPageno]} />
           {renderPgntnItems(hrefList, displaySize, curPage)}
          <NextLink  urlStr={hrefList[nextPageno]} />
        </div>
      </div>  
    </div>
  )
}

// ****************************************************************************************
// Helper functions 
// ****************************************************************************************

/* heler function used to render pagination items between the Prev and Next links. The current page
   is set to active */
const renderPgntnItems = (hrefList, displaySize, curPage) => {
  trace("> renderPgntnItems function");
  trace(`    renderPgntnItems hrefList: ${hrefList}`);
  trace(`    renderPgntnItems displaySize: ${displaySize}`);
  trace(`    renderPgntnItems curPage: ${curPage}`);
  
  /* returns the displayGroup the curPage  is in. It returns in the form of an object 
  groupNum, groupStart and groupEnd range */
  const displayGroup = buildDisplayGroupForCurPage(curPage, hrefList, displaySize);
  // trace(`display group for page no ${curPage} is ${JSON.stringify(displayGroup)}`)

  let pageStart = displayGroup.groupStart - 1 ; /* subtract 1 to align with zero based hrefList array */
  // let pageStart = displayGroup.groupStart; /* subtract 1 to align with zero based hrefList array */
  let pageEnd   = displayGroup.groupEnd;
  trace(`     pageStart ${pageStart}`);
  trace(`     pageEnd  ${pageEnd}`);
  const pgntnItems = [];
  // trace(`     entering for loop`);
  for (; pageStart < pageEnd; pageStart++) {
      // trace(`     ${pageStart} <=  ${pageEnd}`);
      let hrefListIdx = pageStart + 1; /* add 1 to zero based array index to align with page numbers */
      // let hrefListIdx = pageStart; /* add 1 to zero based array index to align with page numbers */
      let isCurPage = parseInt(curPage, 10) === parseInt(hrefListIdx,10) ? true  : false;
      let jsx = isCurPage 
      ? <PgntnItem urlStr={hrefList[pageStart]} pageNum={pageStart + 1} key={pageStart + 1 } active />  /* add 1 to align page nummber with 0 based hrefList array */
      : <PgntnItem urlStr={hrefList[pageStart]} pageNum={pageStart + 1} key={pageStart + 1} />;
      pgntnItems.push(jsx);
  }
  // trace(`     pgntnItems  ${JSON.stringify(pgntnItems,null,2)}`);
  return pgntnItems;
}



/* calculates number of display groups, their start and end, then determines what group curPage is in */
const findDisplayGroupForCurPage = (curPage, hrefList, displaySize) => {

  curPage = parseInt(curPage, 10);
  /* if display size is greater than number of items in hreflist, make display size same as hrefList size */
  displaySize = displaySize > hrefList.length ? hrefList.length : displaySize;

  const numDisplayGroups = Math.ceil(hrefList.length / displaySize );  /* get number of display groups */
  
  /* loop through each display group, calculate start and end and see if curPage is in that group's range */
  for (let groupNum = 1; groupNum <= numDisplayGroups; groupNum++) {
    let groupStartPage = getGroupStartPage(groupNum, hrefList, displaySize, groupNum);
    let groupEnd       = getGroupEndPage(groupStartPage, hrefList, displaySize);

    if (groupEnd > hrefList.length) { groupEnd = hrefList.length}; /* if  displaySize exceeds size of hrefList, then reset it to hrefList size as this is the last group */
    
    if (curPage >= groupStart && curPage <= groupEnd) {
      return { groupNum, groupStart, groupEnd }
    } 
  }
}