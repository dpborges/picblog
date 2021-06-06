import React from 'react'; 
import Image from 'next/image';

import styles from '../../styles/blogdetail.module.scss';

export default function BlogImage({src, alt}) {
  return (
    <div style={{width: '100%'}}>
        <Image src={src} 
          alt={alt}
          width={500}
          height={300}
          layout='responsive'
          priority='true'
        />
     </div>
  )
}
