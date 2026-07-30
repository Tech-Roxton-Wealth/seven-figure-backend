import path from 'path';
import type { Core } from '@strapi/strapi';

type DatabaseClient = 'mysql' | 'postgres' | 'sqlite';

function resolveDatabaseClient(value: string): DatabaseClient {
  if (value === 'mysql' || value === 'postgres' || value === 'sqlite') {
    return value;
  }
  return 'sqlite';
}

/**
 * Remove sslmode (and related SSL query params) so pg-connection-string cannot
 * override our explicit `{ rejectUnauthorized: false }` with `ssl: true`.
 */
function stripSslModeFromConnectionString(connectionString: string): string {
  try {
    const url = new URL(connectionString);
    url.searchParams.delete('sslmode');
    url.searchParams.delete('sslrootcert');
    url.searchParams.delete('sslcert');
    url.searchParams.delete('sslkey');
    return url.toString();
  } catch {
    return connectionString.replace(/([?&])sslmode=[^&]*/gi, '$1').replace(/[?&]$/, '').replace(/\?&/, '?');
  }
}

const config = ({ env }: Core.Config.Shared.ConfigParams) => {
  const client = resolveDatabaseClient(env('DATABASE_CLIENT', 'sqlite'));
  const acquireConnectionTimeout = env.int('DATABASE_CONNECTION_TIMEOUT', 60000);

  if (client === 'mysql') {
    return {
      connection: {
        client: 'mysql' as const,
        connection: {
          host: env('DATABASE_HOST', 'localhost'),
          port: env.int('DATABASE_PORT', 3306),
          database: env('DATABASE_NAME', 'strapi'),
          user: env('DATABASE_USERNAME', 'strapi'),
          password: env('DATABASE_PASSWORD', 'strapi'),
          ssl: env.bool('DATABASE_SSL', false) && {
            key: env('DATABASE_SSL_KEY', undefined),
            cert: env('DATABASE_SSL_CERT', undefined),
            ca: env('DATABASE_SSL_CA', undefined),
            capath: env('DATABASE_SSL_CAPATH', undefined),
            cipher: env('DATABASE_SSL_CIPHER', undefined),
            rejectUnauthorized: env.bool('DATABASE_SSL_REJECT_UNAUTHORIZED', true),
          },
        },
        pool: { min: env.int('DATABASE_POOL_MIN', 2), max: env.int('DATABASE_POOL_MAX', 10) },
        acquireConnectionTimeout,
      },
    };
  }

  if (client === 'postgres') {
    const rawUrl = env('DATABASE_URL', '').trim();
    if (!rawUrl) {
      throw new Error(
        'DATABASE_URL is required when DATABASE_CLIENT=postgres. Set it to your Railway Postgres connection string.'
      );
    }

    return {
      connection: {
        client: 'postgres' as const,
        connection: {
          connectionString: stripSslModeFromConnectionString(rawUrl),
          // Railway Postgres uses certificates that require this for Node/pg.
          ssl: {
            rejectUnauthorized: false,
          },
          schema: env('DATABASE_SCHEMA', 'public'),
        },
        pool: { min: env.int('DATABASE_POOL_MIN', 2), max: env.int('DATABASE_POOL_MAX', 10) },
        acquireConnectionTimeout,
      },
    };
  }

  return {
    connection: {
      client: 'sqlite' as const,
      connection: {
        filename: path.join(
          __dirname,
          '..',
          '..',
          env('DATABASE_FILENAME', '.tmp/wefinance-complex.db')
        ),
      },
      useNullAsDefault: true,
      acquireConnectionTimeout,
    },
  };
};

export default config;
