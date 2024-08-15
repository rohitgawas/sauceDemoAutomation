//Import required files and modules:

import {
  isProductPageHeaderPresent,
  isProductCartIconPresent,
  isBurgerMenuIconPresent,
  isSortIconPresent,
  isProductCardsPresent,
  isProductPricePresent,
  isAddToCartButtonPresent,
  isProductImagesPresent,
  isProductTitlePresent,
  isSocialMediaLinksPresent,
  addProductToCart,
  stateChangedToRemove,
  checkValueOnShoppingCartBatch,
  clickRemoveButton,
  stateChangedToAddToCart,
} from "../utilities/productPage";

describe("Test suite to Verify Product page", function () {
  beforeEach(function () {
    /*load the website :
        Here we have passed failOnStatusCode to false as saucelab website is throwing 401 error
        on loading which is failing the test.
        So to disable the failure and execute the test we have passed failOnStatusCode:false*/
    cy.visit(Cypress.env("url"), { failOnStatusCode: false });
    cy.login();

    //Load required fixture file :
    cy.fixture("productsPage").then(function (data) {
      this.productPageData = data;
    });
  });
  it("Verify UI elements are present on the page", function () {
    //Verify product page header :
    isProductPageHeaderPresent(this.productPageData.productPageHeaderText);

    //verify kart icon is present :
    isProductCartIconPresent(this.productPageData.shoppingCartContainer);
    //Verify burger menu is present :
    isBurgerMenuIconPresent(this.productPageData.burgerMenu);

    //Verify sort icon is present :
    isSortIconPresent(this.productPageData.productSortButton);

    //Verify product cards are presents :
    isProductCardsPresent(this.productPageData.invenory_item_cards);

    //Verify pricing is displayed for the visible product cards :
    isProductPricePresent(this.productPageData.inventory_item_price);

    //Verify Add to cart button is displayed for the visible products :
    isAddToCartButtonPresent(this.productPageData.addToCartButtons);

    //Verify product images are visible :
    isProductImagesPresent(this.productPageData.productImage);

    //Verify product page title is visible :
    isProductTitlePresent(this.productPageData.productPageTitle);

    //Verify social media links :
    isSocialMediaLinksPresent(this.productPageData.socialMediaLinks);
  });

  it("Add products to cart", function () {
    //Make sure that shopping cart is empty :
    cy.get(this.productPageData.shoppingCartBadge).should("not.exist");

    //---------Call function to add products to cart------------
    //Add Sauce Labs Fleece Jacket :
    addProductToCart(
      this.productPageData.addToCartButtonForEachProduct
        .Sauce_labs_Fleece_Jacket
    );

    //Verify change in the state of product after adding to cart :
    stateChangedToRemove(
      this.productPageData.addToCartChangedToRemove.Sauce_labs_Fleece_Jacket
    );

    //Verify that shopping cart batch is updated :
    checkValueOnShoppingCartBatch(this.productPageData.shoppingCartBadge, 1);

    //Add Sauce Labs Bolt T-Shirt
    addProductToCart(
      this.productPageData.addToCartButtonForEachProduct.Sauce_Labs_Bolt_Tshirt
    );

    //Verify change in the state of product after adding to cart :
    stateChangedToRemove(
      this.productPageData.addToCartChangedToRemove.Sauce_Labs_Bolt_Tshirt
    );

    //Verify that shopping cart batch is updated :
    checkValueOnShoppingCartBatch(this.productPageData.shoppingCartBadge, 2);

    //Add Sauce Labs Backpack :
    addProductToCart(
      this.productPageData.addToCartButtonForEachProduct.Sauce_Labs_Backpack
    );

    //Verify change in the state of product after adding to cart :
    stateChangedToRemove(
      this.productPageData.addToCartChangedToRemove.Sauce_Labs_Backpack
    );

    //Verify that shopping cart batch is updated :
    checkValueOnShoppingCartBatch(this.productPageData.shoppingCartBadge, 3);
  });

  it("Verify user can remove the products from cart from products page", function () {
    //--------Setup cart with some products added to it--------------
    //Add products to cart :
    addProductToCart(
      this.productPageData.addToCartButtonForEachProduct
        .Sauce_labs_Fleece_Jacket
    );
    addProductToCart(
      this.productPageData.addToCartButtonForEachProduct.Sauce_Labs_Backpack
    );

    addProductToCart(
      this.productPageData.addToCartButtonForEachProduct.Sauce_Labs_Bolt_Tshirt
    );

    //-----------Verify that user can remove the products from cart using remove button---------------

    //Remove Sauce Labs Fleece Jacket :
    clickRemoveButton(
      this.productPageData.addToCartChangedToRemove.Sauce_labs_Fleece_Jacket
    );

    //Verify change in the state of product after adding to cart :
    stateChangedToAddToCart(
      this.productPageData.addToCartButtonForEachProduct
        .Sauce_labs_Fleece_Jacket
    );

    //Verify that shopping cart batch is updated :
    checkValueOnShoppingCartBatch(this.productPageData.shoppingCartBadge, 2);

    //Add Sauce Labs Bolt T-Shirt
    clickRemoveButton(
      this.productPageData.addToCartChangedToRemove.Sauce_Labs_Bolt_Tshirt
    );

    //Verify change in the state of product after adding to cart :
    stateChangedToAddToCart(
      this.productPageData.addToCartButtonForEachProduct.Sauce_Labs_Bolt_Tshirt
    );

    //Verify that shopping cart batch is updated :
    checkValueOnShoppingCartBatch(this.productPageData.shoppingCartBadge, 1);

    //Add Sauce Labs Backpack :
    clickRemoveButton(
      this.productPageData.addToCartChangedToRemove.Sauce_Labs_Backpack
    );

    //Verify change in the state of product after adding to cart :
    stateChangedToAddToCart(
      this.productPageData.addToCartButtonForEachProduct.Sauce_Labs_Backpack
    );

    //Verify that shopping cart badge is not present as cart has zero items :
    cy.get(this.productPageData.shoppingCartBadge).should("not.exist");
  });
});
