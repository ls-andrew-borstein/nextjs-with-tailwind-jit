import Head from "next/head";
import { NextPage } from "next";
import Link from "next/link";

const Index: NextPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Documentation • Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center flex-1 px-20 text-center">
        <h1 className="text-6xl font-bold">Documentation</h1>

        <p className="my-3 text-2xl">
          Find in-depth information about Next.js features and API.
        </p>

        <div>
          <a
            className="border border-blue-100 font-semibold hover:bg-blue-100 mx-3 px-4 py-2 rounded text-blue-600 underline"
            href="https://nextjs.org/docs"
          >
            View the docs.
          </a>

          <Link href="/">
            <a className="border border-blue-100 font-semibold hover:bg-blue-100 mx-3 px-4 py-2 rounded text-blue-600 underline">
              &larr; Back to Home
            </a>
          </Link>
        </div>
      </main>

      <footer className="flex items-center justify-center w-full h-24 border-t">
        <a
          className="flex items-center justify-center"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <img src="/vercel.svg" alt="Vercel Logo" className="h-4 ml-2" />
        </a>
      </footer>
    </div>
  );
};

export default Index;
