import type { Core } from '@strapi/strapi';

const config = ({ env }: Core.Config.Shared.ConfigParams): Core.Config.Server => {
  const isProduction = env('NODE_ENV') === 'production';

  return {
    host: env('HOST', '0.0.0.0'),
    port: env.int('PORT', 1337),
    // In production, omit the URL completely if not provided, letting Railway route natively.
    // In dev, fallback to localhost.
    url: isProduction
      ? env('PUBLIC_URL', env('URL', ''))
      : env('URL', 'http://127.0.0.1:1337'),
    proxy: env.bool('IS_PROXIED', true),
    app: {
      keys: env.array('APP_KEYS'),
    },
  };
};

export default config;
