const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "http://localhost:3000",
    testIsolation: true,
    setupNodeEvents() {
      // implement node event listeners here
    },
  },
});
