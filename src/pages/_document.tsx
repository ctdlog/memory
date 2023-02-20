import { Html, Head, Main, NextScript } from 'next/document';

const Document = () => (
  <Html>
    <Head>
      <meta name="description" content="Memory" />
    </Head>
    <body>
      <div id="modal-root" />
      <Main />
      <NextScript />
    </body>
  </Html>
);

export default Document;
