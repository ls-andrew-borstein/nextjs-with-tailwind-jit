import { NextPage } from "next";
import { ButtonLink, Page } from "shared/components";

const Index: NextPage = () => {
  return (
    <Page title="Documentation">
      <p className="my-3 text-2xl">
        Find in-depth information about Next.js features and API.
      </p>

      <ButtonLink href="https://nextjs.org/docs">View the docs</ButtonLink>
    </Page>
  );
};

export default Index;
