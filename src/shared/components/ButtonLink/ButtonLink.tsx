import { Link } from "shared/components";

interface ButtonLinkProps {
  className?: string;
  children: React.ReactNode;
  href: string;
}

const ButtonLink: React.FC<ButtonLinkProps> = ({
  className,
  children,
  href,
}) => {
  const defaultClassName =
    "border border-blue-100 font-semibold hover:bg-blue-100 focus:bg-blue-100 focus:outline-none px-4 py-2 rounded text-blue-600 underline";

  return (
    <Link className={`${defaultClassName} ${className || ""}`} href={href}>
      {children}
    </Link>
  );
};

export { ButtonLink };
