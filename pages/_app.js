// import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css'
import '../styles/globals.scss';
import Head from 'next/head';
import Script from "next/script";
import * as gtag from "../components/advertisements/GA4/gtag"
import { GA_MEASUREMENT_ID } from '../components/advertisements/GA4/gtag';
import { useRouter } from "next/router";
import { useEffect } from 'react';
// import '../styles/settings.scss';
// import '../styles/ads.scss';
// import '../styles/reusable-classes.scss';
// import '../styles/rosystyle.scss';
// import '../styles/blogdetail.scss';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTwitter, faFacebookF, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import getAppConfigParm  from '../config/AppConfig';

// import { faCalendarAlt, faHandHoldingHeart } from '@fortawesome/pro-light-svg-icons';
library.add(faTwitter, faFacebookF, faLinkedinIn);

function MyApp({ Component, pageProps }) {

  const router = useRouter();

  /* track google analytics for each route only for test or prod   */
  useEffect(() => {
    let env = getAppConfigParm("env");
    if (env === 'test' || env === 'prod') {
      const handleRouteChange = (url) => {
        console.log("PAGE URL ", url)
        gtag.pageview(url);
      };
      router.events.on("routeChangeComplete", handleRouteChange);
      return () => {
        router.events.off("routeChangeComplete", handleRouteChange);
      };
    }
  }, [router.events]);

  return (
    <>
      <Script strategy="afterInteractive" src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`} />
      <Script 
        id='google-analytics'
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}', {
            page_path: window.location.pathname,
          });
          `
        }}
      />
      <div>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1.0 maximum-scale=1.0" />
          <title>Pitch In Club</title>
          <link rel="icon" href="/favicon-16.ico" sizes="16x16" type="images/x-icon" />
          <link rel="icon" href="/favicon-32.ico" sizes="32x32" type="images/x-icon" />
          <link rel="icon" href="/favicon-192.ico" sizes="192x192" type="images/x-icon" />
          {/* <link rel="shortcut icon" href="/favicon-32.ico"  /> */}
          <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
          <link href="https://fonts.googleapis.com/css?family=Lato:400,700,900|PT+Sans:400,700|Roboto:300,400,500" rel="stylesheet" />
        </Head>
        <Component {...pageProps} />
      </div>
    </>
  )
}

export default MyApp


