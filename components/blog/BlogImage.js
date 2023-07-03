import React from 'react'; 
import Image from 'next/image';
// import Image from '../../common/CustomImage'; // use custom image load to be able to use export

import styles from '../../styles/blogdetail.module.scss';

const imageLoader = ({ src, width=500, height=300 }) => {
  return `http://localhost:3000/${src}?w=${width}&h=${height}`
}

export default function BlogImage({src, alt}) {
  return (
    <div style={{width: '100%'}}>
        <Image src={src} 
          alt={alt}
          width={500}
          height={300}
          layout='responsive'
          priority='true'
          loader={imageLoader}
        />
     </div>
  )
}
