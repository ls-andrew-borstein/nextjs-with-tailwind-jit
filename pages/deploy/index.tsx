import { NextPage } from "next";
import { ButtonLink, Page } from "shared/components";

const Index: NextPage = () => {
  return (
    <Page title="Deploy">
      <p className="my-3 text-2xl">
        Instantly deploy your Next.js site to a public URL with Vercel.
      </p>

      <ButtonLink href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app">
        Visit Vercel
      </ButtonLink>
    </Page>
  );
};

export default Index;
