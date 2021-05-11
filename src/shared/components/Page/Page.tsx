import React from "react";
import Head from "next/head";
import { Footer, Link } from "shared/components";

interface PageProps {
  title?: string;
  children: React.ReactNode;
}

const Page: React.FC<PageProps> = ({ children, title }) => {
  let pageTitle = "Create Next App";
  if (title) {
    pageTitle = `${title} • ${pageTitle}`;
  }

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <main className="flex flex-col items-center justify-center flex-1 px-20 text-center">
          <h1 className="text-6xl font-bold">{title}</h1>
          {children}
          <Link
            className="absolute top-8 left-3 font-semibold hover:text-blue-900 mx-3 px-4 py-2 rounded text-blue-600 underline"
            href="/"
          >
            &larr; Back to Home
          </Link>
        </main>
        <Footer />
      </div>
    </>
  );
};

export { Page };
