//Function to check product page header text:
export function isProductPageHeaderPresent(ID) {
  cy.contains(".app_logo", ID).should("be.visible");
}

//function to check cart icon is present :

export function isProductCartIconPresent(ID) {
  cy.get(ID).should("be.visible");
}

//Function to check burger menu icon is present :
export function isBurgerMenuIconPresent(ID) {
  cy.get(ID).should("be.visible");
}

//Function to check sort icon is present :
export function isSortIconPresent(ID) {
  cy.get(ID).should("be.visible");
}

//Function to check product cards are present :
export function isProductCardsPresent(ID) {
  cy.get(ID).should("be.visible");
}

//Function to check pricings are present :
export function isProductPricePresent(ID) {
  cy.get(ID).should("be.visible");
}

//Function to check add to cart buttons :
export function isAddToCartButtonPresent(ID) {
  cy.get(ID)
    .should("be.visible")
    .each(($item) => {
      expect($item.text()).to.eql("Add to cart");
    });
}

//Function to check product images :
export function isProductImagesPresent(ID) {
  cy.get(ID).should("be.visible");
}

//Function to check project title :
export function isProductTitlePresent(ID) {
  cy.get(ID).should("be.visible");
}

//Function to check social media links :
export function isSocialMediaLinksPresent(ID) {
  cy.get(ID.twitter).should("be.visible");
  cy.get(ID.faceBook).should("be.visible");
  cy.get(ID.linkedIn).should("be.visible");
}

//Function to add product to cart :
export function addProductToCart(ID) {
  cy.get(ID).should("be.visible").click();
}

//Function to check that add to cart button changed to Remove once product is added to cart :
export function stateChangedToRemove(ID) {
  cy.get(ID).should("be.visible").should("have.text", "Remove");
}

//Function to verify value of shopping cart batch :
export function checkValueOnShoppingCartBatch(ID, value) {
  cy.get(ID).should("be.visible").and("have.text", value);
}

//Function to remove product from cart using remove button present on products page :

export function clickRemoveButton(ID) {
  cy.get(ID).should("be.visible").click();
}

//Function to check state changed to add to cart for product after it is removed from cart :

export function stateChangedToAddToCart(ID) {
  cy.get(ID).should("be.visible").should("have.text", "Add to cart");
}
