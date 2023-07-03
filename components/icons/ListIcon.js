import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList } from '@fortawesome/pro-light-svg-icons';

import styles1 from '../../styles/faicon.module.scss';

export const ListIcon = () => (
<div>
  <FontAwesomeIcon className={styles1.listIcon} icon={faList} />
</div>
)

