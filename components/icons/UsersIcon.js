import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers } from '@fortawesome/pro-light-svg-icons';

import styles1 from '../../styles/faicon.module.scss';

export const UsersIcon = () => (
  <div >
    <FontAwesomeIcon  className={styles1.usersIcon} icon={faUsers} />
  </div>
)


