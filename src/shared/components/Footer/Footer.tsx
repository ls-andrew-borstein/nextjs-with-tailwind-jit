import { Link } from "shared/components";

const Footer = () => {
  return (
    <footer className="flex items-center justify-center w-full h-24 border-t">
      Powered by&nbsp;
      <Link
        className="hover:text-blue-900 text-blue-600 underline"
        href={`https://nextjs.org/`}
      >
        NextJS
      </Link>
      ,&nbsp;
      <Link
        className="hover:text-blue-900 text-blue-600 underline"
        href={`https://tailwindcss.com/docs/just-in-time-mode`}
      >
        TailwindCSS
      </Link>
      , and&nbsp;
      <Link
        className="hover:text-blue-900 text-blue-600 underline"
        href={`https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app`}
      >
        Vercel
      </Link>
      .
    </footer>
  );
};

export { Footer };
