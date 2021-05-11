import Head from "next/head";
import { NextPage } from "next";
import { Link } from "shared/components/Link";

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
          <Link
            className="border border-blue-100 font-semibold focus:bg-blue-100 focus:outline-none hover:bg-blue-100 mx-3 px-4 py-2 rounded text-blue-600 underline"
            href="https://nextjs.org/docs"
          >
            View the docs.
          </Link>

          <Link
            className="border border-blue-100 font-semibold focus:bg-blue-100 focus:outline-none hover:bg-blue-100 mx-3 px-4 py-2 rounded text-blue-600 underline"
            href="/"
          >
            &larr; Back to Home
          </Link>
        </div>
      </main>

      <footer className="flex items-center justify-center w-full h-24 border-t">
        Powered by&nbsp;
        <Link className="underline text-blue-600" href={`https://nextjs.org/`}>
          NextJS
        </Link>
        ,&nbsp;
        <Link
          className="underline text-blue-600"
          href={`https://tailwindcss.com/docs/just-in-time-mode`}
        >
          TailwindCSS
        </Link>
        , and&nbsp;
        <Link
          className="underline text-blue-600"
          href={`https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app`}
        >
          Vercel
        </Link>
        .
      </footer>
    </div>
  );
};

export default Index;
