import React from 'react'; 
import NextImage from 'next/image';
// import Image from '../../common/CustomImage'; // use custom image load to be able to use export

// import styles from '../../styles/blogdetail.module.scss';

// const imageLoader = ({ src, width=500, height=300 }) => {
//   return `http://localhost:3000/${src}?w=${width}&h=${height}`
// }

export default function Image(props) {
  
  const src    = props.src;
  const width  = props.width;
  const height = props.height;
  const quality = '90';
  
  const imageLoader = function bindParamsToImageLoader(src, width, quality) {
  // const imageLoader= (src, width, quality) => {
    return function () {
      return `http://localhost:3000/${src}?width=${width}`
    }
  }

  // const width
  return (
    <div style={{width: '100%'}}>
        <NextImage 
          {...props}
          loader={imageLoader(src, width, quality)}
        />
     </div>
  )

  // Orignal source
  // return (
  //   <div style={{width: '100%'}}>
  //       <NextImage src={src} 
  //         alt={alt}
  //         width={width}
  //         height={height}
  //         // layout='responsive'
  //         // priority='true'
  //         loader={imageLoader(src, alt, width, height)}
  //       />
  //    </div>
  // )

}
