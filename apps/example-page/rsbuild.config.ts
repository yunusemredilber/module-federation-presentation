import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import { pluginSass } from '@rsbuild/plugin-sass';
import { pluginModuleFederation } from '@module-federation/rsbuild-plugin';
import { getProviderManifest, getOutputAssetPrefix } from '@repo/module_federation_helpers';

export default defineConfig({
  plugins: [
    pluginReact(),
    pluginSass(),
    pluginModuleFederation({
      name: 'product_page_consumer',
      remotes: {
        header_provider: getProviderManifest('header_provider', 3001),
        payment_ui_provider: getProviderManifest('payment_ui_provider', 3002),
        product_detail_provider: getProviderManifest('product_detail_provider', 3003),
      },
      shared: {
        react: {
          singleton: true,
        },
        'react-dom': {
          singleton: true,
        },
      },
      shareStrategy: 'loaded-first',
    }),
  ],
  html: {
    template: './public/template.html',
  },
  output: {
    assetPrefix: getOutputAssetPrefix('example-page'),
  },
});
