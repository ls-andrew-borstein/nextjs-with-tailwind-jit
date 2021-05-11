import "tailwindcss/tailwind.css";
import Head from "next/head";
import { AppProps } from "next/app";

const NextApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Component {...pageProps} />;
    </>
  );
};

export default NextApp;
