import { NextPage } from "next";
import { ButtonLink, Page } from "shared/components";

const Index: NextPage = () => {
  return (
    <Page title="Learn">
      <p className="my-3 text-2xl">
        Learn about Next.js in an interactive course with quizzes!
      </p>

      <ButtonLink
        className="border border-blue-100 font-semibold focus:bg-blue-100 focus:outline-none hover:bg-blue-100 mx-3 px-4 py-2 rounded text-blue-600 underline"
        href="https://nextjs.org/learn"
      >
        View the materials
      </ButtonLink>
    </Page>
  );
};

export default Index;
