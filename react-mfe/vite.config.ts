import { defineConfig } from 'vite'
import { federation } from "@module-federation/vite"
import { createEsBuildAdapter } from "@softarc/native-federation-esbuild"

// https://vitejs.dev/config/
export default defineConfig(async ({ command }) => ({
  server: {
    port: 5432,
    preTransformRequests: false,
    hmr: false
  },
  plugins: [
    await federation({
      options: {
        workspaceRoot: __dirname,
        outputPath: "dist",
        tsConfig: "tsconfig.app.json",
        federationConfig: "federation.config.ts",
        verbose: false,
        dev: command === "serve",
      },
      adapter: createEsBuildAdapter({
        plugins: [],
        loader: { '.svg': 'text' }
      }),
    }), 
  ],
}));
