import Head from "next/head";
import { NextPage } from "next";
import { Footer, InfoCard, Link } from "shared/components";

const Index: NextPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Create Next App</title>
      </Head>

      <main className="flex flex-col items-center justify-center flex-1 px-20 text-center">
        <h1 className="text-6xl font-bold">
          Welcome to{" "}
          <Link
            className="bg-gradient-to-r from-pink-500 focus:text-black hover:text-black to-yellow-500 px-4 py-2 text-white"
            href="https://nextjs.org"
          >
            Next.js!
          </Link>
        </h1>

        <p className="mt-6 text-2xl">
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
            url={`/learn`}
          />

          <InfoCard
            description={`Discover and deploy boilerplate example Next.js projects.`}
            title={`Examples`}
            url={`/examples`}
          />

          <InfoCard
            description={`Instantly deploy your Next.js site to a public URL with Vercel.`}
            title={`Deploy`}
            url={`/deploy`}
          />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
