//function to open burger menu:

export function openBurgerMenu(ID) {
  cy.get(ID).should("be.visible").click();
}

//Function to check All items link:
export function isAllItemsLinkPresent(ID) {
  cy.get(ID).should("be.visible");
}

//Function to check About link:
export function isAboutLinkPresent(ID) {
  cy.get(ID).should("be.visible");
}

//Function to check All items link:
export function isLogOutLinkPresent(ID) {
  cy.get(ID).should("be.visible");
}

//Function to check All items link:
export function isResetAllStateLinkPresent(ID) {
  cy.get(ID).should("be.visible");
}

//-------------Functions to perform actions on links----------------

//Function to navigate using All items link:
export function clickAllItemsLink(ID) {
  cy.get(ID).should("be.visible").click();
}

//Function to click on About link :
export function clickAboutLink(ID) {
  cy.get(ID).should("be.visible").click();
}

//Function to click on logout:

export function clickLogOutLink(ID) {
  cy.get(ID).should("be.visible").click();
}
