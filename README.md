# Readme.md for sauceDemo site :
# Getting started :
## Programming language used : JAVASCRIPT
## Automation tool used : CYPRESS
## Design pattern used : POM (Page Object Model)
## Website used : [https://www.saucedemo.com/]
## Reporting tool used : MOCHAWESOME

## Cypress in short :
**Cypress is a JavaScript-based open-source end-to-end testing framework for web applications. It offers web engineers a quick, dependable, and simple testing solution for writing automated tests that mimic user actions and interactions with the application. Cypress is built to operate in the browser and supports real-time debugging and code modification, making it simple to find and resolve bugs in your application. Cypress also includes a robust API that supports complicated test scenarios and connects with other tools like CI/CD pipelines and continuous testing platforms. It is frequently used in the web development community to assure web application quality and functionality.**

### Important : From this point all the instructions and commands given below are supposed to be execute in sauceDemo folder
### Setting up repository with all the dependencies and installations :
1.	Clone the repository in local storage
2.	Open the repository in IDE.
3.	Go to sauceDemo folder and open terminal
4.	following command :
    npm install
This will install all the dependencies required for this project to run like :Cypress , mochawesome.
5.	Now go to cypress.config.js and make following settings :

   ```
   const { defineConfig } = require("cypress");
	module.exports = defineConfig({
  reporter: "mochawesome",
    reporterOptions: {
    // To display small circular charts regarding test results
    charts: true,
   // Generate JSON file to create custom reports
    json: true,
   // Customize the directory in which reports are saved
   reportsDir: "reports/your-reports-folder",
   // Customize the report file name
   reportFilename: "my-report",
        // Generate new report file or overwrite the a single file
       overwrite: false,
     },
     e2e: {
      chromeWebSecurity: false,
	    setupNodeEvents(on, config) {
        // implement node event listeners here
     },
   specPattern: "cypress/e2e/tests/*.js",
     experimentalRunAllSpecs: true,
    },
    env: {
   username: "standard_user",
     password: "secret_sauce",
     url: "https://www.saucedemo.com/",
      },
    });

```

6. in terminal , make sure that you are in sauceDemo directory then open cypress test runner using one of the following command :
`- node_modules/.bin/cypress open`
OR
`- npx cypress open`
OR
	`- npm run cy:open`
7.	Now select the e2e testing
8.	Select the desired browser
9.	Select the test you want to execute from e2e/tests folder in UI
10.	This will run the test in cypress test runner.


### Understanding Folder structure :
In the repository cypress folder structure is based on Page object model framework. It is arranged like :
```
-Cypress 
  -Downloads
  -e2e
    - tests
 	- verifyBurgerMenu.js
	- verifyCheckOut.js
	- verifyLoginPage.js
	- verifyProductPage.js
	- verifyShoppingCartPage.js
    - Utilities
	- burgerMenu.js
	- checkoutPage.js
	- loginPage.js
 	- productPage.js
	- shoppingCartPage.js
  -Fixtures
    - burgerMenu.json
    - checkOutPage.json
    - loginPage.json
    - productsPage.json
    - shoppingCartPage.json
  -Screenshots
  -Support 
    -commands.js
  -Videos

```

#### Description of the folders in short :
1.	E2e folder is consist of two sub folders , tests and Utilities Tests folder is consist of actual cypress tests Utilities folder utility file for each page  , which includes all the functions used by main cypress test.
2.	Fixtures folder contains saperate json files for each page , which includes all the elements ID used by the corrosponding tests.
3.	Support folder includes commands.js file , which includes all the functions which are supposed to be used frequently by all the main tests.

### Unerstanding custom CMD commands created in package.json file :
We have following custom CMD commands created :
```
"scripts": {
"test": "echo \"Error: no test specified\" && exit 1",
 "cy:Chrome": "npx cypress run --browser chrome",
 "cy:open": "npx cypress open",
 "cy:report": "npx cypress run --reporter mochawesome"
},
```
To use this commands , in terminal make sure that you are folder sauceDemo. Use following command to run custom CMD commands :
```
//Run tests in chrome browser in headless mode :
npm run cy:Chrome

// Open cypress dashboard to run tests in dashboard :
npm run cy:open

//Run cypress tests heedlessly and generate reports :
npm run cy:report
```

### How to generate HTML reports :
Using  mochawesome
#### Installation
`npm install --save-dev mochawesome`
#### Usage
Once you install the package, You can generate these reports by using reporter flag when running tests.
`cypress run --reporter mochawesome`
and, instead of passing the commands using cli, you can add configuration to cypress.config.js file. To define which reporter to use, we will need to add reporter property.
```
const { defineConfig } = require('cypress');
module.exports = defineConfig({
  reporter: 'mochawesome',
  reporterOptions: {
    // To display small circular charts regarding test results
    charts: true,
    // Generate JSON file to create custom reports
    json: true,
    // Customize the directory in which reports are saved
    reportsDir: 'reports/your-reports-folder',
    // Customize the report file name
    reportFilename: 'my-report'
    // Generate new report file or overwrite the a single file
    overwrite: false
  }
});

```

This will generate mochawesome-report folder containing test reports
In our repository , we have done above settings to create html reports using mochawesome.
To generate html reports of the running tests , we can use following commands in terminal :

`node_modules/.bin/cypress run --reporter mochawesome `
OR
//use custom command :
`npm run cy:report`
This will run the tests in headless modes and will store the html reports under mochawesome-reports folder which is present in root directory.
 `node_modules/.bin/cypress run --reporter mochawesome –headed  `
This will run the tests in headed mode in browser and will store the html reports under mochawesome-reports folder which is present in root directory.


## TEST CASES :
### Test cases for login page verification :
1.	Vrify UI elements of login page are present in UI
2.	Verify login functionality with valid user
3.	Verify login with invalid credentials
### Test cases for burger menu verification :
1.	Verify UI elements of burger menu are visible
2.	Verify All items link works fine
3.	Verify logOut works fine
4.	Verify About link works fine
### Test cases for products page verification :
1.	Verify UI elements are present on the page
2.	Add products to cart
3.	Verify user can remove the products from cart from products page
### Test cases for shopping cart page verification :
1.	Verify UI elements of the shopping cart page
2.	Verify items get listed in checkout page after adding products to cart
3.	Verify that user can remove the products from cart using remove button on shopping cart page
### Test cases for checkout process verification :
1.	Verify End to End check out Process
2.	Verify that user can cancel the checkout process at any step of the checkout

## Important Notes :

1.	In testsuite :verifyBurgerMenu.js , test : “ About link works fine” is failing because page is taking too much time to load. But I have kept it as it is to fail so that when report get generated , we can see detailing of failed test in test report.


## Running tests in CI:

We have setup a basic CI. You can access it from actions tab.
1. Go to Actions tab of github repository
2. From all workflows > Select workflow **"sauceDemo CI"**
3. Open dropdown for **Run Workflow** > Click on Run Workflow
   This will setup the repository , then install all dependancies and finally will run tests in headless mode.

## Import note on CI build results : 
As we have verifyBurgerMenu.js test suite includes one failing test , after running the build , build will return failed status as the run tests step fails.
To demonstrate this , I have provided two build runs :

### Build with Passed state : In this I have disabled the failing test to get passed build
### Build with Failed state : In this the failing test is enabled and running.








