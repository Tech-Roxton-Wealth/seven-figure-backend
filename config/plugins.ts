import type { Core } from '@strapi/strapi';

const config = ({ env }: Core.Config.Shared.ConfigParams) => ({
  upload: {
    config: {
      provider: 'aws-s3',
      providerOptions: {
        baseUrl: env('CF_PUBLIC_URL'),
        s3Options: {
          credentials: {
            accessKeyId: env('CF_ACCESS_KEY_ID'),
            secretAccessKey: env('CF_ACCESS_SECRET'),
          },
          endpoint: env('CF_ENDPOINT'),
          region: 'auto',
          params: {
            Bucket: env('CF_BUCKET'),
            // Explicit undefined: provider defaults to public-read when ACL is omitted,
            // which Cloudflare R2 rejects. Key present + falsy skips the ACL header.
            ACL: undefined,
          },
        },
      },
      actionOptions: {
        upload: {},
        uploadStream: {},
        delete: {},
      },
    },
  },
});

export default config;
