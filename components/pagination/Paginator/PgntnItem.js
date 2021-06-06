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
export default function PgntnItem(props) {
  const { urlStr, pageNum, active } = props;

  const isActive = active ? styles.activeLink : {};

  return (
    <Link href={urlStr} passHref >
      <a className={`${styles.forLink} ${styles.itemSize} ${isActive}`}>{pageNum}</a>
    </Link>
  )
}

PgntnItem.propTypes = {
  urlStr:   PropTypes.string.isRequired,
  pageNum:  PropTypes.number.isRequired
}

PgntnItem.defaultProps = {
  urlStr:   "/",
  pageNum:  1
}