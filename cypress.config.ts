import { defineConfig } from "cypress";

export default defineConfig({
  allowCypressEnv: false,

  e2e: {
    baseUrl: "https://invetory.abbanissi.com",
    env: {
      apiUrl: "https://invetory.api.abbanissi.com/api/v1"
    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
