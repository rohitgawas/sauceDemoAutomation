// Function to navigate to shopping cart page :
export function navigateToShoppingCart() {
  cy.get("#shopping_cart_container").should("be.visible").click();
}

//Function to verify header text :
export function isShoppingCartHeaderTextPresent(ID) {
  cy.get("#shopping_cart_container").should("be.visible");
}

//Function to verify shopping cart title text :
export function isShoppingCartTitlePresent(ID) {
  cy.get(ID).should("be.visible");
}

//Function to check burger menu in shopping cart page :
export function isBurgerMenuPresent(ID) {
  cy.get(ID).should("be.visible");
}

//Function to check cart quantity label :
export function isCartQuantityLabelPresent(ID) {
  cy.get(ID).should("be.visible");
}

//Function to check cart description label :
export function isCartDescriptionLabelPresent(ID) {
  cy.get(ID).should("be.visible");
}

//Function to check continue shopping button is present :
export function isContinueShoppingButtonPresent(ID) {
  cy.get(ID).should("be.visible");
}

//Function to check checkout button is present :
export function isCheckOutButtonPresent(ID) {
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

//Function to verify product data in cart :

export function verifyProductInCart(productName, productPrice, productQuanity) {
  cy.get('[data-test="inventory-item"]').each(function ($item) {
    if ($item.text().includes(productName)) {
      cy.wrap($item)
        .find('[data-test="inventory-item-price"]')
        .should("have.text", productPrice);
      cy.wrap($item)
        .find('[data-test="item-quantity"]')
        .should("have.text", productQuanity);
    }
  });
}

//Function to remove given product from cart :

export function removePRoductFromCart(productName, ID) {
  cy.get('[data-test="inventory-item"]').each(function ($item) {
    if ($item.text().includes(productName)) {
      cy.wrap($item).find(ID).should("be.visible").click();
    }
  });

  //Check if item is removed :
  cy.get('[data-test="inventory-item"]').each(function ($item) {
    expect($item.text()).not.include(productName);
  });
}
