// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

const terminalLog = (violations) => {
  cy.task("log", "");
  cy.task("log", `${violations.length} accessibility violations detected:`);
  // pluck specific keys to keep the table readable
  const violationData = violations.map(({ id, impact, description, nodes }) => {
    return {
      id,
      impact,
      description,
      nodes: nodes.map((n) => n.html),
    };
  });

  cy.task("table", violationData);
};

Cypress.Commands.add(
  "assertA11y",
  (
    context = null,
    options = null,
    violationCallback = terminalLog,
    skipFailures = null
  ) => {
    cy.injectAxe();
    cy.checkA11y(context, options, violationCallback, skipFailures);
  }
);
