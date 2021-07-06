import { NextPage } from "next";
import { Link, Page } from "shared/components";

const Index: NextPage = () => {
  return (
    <Page title="Documentation">
      <p className="my-3 text-2xl">
        Find in-depth information about Next.js features and API.
      </p>

      <img src="kitten.jpg" />

      <div>
        <Link
          className="border border-blue-100 font-semibold focus:bg-blue-100 focus:outline-none hover:bg-blue-100 mx-3 px-4 py-2 rounded text-blue-600 underline"
          href="https://nextjs.org/docs"
        >
          View the docs
        </Link>
      </div>
    </Page>
  );
};

export default Index;
