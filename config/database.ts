import path from 'path';
import type { Core } from '@strapi/strapi';

type DatabaseClient = 'mysql' | 'postgres' | 'sqlite';

function resolveDatabaseClient(value: string): DatabaseClient {
  if (value === 'mysql' || value === 'postgres' || value === 'sqlite') {
    return value;
  }
  return 'sqlite';
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
    return {
      connection: {
        client: 'postgres' as const,
        connection: {
          // Railway (and most hosted Postgres) provides a single connection URL.
          connectionString: env('DATABASE_URL'),
          host: env('DATABASE_HOST', 'localhost'),
          port: env.int('DATABASE_PORT', 5432),
          database: env('DATABASE_NAME', 'strapi'),
          user: env('DATABASE_USERNAME', 'strapi'),
          password: env('DATABASE_PASSWORD', 'strapi'),
          // Railway Postgres typically needs SSL; rejectUnauthorized:false is the usual setting.
          // Override with DATABASE_SSL=false for local Postgres without TLS.
          ssl: env.bool('DATABASE_SSL', Boolean(env('DATABASE_URL')))
            ? {
                rejectUnauthorized: env.bool('DATABASE_SSL_REJECT_UNAUTHORIZED', false),
              }
            : false,
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
