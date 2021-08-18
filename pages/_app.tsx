import "tailwindcss/tailwind.css";
import { ThemeProvider } from "@emotion/react";
import { AppProps } from "next/app";
import Head from "next/head";
import "../public/styles/global.css";
import theme from "theme";

const NextApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
};

export default NextApp;
