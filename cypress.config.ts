import { defineConfig } from "cypress";
const { plugin: cypressGrepPlugin } = require('@cypress/grep/plugin')
import { allureCypress } from "allure-cypress/reporter";
import fs from "fs";

export default defineConfig({
  allowCypressEnv: true,
  video: true,
  videoCompression: false, 
  retries: {
    runMode: 2,
    openMode: 0
  },
  e2e: {
    setupNodeEvents(on, config) {

      const envName = config.env.environment || 'local';

      const envConfig = config.env[envName];

      if (!envConfig) {
        throw new Error(`No existe configuración para el entorno: ${envName}`);
      }

      if (envConfig.baseUrl) {
        config.baseUrl = envConfig.baseUrl;
      }

      config.env = {
        ...config.env,
        ...envConfig
      };

      on("after:spec", (spec, results) => {
        if (!results || !results.video) {
          return;
        }

        const hasFailures = results.stats.failures > 0;
        const hasRetries =
          results.tests?.some((test) =>
            test.attempts?.some((attempt) => attempt.state === "failed")
          ) ?? false;

        // Si no hubo fallos ni reintentos, borra el video
        if (!hasFailures && !hasRetries) {
          fs.unlinkSync(results.video);
        }
      });

      allureCypress(on, config, {
        resultsDir: "cypress/report/allure-results",
      });

      cypressGrepPlugin(config);

      return config;
    },
  },
  env: {
    grepFilterSpecs: true,
  },

  reporter: "mocha-junit-reporter",
  reporterOptions: {
    mochaFile: "cypress/report/mocha-results/results-[hash].xml",
    toConsole: true,
  },
});