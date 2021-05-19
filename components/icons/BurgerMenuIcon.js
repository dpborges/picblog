import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/pro-regular-svg-icons';

import styles from '../../styles/burgermenu-icon.module.scss';

export const BurgerMenuIcon = (props) => {
    return (
      <div className={styles.burgermenuIconContainer} >
          <div className={styles.burgermenuIcon} >
              <FontAwesomeIcon icon={faBars} />
          </div>
      </div>
    )
}

export default BurgerMenuIcon;
