import type { Core } from '@strapi/strapi';

const PRESS_PAGE_SLUG = 'press';
const ABOUT_PAGE_UID = 'api::about-page.about-page' as const;
const ITEM_LIST_COMPONENT = 'page-sections.item-list';

type ListRow = { id?: number };
type PressSection = Record<string, unknown> & {
  id?: number;
  __component?: string;
  items?: ListRow[];
};

type ClearResult = {
  skipped: boolean;
  reason?: string;
  documentId?: string;
  clearedRows?: number;
  itemListSections?: number;
};

const META_KEYS = new Set([
  'documentId',
  'createdAt',
  'updatedAt',
  'publishedAt',
  'locale',
  'createdBy',
  'updatedBy',
  'localizations',
]);

const pressSectionsPopulate = {
  pressSections: {
    on: {
      'page-sections.logo-wall': { populate: { tiles: { populate: { logoImage: true } } } },
      'page-sections.split-hero': {
        populate: {
          heroImage: true,
          primaryButton: { populate: { downloadFile: true } },
          secondaryButton: { populate: { downloadFile: true } },
        },
      },
      'page-sections.card-grid': { populate: { cards: { populate: { image: true } } } },
      [ITEM_LIST_COMPONENT]: {
        populate: {
          items: true,
        },
      },
      'page-sections.link-panel': { populate: { links: true } },
      'page-sections.final-cta': {
        populate: {
          primaryButton: { populate: { downloadFile: true } },
          secondaryButton: { populate: { downloadFile: true } },
        },
      },
    },
  },
} as const;

function stripDocumentMeta<T>(value: T): T {
  if (Array.isArray(value)) {
    return value.map((entry) => stripDocumentMeta(entry)) as T;
  }

  if (!value || typeof value !== 'object') {
    return value;
  }

  const record = value as Record<string, unknown>;
  const next: Record<string, unknown> = {};

  for (const [key, entry] of Object.entries(record)) {
    if (META_KEYS.has(key)) continue;
    next[key] = stripDocumentMeta(entry);
  }

  return next as T;
}

function countItemListRows(sections: PressSection[]): number {
  return sections
    .filter((section) => section.__component === ITEM_LIST_COMPONENT)
    .reduce((total, section) => total + (section.items?.length ?? 0), 0);
}

function buildClearedPressSections(sections: PressSection[]): PressSection[] {
  return sections.map((section) => {
    const cleaned = stripDocumentMeta(section);

    if (cleaned.__component !== ITEM_LIST_COMPONENT) {
      return cleaned;
    }

    return {
      ...cleaned,
      items: [],
    };
  });
}

async function findPressPage(strapi: Core.Strapi, status: 'draft' | 'published') {
  return strapi.documents(ABOUT_PAGE_UID).findFirst({
    filters: { slug: { $eq: PRESS_PAGE_SLUG } },
    status,
    populate: pressSectionsPopulate,
  });
}

async function updatePressPage(
  strapi: Core.Strapi,
  documentId: string,
  pressSections: PressSection[],
  status: 'draft' | 'published'
) {
  await strapi.documents(ABOUT_PAGE_UID).update({
    documentId,
    data: { pressSections: pressSections as never },
    status,
  });
}

export async function clearPressItemListRows(strapi: Core.Strapi): Promise<ClearResult> {
  try {
    const publishedPage = await findPressPage(strapi, 'published');
    const draftPage = await findPressPage(strapi, 'draft');
    const page = publishedPage ?? draftPage;

    if (!page?.documentId) {
      strapi.log.warn(`About page "${PRESS_PAGE_SLUG}" not found. Skipping item-list cleanup.`);
      return { skipped: true, reason: 'Page not found' };
    }

    const pressSections = ((page as { pressSections?: PressSection[] }).pressSections ??
      []) as PressSection[];
    const itemListSections = pressSections.filter(
      (section) => section.__component === ITEM_LIST_COMPONENT
    );

    if (itemListSections.length === 0) {
      strapi.log.warn(
        `No "${ITEM_LIST_COMPONENT}" section found on press page. Skipping item-list cleanup.`
      );
      return { skipped: true, reason: 'Item list section not found', documentId: page.documentId };
    }

    const rowCount = countItemListRows(pressSections);

    if (rowCount === 0) {
      strapi.log.info(
        `Press item-list cleanup skipped: no manual rows remain on "${PRESS_PAGE_SLUG}".`
      );
      return {
        skipped: true,
        reason: 'Already empty',
        documentId: page.documentId,
        clearedRows: 0,
        itemListSections: itemListSections.length,
      };
    }

    const clearedPublishedSections = buildClearedPressSections(pressSections);
    const clearedDraftSections = draftPage
      ? buildClearedPressSections(
          ((draftPage as { pressSections?: PressSection[] }).pressSections ?? []) as PressSection[]
        )
      : clearedPublishedSections;

    if (draftPage?.documentId) {
      await updatePressPage(strapi, draftPage.documentId, clearedDraftSections, 'draft');
    }

    if (publishedPage?.documentId) {
      await updatePressPage(
        strapi,
        publishedPage.documentId,
        clearedPublishedSections,
        'published'
      );
    }

    const verifyPage = (await findPressPage(strapi, 'published')) ?? (await findPressPage(strapi, 'draft'));
    const remaining = countItemListRows(
      ((verifyPage as { pressSections?: PressSection[] })?.pressSections ?? []) as PressSection[]
    );

    strapi.log.info(
      `Press item-list cleanup complete: cleared=${rowCount}, remaining=${remaining}, sections=${itemListSections.length}`
    );

    if (remaining > 0) {
      strapi.log.warn(
        `Press item-list cleanup finished with ${remaining} rows still present — review CMS data.`
      );
    }

    return {
      skipped: false,
      documentId: page.documentId,
      clearedRows: rowCount,
      itemListSections: itemListSections.length,
    };
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    strapi.log.warn(`Press item-list cleanup failed: ${message}`);
    return { skipped: true, reason: message };
  }
}
