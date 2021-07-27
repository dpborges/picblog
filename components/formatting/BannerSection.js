import ResponsiveImage from './ResponsiveImage';
import BannerTitleContainer from '../../components/formatting/BannerTitleContainer';

import styles1 from "../../styles/features.module.scss";

// This component renders an image with a text overlay. It can be used for 
// banner sections on CTA pages. The title can be displayd in 
// one of the four quadrants of the image or at the center of the image.
// You can indicate where you want the title to appear by setting the bannerTitlePosition
// prop of the BannerTitleContainer. The index.js file of BannerTitleContainer 
// lists all the supported prop values for the titlePositionProp.
// Note, each quadrant (aka container) takes up 25% of the area of the image, hence
// you have ability to position the title anywhere within the quadrant, or center.
// Usage
// 1) Set the image props on your BannerSection component on your page
// 2) Set the bannerTitlePosition prop to where your want your title to appear (eg one of the
//    quadrants or the center)
// 3) Create a title component (with styling) ON YOUR PAGE. Render the component on your
//    page and pass it in as the bannerTitleJsx prop.
//
// Food for thought...If I need to style the image component (eg position, clipping, etc), 
// I may consider adding a customStyles.scss file and have it live in same folder as 
// BannerSection.js, import styles here, and create a prop that selects the customImageStyle 
// of choice.

const BannerSection = (props) => {

  let { bannerTitleJsx, imgSrc, imgHeight, imgWidth, imgAlt, 
          imgQuality, imgBgColor, bannerTitlePosition, opacity } = props;

  opacity = !opacity ? 1.0 : opacity;

  return (
    <div s>
      <div style={{ opacity: opacity}}>
      {/* <div > */}
        <ResponsiveImage 
          src={imgSrc}
          width={imgWidth} height={imgHeight} alt={imgAlt} quality={imgQuality}
        />
      </div>
      <BannerTitleContainer position={bannerTitlePosition}>
          {bannerTitleJsx}
      </BannerTitleContainer>
    </div>
 )
}

export default BannerSection