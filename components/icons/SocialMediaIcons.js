import React from 'react';
import { faTwitter, faFacebookF, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles1 from '../../styles/faicon.module.scss';

export const TwitterIcon = () => (
  <div>
    <FontAwesomeIcon className={styles1.twitterIcon} icon={faTwitter} />
  </div>
)

export const FacebookIcon = () => (
  <div  >
    <FontAwesomeIcon className={styles1.facebookIcon} icon={faFacebookF} />
  </div>
)

export const LinkedinIcon = () => (
  <div  >
    <FontAwesomeIcon className={styles1.linkedinIcon} icon={faLinkedinIn} />
  </div>
)