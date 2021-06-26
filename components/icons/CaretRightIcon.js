import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';

import styles from './styles/caret-right.module.scss';

export const CaretRightIcon = (size) => {

  const defaultStyle = styles.caretRightTiny;
  const iconStyle = size === "small" ? styles.caretRightSmall : defaultStyle;

  return (
    <div className={styles.caretRightTiny}>
        <FontAwesomeIcon icon={faCaretRight} />
    </div>
  )
}

export default CaretRightIcon;

