import React from "react";
import { mount } from "@cypress/react";
import { InfoCard } from "../../../src/shared/components";

describe("<InfoCard/>", () => {
  context("by default", () => {
    it("renders a heading and paragraph wrapped in a link", () => {
      mount(
        <InfoCard description="Click me plz" title="Info" url="/another-page" />
      );

      cy.get('a[href="/another-page"]').within(() => {
        cy.contains("h2", "Info");
        cy.contains("p", "Click me plz");
      });
    });
  });
});
