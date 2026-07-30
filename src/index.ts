import type { Core } from '@strapi/strapi';

async function ensurePublicPermissions(strapi: Core.Strapi, actions: string[]) {
  const publicRole = await strapi.db
    .query('plugin::users-permissions.role')
    .findOne({ where: { type: 'public' } });

  if (!publicRole) {
    strapi.log.warn('Public role not found; skipping permission bootstrap.');
    return;
  }

  for (const action of actions) {
    const existing = await strapi.db.query('plugin::users-permissions.permission').findOne({
      where: { action, role: publicRole.id },
    });

    if (!existing) {
      await strapi.db.query('plugin::users-permissions.permission').create({
        data: { action, role: publicRole.id },
      });
      strapi.log.info(`Granted public permission: ${action}`);
    }
  }
}

async function ensurePublishedSingleType(
  strapi: Core.Strapi,
  uid:
    | 'api::homepage.homepage'
    | 'api::insights-page.insights-page'
    | 'api::guides-page.guides-page'
    | 'api::newsletter-page.newsletter-page'
    | 'api::client-login-page.client-login-page'
    | 'api::contact-page.contact-page'
    | 'api::our-offices-page.our-offices-page'
    | 'api::our-brands-page.our-brands-page'
    | 'api::privacy-page.privacy-page'
    | 'api::glossary-page.glossary-page',
  label: string
) {
  const published = await strapi.db.query(uid).findOne({
    where: { publishedAt: { $notNull: true } },
  });
  if (published) return;

  const draft = await strapi.db.query(uid).findOne({});
  if (draft) {
    await strapi.db.query(uid).update({
      where: { id: draft.id },
      data: { publishedAt: new Date() },
    });
    strapi.log.info(`Published ${label} single type.`);
    return;
  }

  await strapi.db.query(uid).create({
    data: { publishedAt: new Date() },
  });
  strapi.log.info(`Created published ${label} single type.`);
}

async function ensureServiceContentManagerPageSize(strapi: Core.Strapi) {
  const uid = 'api::service.service';
  const contentType = strapi.contentTypes[uid];
  if (!contentType) return;

  const cmService = strapi.plugin('content-manager').service('content-types');
  const config = await cmService.findConfiguration(contentType);
  const pageSize = config?.settings?.pageSize;

  if (typeof pageSize === 'number' && pageSize < 10) {
    await cmService.updateConfiguration(contentType, {
      ...config,
      settings: {
        ...config.settings,
        pageSize: 25,
      },
    });
    strapi.log.info(`Corrected Service content-manager pageSize from ${pageSize} to 25.`);
  }
}

/**
 * Strapi stores Content Manager field layouts separately from schema files.
 * When hero image fields are renamed or missing from a custom layout, reset the
 * split-hero component view so the media picker appears in the admin.
 */
async function ensureSplitHeroComponentLayout(strapi: Core.Strapi) {
  const uid = 'page-sections.split-hero';
  const component = strapi.components[uid];
  if (!component) return;

  const cmComponents = strapi.plugin('content-manager').service('components');
  const config = await cmComponents.findConfiguration(component);
  const editFieldNames = (config.layouts?.edit ?? []).flat().map((field) => field.name);

  if (editFieldNames.includes('heroImage')) return;

  strapi.log.info(
    'Split Hero content-manager layout is missing heroImage; resetting component view configuration.'
  );

  await strapi.db.query('strapi::core-store').delete({
    where: {
      key: 'plugin_content_manager_configuration_components::page-sections.split-hero',
    },
  });

  await cmComponents.syncConfigurations();
}

async function ensureAdaGuidePanelComponentLayout(strapi: Core.Strapi) {
  const uid = 'page-sections.ada-guide-panel';
  const component = strapi.components[uid];
  if (!component) return;

  const cmComponents = strapi.plugin('content-manager').service('components');
  const config = await cmComponents.findConfiguration(component);
  const editFieldNames = (config.layouts?.edit ?? []).flat().map((field) => field.name);

  if (editFieldNames.includes('cta')) return;

  strapi.log.info(
    'Ada Guide Panel content-manager layout is missing cta; resetting component view configuration.'
  );

  await strapi.db.query('strapi::core-store').delete({
    where: {
      key: 'plugin_content_manager_configuration_components::page-sections.ada-guide-panel',
    },
  });

  await cmComponents.syncConfigurations();
}

async function ensureDefaultAboutCategories(strapi: Core.Strapi) {
  if (!strapi.contentTypes['api::about-category.about-category']) return;

  const defaults = [
    { name: 'Our company', order: 1 },
    { name: 'The service', order: 2 },
    { name: 'More information', order: 3 },
  ] as const;

  for (const item of defaults) {
    const existing = await strapi.db.query('api::about-category.about-category').findOne({
      where: { name: item.name },
    });
    if (existing) continue;

    try {
      await strapi.documents('api::about-category.about-category').create({
        data: {
          name: item.name,
          order: item.order,
        },
        status: 'published',
      });
      strapi.log.info(`Seeded About Category: ${item.name}`);
    } catch (error) {
      strapi.log.warn(
        `Could not seed About Category "${item.name}": ${
          error instanceof Error ? error.message : String(error)
        }`
      );
    }
  }
}

export default {
  register(/* { strapi }: { strapi: Core.Strapi } */) {},

  async bootstrap({ strapi }: { strapi: Core.Strapi }) {
    await ensurePublicPermissions(strapi, [
      'api::homepage.homepage.find',
      'api::homepage.homepage.findOne',
      'api::privacy-page.privacy-page.find',
      'api::privacy-page.privacy-page.findOne',
      'api::services-page.services-page.find',
      'api::client-route.client-route.find',
      'api::client-route.client-route.findOne',
      'api::service-category.service-category.find',
      'api::client-route-category.client-route-category.find',
      'api::life-wealth-page.life-wealth-page.find',
      'api::life-wealth-page.life-wealth-page.findOne',
      'api::life-wealth-category.life-wealth-category.find',
      'api::partnership-page.partnership-page.find',
      'api::partnership-page.partnership-page.findOne',
      'api::partnership-category.partnership-category.find',
      'api::partnership-category.partnership-category.findOne',
      'api::insight.insight.find',
      'api::insight.insight.findOne',
      'api::insight-category.insight-category.find',
      'api::guide.guide.find',
      'api::guide.guide.findOne',
      'api::guide-category.guide-category.find',
      'api::insights-page.insights-page.find',
      'api::guides-page.guides-page.find',
      'api::newsletter-page.newsletter-page.find',
      'api::glossary-page.glossary-page.find',
      'api::glossary-letter.glossary-letter.find',
      'api::glossary-letter.glossary-letter.findOne',
      'api::client-login-page.client-login-page.find',
      'api::contact-page.contact-page.find',
      'api::our-offices-page.our-offices-page.find',
      'api::our-brands-page.our-brands-page.find',
      'api::about-page.about-page.find',
      'api::about-page.about-page.findOne',
      'api::about-category.about-category.find',
      'api::about-category.about-category.findOne',
      'api::press-article.press-article.find',
      'api::press-article.press-article.findOne',
      'api::global-setting.global-setting.find',
      'api::lead.lead.create',
      'api::newsletter-subscriber.newsletter-subscriber.create',
    ]);
    await ensurePublishedSingleType(strapi, 'api::homepage.homepage', 'Homepage');
    await ensurePublishedSingleType(strapi, 'api::insights-page.insights-page', 'Insights Page');
    await ensurePublishedSingleType(strapi, 'api::guides-page.guides-page', 'Guides Page');
    await ensurePublishedSingleType(strapi, 'api::newsletter-page.newsletter-page', 'Newsletter Page');
    await ensurePublishedSingleType(strapi, 'api::glossary-page.glossary-page', 'Glossary Page');
    await ensurePublishedSingleType(strapi, 'api::client-login-page.client-login-page', 'Client Login Page');
    await ensurePublishedSingleType(strapi, 'api::contact-page.contact-page', 'Contact Page');
    await ensurePublishedSingleType(strapi, 'api::our-offices-page.our-offices-page', 'Our Offices Page');
    await ensurePublishedSingleType(strapi, 'api::our-brands-page.our-brands-page', 'Our Brands Page');
    await ensurePublishedSingleType(strapi, 'api::privacy-page.privacy-page', 'Privacy Page');
    await ensureServiceContentManagerPageSize(strapi);
    await ensureSplitHeroComponentLayout(strapi);
    await ensureAdaGuidePanelComponentLayout(strapi);
    await ensureDefaultAboutCategories(strapi);

    if (process.env.RUN_PRESS_ARTICLE_MIGRATION === '1') {
      const { migratePressArticles } = await import('./migrations/migrate-press-articles.js');
      await migratePressArticles(strapi);
    }

    if (process.env.RUN_CLEAR_PRESS_ITEM_LIST_ROWS === '1') {
      const { clearPressItemListRows } = await import('./migrations/clear-press-item-list-rows.js');
      await clearPressItemListRows(strapi);
    }
  },
};
