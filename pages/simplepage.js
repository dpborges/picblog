import React, { Fragment } from 'react';
import Paginator from './Paginator';

// Paginator is expecting a list of  Hrefs Like so
const hrefList =  [
  "/blog/list/1",
  "/blog/list/2",
  "/blog/list/3",
  "/blog/list/4",
  "/blog/list/5",
  "/blog/list/6",
  "/blog/list/7",
  "/blog/list/8",
  "/blog/list/9",
  "/blog/list/10",
  "/blog/list/11",
  "/blog/list/12",
  "/blog/list/13"
];

const curPage = 8;


const renderPageItems = (pageItems) => {
  const jsx  = [];
  pageItems.map((pageitem) => {
    jsx.push(<h3>-- {pageitem.title}</h3>)
  })
  return jsx;
}


export default function simplepage() {

  const pageItems = [ {title: "First title"}, {title: "Second title"}];

  return (
    <Fragment>
      <h1>
        This is Page {curPage}
      </h1>

      {renderPageItems(pageItems)}

      <Paginator displaySize={5} hrefList={hrefList} curPage={curPage} />
      
    </Fragment>
  )
}
