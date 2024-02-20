import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html style={{height: '100%'}}>
      <Head>
       <link  href="https://fonts.cdnfonts.com/css/bilbo-hand" rel="stylesheet"/>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
