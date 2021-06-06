import React from 'react';
import PropTypes from 'prop-types'
import Link   from 'next/link';

import styles from './styles.module.scss';

// *********************************************************
// A pagination item is simply a styled link 
// Input:  url string (eg. "/blog/pg1") 
//         page number to display with component
//         active prop with no value; just the presence of prop is enuf to indicate its active
// Output: a styled Pagination Item.
// *********************************************************
export default function PrevLink(props) {
  const { urlStr, pageNum } = props;

  return (
    <Link href={urlStr} passHref >
      <a className={`${styles.forLink} ${styles.bookendSize}`}>{pageNum}</a>
    </Link>
  )
}

PrevLink.propTypes = {
  urlStr:   PropTypes.string.isRequired,
  pageNum:  PropTypes.string.isRequired
}

PrevLink.defaultProps = {
  urlStr:   "/",
  pageNum:  "Prev"
}