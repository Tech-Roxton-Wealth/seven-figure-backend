import type { Core } from '@strapi/strapi';

/**
 * Public `url` must be the externally reachable Strapi origin (Railway domain).
 * Used for absolute admin/media links. Prefer `URL`; `PUBLIC_URL` is accepted as an alias.
 */
const config = ({ env }: Core.Config.Shared.ConfigParams): Core.Config.Server => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1340),
  url: env('URL', env('PUBLIC_URL', 'http://127.0.0.1:1340')),
  // Trust Railway's TLS-terminating proxy for correct proto/host forwarding.
  proxy: true,
  app: {
    keys: env.array('APP_KEYS'),
  },
});

export default config;
