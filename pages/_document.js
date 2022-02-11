import Document, { Html, Head, Main, NextScript } from 'next/document';

//***************************************************************************** */
// link in head tag loads icons for "Simple Stepwise Process" section in features
// page.
//***************************************************************************** */

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
          <link rel="stylesheet" href="/images/icofont/icofont.min.css"></link>
          <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js" />
          <script
          dangerouslySetInnerHTML={{
              __html: `
                (adsbygoogle = window.adsbygoogle || []).push({
                    google_ad_client: "ca-pub-6803639993576143",
                    enable_page_level_ads: true
                });
               `
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument