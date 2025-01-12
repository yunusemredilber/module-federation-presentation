const DEFAULT_BASE_URL = 'http://localhost:3000';

function snakeCaseToKebabCase(snakeCaseStr: string): string {
  return snakeCaseStr.replace(/_/g, '-');
}

export function getProviderManifest(providerName: string, devPort: number): string {
  const isDev = process.env.NODE_ENV === 'development';

  if (isDev) {
    return `${providerName}@http://localhost:${devPort}/mf-manifest.json`;
  } else {
    return `${providerName}@${process.env.BASE_URL ?? DEFAULT_BASE_URL}/apps/${snakeCaseToKebabCase(providerName)}/dist/mf-manifest.json`;
  }
}

export function getOutputAssetPrefix(appName: string): string | undefined {
  const isDev = process.env.NODE_ENV === 'development';

  if (isDev) {
    return undefined;
  }

  return `${process.env.BASE_URL ?? DEFAULT_BASE_URL}/apps/${snakeCaseToKebabCase(appName)}/dist/`;
}
