import react from 'react';
import React from 'react';
import {MDXProvider} from '@mdx-js/react';
import getContentMetadata from '../../api/contentmgr/getContentMetadata';
import { shortMonthName, dayOfMonth } from '../../../utils/date';
import Content from '../../../markdown/post-calc-food.mdx';

import styles from '../../../styles/blogdetail.module.scss';

/* Style used to display Ad on tablet and on mobile */
const adStyle = {forTablet: {marginTop: '3rem'}, forMobile: {marginTop: '3rem'}};

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
    li: ListItem
}

export default (props) => {
  // console.log(`>> Inside BlogContent.js`);
  // console.log(`props.metadata ${JSON.stringify(props.metadata)}`)
  let { title, createDate, images  } =  props.metadata;

  return (
    <MDXProvider components={components}  >
      <Content showAd={true} adStyle={adStyle}
        title={title}
        day={dayOfMonth(new Date(createDate))}
        month={shortMonthName(new Date(createDate))}
        image={images[0].src}
        alt={images[0].alt}
      />
    </MDXProvider>
  )

}
