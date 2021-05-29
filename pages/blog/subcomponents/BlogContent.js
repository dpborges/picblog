import react from 'react';
import React from 'react';
import {MDXProvider} from '@mdx-js/react';
import MDX from '@mdx-js/runtime';
// import styles from '../styles/blogdetail.module.scss';
import MobileAd from './MobileAd';
import BlogImage from './BlogImage';
import BlogInfo  from './BlogInfo';
import getContentMetadata from '../../api/contentmgr/getContentMetadata';
import { shortMonthName, dayOfMonth } from '../../../utils/date';

import styles from '../../../styles/blogdetail.module.scss';


const Paragraph = props => <p className={styles.content} {...props} />
const H1Header = props => <h1 style={{color: 'red'}} {...props} />
const H2Header =  props => <h2 className={styles.h2tag} {...props} />
const BlueAnchorTag = props  => <a className={styles.blueAnchor} {...props} />
const UnorderedList = props  => <ul className={`${styles.indentList} ${styles.ulSpacing} ${styles.content}`} {...props} />
const ListItem =    props  => <li className={styles.squareBullet} {...props} />


const components = {
    p:  Paragraph,
    h1: H1Header,
    h2: H2Header,
    a:  BlueAnchorTag,
    ul: UnorderedList,
    li: ListItem,
    // MobileAd,
    // BlogImage
}

// const scope = {
//     MobileAd: props => <MobileAd src={props.image} alt={props.alt} />
// }

export default (props) => {
  // console.log(`>> Inside BlogContent.js`);
  // console.log(`props.metadata ${JSON.stringify(props.metadata)}`)
  let { title, createDate, images, excerpt  } =  props.metadata;
  let { mdxSource, showAd  } = props;

  let month = shortMonthName(new Date(createDate + "T09:00:00Z"));
  let day   = dayOfMonth(new Date(createDate + "T09:00:00Z"));

  const adStyle = {forTablet: {marginTop: '3rem'}, forMobile: {marginTop: '3rem'}};

  let otherComponents = {
    MobileAd:  () => <MobileAd showAd={showAd} adStyle={adStyle} />,
    BlogImage: () => <BlogImage src={images[0].src} alt={images[0].alt} />,
    BlogInfo: () => <BlogInfo title={title} month={month} day={day}  />
  }

  return (
    <MDXProvider components={{...components, ...otherComponents}}  >
      <MDX>{mdxSource}</MDX>
    </MDXProvider>
  )

}