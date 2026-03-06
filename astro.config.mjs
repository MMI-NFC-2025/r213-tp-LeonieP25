// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import netlify from '@astrojs/netlify';

// https://astro.build/config
export default defineConfig({
  output: 'server',
  vite: {
    // @ts-ignore
    plugins: [tailwindcss()]
  },

  adapter: netlify(),
  
  image: {
    domains: ['127.0.0.1', 'agence.leonie-pruniaux.fr'],
    remotePatterns: [
      {
        protocol: 'http',
        hostname: '127.0.0.1'
      },
      {
        protocol: 'https',
        hostname: 'agence.leonie-pruniaux.fr'
      }
    ]
  }
});