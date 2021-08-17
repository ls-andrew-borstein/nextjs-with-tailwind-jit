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
      <div className="min-h-screen flex flex-col">
        <main className="flex-1 flex flex-col justify-center items-center align-middle sm:max-w-3xl sm:mx-auto p-3">
          <h1 className="text-4xl sm:text-6xl font-bold">{title}</h1>
          <Link
            className="absolute top-3 left-3 font-semibold hover:text-blue-900 p-3 rounded text-blue-600 underline"
            href="/"
          >
            &larr; Back to Home
          </Link>
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
};

export { Page };
