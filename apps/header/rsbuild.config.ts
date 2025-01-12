import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import { pluginSass } from '@rsbuild/plugin-sass';
import { pluginModuleFederation } from '@module-federation/rsbuild-plugin';

const isDev = process.env.NODE_ENV === 'development';

export default defineConfig({
  plugins: [
    pluginReact(),
    pluginSass(),
    pluginModuleFederation({
      name: 'header_provider',
      exposes: {
        './header': './src/header.tsx',
      },
      shared: ['react', 'react-dom'],
    }),
  ],
  html: {
    template: './public/template.html',
  },
  server: {
    port: 3001,
  },
  output: {
    assetPrefix: isDev ? undefined : `${process.env.BASE_URL ?? 'http://localhost:3000'}/apps/header/dist/`,
  },
});
