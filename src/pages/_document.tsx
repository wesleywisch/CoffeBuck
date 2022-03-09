import Document, { Html, Head, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      }
    } finally {
      sheet.seal()
    }
  }

  render() {
    return (
      <Html lang="pt-BR">
        <Head>

        <meta charSet="utf-8" />
        <meta name='theme-color' content='#1B1B1B' />
        <link rel="shortcut icon" href="/favicon-32x32.png" type="image/png" />

        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Rubik:wght@400;500;700&display=swap" rel="stylesheet" />

        <meta name='application-name' content='CoffeeBuck' />
        <meta name='apple-mobile-web-app-capable' content='yes' />
        <meta name='apple-mobile-web-app-status-bar-style' content='default' />
        <meta name='apple-mobile-web-app-title' content='CoffeeBuck' />
        <meta name='description' content='Aqui você encontra os melhores cafés e de altíssima qualidade' />
        <meta name='format-detection' content='telephone=no' />
        <meta name='mobile-web-app-capable' content='yes' />
        <meta name='msapplication-TileColor' content='#1B1B1B' />
        <meta name='msapplication-tap-highlight' content='no' />
                
        <link rel='apple-touch-icon' href='/favicon-32x32.png' />

        <meta property="og:title" content="CoffeeBuck - Aqui você encontra os melhores cafés e de altíssima qualidade" />
        <meta property="og:description" content="Aqui você encontra os melhores cafés e de altíssima qualidade" />
        <meta property="og:locale" content="pt_BR" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="CoffeeBuck - Aqui você encontra os melhores cafés e de altíssima qualidade" />
        <meta property="og:image" content="/ogimage.jpg" />
        <meta property="og:image:secure_url" content="/ogimage.jpg" />
        <meta property="og:image:alt" content="Thumbnail" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="900" />
        <meta property="og:image:height" content="600" />

        <meta name="twitter:title" content="CoffeeBuck - Aqui você encontra os melhores cafés e de altíssima qualidade" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="/ogimage.jpg" />
        <meta name="twitter:image:src" content="/ogimage.jpg" />
        <meta name="twitter:image:alt" content="Thumbnail" />
        <meta name="twitter:image:width" content="900" />
        <meta name="twitter:image:height" content="600" />

        <link
          rel="stylesheet"
          href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css"
          integrity="sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A=="
          crossOrigin=""
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