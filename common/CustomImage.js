import NextImage from "next/image";

//https://stackoverflow.com/questions/70500084/how-to-export-static-images-on-nextjs

// opt-out of image optimization, no-op
const customLoader = ({ src, width, height, quality }) => {
  return `http://localhost:3000/${src}?w=${width}&q=${quality || 75}`
  // return src
}
// http://localhost:3000/images/no-credit-card-required-image.jpg
export default function Image(props) {
  console.log("Image Props")
  console.log(props)
  return (
    <NextImage
      {...props}
      loader={customLoader}
    />
  );
}
