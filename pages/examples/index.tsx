import { NextPage } from "next";
import { Link, Page } from "shared/components";

const Index: NextPage = () => {
  return (
    <Page title="Examples">
      <p className="my-3 text-2xl">
        Discover and deploy boilerplate example Next.js projects.
      </p>

      <div>
        <Link
          className="border border-blue-100 font-semibold focus:bg-blue-100 focus:outline-none hover:bg-blue-100 mx-3 px-4 py-2 rounded text-blue-600 underline"
          href="https://github.com/vercel/next.js/tree/master/examples"
        >
          View the examples
        </Link>
      </div>
    </Page>
  );
};

export default Index;
