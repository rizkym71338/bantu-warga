import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Bantu Warga</title>
        <link rel="icon" type="image/png" href="/Logo.png" />
        <meta name="description" content="Website Bantu Warga" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
