const { defineConfig } = require("cypress");

module.exports = defineConfig({
    e2e: {
        "baseUrl": "https://www.saucedemo.com/",
        "watchForFileChanges": false,
        "testIsolation": false,
        "video": true,
        setupNodeEvents(on, config) {
            // implement node event listeners here
        },
    },
});