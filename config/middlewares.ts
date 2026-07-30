import type { Core } from '@strapi/strapi';

/** Local Next.js ports used during development (app defaults to 3040). */
const LOCAL_DEV_ORIGINS = [
  'http://localhost:3040',
  'http://127.0.0.1:3040',
  'http://localhost:3000',
  'http://127.0.0.1:3000',
] as const;

function isLocalOrigin(url: string): boolean {
  try {
    const { hostname } = new URL(url);
    return hostname === 'localhost' || hostname === '127.0.0.1';
  } catch {
    return false;
  }
}

function resolveCorsOrigin(env: Core.Config.Shared.ConfigParams['env']): string[] {
  const fromEnv = env('FRONTEND_URL', '')
    .split(',')
    .map((url: string) => url.trim())
    .filter(Boolean);

  // Production: only explicit FRONTEND_URL origins (no localhost / 127.0.0.1).
  if (env('NODE_ENV', 'development') === 'production') {
    return Array.from(new Set(fromEnv.filter((url) => !isLocalOrigin(url))));
  }

  return Array.from(new Set([...LOCAL_DEV_ORIGINS, ...fromEnv]));
}

/** Hostname from CF_PUBLIC_URL for CSP img-src / media-src (e.g. pub-xxx.r2.dev). */
function resolveR2MediaHost(env: Core.Config.Shared.ConfigParams['env']): string | null {
  const raw = env('CF_PUBLIC_URL', '').trim();
  if (!raw) return null;

  try {
    return new URL(raw).hostname;
  } catch {
    return null;
  }
}

export default ({ env }: Core.Config.Shared.ConfigParams): Core.Config.Middlewares => {
  const r2Host = resolveR2MediaHost(env);

  return [
    'strapi::logger',
    'strapi::errors',
    {
      name: 'strapi::security',
      config: {
        contentSecurityPolicy: {
          useDefaults: true,
          directives: {
            'connect-src': ["'self'", 'https:'],
            'img-src': [
              "'self'",
              'data:',
              'blob:',
              'dl.airtable.com',
              ...(r2Host ? [r2Host] : []),
            ],
            'media-src': [
              "'self'",
              'data:',
              'blob:',
              'dl.airtable.com',
              ...(r2Host ? [r2Host] : []),
            ],
            upgradeInsecureRequests: null,
          },
        },
      },
    },
    {
      name: 'strapi::cors',
      config: {
        origin: resolveCorsOrigin(env),
      },
    },
    'strapi::poweredBy',
    'strapi::query',
    'strapi::body',
    'strapi::session',
    'strapi::favicon',
    'strapi::public',
  ];
};
