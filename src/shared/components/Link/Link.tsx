import NextLink from "next/link";
import React from "react";

const externalProps = (href: string) => {
  let props = {};
  if (href.includes("http")) {
    props = {
      rel: "external noreferrer noopener",
      target: "_blank",
    };
  }
  return props;
};

interface LinkProps {
  className?: string;
  children: React.ReactNode;
  href: string;
}

const Link: React.FC<LinkProps> = ({ className, children, href }) => {
  return (
    <NextLink href={href}>
      <a className={className} {...externalProps(href)}>
        {children}
      </a>
    </NextLink>
  );
};

export { Link };
