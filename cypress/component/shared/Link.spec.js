import React from "react";
import { mount } from "@cypress/react";
import { Link } from "../../../src/shared/components";

describe("<Link/>", () => {
  context("by default", () => {
    it("renders anchor element", () => {
      mount(
        <Link className="underline" href="/some-path">
          View More
        </Link>
      );

      cy.contains("a", "View More").as("Link");

      cy.get("@Link")
        .should("have.class", "underline")
        .and("have.attr", "href", "/some-path");

      cy.get("@Link").should("not.have.attr", "rel");
      cy.get("@Link").should("not.have.attr", "target");
    });
  });

  context("when link is external", () => {
    it("adds rel and target attributes", () => {
      mount(
        <Link className="font-bold" href="https://google.com">
          Google
        </Link>
      );

      cy.contains("a", "Google")
        .should("have.class", "font-bold")
        .and("have.attr", "href", "https://google.com")
        .and("have.attr", "rel", "external noreferrer noopener")
        .and("have.attr", "target", "_blank");
    });
  });
});
