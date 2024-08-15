//Import functions and files required for reference :
import {
  openBurgerMenu,
  isAllItemsLinkPresent,
  isAboutLinkPresent,
  isLogOutLinkPresent,
  isResetAllStateLinkPresent,
  clickAllItemsLink,
  clickAboutLink,
  clickLogOutLink,
} from "../utilities/burgerMenu";
import { isProductTitlePresent } from "../utilities/productPage";

describe("Test suite to Verify burger menu functionality", function () {
  beforeEach(function () {
    /*load the website :
        Here we have passed failOnStatusCode to false as saucelab website is throwing 401 error
        on loading which is failing the test.
        So to disable the failure and execute the test we have passed failOnStatusCode:false*/
    cy.visit(Cypress.env("url"), { failOnStatusCode: false });
    //login to website :
    cy.login();

    //import fxure files:
    cy.fixture("burgerMenu").then(function (burgerMenudata) {
      this.burgerMenuData = burgerMenudata;
    });
  });

  it("Verify UI elements of burger menu are visible", function () {
    //Open burger menu from product page :
    openBurgerMenu(this.burgerMenuData.burgerMenu);

    // Verify link for All items is present:
    isAllItemsLinkPresent(this.burgerMenuData.allItemsLink);

    // Verify link to access About page is present:
    isAboutLinkPresent(this.burgerMenuData.aboutLink);

    // Verify Link to Logout is present :

    isLogOutLinkPresent(this.burgerMenuData.logOutLink);

    //Verify Link to reset all state is present:
    isResetAllStateLinkPresent(this.burgerMenuData.resetAllState);
  });

  it("Verify All items link works fine", function () {
    //Open burger menu from product page :
    openBurgerMenu(this.burgerMenuData.burgerMenu);

    //Click on All items link :
    clickAllItemsLink(this.burgerMenuData.allItemsLink);

    //Verify that products page is displayed :
    //Verify product page title is visible :
    isProductTitlePresent(this.burgerMenuData.productPageTitle);
  });

  it("Verify logOut works fine", function () {
    //Open burger menu from product page :
    openBurgerMenu(this.burgerMenuData.burgerMenu);

    //Click on Logout link :
    clickLogOutLink(this.burgerMenuData.logOutLink);

    //Verify that user navigates to loginpage :
    cy.get("#login-button").should("be.visible");
  });
  it.skip("Verify About link works fine", function () {
    //Open burger menu from product page :
    openBurgerMenu(this.burgerMenuData.burgerMenu);

    //Click on All items link :
    clickAboutLink(this.burgerMenuData.aboutLink);

    //Verify that user navigates to saucelabs homepage is displayed :
    //THis check will fail to demonstrate how the reporting will show failed test:
    cy.url().should("have.text", "");
  });
});
