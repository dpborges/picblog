import React from 'react';

import styles from '../../styles/navtoggle.module.scss';

// *********************************************************
// Component used to toggle your nav component from text nav
// links to a burger menu based on some breakpoint specified
// in css media queries.
// *********************************************************

export default function NavToggle({component1, component2}) {

  const ComponentA = component1;
  const ComponentB = component2;

  return (
    <div>
      <div className={styles.showOnMobile}>
        <ComponentA />
      </div>
      <div className={styles.showOnDesktop}>
        <ComponentB />
    </div>
    </div>
  )
}
