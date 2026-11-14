import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/assets/light/tpana-app-icon-black.png" />
        <meta name="theme-color" content="#0e1117" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
