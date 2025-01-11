import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import { pluginSass } from '@rsbuild/plugin-sass';
import { pluginModuleFederation } from '@module-federation/rsbuild-plugin';

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
});
