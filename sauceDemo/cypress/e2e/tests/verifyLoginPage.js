//Import functions and files required for reference :
import {
  isLoginPageTitlePresent,
  isUserNameFeildPresent,
  isPassWordFeildPresent,
  isLoginButtonPresent,
  enterInValidUserName,
  enterInvalidPassword,
  verifyInvalidCredentialErrorCard,
} from "../utilities/loginPage";

describe("Test suite for checking scenarios of login page ", function () {
  beforeEach(function () {
    /*load the website :
    Here we have passed failOnStatusCode to false as saucelab website is throwing 401 error
    on loading which is failing the test.
    So to disable the failure and execute the test we have passed failOnStatusCode:false*/
    cy.visit(Cypress.env("url"), { failOnStatusCode: false });

    //import fxure file:
    cy.fixture("loginPage").then(function (data) {
      this.loginPageElements = data;
    });
  });
  it("Vrify UI elements of login page are present in UI", function () {
    //verify login page title is visible:
    isLoginPageTitlePresent(this.loginPageElements.pageHeader);

    //verify username field is visible:
    isUserNameFeildPresent(this.loginPageElements.userName);

    //verify password text field is visible:
    isPassWordFeildPresent(this.loginPageElements.passWord);

    //verify login button is visible:
    isLoginButtonPresent(this.loginPageElements.loginButton);
  });

  it("Verify login functionality with valid user", function () {
    //checks the login using valid user.
    //For this it uses login custom command defined in Support> commands.js file
    cy.login();
  });
  it("Verify login with invalid credentials", function () {
    //Enter invalid user name in username field :
    enterInValidUserName(
      this.loginPageElements.userName,
      this.loginPageElements.invalidUserName
    );

    //Get password text field and enter invalid password :
    enterInvalidPassword(
      this.loginPageElements.passWord,
      this.loginPageElements.invalidUserPassWord
    );

    //Get login button and click on it :
    cy.get(this.loginPageElements.loginButton).click();

    //Verify the error message :
    verifyInvalidCredentialErrorCard(
      this.loginPageElements.errorCard,
      this.loginPageElements.inValidUserError
    );
  });
});
