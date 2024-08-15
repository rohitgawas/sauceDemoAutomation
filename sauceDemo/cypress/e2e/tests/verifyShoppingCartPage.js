//Import functions and files required for reference :
import {
  navigateToShoppingCart,
  isShoppingCartHeaderTextPresent,
  isShoppingCartTitlePresent,
  isBurgerMenuPresent,
  isCartQuantityLabelPresent,
  isCartDescriptionLabelPresent,
  isContinueShoppingButtonPresent,
  isCheckOutButtonPresent,
  isSocialMediaLinksPresent,
  addProductToCart,
  verifyProductInCart,
  removePRoductFromCart,
} from "../utilities/shoppingCartPage";

describe("Test suite to Verify shopping cart page", function () {
  beforeEach(function () {
    /*load the website :
        Here we have passed failOnStatusCode to false as saucelab website is throwing 401 error
        on loading which is failing the test.
        So to disable the failure and execute the test we have passed failOnStatusCode:false*/
    cy.visit(Cypress.env("url"));
    cy.login();

    //Loaf required fixture file :
    cy.fixture("shoppingCartPage").then(function (data) {
      this.shoppingCartPageData = data;
    });
  });

  it("Verify UI elements of the shopping cart page", function () {
    //Navigate to the shopping cart page :
    navigateToShoppingCart();

    //Verify header text is visible :
    isShoppingCartHeaderTextPresent(
      this.shoppingCartPageData.shoppingCartPagePageHeaderText
    );

    //Verify shopping cart title is visible :
    isShoppingCartTitlePresent(this.shoppingCartPageData.shoppingCartPageTitle);

    //Verify burger menu is visible in shopping cart page :
    isBurgerMenuPresent(this.shoppingCartPageData.burgerMenu);

    //Verify cart quantity label is present :
    isCartQuantityLabelPresent(this.shoppingCartPageData.cartQuantityLabel);

    //Verify cart description label is present :
    isCartDescriptionLabelPresent(
      this.shoppingCartPageData.cartDescriptionLabel
    );

    //Verify continue shopping button is present :
    isContinueShoppingButtonPresent(
      this.shoppingCartPageData.continueShoppingButton
    );

    //Verify checkout button is present :
    isCheckOutButtonPresent(this.shoppingCartPageData.checkOutButton);

    //Verify social media links :
    isSocialMediaLinksPresent(this.shoppingCartPageData.socialMediaLinks);
  });

  it("Verify items get listed in checkout page after adding products to cart", function () {
    //--------Setup cart with some products added to it--------------
    //Add products to cart :
    addProductToCart(
      this.shoppingCartPageData.addToCartButtonForEachProduct
        .Sauce_labs_Fleece_Jacket
    );
    addProductToCart(
      this.shoppingCartPageData.addToCartButtonForEachProduct
        .Sauce_Labs_Backpack
    );

    addProductToCart(
      this.shoppingCartPageData.addToCartButtonForEachProduct
        .Sauce_Labs_Bolt_Tshirt
    );

    //-----------Verify cart page is updated with added items-----------

    //Navigate to the shopping cart page :
    navigateToShoppingCart();

    //Verify that products are listed in cart with correct data :
    //verifyProductInCart()takes three parameters : productName, productPrice, productQuanity

    verifyProductInCart(
      this.shoppingCartPageData.checkProductsInCart.SauceLabsBackpack.name,
      this.shoppingCartPageData.checkProductsInCart.SauceLabsBackpack.price,
      1
    );
    verifyProductInCart(
      this.shoppingCartPageData.checkProductsInCart.SauceLabsFleeceJacket.name,
      this.shoppingCartPageData.checkProductsInCart.SauceLabsFleeceJacket.price,
      1
    );
    verifyProductInCart(
      this.shoppingCartPageData.checkProductsInCart.SauceLabsBoltTShirt.name,
      this.shoppingCartPageData.checkProductsInCart.SauceLabsBoltTShirt.price,
      1
    );
  });

  it("Verify that user can remove the products from cart using remove button on shopping cart page ", function () {
    //--------Setup cart with some products added to it--------------
    //Add products to cart :
    addProductToCart(
      this.shoppingCartPageData.addToCartButtonForEachProduct
        .Sauce_labs_Fleece_Jacket
    );
    addProductToCart(
      this.shoppingCartPageData.addToCartButtonForEachProduct
        .Sauce_Labs_Backpack
    );

    addProductToCart(
      this.shoppingCartPageData.addToCartButtonForEachProduct
        .Sauce_Labs_Bolt_Tshirt
    );

    //---------Check removal of the products using remove button in shopping cart page--------------------
    //Navigate to the shopping cart page :
    navigateToShoppingCart();

    //Click on remove button on one of the product and check if it is removed :
    //removePRoductFromCart() function takes two parameters :productName, ID of the remove button
    removePRoductFromCart(
      this.shoppingCartPageData.checkProductsInCart.SauceLabsFleeceJacket.name,
      this.shoppingCartPageData.removeButton.forSauceLabsFleeceJacket
    );
  });
});
