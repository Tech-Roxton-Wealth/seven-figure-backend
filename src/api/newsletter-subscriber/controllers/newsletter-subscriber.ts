/**
 * newsletter-subscriber controller
 */

import { factories } from '@strapi/strapi';

function isAuthorizedServerRequest(authHeader: string | undefined): boolean {
  const expectedToken = process.env.STRAPI_API_TOKEN?.trim();
  if (!expectedToken) {
    return false;
  }

  const received = authHeader?.trim() ?? '';
  return received === `Bearer ${expectedToken}`;
}

export default factories.createCoreController(
  'api::newsletter-subscriber.newsletter-subscriber',
  ({ strapi }) => ({
    async serverUpdate(ctx) {
      if (!isAuthorizedServerRequest(ctx.request.header.authorization)) {
        return ctx.unauthorized('Invalid server token.');
      }

      const documentId =
        typeof ctx.params.documentId === 'string' ? ctx.params.documentId.trim() : '';

      if (!documentId) {
        return ctx.badRequest('A valid documentId is required.');
      }

      const body = ctx.request.body as { data?: Record<string, unknown> } | undefined;
      const data = body?.data;

      if (!data || typeof data !== 'object') {
        return ctx.badRequest('Update data is required.');
      }

      try {
        const updated = await strapi
          .documents('api::newsletter-subscriber.newsletter-subscriber')
          .update({
            documentId,
            data,
            status: 'published',
          });

        ctx.body = { data: updated };
      } catch (error) {
        strapi.log.error('Newsletter subscriber server update failed:', error);
        return ctx.internalServerError('Unable to update newsletter subscriber.');
      }
    },
  })
);
