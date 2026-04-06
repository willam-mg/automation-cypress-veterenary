import { defineConfig } from "cypress";

export default defineConfig({
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

      return config;
    },
  },
});