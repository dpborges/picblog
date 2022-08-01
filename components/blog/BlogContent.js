import react from 'react';
import React from 'react';
import {MDXProvider} from '@mdx-js/react';
import MDX from '@mdx-js/runtime';
import MobileAd     from './MobileAd';
import DesktopAd    from './DesktopAd';
// import MobileAdSquare from './MobileAdSquare';
import BlogImage from './BlogImage';
import BlogInfo  from './BlogInfo';
// import getContentMetadata from '../../pages/api/contentmgr/getContentMetadata';
import { shortMonthName, dayOfMonth } from '../../utils/date';
import styles from '../../styles/blogdetail.module.scss';

const Paragraph = props => <p className={styles.content} {...props} />
const H1Header = props => <h1 style={{color: 'red'}} {...props} />
const H2Header =  props => <h2 className={styles.h2tag} {...props} />
const H3Header =  props => <h2 className={styles.h3tag} {...props} />
const BlueAnchorTag = props  => <a className={styles.blueAnchor} {...props} />
const UnorderedList = props  => <ul className={`${styles.indentList} ${styles.ulSpacing} ${styles.content}`} {...props} />
const OrderedList = props  => <ol className={`${styles.indentList} ${styles.ulSpacing} ${styles.content}`} {...props} />
const ListItem =    props  => <li className={`${styles.squareBullet} ${styles.numbered}`} {...props} />


const components = {
    p:  Paragraph,
    h1: H1Header,
    h2: H2Header,
    h3: H3Header,
    a:  BlueAnchorTag,
    ul: UnorderedList,
    ol: OrderedList,
    li: ListItem
}

export function BlogContent (props) {

  // console.log(`>> Inside BlogContent.js`);
  // console.log(`props.metadata ${JSON.stringify(props.metadata)}`)
  let { title, createDate, images, excerpt  } =  props.metadata;
  let { mdxSource, showAd } = props;

  let month = shortMonthName(new Date(createDate + "T09:00:00Z"));
  let day   = dayOfMonth(new Date(createDate + "T09:00:00Z"));

  const adStyle = {forTablet: {marginTop: '3rem'}, forMobile: {marginTop: '3rem'}, forDesktop: {marginTop: '3rem', marginBottom: '1rem'}};
  const adTypeDefault = {forTablet: "in-feed-horizontal", forMobile: "mobile-leader-board", forDesktop:"in-feed-horizontal" };
  const adTypeSquare  = {forTablet: "medium-rectangle",   forMobile: "medium-rectangle", forDesktop:"medium-rectangle"  };
  const adTypeInFeedHoriz  = { forDesktop:"in-feed-horizontal"  };

  let otherComponents = {

    MobileAd:  () => <MobileAd  
      showAd={showAd} adStyle={adStyle} adType={adTypeDefault}
    />,
    MobileAdSquare: () => <MobileAd 
      showAd={showAd} adStyle={adStyle} adType={adTypeSquare}
    />,
    DesktopAdSquare: () => <DesktopAd 
      showAd={showAd} adStyle={adStyle} adType={adTypeSquare}
    />,
    DesktopAdHoriz: () => <DesktopAd 
      showAd={showAd} adStyle={adStyle} adType={adTypeInFeedHoriz}
    />,
    BlogImage: () => <BlogImage src={images[0].src} alt={images[0].alt} />,
    BlogInfo: () => <BlogInfo title={title} month={month} day={day}  />
  }

  return (
    <MDXProvider components={{...components, ...otherComponents}}  >
      <MDX>{mdxSource}</MDX>
    </MDXProvider>
  )

}
