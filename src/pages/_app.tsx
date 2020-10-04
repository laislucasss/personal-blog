import Head from "next/head";

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
