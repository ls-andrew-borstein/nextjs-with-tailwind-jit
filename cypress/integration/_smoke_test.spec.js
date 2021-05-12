/// <reference types="cypress" />

context("Smoke test", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.injectAxe();
  });

  it("renders and routes to all pages", () => {
    cy.contains("h1", "Welcome");
    cy.checkA11y();

    const pages = ["Documentation", "Learn", "Examples", "Deploy"];
    pages.forEach((page, index) => {
      cy.get("h2").eq(index).should("contain", page).click();
      cy.contains("h1", page);
      cy.location("pathname").should("contain", page.toLocaleLowerCase());
      cy.title().should("contain", page);
      cy.checkA11y();
      cy.contains("a", "Back").click();
    });
  });
});
