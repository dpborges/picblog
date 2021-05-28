import React from 'react';
import { chunk } from 'lodash';
import { getMetadataList, sortyByStringProp, getItemsForPage, buildHrefsForPages, getPageLinks} from '../utils/pagination';
import { getDbCount } from '../utils/db';
import { wordCount } from '../utils/content';

export default function Pagination(props) {
  let { hrefList, pageItems } = props;

  return (
    <div style={{width: '100%', border: '1px solid grey'}}>
      <pre>{JSON.stringify(hrefList, null, 2)}</pre>
      <div>&nbsp;</div>
      <pre>{JSON.stringify(pageItems, null, 2)}</pre>
    </div>
  )
}

export async function getStaticProps(context) {
  console.log('>> Inside getStaticProps')

  let PAGE_NUM   = 3;

  let PAGE_LIMIT = 2;

  /* Create metadata array of items and obtain count */
  let metadataList     = await getMetadataList();
  let totalItems = metadataList.length;

  /* sort metadata array by given property and specified order */
  sortyByStringProp(metadataList, 'createDate', 'desc'); /* modifies original array */

  let numPages =  Math.ceil(totalItems / PAGE_LIMIT); /* Calculate number of pages*/
  let paginatedList = chunk(metadataList, PAGE_LIMIT);  /* create a paginated list based on PAGE_LIMIT */
    
  let pageItems = getItemsForPage(paginatedList, PAGE_NUM); /* get item for a single page */
 
  let hrefList = buildHrefsForPages("/blog", paginatedList);
  console.log("    hrefList ", hrefList);

  return { 
    props: {
      hrefList,
      pageItems

    } 
  };

}



