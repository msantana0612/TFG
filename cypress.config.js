const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  reporter: 'junit', // Usar el reporter JUnit
  reporterOptions: {
    mochaFile: './test-results/cypress/results.xml', // Ruta del archivo XML
    toConsole: true
  }
});