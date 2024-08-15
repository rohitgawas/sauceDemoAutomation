// Function to navigate to shopping cart page :

//Function to navigate to shopping cart:
export function navigateToShoppingCart() {
  cy.get("#shopping_cart_container").should("be.visible").click();
}

//Function to click on checkout button :
export function clickOnCheckOutButton(ID) {
  cy.get(ID).should("be.visible").click();
}

//Function to add product to cart :
export function addProductToCart(ID) {
  cy.get(ID).should("be.visible").click();
}

//Function to check if step 1 of checkout is open or not :
export function stepOneOfCheckOut() {
  cy.url().should("include", "checkout-step-one");
}

//Function to complete step 1 of checkout :
export function completeStepOneOfCheckOut() {
  //Enter first name :
  cy.get("#first-name").should("be.visible").type("testUserFirstName");

  //Enter last name :
  cy.get("#last-name").should("be.visible").type("testUserLastName");

  // Enter Zip code :
  cy.get("#postal-code").should("be.visible").type("123456");
}

//Function to navigate to step 2 of checkout :
export function navigateToStepTwo() {
  cy.get("#continue").should("be.visible").click();
}

//Function to check if step 1 of checkout is open or not :
export function stepTwoOfCheckOut() {
  cy.url().should("include", "checkout-step-two");
}

//Function to verify payment information :
export function checkPaymentInfo() {
  cy.get('[data-test="payment-info-label"]')
    .should("be.visible")
    .and("have.text", "Payment Information:");

  cy.get('[data-test="payment-info-value"]')
    .should("be.visible")
    .and("have.text", "SauceCard #31337");
}

//Function to verify shipping information :
export function checkShippingInfo() {
  cy.get('[data-test="shipping-info-label"]')
    .should("be.visible")
    .and("have.text", "Shipping Information:");

  cy.get('[data-test="shipping-info-value"]')
    .should("be.visible")
    .and("have.text", "Free Pony Express Delivery!");
}

//Function to check total price :
export function checkTotalPrice() {
  cy.get('[data-test="subtotal-label"]').should(
    "include.text",
    "Item total: $95.97"
  );
  //
  cy.get('[data-test="tax-label"]').should("include.text", "Tax: $7.68");
  cy.get('[data-test="total-label"]').should("include.text", "Total: $103.65");
}

//Function to click on finish button:
export function clickOnFinish(ID) {
  cy.get(ID).should("be.visible").click();
}

//Function to verify order is complete:
export function checkOrderIsComplete(ID) {
  cy.get(ID).should("be.visible");
}

//Function to cancel the checkout:
export function cancelCheckOut(ID) {
  cy.get(ID).should("be.visible").click();
}

//Function to verify checkout process is cancelled at step 1 :

export function verifyCheckoutIsCancelledAtStepOne() {
  cy.url().should("include", "cart");
}

//Function to verify checkout process is cancelled at step 2 :

export function verifyCheckoutIsCancelledAtStepTwo() {
  cy.url().should("include", "inventory");
}
