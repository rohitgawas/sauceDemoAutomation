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
  },
  env: {
    username: "standard_user",
    password: "secret_sauce",
    url: "https://www.saucedemo.com/",
  },
});
