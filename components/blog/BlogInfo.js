import React from 'react'; 
import Image from 'next/image';

import styles from '../../styles/blogdetail.module.scss';

export default function BlogInfo({month, day, title}) {
  return (
    <div className="blog-info">
      <div className="date-box">
      {day} <span className="month">{month}</span>
      </div>
      <div className="title-meta">
          <h1 className={styles.blogDetailTitle}>{title}</h1>
      </div>
    </div>
  )
}
