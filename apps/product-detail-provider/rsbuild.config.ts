import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import { pluginSass } from '@rsbuild/plugin-sass';
import { pluginModuleFederation } from '@module-federation/rsbuild-plugin';
import {
  getOutputAssetPrefix,
  getProviderManifest,
} from '@repo/module_federation_helpers';

export default defineConfig({
  plugins: [
    pluginReact(),
    pluginSass(),
    pluginModuleFederation({
      name: 'product_detail_provider',
      exposes: {
        './product-detail': './src/components/product-detail/index.tsx',
      },
      remotes: {
        payment_ui_provider: getProviderManifest('payment_ui_provider', 3002),
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
    port: 3003,
  },
  output: {
    assetPrefix: getOutputAssetPrefix('product_detail_provider'),
  },
});
