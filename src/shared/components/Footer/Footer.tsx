import { Link } from "shared/components";

const Footer = () => {
  return (
    <footer className="flex items-center justify-center w-full p-2 border-t mt-auto whitespace-pre-wrap">
      Powered by{" "}
      <Link
        className="hover:text-blue-900 text-blue-600 underline"
        href="https://nextjs.org/"
      >
        NextJS
      </Link>
      {", "}
      <Link
        className="hover:text-blue-900 text-blue-600 underline"
        href="https://tailwindcss.com/docs/just-in-time-mode"
      >
        TailwindCSS
      </Link>
      {", "}
      <Link
        className="hover:text-blue-900 text-blue-600 underline"
        href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
      >
        Vercel
      </Link>
      {", and "}
      <Link className="hover:text-blue-900 text-blue-600 underline" href="/me">
        Me
      </Link>
      .
    </footer>
  );
};

export { Footer };
