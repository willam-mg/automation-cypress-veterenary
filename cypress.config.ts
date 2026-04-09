import { defineConfig } from "cypress";
const { plugin: cypressGrepPlugin } = require('@cypress/grep/plugin')

export default defineConfig({
  allowCypressEnv: false,
  e2e: {
    setupNodeEvents(on, config) {

      const envName = config.env.environment || 'local';

      const envConfig = config.env[envName];

      if (!envConfig) {
        throw new Error(`No existe configuración para el entorno: ${envName}`);
      }

      config.baseUrl = envConfig.baseUrl;

      config.env = {
        ...config.env,
        ...envConfig
      };
      
      cypressGrepPlugin(config);

      return config;
    },
  },
  env: {
    grepFilterSpecs: true,
  },
});