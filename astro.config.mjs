import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import cloudflare from '@astrojs/cloudflare';
import tailwindv4 from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  adapter: cloudflare({
    imageService: 'compile',
    platformProxy: {
      enabled: true,
    },
  }),
  integrations: [react()],
  vite: {
    plugins: [tailwindv4()],
    resolve: {
      alias: import.meta.env.PROD ? {
        "react-dom/server": "react-dom/server.edge",
      } : {},
    },
  },
  image: {
    domains: ['mueblesnagu.cl'],
  },
});