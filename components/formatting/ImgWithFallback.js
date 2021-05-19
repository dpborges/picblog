import React from 'react';
// The picture tag allows you to use the nextgen Webp image format. For browsers 
// that do not support Webp, it will fallback to .jpg image you provide.

export const ImgWithFallback =  ({
  src,
  fallback,
  type = 'image/webp',
  ...delegated
}) => {
  return (
    <picture>
      <source srcSet={src} type={type} />
      <img src={fallback} {...delegated} />
    </picture>
  );
};

export default ImgWithFallback;