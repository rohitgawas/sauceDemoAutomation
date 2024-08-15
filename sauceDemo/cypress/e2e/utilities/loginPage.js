//Check swag labs title on the login page :
export function isLoginPageTitlePresent(ID) {
  cy.contains(ID).should("be.visible");
}

//Check username text field :
export function isUserNameFeildPresent(ID) {
  cy.get(ID).should("be.visible");
}

//Check password text field :
export function isPassWordFeildPresent(ID) {
  cy.get(ID).should("be.visible");
}
//Check login button :
export function isLoginButtonPresent(ID) {
  cy.get(ID).should("be.visible");
}

//Enter invalid user name :
export function enterInValidUserName(ID, value) {
  cy.get(ID).should("be.visible").type(value);
}

//Enter invalid password :
export function enterInvalidPassword(ID, value) {
  cy.get(ID).should("be.visible").type(value);
}

//Check error card :
export function verifyInvalidCredentialErrorCard(ID, message) {
  cy.get(ID).should("be.visible").and("have.text", message);
}
