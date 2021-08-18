import { NextPage } from "next";
import Head from "next/head";
import {
  Footer,
  InfoCard,
  InfoCardCSSModule,
  InfoCardEmotion,
  InfoCardStyledSystem,
  Link,
} from "shared/components";

const Index: NextPage = () => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
      </Head>
      <div className="min-h-screen flex flex-col">
        <main className="flex-1 flex flex-col justify-center items-center align-middle sm:max-w-3xl sm:mx-auto p-3 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mt-3 sm:mt-0">
            Welcome to{" "}
            <Link
              className="bg-gradient-to-r from-pink-500 focus:text-black hover:text-black to-yellow-500 block sm:inline-block px-4 py-2 text-white md:h-[77px]"
              href="https://nextjs.org"
            >
              Next.js!
            </Link>
          </h1>

          {/* <img src="kitten.jpg" /> */}

          <p className="mt-4 sm:mt-6 text-2xl">
            Get started by editing{" "}
            <code className="p-3 font-mono text-lg bg-gray-100 rounded-md">
              pages/index.js
            </code>
          </p>

          <div className="grid grid-flow-row sm:grid-cols-2 gap-3 mt-5 w-full">
            <InfoCard
              description="Find in-depth information about Next.js features and API."
              title="Documentation"
              url="/documentation"
            />

            <InfoCardCSSModule
              description="Learn about Next.js in an interactive course with quizzes!"
              title="Learn"
              url="/learn"
            />

            <InfoCardEmotion
              description="Discover and deploy boilerplate example Next.js projects."
              title="Examples"
              url="/examples"
            />

            <InfoCardStyledSystem
              description="Instantly deploy your Next.js site to a public URL with Vercel."
              title="Deploy"
              url="/deploy"
            />
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Index;
