import React from 'react';
import Image from 'next/image';

import styles from './pagebanner.module.scss'

export default function index(props) {
  return (
    <div className={styles.bannerContainer}>
      
      <Image src={"/images/stacked-hands-for-unity.jpg"} 
          layout="fill"
          alt={"stacked hands for unity"}
          style ={{ objectFit: 'cover'}}
          priority='true'
      />

      <div className={styles.bannerTextContainer}>
        <div className={styles.mainTitle}>
            {props.title}
        </div>
        <div className={styles.subtitle}>
            {props.subtitle}
        </div>
      </div>
    </div>
  )
}
