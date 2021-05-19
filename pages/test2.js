import React from 'react';

import styles from './test.module.scss';

export default function test2() {

 let textClass = "myGreenClass";

 let theStyle = styles[textClass];


  return (
    <div>
      <div className={`${styles.myBlueClass} ${styles.myBigClass}`}>
        Dan Borges
      </div>
      <div className={theStyle}>
        XXXXXXX
      </div>
    </div>
  )
}
