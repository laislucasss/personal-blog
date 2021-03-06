import Head from "next/head";

import "typeface-lora";
import "typeface-varela-round";
import "../styles/tailwind.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Pikonha.dev</title>
        <meta name="description" content="Personal blog" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
