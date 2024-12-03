// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
Cypress.Commands.add(
  "successfulRegistration",
  (firstName, lastName, userName, password, confirmPassword) => {
    cy.get("#mat-input-0").type(firstName);
    cy.get("#mat-input-1").type(lastName);
    cy.get("#mat-input-2").type(userName);
    cy.get("#mat-input-3").type(password);
    cy.get("#mat-input-4").type(confirmPassword);
    cy.get("#mat-radio-3-input").check();

    cy.get(".mat-mdc-card-actions > .mdc-button > .mdc-button__label").click(); // Wait for page transition after login
  }
);
//
// -- This is a parent command --
Cypress.Commands.add("login", (userName, password) => {
  cy.get("#mat-input-0").type(userName);
  cy.get("#mat-input-1").type(password);
});
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
