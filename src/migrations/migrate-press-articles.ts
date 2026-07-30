import type { Core } from '@strapi/strapi';
import type { Modules } from '@strapi/types';

const PRESS_PAGE_SLUG = 'press';
const PRESS_ARTICLE_UID = 'api::press-article.press-article' as const;
const ABOUT_PAGE_UID = 'api::about-page.about-page' as const;
const ITEM_LIST_COMPONENT = 'page-sections.item-list';

type PressArticleInput = Modules.Documents.Params.Data.Input<typeof PRESS_ARTICLE_UID>;

type ListRow = {
  id?: number;
  title?: string;
  emblemText?: string | null;
  linkLabel?: string | null;
  linkUrl?: string | null;
  rowMark?: string | null;
};

type ItemListSection = {
  __component?: string;
  items?: ListRow[];
};

type MigrationResult = {
  skipped: boolean;
  created?: number;
  sourceCount?: number;
  finalCount?: number;
  reason?: string;
};

const itemListPopulate = {
  pressSections: {
    on: {
      [ITEM_LIST_COMPONENT]: {
        populate: {
          items: true,
        },
      },
    },
  },
};

function mapListRowToPressArticle(row: ListRow): PressArticleInput | null {
  const title = row.title?.trim();
  if (!title) return null;

  return {
    title,
    legacyListRowId: row.id ?? null,
    emblemText: row.emblemText ?? null,
    linkLabel: row.linkLabel ?? null,
    linkUrl: row.linkUrl ?? null,
    rowMark: row.rowMark ?? null,
  };
}

async function findPressPage(strapi: Core.Strapi) {
  const published = await strapi.documents(ABOUT_PAGE_UID).findFirst({
    filters: { slug: { $eq: PRESS_PAGE_SLUG } },
    status: 'published',
    populate: itemListPopulate,
  });

  if (published) return published;

  return strapi.documents(ABOUT_PAGE_UID).findFirst({
    filters: { slug: { $eq: PRESS_PAGE_SLUG } },
    status: 'draft',
    populate: itemListPopulate,
  });
}

export async function migratePressArticles(strapi: Core.Strapi): Promise<MigrationResult> {
  try {
    const alreadyMigrated = await strapi.documents(PRESS_ARTICLE_UID).count({});

    if (alreadyMigrated > 0) {
      strapi.log.warn(
        `Press article migration skipped: ${alreadyMigrated} entries already exist. ` +
          'Delete press-article entries first if you intend to re-run.'
      );
      return { skipped: true, created: 0, sourceCount: 0, finalCount: alreadyMigrated };
    }

    const page = await findPressPage(strapi);

    if (!page) {
      strapi.log.warn(`About page "${PRESS_PAGE_SLUG}" not found. Skipping migration.`);
      return { skipped: true, reason: 'Page or section not found' };
    }

    const pressSections = ((page as { pressSections?: ItemListSection[] }).pressSections ??
      []) as ItemListSection[];
    const itemListSections = pressSections.filter(
      (section) => section.__component === ITEM_LIST_COMPONENT
    );

    if (itemListSections.length === 0) {
      strapi.log.warn(`No "${ITEM_LIST_COMPONENT}" section found on press page. Skipping migration.`);
      return { skipped: true, reason: 'Page or section not found' };
    }

    const sourceRows = itemListSections.flatMap((section) => section.items ?? []);

    strapi.log.info(`Found ${sourceRows.length} list-row components to migrate.`);

    let created = 0;

    for (const row of sourceRows) {
      const data = mapListRowToPressArticle(row);
      if (!data) {
        strapi.log.warn(`Skipping list-row id=${row.id ?? 'unknown'}: missing title.`);
        continue;
      }

      await strapi.documents(PRESS_ARTICLE_UID).create({
        data,
        status: 'published',
      });

      created += 1;
    }

    const finalCount = await strapi.documents(PRESS_ARTICLE_UID).count({});
    const expectedCount = sourceRows.filter((row) => row.title?.trim()).length;

    strapi.log.info(
      `Press article migration complete: source=${sourceRows.length}, created=${created}, totalInCollection=${finalCount}`
    );

    if (finalCount !== expectedCount) {
      strapi.log.warn(
        `Migrated count (${finalCount}) does not match non-empty source rows (${expectedCount}) — review logs.`
      );
    }

    return { skipped: false, created, sourceCount: sourceRows.length, finalCount };
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    strapi.log.warn(`Press article migration failed: ${message}. Skipping migration.`);
    return { skipped: true, reason: 'Page or section not found' };
  }
}
