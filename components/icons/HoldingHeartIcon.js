import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandHoldingHeart} from '@fortawesome/pro-light-svg-icons';

import styles1 from '../../styles/faicon.module.scss';

export const HoldingHeartIcon = () => (
  <div>
    <FontAwesomeIcon className={styles1.holdingHeartIcon} icon={faHandHoldingHeart} />
  </div>
)

