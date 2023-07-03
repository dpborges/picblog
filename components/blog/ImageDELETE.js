import React from 'react'; 
import NextImage from 'next/image';
// import Image from '../../common/CustomImage'; // use custom image load to be able to use export

import styles from '../../styles/blogdetail.module.scss';

// const imageLoader = ({ src, width=500, height=300 }) => {
//   return `http://localhost:3000/${src}?w=${width}&h=${height}`
// }

export default function Image({src, alt, width=500, height=300 }) {
  
  const customLoader = function bindParamsToImageLoader(src, width, height) {
    return function (src, width, height) {
      return `http://localhost:3000/${src}?w=${width}&h=${height}`
    }
  }

  return (
    <div style={{width: '100%'}}>
        <NextImage src={src} 
          alt={alt}
          width={500}
          height={300}
          // layout='responsive'
          // priority='true'
          loader={customLoader}
        />
     </div>
  )
}
