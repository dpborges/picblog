import React from 'react'
import Link   from 'next/link';
import PgntnItem from './PgntnItem';
import PrevLink from './PrevLink';
import NextLink from './NextLink';

import styles from '../../styles/blogdetail.module.scss';

// ****************************************************************************************
// Paginator component displays a pagination component based on 3 props: hrefList, displaySize,
// and current page. 
// hrefList  is an array of urls (eg [ "/blog/list/1", "/blog/list/2", ... ] built with
//           the help of a pagination utility (refer to pagination.js).
// displaySize is the number of items you want to display between the Prev and Next links
// curPage   is current page number for content currently displayed above Paginator. 
//           (See renderPgntnItems() function below).        
// ****************************************************************************************
export default function Paginator({hrefList, displaySize, curPage}) {

  /* calc prev and next page no's based on curPage; subtract 1 to align with zero based array */
  const prevPageno = getPrevPage(curPage) - 1 ;     
  const nextPageno = getNextPage(curPage, hrefList.length) - 1;
  

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
  
  /* returns the displayGroup the curPage  is in. It returns in the form of an object 
     groupNum, groupStart and groupEnd range */
  const displayGroup = findDisplayGroupForCurPage(curPage, hrefList, displaySize);
  console.log(`display group for page no ${curPage} is ${JSON.stringify(displayGroup)}`)

  let pageStart = displayGroup.groupStart - 1 ; /* subtract 1 to align with zero based hrefList array */
  let pageEnd   = displayGroup.groupEnd;
  const pgntnItems = [];
  for (; pageStart < pageEnd; pageStart++) {
      let hrefListIdx = pageStart + 1; /* add 1 to zero based array index to align with page numbers */
      let isCurPage = parseInt(curPage, 10) === parseInt(hrefListIdx,10) ? true  : false;
      let jsx = isCurPage 
      ? <PgntnItem urlStr={hrefList[pageStart]} pageNum={pageStart + 1} key={pageStart + 1 } active />  /* add 1 to align page nummber with 0 based hrefList array */
      : <PgntnItem urlStr={hrefList[pageStart]} pageNum={pageStart + 1} key={pageStart + 1} />;
      pgntnItems.push(jsx);
  }
  return pgntnItems;
}


/* helper to calculate previous page number based on curPage  */ 
const getPrevPage = (curPageString) => {
  let curPage = parseInt(curPageString, 10);
  return curPage > 1 ? curPage - 1 : 1; 
}

/* helper to calculate next page number based on curPage  */ 
const getNextPage = (curPageString, numPages) => {
  let curPage = parseInt(curPageString, 10);
  let nextPage = curPage === numPages ? curPage : curPage + 1; 
  return nextPage;
}

const getGroupStart = (groupNum, hrefList, displaySize) => {
  return ((groupNum * displaySize) - displaySize) + 1;
}

/* calculates number of display groups, their start and end, then determines what group curPage is in */
const findDisplayGroupForCurPage = (curPage, hrefList, displaySize) => {
  
  const numDisplayGroups = Math.ceil(hrefList.length / displaySize);  /* get number of display groups */
  
  /* loop through each display group, calculate start and end and see if curPage is in that group's range */
  for (let groupNum = 1; groupNum <= numDisplayGroups; groupNum++) {
    let groupStart = getGroupStart(groupNum, hrefList, displaySize, groupNum);
    let groupEnd   = (groupStart + displaySize) - 1;
    if (groupEnd > hrefList.length) { groupEnd = hrefList.length}; /* if adding displaySize exceeds size of hrefList, then reset it to hrefList size as this is the last group */
    if (curPage >= groupStart && curPage <= groupEnd) {
      return { groupNum, groupStart, groupEnd }
    } 
  }

}