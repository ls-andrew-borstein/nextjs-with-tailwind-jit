import Head from "next/head";
import { NextPage } from "next";
import { InfoCard } from "shared/components/InfoCard";

const Index: NextPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center flex-1 px-20 text-center">
        <h1 className="text-6xl font-bold">
          Welcome to{" "}
          <a className="text-blue-600" href="https://nextjs.org">
            Next.js!
          </a>
        </h1>

        <p className="mt-3 text-2xl">
          Get started by editing{" "}
          <code className="p-3 font-mono text-lg bg-gray-100 rounded-md">
            pages/index.js
          </code>
        </p>

        <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full">
          <InfoCard
            description={`Find in-depth information about Next.js features and API.`}
            title={`Documentation`}
            url={`/documentation`}
          />

          <InfoCard
            description={`Learn about Next.js in an interactive course with quizzes!`}
            title={`Learn`}
            url={`https://nextjs.org/learn`}
          />

          <InfoCard
            description={`Discover and deploy boilerplate example Next.js projects.`}
            title={`Examples`}
            url={`https://github.com/vercel/next.js/tree/master/examples`}
          />

          <InfoCard
            description={`Instantly deploy your Next.js site to a public URL with Vercel.`}
            title={`Deploy`}
            url={`https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app`}
          />
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
