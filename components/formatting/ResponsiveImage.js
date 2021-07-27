import styles1 from '../../styles/features.module.scss';
import Image   from 'next/image';

// Responsive Image typically used instead of background image in a banner 
// with image and text overlay.

const ResponsiveImage = ({width, height, src, alt, quality}) => {

  quality = !quality ? 75 : quality;

  return (
    <Image src={src} style={{zIndex: '-1', position: 'relative'}}
      alt={alt}
      width={width}
      height={height}
      layout="responsive"
      quality={quality}
    />
  )
};

export default ResponsiveImage;