import React from 'react';

import styles from './test.module.scss';

const ComponentA = function () {
  return <div>Mobile component </div>
}

const ComponentB = function () {
  return <div>Desktop component</div>
}


export default function ABToggle() {
  return (
    <div style={{width: '100%', border: '1px solid grey'}}>
      <div className={styles.showOnPhone}>
        <ComponentA />
      </div>
      <div className={styles.showOnDesktop}>
        <ComponentB />
      </div>
    </div>
  )
}