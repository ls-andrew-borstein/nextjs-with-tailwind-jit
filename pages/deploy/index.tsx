import { NextPage } from "next";
import { Link, Page } from "shared/components";

const Index: NextPage = () => {
  return (
    <Page title="Deploy">
      <p className="my-3 text-2xl">
        Instantly deploy your Next.js site to a public URL with Vercel.
      </p>

      <div>
        <Link
          className="border border-blue-100 font-semibold focus:bg-blue-100 focus:outline-none hover:bg-blue-100 mx-3 px-4 py-2 rounded text-blue-600 underline"
          href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        >
          Visit Vercel
        </Link>
      </div>
    </Page>
  );
};

export default Index;
