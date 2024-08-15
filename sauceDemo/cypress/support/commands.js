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

Cypress.Commands.add("login", (email, password) => {
  //Get user name field and enter user name :
  cy.get("#user-name").should("be.visible").type(Cypress.env("username"));

  //Get password text field and enter password :
  cy.get("#password").should("be.visible").type(Cypress.env("password"));

  //Get login button and click on it :
  cy.get("#login-button").should("be.visible").click();

  //Check login is successful :
  cy.get("#shopping_cart_container").should("be.visible");
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
