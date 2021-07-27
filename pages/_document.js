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
          <link rel="stylesheet" href="myProjects/webProject/icofont/css/icofont.min.css"></link>
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