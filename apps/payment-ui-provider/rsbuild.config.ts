import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import { pluginSass } from '@rsbuild/plugin-sass';
import { pluginModuleFederation } from '@module-federation/rsbuild-plugin';
import { getOutputAssetPrefix } from '@repo/module_federation_helpers';

export default defineConfig({
  plugins: [
    pluginReact(),
    pluginSass(),
    pluginModuleFederation({
      name: 'payment_ui_provider',
      exposes: {
        './payment-widgets': './src/components/payment-widgets/index.tsx',
        './pdp-basket-footer': './src/components/pdp-basket-footer/index.tsx',
      },
      shared: {
        react: {
          singleton: true,
          requiredVersion: false,
        },
        'react-dom': {
          singleton: true,
          requiredVersion: false,
        },
      },
      shareStrategy: 'loaded-first',
    }),
  ],
  html: {
    template: './public/template.html',
  },
  server: {
    port: 3002,
  },
  output: {
    assetPrefix: getOutputAssetPrefix('payment_ui_provider'),
  },
});
