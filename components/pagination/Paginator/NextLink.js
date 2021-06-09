import React from 'react';
import PropTypes from 'prop-types'
import Link   from 'next/link';

import styles from './styles.module.scss';

// *********************************************************
// Next simply renders a link to next page
// Input:  urlStr -  string (eg. "/blog/<pagenum>") representing the url to next page
//         nextIndicator - string with text or GT symbol
// Output: a styled NextLink component.
// *********************************************************
export default function NextLink(props) {
  const { urlStr, nextIndicator } = props;

  return (
    <Link href={urlStr} passHref >
      <a className={`${styles.forLink} ${styles.bookendSize}`}>{nextIndicator}</a>
    </Link>
  )
}

NextLink.propTypes = {
  urlStr:   PropTypes.string.isRequired,
  nextIndicator:  PropTypes.string.isRequired
}

NextLink.defaultProps = {
  urlStr:   "/",
  nextIndicator:  "Next"
}