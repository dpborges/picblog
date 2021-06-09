import React from 'react';
import PropTypes from 'prop-types'
import Link   from 'next/link';

import styles from './styles.module.scss';

// *********************************************************
// Next simply renders a link to next page
// Input:  urlStr -  string (eg. "/blog/<pagenum>") representing the url to next page
//         prevIndicator - string with text or LT symbol
// Output: a styled PrevLink  component.
// *********************************************************
export default function PrevLink(props) {
  const { urlStr, prevIndicator } = props;

  return (
    <Link href={urlStr} passHref >
      <a className={`${styles.forLink} ${styles.bookendSize}`}>{prevIndicator}</a>
    </Link>
  )
}

PrevLink.propTypes = {
  urlStr:   PropTypes.string.isRequired,
  prevIndicator:  PropTypes.string.isRequired
}

PrevLink.defaultProps = {
  urlStr:   "/",
  prevIndicator:  "Prev"
}