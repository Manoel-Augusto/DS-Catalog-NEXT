/* eslint-disable @next/next/no-sync-scripts */
import type { AppProps } from "next/app";
import Head from "next/head";


import "../styles/custom.scss";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-/bQdsTh/da6pkI1MST/rWKFNjaCP5gBSY4sEBT38Q/9RBh9AH40zEOg7Hlq2THRZ"
          crossOrigin="anonymous"
        />

        <title>DsCatalog NextJS</title>
      </Head>

      <Component {...pageProps} />
    </>
  );
}
export default MyApp;
