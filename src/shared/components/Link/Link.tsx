import NextLink from "next/link";
import React from "react";

interface LinkProps {
  className?: string;
  children: React.ReactNode;
  href: string;
}

const Link: React.FC<LinkProps> = ({ className, children, href }) => {
  const isExternal = href.includes("http");

  if (isExternal) {
    return (
      <a
        className={className}
        href={href}
        rel="external noreferrer noopener"
        target="_blank"
      >
        {children}
      </a>
    );
  }

  return (
    <NextLink href={href}>
      <a className={className}>{children}</a>
    </NextLink>
  );
};

export { Link };
