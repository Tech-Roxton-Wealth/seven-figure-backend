/**
 * lead controller
 */

import { factories } from '@strapi/strapi';
import type { Modules } from '@strapi/types';

type LeadInput = Modules.Documents.Params.Data.Input<'api::lead.lead'>;

function isAuthorizedServerRequest(authHeader: string | undefined): boolean {
  const expectedToken = process.env.STRAPI_API_TOKEN?.trim();
  if (!expectedToken) {
    return false;
  }

  const received = authHeader?.trim() ?? '';
  return received === `Bearer ${expectedToken}`;
}

function optionalString(value: unknown): string | null {
  if (typeof value !== 'string') return null;
  const trimmed = value.trim();
  return trimmed || null;
}

function parseLeadInput(raw: Record<string, unknown>): LeadInput | null {
  const name = typeof raw.name === 'string' ? raw.name.trim() : '';
  const email = typeof raw.email === 'string' ? raw.email.trim() : '';

  if (!name || !email) {
    return null;
  }

  return {
    name,
    email,
    phone: optionalString(raw.phone),
    adviceArea: optionalString(raw.adviceArea),
    route: optionalString(raw.route),
    experience: optionalString(raw.experience),
    ownership: optionalString(raw.ownership),
    preferredContactMethod: optionalString(raw.preferredContactMethod),
    message: optionalString(raw.message),
    sourcePage: optionalString(raw.sourcePage),
    newsletterOptIn: raw.newsletterOptIn === true,
  };
}

export default factories.createCoreController('api::lead.lead', ({ strapi }) => ({
  async serverCreate(ctx) {
    if (!isAuthorizedServerRequest(ctx.request.header.authorization)) {
      return ctx.unauthorized('Invalid server token.');
    }

    const body = ctx.request.body as { data?: Record<string, unknown> } | undefined;
    const raw = body?.data;

    if (!raw || typeof raw !== 'object') {
      return ctx.badRequest('Lead data is required.');
    }

    const data = parseLeadInput(raw);
    if (!data) {
      return ctx.badRequest('Name and email are required.');
    }

    try {
      const created = await strapi.documents('api::lead.lead').create({
        data,
      });

      ctx.body = { data: created };
    } catch (error) {
      strapi.log.error('Lead server create failed:', error);
      return ctx.internalServerError('Unable to create lead.');
    }
  },
}));
