import "tailwindcss/tailwind.css";
import { AppProps } from "next/app";
import Head from "next/head";
import "../public/styles/global.css";

const NextApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default NextApp;
