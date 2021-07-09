import React from 'react'

import styles from './styles.module.scss';

// BannerTitleComponent defines the quadrant where you want your banner title
// to be positioned using absolute positioning. It currently supports position: 
// top left (tl), top right (tr), bottom left (bl), bottom right(br), and center (c). 
// Once selected you have the ability to move/adjust banner title within that container.
// You need to create the actual bannerTitle component on your page, and pass it down 
// to this component for positioning.

export default function index(props) {

  let { children, position } = props;

  /* set the default position to top  left */
  position = !position ? 'tl' : position;

  /* set the position classname based on based on position prop */
  switch (position) {
    case 'tl':
      position = 'top-left-container';     break;
    case 'tr':
      position = 'top-right-container';    break;
    case 'br':
      position = 'bottom-right-container'; break;
    case 'bl':
      position = 'bottom-left-container';  break; 
    case 'c':
      position = 'center-container';                 break; 
    case 'fc':
      position = 'full-container';                 break; 
    default:
      position = 'top-left-container';   /* in case something other supported values is passed */
  }
  
  return (
    <div className={styles[position]} >
      <div className={styles['banner-title']}>
        {children}
      </div>
    </div>
  )
}
