const { defineConfig } = require("cypress");

module.exports = defineConfig({

  projectId: "yokzj8",

  defaultCommandTimeout: 10000, 
  env: {
    url:'https://rahulshettyacademy.com'
  },
  retries: {
    runMode: 1
    },

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: 'cypress/Integration/examples/*.js'
  },
  "chromeWebSecurity": false
});
