import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons';

import styles from './styles/envelope-square.module.scss';

export const EnvelopeSquareIcon = (size) => {

    const defaultStyle = styles.envelopeSqTiny;
    const iconStyle = size === "tiny" ? styles.envelopeSqTiny : defaultStyle;

    return (
      <div className={iconStyle}>
          <FontAwesomeIcon icon={faEnvelopeSquare} />
      </div>
    )
}

export default EnvelopeSquareIcon;

