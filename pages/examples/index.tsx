import { NextPage } from "next";
import { ButtonLink, Page } from "shared/components";

const Index: NextPage = () => {
  return (
    <Page title="Examples">
      <p className="my-3 text-2xl">
        Discover and deploy boilerplate example Next.js projects.
      </p>

      <ButtonLink href="https://github.com/vercel/next.js/tree/master/examples">
        View the examples
      </ButtonLink>
    </Page>
  );
};

export default Index;
