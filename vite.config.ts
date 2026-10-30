import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import fs from 'fs';
import path from 'path';
import {defineConfig, loadEnv, type Plugin} from 'vite';

// Client-side routes. Each gets its own index.html in dist so static hosts
// serve the app instead of a 404 when the URL is opened directly.
const SPA_ROUTES = ['ai-automation-preview'];

function spaRoutes(): Plugin {
  let outDir = 'dist';
  return {
    name: 'spa-routes',
    apply: 'build',
    configResolved(config) {
      outDir = path.resolve(config.root, config.build.outDir);
    },
    closeBundle() {
      const indexHtml = path.join(outDir, 'index.html');
      for (const route of SPA_ROUTES) {
        const routeDir = path.join(outDir, route);
        fs.mkdirSync(routeDir, {recursive: true});
        fs.copyFileSync(indexHtml, path.join(routeDir, 'index.html'));
      }
    },
  };
}

export default defineConfig(({mode}) => {
  const env = loadEnv(mode, '.', '');
  return {
    plugins: [react(), tailwindcss(), spaRoutes()],
    define: {
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY),
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modifyâfile watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
    },
  };
});
