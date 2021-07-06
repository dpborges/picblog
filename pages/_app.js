// import '../styles/globals.css'
import '../styles/globals.scss';
import Head from 'next/head';
// import '../styles/settings.scss';
// import '../styles/ads.scss';
// import '../styles/reusable-classes.scss';
// import '../styles/rosystyle.scss';
// import '../styles/blogdetail.scss';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faTwitter, faFacebookF, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
// import { faCalendarAlt, faHandHoldingHeart } from '@fortawesome/pro-light-svg-icons';
library.add(faTwitter, faFacebookF, faLinkedinIn);

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0 maximum-scale=1.0" />
        <title>Pitch In Club</title>
        <link rel="icon" href="/favicon-16.ico" sizes="16x16" type="images/x-icon" />
        <link rel="icon" href="/favicon-32.ico" sizes="32x32" type="images/x-icon" />
        <link rel="icon" href="/favicon-192.ico" sizes="192x192" type="images/x-icon" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
        <link href="https://fonts.googleapis.com/css?family=Lato:400,700,900|PT+Sans:400,700|Roboto:300,400,500" rel="stylesheet" />
      </Head>
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp


