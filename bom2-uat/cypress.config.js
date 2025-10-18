const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'https://adminbom.smobilpay.integration.maviance.info',
    defaultCommandTimeout: 10000,
    specPattern: ['cypress/e2e/tests/*.cy.{js,jsx,ts,tsx}', 'cypress/e2e/tests/*/*.cy.{js,jsx,ts,tsx}'],
    viewportWidth: 1366,
    viewportHeight: 768,
  },
});
