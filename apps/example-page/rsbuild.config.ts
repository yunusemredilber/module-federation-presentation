import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import { pluginSass } from '@rsbuild/plugin-sass';
import { pluginModuleFederation } from '@module-federation/rsbuild-plugin';

const isDev = process.env.NODE_ENV === 'development';
const headerProviderUrl = isDev ? 'http://localhost:3001/mf-manifest.json' : `${process.env.BASE_URL ?? 'http://localhost:3000'}/apps/header/dist/mf-manifest.json`;

export default defineConfig({
  plugins: [
    pluginReact(),
    pluginSass(),
    pluginModuleFederation({
      name: 'product_page_consumer',
      remotes: {
        header_provider: `header_provider@${headerProviderUrl}`,
      },
      shared: ['react', 'react-dom'],
    }),
  ],
  html: {
    template: './public/template.html',
  },
  dev: {
    assetPrefix: '',
  },
  output: {
    assetPrefix: `${process.env.BASE_URL ?? 'http://localhost:3000'}/apps/example-page/dist/`,
  },
});
