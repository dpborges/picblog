import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt } from '@fortawesome/pro-light-svg-icons';

import styles1 from '../../styles/faicon.module.scss';

export const CalendarIcon = () => (
    <div>
      <FontAwesomeIcon className={styles1.calendarIcon} icon={faCalendarAlt} />
    </div>
)

