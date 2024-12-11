const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    env: {
      url: "https://bookcart.azurewebsites.net/",
    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: "cypress/e2e/cart/*.js",
  },
});
