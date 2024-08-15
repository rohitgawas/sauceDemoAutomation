//Import required files and modules:

import {
  navigateToShoppingCart,
  clickOnCheckOutButton,
  addProductToCart,
  stepOneOfCheckOut,
  completeStepOneOfCheckOut,
  navigateToStepTwo,
  stepTwoOfCheckOut,
  checkPaymentInfo,
  checkShippingInfo,
  checkTotalPrice,
  clickOnFinish,
  checkOrderIsComplete,
  cancelCheckOut,
  verifyCheckoutIsCancelledAtStepOne,
  verifyCheckoutIsCancelledAtStepTwo,
} from "../utilities/checkOutPage";

import { verifyProductInCart } from "../utilities/shoppingCartPage";

describe("Test suite to Verify Checkout process", function () {
  beforeEach(function () {
    /*load the website :
          Here we have passed failOnStatusCode to false as saucelab website is throwing 401 error
          on loading which is failing the test.
          So to disable the failure and execute the test we have passed failOnStatusCode:false*/
    cy.visit(Cypress.env("url"), { failOnStatusCode: false });
    cy.login();

    //Load required fixture file :
    cy.fixture("checkOutPage").then(function (data) {
      this.checkoutPageData = data;
    });
  });

  it("Verify End to End check out Process", function () {
    //--------Setup cart with some products added to it--------------
    //Add products to cart :
    addProductToCart(
      this.checkoutPageData.addToCartButtonForEachProduct
        .Sauce_labs_Fleece_Jacket
    );
    addProductToCart(
      this.checkoutPageData.addToCartButtonForEachProduct.Sauce_Labs_Backpack
    );

    addProductToCart(
      this.checkoutPageData.addToCartButtonForEachProduct.Sauce_Labs_Bolt_Tshirt
    );

    //-------------Verify first step of the check out----------------

    //navigate to shopping cart :
    navigateToShoppingCart();

    //Navigate to checkout process by clicking on checkout button :
    clickOnCheckOutButton(this.checkoutPageData.checkOutButton);

    //Verify that step 1 of checkout process is opened :
    stepOneOfCheckOut();

    //Complete first step by entering required data :
    completeStepOneOfCheckOut();

    //-----------Verify second step of Checkout--------------------

    //Navigate to second step of the checkout :
    navigateToStepTwo();

    //Verify that step 2 of checkout process is opened :
    stepTwoOfCheckOut();

    //Verify product details in step 2 of checkout :
    verifyProductInCart(
      this.checkoutPageData.checkProductsInCart.SauceLabsBackpack.name,
      this.checkoutPageData.checkProductsInCart.SauceLabsBackpack.price,
      1
    );
    verifyProductInCart(
      this.checkoutPageData.checkProductsInCart.SauceLabsFleeceJacket.name,
      this.checkoutPageData.checkProductsInCart.SauceLabsFleeceJacket.price,
      1
    );
    verifyProductInCart(
      this.checkoutPageData.checkProductsInCart.SauceLabsBoltTShirt.name,
      this.checkoutPageData.checkProductsInCart.SauceLabsBoltTShirt.price,
      1
    );

    //Verify payment information :
    checkPaymentInfo();

    //Verify shipping infoarmation :
    checkShippingInfo();

    //Check total price :
    checkTotalPrice();

    //Click on finish button :
    clickOnFinish(this.checkoutPageData.finishButton);

    //------------------Verify completion of checkout-----------------------
    //Verify that order is complete :
    checkOrderIsComplete(this.checkoutPageData.completeHeader);
  });

  it("Verify that user can cancel the checkout process at any step of the checkout", function () {
    //--------Setup cart with some products added to it--------------
    //Add products to cart :
    addProductToCart(
      this.checkoutPageData.addToCartButtonForEachProduct
        .Sauce_labs_Fleece_Jacket
    );
    addProductToCart(
      this.checkoutPageData.addToCartButtonForEachProduct.Sauce_Labs_Backpack
    );

    addProductToCart(
      this.checkoutPageData.addToCartButtonForEachProduct.Sauce_Labs_Bolt_Tshirt
    );

    //--------------Verify that checkout can be cancelled at step 1 of checkout---------------
    //navigate to shopping cart :
    navigateToShoppingCart();

    //Navigate to checkout process by clicking on checkout button :
    clickOnCheckOutButton(this.checkoutPageData.checkOutButton);

    //Verify that step 1 of checkout process is opened :
    stepOneOfCheckOut();

    //Verify user can cancel the checkout proccess here :
    cancelCheckOut(this.checkoutPageData.cancelButton);

    //Verify that checkout process is cancelled :
    verifyCheckoutIsCancelledAtStepOne();

    //--------------Verify that checkout can be cancelled at step 2 of checkout---------------

    //Navigate to checkout process by clicking on checkout button :
    clickOnCheckOutButton(this.checkoutPageData.checkOutButton);

    //Verify that step 1 of checkout process is opened :
    stepOneOfCheckOut();

    //Complete first step by entering required data :
    completeStepOneOfCheckOut();

    //Navigate to second step of the checkout :
    navigateToStepTwo();

    //Verify that step 2 of checkout process is opened :
    stepTwoOfCheckOut();

    //Verify user can cancel the checkout proccess here :
    cancelCheckOut(this.checkoutPageData.cancelButton);

    //Verify that checkout process is cancelled :
    verifyCheckoutIsCancelledAtStepTwo();
  });
});
