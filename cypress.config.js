const { defineConfig } = require("cypress");

module.exports = defineConfig({

  projectId: "yokzj8",

  defaultCommandTimeout: 10000, 
  env: {
    url:'https://rahulshettyacademy.com',
    cricbuzz:'https://www.cricbuzz.com/'
  },
  retries: {
    runMode: 1
    },

  e2e: {
    reporter: 'cypress-mochawesome-reporter',
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
    },
    specPattern: 'cypress/Integration/examples/*.js'
  },
  "chromeWebSecurity": false
});
