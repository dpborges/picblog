import React from 'react'

import styles from './linkbutton1.module.scss';

/* This is a link rendered as a button with animation effect (whitebar floating across on hover ) */
export default function index ({link, linkText }) {
  
  return (
    <a className={styles.forLinkButton1}  href={link}>{linkText} </a>
  )
  
  // return (  
  //   <div  className={styles.forLinkButton1Container}> /* remove this as container was display when enabled */
  //     <a className={styles.forLinkButton1}  href={link}>{linkText} </a>
  //   </div>
  // )
}
