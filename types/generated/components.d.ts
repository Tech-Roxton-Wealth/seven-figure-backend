import type { Schema, Struct } from '@strapi/strapi';

export interface ElementsDropdownOption extends Struct.ComponentSchema {
  collectionName: 'components_elements_dropdown_options';
  info: {
    displayName: 'DropdownOption';
  };
  attributes: {
    label: Schema.Attribute.String;
  };
}

export interface PageSectionsAboutHubAdaTeaser extends Struct.ComponentSchema {
  collectionName: 'components_page_sections_about_hub_ada_teasers';
  info: {
    displayName: 'About Hub Ada Teaser';
  };
  attributes: {
    anchorId: Schema.Attribute.String;
    button: Schema.Attribute.Component<'shared.button', false>;
    diagramWatermarkText: Schema.Attribute.String;
    heading: Schema.Attribute.String;
    nodes: Schema.Attribute.Component<'ui.about-hub-ada-node', true> &
      Schema.Attribute.SetMinMax<
        {
          max: 3;
        },
        number
      >;
    paragraphs: Schema.Attribute.Component<'ui.about-hub-text-line', true>;
    sectionLabel: Schema.Attribute.String;
  };
}

export interface PageSectionsAboutHubAnchorBar extends Struct.ComponentSchema {
  collectionName: 'components_page_sections_about_hub_anchor_bars';
  info: {
    displayName: 'About Hub Anchor Bar';
  };
  attributes: {
    links: Schema.Attribute.Component<'ui.about-hub-anchor-link', true> &
      Schema.Attribute.SetMinMax<
        {
          max: 8;
        },
        number
      >;
  };
}

export interface PageSectionsAboutHubExperience extends Struct.ComponentSchema {
  collectionName: 'components_page_sections_about_hub_experiences';
  info: {
    displayName: 'About Hub Experience';
  };
  attributes: {
    anchorId: Schema.Attribute.String;
    button: Schema.Attribute.Component<'shared.button', false>;
    heading: Schema.Attribute.String;
    introParagraph: Schema.Attribute.Text;
    rows: Schema.Attribute.Component<'ui.about-hub-experience-row', true>;
    sectionLabel: Schema.Attribute.String;
  };
}

export interface PageSectionsAboutHubFinalCta extends Struct.ComponentSchema {
  collectionName: 'components_page_sections_about_hub_final_ctas';
  info: {
    displayName: 'About Hub Final Cta';
  };
  attributes: {
    heading: Schema.Attribute.String;
    paragraph: Schema.Attribute.Text;
    primaryButton: Schema.Attribute.Component<'shared.button', false>;
    secondaryButton: Schema.Attribute.Component<'shared.button', false>;
  };
}

export interface PageSectionsAboutHubFuture extends Struct.ComponentSchema {
  collectionName: 'components_page_sections_about_hub_futures';
  info: {
    displayName: 'About Hub Future';
  };
  attributes: {
    anchorId: Schema.Attribute.String;
    heading: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images'>;
    imageAlt: Schema.Attribute.String;
    noteEyebrow: Schema.Attribute.String;
    noteQuote: Schema.Attribute.Text;
    paragraphs: Schema.Attribute.Component<'ui.about-hub-text-line', true>;
    sectionLabel: Schema.Attribute.String;
    steps: Schema.Attribute.Component<'ui.about-hub-future-step', true>;
  };
}

export interface PageSectionsAboutHubHero extends Struct.ComponentSchema {
  collectionName: 'components_page_sections_about_hub_heroes';
  info: {
    displayName: 'About Hub Hero';
  };
  attributes: {
    anchorId: Schema.Attribute.String;
    heading: Schema.Attribute.String;
    heroImage: Schema.Attribute.Media<'images'>;
    heroImageAlt: Schema.Attribute.String;
    introParagraph: Schema.Attribute.Text;
    primaryButton: Schema.Attribute.Component<'shared.button', false>;
    secondaryButton: Schema.Attribute.Component<'shared.button', false>;
    sectionLabel: Schema.Attribute.String;
    stampText: Schema.Attribute.String;
    watermarkText: Schema.Attribute.String;
  };
}

export interface PageSectionsAboutHubIndependent
  extends Struct.ComponentSchema {
  collectionName: 'components_page_sections_about_hub_independents';
  info: {
    displayName: 'About Hub Independent';
  };
  attributes: {
    anchorId: Schema.Attribute.String;
    button: Schema.Attribute.Component<'shared.button', false>;
    heading: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    introParagraph: Schema.Attribute.Text;
    mapNodes: Schema.Attribute.Component<'ui.about-hub-map-node', true> &
      Schema.Attribute.SetMinMax<
        {
          max: 3;
        },
        number
      >;
    mapWatermarkText: Schema.Attribute.String;
    rows: Schema.Attribute.Component<'ui.about-hub-ind-row', true>;
    sectionLabel: Schema.Attribute.String;
  };
}

export interface PageSectionsAboutHubProof extends Struct.ComponentSchema {
  collectionName: 'components_page_sections_about_hub_proofs';
  info: {
    displayName: 'About Hub Proof';
  };
  attributes: {
    anchorId: Schema.Attribute.String;
    cards: Schema.Attribute.Component<'ui.about-hub-proof-card', true> &
      Schema.Attribute.SetMinMax<
        {
          max: 3;
        },
        number
      >;
    heading: Schema.Attribute.String;
    introParagraph: Schema.Attribute.Text;
    sectionLabel: Schema.Attribute.String;
  };
}

export interface PageSectionsAboutHubStory extends Struct.ComponentSchema {
  collectionName: 'components_page_sections_about_hub_stories';
  info: {
    displayName: 'About Hub Story';
  };
  attributes: {
    anchorId: Schema.Attribute.String;
    button: Schema.Attribute.Component<'shared.button', false>;
    editorialLines: Schema.Attribute.Component<
      'ui.about-hub-editorial-line',
      true
    >;
    heading: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images'>;
    imageAlt: Schema.Attribute.String;
    imageCaption: Schema.Attribute.String;
    paragraphs: Schema.Attribute.Component<'ui.about-hub-text-line', true>;
    sectionLabel: Schema.Attribute.String;
  };
}

export interface PageSectionsAdaCalmNav extends Struct.ComponentSchema {
  collectionName: 'components_page_sections_ada_calm_navs';
  info: {
    displayName: 'Ada Calm Nav';
  };
  attributes: {
    links: Schema.Attribute.Component<'ui.ada-calm-nav-link', true>;
  };
}

export interface PageSectionsAdaChoice extends Struct.ComponentSchema {
  collectionName: 'components_page_sections_ada_choices';
  info: {
    displayName: 'Ada Choice';
  };
  attributes: {
    anchorId: Schema.Attribute.String;
    cards: Schema.Attribute.Component<'ui.ada-choice-card', true>;
    heading: Schema.Attribute.String;
    introParagraph: Schema.Attribute.Text;
    sectionLabel: Schema.Attribute.String;
  };
}

export interface PageSectionsAdaFaq extends Struct.ComponentSchema {
  collectionName: 'components_page_sections_ada_faqs';
  info: {
    displayName: 'Ada FAQ';
  };
  attributes: {
    heading: Schema.Attribute.String;
    introParagraph: Schema.Attribute.Text;
    items: Schema.Attribute.Component<'ui.ada-faq-item', true>;
    sectionLabel: Schema.Attribute.String;
  };
}

export interface PageSectionsAdaFinalCta extends Struct.ComponentSchema {
  collectionName: 'components_page_sections_ada_final_ctas';
  info: {
    displayName: 'Ada Final CTA';
  };
  attributes: {
    heading: Schema.Attribute.String;
    paragraph: Schema.Attribute.Text;
    primaryButton: Schema.Attribute.Component<'shared.button', false>;
    secondaryButton: Schema.Attribute.Component<'shared.button', false>;
  };
}

export interface PageSectionsAdaGuidePanel extends Struct.ComponentSchema {
  collectionName: 'components_page_sections_ada_guide_panels';
  info: {
    displayName: 'Ada Guide Panel';
  };
  attributes: {
    anchorId: Schema.Attribute.String;
    cta: Schema.Attribute.Component<'ui.ada-guide-cta', false>;
    heading: Schema.Attribute.String;
    panelImage: Schema.Attribute.Media<'images'>;
    panelImageAlt: Schema.Attribute.String;
    paragraph: Schema.Attribute.Text;
    sectionLabel: Schema.Attribute.String;
  };
}

export interface PageSectionsAdaHero extends Struct.ComponentSchema {
  collectionName: 'components_page_sections_ada_heroes';
  info: {
    displayName: 'Ada Hero';
  };
  attributes: {
    bodyParagraph: Schema.Attribute.Text;
    captionHeading: Schema.Attribute.String;
    captionKicker: Schema.Attribute.String;
    heading: Schema.Attribute.String;
    heroImage: Schema.Attribute.Media<'images'>;
    heroImageAlt: Schema.Attribute.String;
    leadParagraph: Schema.Attribute.Text;
    primaryButton: Schema.Attribute.Component<'shared.button', false>;
    secondaryButton: Schema.Attribute.Component<'shared.button', false>;
    sectionLabel: Schema.Attribute.String;
  };
}

export interface PageSectionsAdaIntro extends Struct.ComponentSchema {
  collectionName: 'components_page_sections_ada_intros';
  info: {
    displayName: 'Ada Intro';
  };
  attributes: {
    anchorId: Schema.Attribute.String;
    heading: Schema.Attribute.String;
    imageCaption: Schema.Attribute.Text;
    panelImage: Schema.Attribute.Media<'images'>;
    panelImageAlt: Schema.Attribute.String;
    paragraphs: Schema.Attribute.Component<'ui.paragraph', true>;
    sectionLabel: Schema.Attribute.String;
    statementText: Schema.Attribute.Text;
  };
}

export interface PageSectionsAdaJourney extends Struct.ComponentSchema {
  collectionName: 'components_page_sections_ada_journeys';
  info: {
    displayName: 'Ada Journey';
  };
  attributes: {
    anchorId: Schema.Attribute.String;
    heading: Schema.Attribute.String;
    introParagraph: Schema.Attribute.Text;
    sectionLabel: Schema.Attribute.String;
    steps: Schema.Attribute.Component<'ui.ada-journey-step', true>;
  };
}

export interface PageSectionsAdaNotSection extends Struct.ComponentSchema {
  collectionName: 'components_page_sections_ada_not_sections';
  info: {
    displayName: 'Ada Not Section';
  };
  attributes: {
    anchorId: Schema.Attribute.String;
    heading: Schema.Attribute.String;
    introParagraph: Schema.Attribute.Text;
    items: Schema.Attribute.Component<'ui.ada-not-item', true>;
    sectionLabel: Schema.Attribute.String;
  };
}

export interface PageSectionsAdaSupport extends Struct.ComponentSchema {
  collectionName: 'components_page_sections_ada_supports';
  info: {
    displayName: 'Ada Support';
  };
  attributes: {
    anchorId: Schema.Attribute.String;
    cards: Schema.Attribute.Component<'ui.ada-support-card', true>;
    heading: Schema.Attribute.String;
    introParagraph: Schema.Attribute.Text;
    sectionLabel: Schema.Attribute.String;
  };
}

export interface PageSectionsAdaVisualSummary extends Struct.ComponentSchema {
  collectionName: 'components_page_sections_ada_visual_summaries';
  info: {
    displayName: 'Ada Visual Summary';
  };
  attributes: {
    cards: Schema.Attribute.Component<'ui.ada-summary-card', true>;
  };
}

export interface PageSectionsAlternatingNarrative
  extends Struct.ComponentSchema {
  collectionName: 'components_page_sections_alternating_narratives';
  info: {
    displayName: 'Alternating Narrative';
  };
  attributes: {
    rows: Schema.Attribute.Component<'ui.narrative-row', true>;
  };
}

export interface PageSectionsBrandsHero extends Struct.ComponentSchema {
  collectionName: 'components_page_sections_brands_heroes';
  info: {
    displayName: 'Brands Hero';
  };
  attributes: {
    anchorId: Schema.Attribute.String;
    heading: Schema.Attribute.String;
    leadParagraph: Schema.Attribute.Text;
    primaryButton: Schema.Attribute.Component<'shared.button', false>;
    secondaryButton: Schema.Attribute.Component<'shared.button', false>;
    sectionLabel: Schema.Attribute.String;
  };
}

export interface PageSectionsBrandsPortfolio extends Struct.ComponentSchema {
  collectionName: 'components_page_sections_brands_portfolios';
  info: {
    displayName: 'Brands Portfolio';
  };
  attributes: {
    anchorId: Schema.Attribute.String;
    brandCards: Schema.Attribute.Component<'ui.brands-brand-card', true>;
    heading: Schema.Attribute.String;
    portfolioStatusLabel: Schema.Attribute.String;
    portfolioStatusText: Schema.Attribute.Text;
    sectionLabel: Schema.Attribute.String;
  };
}

export interface PageSectionsBrandsStandard extends Struct.ComponentSchema {
  collectionName: 'components_page_sections_brands_standards';
  info: {
    displayName: 'Brands Standard';
  };
  attributes: {
    anchorId: Schema.Attribute.String;
    asideParagraph: Schema.Attribute.Text;
    cards: Schema.Attribute.Component<'ui.brands-standard-card', true>;
    heading: Schema.Attribute.String;
    sectionLabel: Schema.Attribute.String;
  };
}

export interface PageSectionsCardGrid extends Struct.ComponentSchema {
  collectionName: 'components_page_sections_card_grids';
  info: {
    displayName: 'Card Grid';
  };
  attributes: {
    cards: Schema.Attribute.Component<'ui.grid-card', true>;
    heading: Schema.Attribute.String;
    introParagraph: Schema.Attribute.Text;
    secondaryIntro: Schema.Attribute.Text;
    sectionLabel: Schema.Attribute.String;
  };
}

export interface PageSectionsClientLoginHero extends Struct.ComponentSchema {
  collectionName: 'components_page_sections_client_login_heroes';
  info: {
    displayName: 'Client Login Hero';
  };
  attributes: {
    heading: Schema.Attribute.String;
    leadParagraphs: Schema.Attribute.Component<'ui.paragraph', true>;
    panelDescription: Schema.Attribute.Text;
    panelHeading: Schema.Attribute.String;
    panelListItems: Schema.Attribute.Component<'ui.portal-list-item', true>;
    panelWatermark: Schema.Attribute.String;
    primaryButton: Schema.Attribute.Component<'shared.button', false>;
    secondaryButton: Schema.Attribute.Component<'shared.button', false>;
    sectionLabel: Schema.Attribute.String;
    statusBadge: Schema.Attribute.String;
  };
}

export interface PageSectionsClientLoginSupportRoutes
  extends Struct.ComponentSchema {
  collectionName: 'components_page_sections_client_login_support_routes';
  info: {
    displayName: 'Client Login Support Routes';
  };
  attributes: {
    heading: Schema.Attribute.String;
    routeCards: Schema.Attribute.Component<'ui.portal-route-card', true>;
    sectionLabel: Schema.Attribute.String;
  };
}

export interface PageSectionsClientRouteAdviceAreas
  extends Struct.ComponentSchema {
  collectionName: 'components_page_sections_client_route_advice_areas';
  info: {
    displayName: 'ClientRouteAdviceAreas';
  };
  attributes: {
    areas: Schema.Attribute.Component<'ui.advice-area-card', true>;
    button: Schema.Attribute.Component<'shared.button', false>;
    heading: Schema.Attribute.String;
    introParagraph: Schema.Attribute.Text;
    sectionLabel: Schema.Attribute.String;
  };
}

export interface PageSectionsClientRouteCaseSituations
  extends Struct.ComponentSchema {
  collectionName: 'components_page_sections_client_route_case_situations';
  info: {
    displayName: 'ClientRouteCaseSituations';
  };
  attributes: {
    heading: Schema.Attribute.String;
    introParagraph: Schema.Attribute.Text;
    sectionLabel: Schema.Attribute.String;
    situations: Schema.Attribute.Component<'ui.scenario-item', true>;
  };
}

export interface PageSectionsClientRouteChallenges
  extends Struct.ComponentSchema {
  collectionName: 'components_page_sections_client_route_challenges';
  info: {
    displayName: 'ClientRouteChallenges';
  };
  attributes: {
    cards: Schema.Attribute.Component<'ui.challenge-card', true>;
    heading: Schema.Attribute.String;
    introParagraph: Schema.Attribute.Text;
    sectionLabel: Schema.Attribute.String;
  };
}

export interface PageSectionsClientRouteGuides extends Struct.ComponentSchema {
  collectionName: 'components_page_sections_client_route_guides';
  info: {
    displayName: 'ClientRouteGuides';
  };
  attributes: {
    button: Schema.Attribute.Component<'shared.button', false>;
    guides: Schema.Attribute.Relation<'oneToMany', 'api::guide.guide'>;
    heading: Schema.Attribute.String;
    introParagraph: Schema.Attribute.Text;
    sectionLabel: Schema.Attribute.String;
  };
}

export interface PageSectionsClientRouteHero extends Struct.ComponentSchema {
  collectionName: 'components_page_sections_client_route_heroes';
  info: {
    displayName: 'ClientRouteHero';
  };
  attributes: {
    bodyParagraph: Schema.Attribute.Text;
    captionHeading: Schema.Attribute.String;
    captionLabel: Schema.Attribute.String;
    credentials: Schema.Attribute.Component<'ui.hero-credential', true> &
      Schema.Attribute.SetMinMax<
        {
          max: 3;
        },
        number
      >;
    heading: Schema.Attribute.String;
    heroImage: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    leadParagraph: Schema.Attribute.Text;
    primaryButton: Schema.Attribute.Component<'shared.button', false>;
    secondaryButton: Schema.Attribute.Component<'shared.button', false>;
    sectionLabel: Schema.Attribute.String;
  };
}

export interface PageSectionsClientRouteImageBreak
  extends Struct.ComponentSchema {
  collectionName: 'components_page_sections_client_route_image_breaks';
  info: {
    displayName: 'ClientRouteImageBreak';
  };
  attributes: {
    heading: Schema.Attribute.String;
    paragraphs: Schema.Attribute.Component<'ui.paragraph', true>;
    sectionLabel: Schema.Attribute.String;
    visualImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    visualLine: Schema.Attribute.String;
  };
}

export interface PageSectionsClientRouteOverview
  extends Struct.ComponentSchema {
  collectionName: 'components_page_sections_client_route_overviews';
  info: {
    displayName: 'ClientRouteOverview';
  };
  attributes: {
    asideParagraph: Schema.Attribute.Text;
    button: Schema.Attribute.Component<'shared.button', false>;
    heading: Schema.Attribute.String;
    panelParagraphs: Schema.Attribute.Component<'ui.paragraph', true>;
    pullQuote: Schema.Attribute.Text;
    sectionLabel: Schema.Attribute.String;
    showWatermark: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
  };
}

export interface PageSectionsClientRoutePersonaStrip
  extends Struct.ComponentSchema {
  collectionName: 'components_page_sections_client_route_persona_strips';
  info: {
    displayName: 'ClientRoutePersonaStrip';
  };
  attributes: {
    items: Schema.Attribute.Component<'ui.glance-item', true> &
      Schema.Attribute.SetMinMax<
        {
          max: 4;
          min: 1;
        },
        number
      >;
  };
}

export interface PageSectionsClientRouteProcess extends Struct.ComponentSchema {
  collectionName: 'components_page_sections_client_route_processes';
  info: {
    displayName: 'ClientRouteProcess';
  };
  attributes: {
    button: Schema.Attribute.Component<'shared.button', false>;
    heading: Schema.Attribute.String;
    introParagraph: Schema.Attribute.Text;
    sectionLabel: Schema.Attribute.String;
    steps: Schema.Attribute.Component<'ui.process-step', true>;
  };
}

export interface PageSectionsConsiderationsSection
  extends Struct.ComponentSchema {
  collectionName: 'components_page_sections_considerations_sections';
  info: {
    displayName: 'ConsiderationsSection';
  };
  attributes: {
    heading: Schema.Attribute.String;
    introParagraph: Schema.Attribute.Text;
    items: Schema.Attribute.Component<'ui.consideration-item', true>;
    sectionLabel: Schema.Attribute.String;
  };
}

export interface PageSectionsContactAdviceFit extends Struct.ComponentSchema {
  collectionName: 'components_page_sections_contact_advice_fits';
  info: {
    displayName: 'Contact Advice Fit';
  };
  attributes: {
    anchorId: Schema.Attribute.String;
    cards: Schema.Attribute.Component<'ui.check-card', true>;
    ctaButton: Schema.Attribute.Component<'shared.button', false>;
    heading: Schema.Attribute.String;
    introParagraph: Schema.Attribute.Text;
    sectionLabel: Schema.Attribute.String;
  };
}

export interface PageSectionsContactAnchorBar extends Struct.ComponentSchema {
  collectionName: 'components_page_sections_contact_anchor_bars';
  info: {
    displayName: 'Contact Anchor Bar';
  };
  attributes: {
    links: Schema.Attribute.Component<'ui.anchor-link', true>;
  };
}

export interface PageSectionsContactCallback extends Struct.ComponentSchema {
  collectionName: 'components_page_sections_contact_callbacks';
  info: {
    displayName: 'Contact Callback';
  };
  attributes: {
    anchorId: Schema.Attribute.String;
    emailLabel: Schema.Attribute.String;
    emailPlaceholder: Schema.Attribute.String;
    enquiryTypeLabel: Schema.Attribute.String;
    enquiryTypeOptions: Schema.Attribute.Component<'ui.form-option', true>;
    firstNameLabel: Schema.Attribute.String;
    firstNamePlaceholder: Schema.Attribute.String;
    formNote: Schema.Attribute.Text;
    heading: Schema.Attribute.String;
    introParagraph: Schema.Attribute.Text;
    lastNameLabel: Schema.Attribute.String;
    lastNamePlaceholder: Schema.Attribute.String;
    messageLabel: Schema.Attribute.String;
    messagePlaceholder: Schema.Attribute.String;
    newsletterConsent: Schema.Attribute.Component<
      'ui.newsletter-consent',
      false
    >;
    nextPanelHeading: Schema.Attribute.String;
    nextPanelLabel: Schema.Attribute.String;
    nextPanelParagraph: Schema.Attribute.Text;
    phoneLabel: Schema.Attribute.String;
    phonePlaceholder: Schema.Attribute.String;
    preferredContactLabel: Schema.Attribute.String;
    preferredContactOptions: Schema.Attribute.Component<'ui.form-option', true>;
    sectionLabel: Schema.Attribute.String;
    steps: Schema.Attribute.Component<'ui.step-item', true>;
    submitButton: Schema.Attribute.Component<'shared.button', false>;
    successMessage: Schema.Attribute.Text;
  };
}

export interface PageSectionsContactHero extends Struct.ComponentSchema {
  collectionName: 'components_page_sections_contact_heroes';
  info: {
    displayName: 'Contact Hero';
  };
  attributes: {
    anchorId: Schema.Attribute.String;
    heading: Schema.Attribute.String;
    leadParagraphs: Schema.Attribute.Component<'ui.paragraph', true>;
    primaryButton: Schema.Attribute.Component<'shared.button', false>;
    secondaryButton: Schema.Attribute.Component<'shared.button', false>;
    sectionLabel: Schema.Attribute.String;
    visualDescription: Schema.Attribute.Text;
    visualHeading: Schema.Attribute.String;
    visualImage: Schema.Attribute.Media<'images'>;
    visualKicker: Schema.Attribute.String;
    watermark: Schema.Attribute.String;
  };
}

export interface PageSectionsContactOffices extends Struct.ComponentSchema {
  collectionName: 'components_page_sections_contact_offices';
  info: {
    displayName: 'Contact Offices';
  };
  attributes: {
    anchorId: Schema.Attribute.String;
    customDetails: Schema.Attribute.Component<'ui.contact-detail-row', true>;
    globalDetails: Schema.Attribute.Component<
      'ui.global-detail-selector',
      true
    >;
    heading: Schema.Attribute.String;
    introParagraph: Schema.Attribute.Text;
    officeCards: Schema.Attribute.Component<'ui.office-flip-card', true>;
    sectionLabel: Schema.Attribute.String;
  };
}

export interface PageSectionsContactQuickLinks extends Struct.ComponentSchema {
  collectionName: 'components_page_sections_contact_quick_links';
  info: {
    displayName: 'Contact Quick Links';
  };
  attributes: {
    anchorId: Schema.Attribute.String;
    complaintDetails: Schema.Attribute.Component<'ui.complaint-detail', true>;
    complaintsAnchorId: Schema.Attribute.String;
    complaintsHeading: Schema.Attribute.String;
    complaintsIntro: Schema.Attribute.Text;
    complaintsSectionLabel: Schema.Attribute.String;
    heading: Schema.Attribute.String;
    quickCards: Schema.Attribute.Component<'ui.quick-link-card', true>;
    sectionLabel: Schema.Attribute.String;
  };
}

export interface PageSectionsContactRoutes extends Struct.ComponentSchema {
  collectionName: 'components_page_sections_contact_routes';
  info: {
    displayName: 'Contact Routes';
  };
  attributes: {
    anchorId: Schema.Attribute.String;
    heading: Schema.Attribute.String;
    introParagraph: Schema.Attribute.Text;
    routeCards: Schema.Attribute.Component<'ui.contact-route-card', true>;
    sectionLabel: Schema.Attribute.String;
  };
}

export interface PageSectionsDataTable extends Struct.ComponentSchema {
  collectionName: 'components_page_sections_data_tables';
  info: {
    displayName: 'Data Table';
  };
  attributes: {
    anchorId: Schema.Attribute.String;
    blocks: Schema.Attribute.Component<'ui.table-block', true>;
    heading: Schema.Attribute.String;
    introParagraph: Schema.Attribute.Text;
    sectionLabel: Schema.Attribute.String;
  };
}

export interface PageSectionsDisclaimerStrip extends Struct.ComponentSchema {
  collectionName: 'components_page_sections_disclaimer_strips';
  info: {
    displayName: 'Disclaimer Strip';
  };
  attributes: {
    body: Schema.Attribute.Text & Schema.Attribute.Required;
  };
}

export interface PageSectionsDualGuideBand extends Struct.ComponentSchema {
  collectionName: 'components_page_sections_dual_guide_bands';
  info: {
    displayName: 'DualGuideBand';
  };
  attributes: {
    tiles: Schema.Attribute.Component<'ui.guide-tile', true> &
      Schema.Attribute.SetMinMax<
        {
          max: 2;
          min: 1;
        },
        number
      >;
  };
}

export interface PageSectionsEditorialSplit extends Struct.ComponentSchema {
  collectionName: 'components_page_sections_editorial_splits';
  info: {
    displayName: 'Editorial Split';
  };
  attributes: {
    heading: Schema.Attribute.String;
    introParagraph: Schema.Attribute.Text;
    panelLead: Schema.Attribute.Text;
    panelParagraphs: Schema.Attribute.Component<'ui.paragraph', true>;
    panelWatermark: Schema.Attribute.String;
    sectionLabel: Schema.Attribute.String;
    variant: Schema.Attribute.Enumeration<['pale', 'default']> &
      Schema.Attribute.DefaultTo<'pale'>;
  };
}

export interface PageSectionsFaqGrid extends Struct.ComponentSchema {
  collectionName: 'components_page_sections_faq_grids';
  info: {
    displayName: 'FAQ Grid';
  };
  attributes: {
    heading: Schema.Attribute.String;
    introParagraph: Schema.Attribute.Text;
    items: Schema.Attribute.Component<'ui.faq-item', true>;
    sectionLabel: Schema.Attribute.String;
  };
}

export interface PageSectionsFinalCta extends Struct.ComponentSchema {
  collectionName: 'components_page_sections_final_ctas';
  info: {
    displayName: 'FinalCta';
  };
  attributes: {
    anchorId: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    heading: Schema.Attribute.String;
    primaryButton: Schema.Attribute.Component<'shared.button', false>;
    secondaryButton: Schema.Attribute.Component<'shared.button', false>;
  };
}

export interface PageSectionsGlanceStrip extends Struct.ComponentSchema {
  collectionName: 'components_page_sections_glance_strips';
  info: {
    displayName: 'GlanceStrip';
  };
  attributes: {
    items: Schema.Attribute.Component<'ui.glance-item', true> &
      Schema.Attribute.SetMinMax<
        {
          max: 4;
          min: 1;
        },
        number
      >;
  };
}

export interface PageSectionsGuideBand extends Struct.ComponentSchema {
  collectionName: 'components_page_sections_guide_bands';
  info: {
    displayName: 'GuideBand';
  };
  attributes: {
    button: Schema.Attribute.Component<'shared.button', false>;
    description: Schema.Attribute.Text;
    heading: Schema.Attribute.String;
    relatedGuide: Schema.Attribute.Relation<'manyToOne', 'api::guide.guide'>;
  };
}

export interface PageSectionsGuidesFeaturedBlock
  extends Struct.ComponentSchema {
  collectionName: 'components_page_sections_guides_featured_blocks';
  info: {
    displayName: 'GuidesFeaturedBlock';
  };
  attributes: {
    heading: Schema.Attribute.String;
    introParagraph: Schema.Attribute.Text;
    sectionLabel: Schema.Attribute.String;
  };
}

export interface PageSectionsGuidesListHeader extends Struct.ComponentSchema {
  collectionName: 'components_page_sections_guides_list_headers';
  info: {
    displayName: 'GuidesListHeader';
  };
  attributes: {
    anchorId: Schema.Attribute.String;
    heading: Schema.Attribute.String;
    introParagraph: Schema.Attribute.Text;
    listedGuides: Schema.Attribute.Relation<'oneToMany', 'api::guide.guide'>;
    sectionLabel: Schema.Attribute.String;
  };
}

export interface PageSectionsGuidesSection extends Struct.ComponentSchema {
  collectionName: 'components_page_sections_guides_sections';
  info: {
    displayName: 'GuidesSection';
  };
  attributes: {
    anchorId: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    featuredDownloadButton: Schema.Attribute.Component<'shared.button', false>;
    featuredGuide: Schema.Attribute.Relation<'oneToOne', 'api::guide.guide'>;
    guides: Schema.Attribute.Relation<'oneToMany', 'api::guide.guide'>;
    heading: Schema.Attribute.String;
    listHeading: Schema.Attribute.String;
    sectionLabel: Schema.Attribute.String;
    viewAllGuidesButton: Schema.Attribute.Component<'shared.button', false>;
  };
}

export interface PageSectionsHero extends Struct.ComponentSchema {
  collectionName: 'components_page_sections_heroes';
  info: {
    displayName: 'Hero';
  };
  attributes: {
    anchorId: Schema.Attribute.String;
    caption: Schema.Attribute.String;
    coverImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    description: Schema.Attribute.Text;
    primaryButton: Schema.Attribute.Component<'shared.button', false>;
    secondaryButton: Schema.Attribute.Component<'shared.button', false>;
    sectionLabel: Schema.Attribute.String;
    title: Schema.Attribute.String;
    video: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface PageSectionsHmoFaqDealCheck extends Struct.ComponentSchema {
  collectionName: 'components_page_sections_hmo_faq_deal_checks';
  info: {
    displayName: 'HMO FAQ Deal Check';
  };
  attributes: {
    heading: Schema.Attribute.String;
    introParagraph: Schema.Attribute.Text;
    items: Schema.Attribute.Component<'ui.hmo-faq-check-item', true>;
    sectionLabel: Schema.Attribute.String;
  };
}

export interface PageSectionsHmoFaqDirectory extends Struct.ComponentSchema {
  collectionName: 'components_page_sections_hmo_faq_directories';
  info: {
    displayName: 'HMO FAQ Directory';
  };
  attributes: {
    anchorId: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'faq-content'>;
    categories: Schema.Attribute.Component<'ui.hmo-faq-category', true>;
    emptyHeading: Schema.Attribute.String;
    emptySecondaryParagraphs: Schema.Attribute.Text;
    sidebarHeading: Schema.Attribute.String;
    sidebarIntro: Schema.Attribute.Text;
    sidebarLabel: Schema.Attribute.String;
    sideCardButton: Schema.Attribute.Component<'shared.button', false>;
    sideCardHeading: Schema.Attribute.String;
    sideCardLabel: Schema.Attribute.String;
  };
}

export interface PageSectionsHmoFaqFinalCta extends Struct.ComponentSchema {
  collectionName: 'components_page_sections_hmo_faq_final_ctas';
  info: {
    displayName: 'HMO FAQ Final CTA';
  };
  attributes: {
    anchorId: Schema.Attribute.String & Schema.Attribute.DefaultTo<'contact'>;
    heading: Schema.Attribute.String;
    introParagraph: Schema.Attribute.Text;
    primaryButton: Schema.Attribute.Component<'shared.button', false>;
    sectionLabel: Schema.Attribute.String;
  };
}

export interface PageSectionsHmoFaqHero extends Struct.ComponentSchema {
  collectionName: 'components_page_sections_hmo_faq_heroes';
  info: {
    displayName: 'HMO FAQ Hero';
  };
  attributes: {
    heading: Schema.Attribute.String;
    indexHeading: Schema.Attribute.String;
    indexLabel: Schema.Attribute.String;
    introParagraph: Schema.Attribute.Text;
    primaryButton: Schema.Attribute.Component<'shared.button', false>;
    secondaryButton: Schema.Attribute.Component<'shared.button', false>;
    sectionLabel: Schema.Attribute.String;
  };
}

export interface PageSectionsHmoFaqSearch extends Struct.ComponentSchema {
  collectionName: 'components_page_sections_hmo_faq_searches';
  info: {
    displayName: 'HMO FAQ Search';
  };
  attributes: {
    heading: Schema.Attribute.String;
    searchPlaceholder: Schema.Attribute.String;
    sectionLabel: Schema.Attribute.String;
  };
}

export interface PageSectionsHomepageAnchorBar extends Struct.ComponentSchema {
  collectionName: 'components_page_sections_homepage_anchor_bars';
  info: {
    displayName: 'Homepage Anchor Bar';
  };
  attributes: {
    links: Schema.Attribute.Component<'ui.anchor-link', true>;
  };
}

export interface PageSectionsHubListHeader extends Struct.ComponentSchema {
  collectionName: 'components_page_sections_hub_list_headers';
  info: {
    displayName: 'HubListHeader';
  };
  attributes: {
    anchorId: Schema.Attribute.String;
    heading: Schema.Attribute.String;
    introParagraph: Schema.Attribute.Text;
    listedInsights: Schema.Attribute.Relation<
      'oneToMany',
      'api::insight.insight'
    >;
    sectionLabel: Schema.Attribute.String;
  };
}

export interface PageSectionsHubSearchBar extends Struct.ComponentSchema {
  collectionName: 'components_page_sections_hub_search_bars';
  info: {
    displayName: 'HubSearchBar';
  };
  attributes: {
    toolNote: Schema.Attribute.Text;
    variant: Schema.Attribute.Enumeration<['insights', 'guides']> &
      Schema.Attribute.DefaultTo<'insights'>;
  };
}

export interface PageSectionsInformationSection extends Struct.ComponentSchema {
  collectionName: 'components_page_sections_information_sections';
  info: {
    displayName: 'InformationSection';
  };
  attributes: {
    heading: Schema.Attribute.String;
    infoLines: Schema.Attribute.Component<'ui.info-line', true>;
    introParagraph: Schema.Attribute.Text;
    sectionLabel: Schema.Attribute.String;
  };
}

export interface PageSectionsInsightsFeaturedBlock
  extends Struct.ComponentSchema {
  collectionName: 'components_page_sections_insights_featured_blocks';
  info: {
    displayName: 'InsightsFeaturedBlock';
  };
  attributes: {
    heading: Schema.Attribute.String;
    introParagraph: Schema.Attribute.Text;
    sectionLabel: Schema.Attribute.String;
  };
}

export interface PageSectionsInsightsSection extends Struct.ComponentSchema {
  collectionName: 'components_page_sections_insights_sections';
  info: {
    displayName: 'InsightsSection';
  };
  attributes: {
    anchorId: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    heading: Schema.Attribute.String;
    insights: Schema.Attribute.Relation<'oneToMany', 'api::insight.insight'>;
    sectionLabel: Schema.Attribute.String;
    viewAllLink: Schema.Attribute.Component<'shared.action-link', false>;
  };
}

export interface PageSectionsItemList extends Struct.ComponentSchema {
  collectionName: 'components_page_sections_item_lists';
  info: {
    displayName: 'Item List';
  };
  attributes: {
    heading: Schema.Attribute.String;
    introParagraph: Schema.Attribute.Text;
    items: Schema.Attribute.Component<'ui.list-row', true>;
    secondaryIntro: Schema.Attribute.Text;
    sectionLabel: Schema.Attribute.String;
  };
}

export interface PageSectionsJoinedUpBeforeAfter
  extends Struct.ComponentSchema {
  collectionName: 'components_page_sections_joined_up_before_afters';
  info: {
    displayName: 'Joined Up Before After';
  };
  attributes: {
    afterColumn: Schema.Attribute.Component<'ui.joined-up-ba-column', false>;
    beforeColumn: Schema.Attribute.Component<'ui.joined-up-ba-column', false>;
    heading: Schema.Attribute.String;
    introParagraph: Schema.Attribute.Text;
    sectionLabel: Schema.Attribute.String;
  };
}

export interface PageSectionsJoinedUpConnectedLens
  extends Struct.ComponentSchema {
  collectionName: 'components_page_sections_joined_up_connected_lenses';
  info: {
    displayName: 'Joined Up Connected Lens';
  };
  attributes: {
    heading: Schema.Attribute.String;
    introParagraph: Schema.Attribute.Text;
    rows: Schema.Attribute.Component<'ui.joined-up-lens-row', true>;
    sectionLabel: Schema.Attribute.String;
  };
}

export interface PageSectionsJoinedUpCoreModel extends Struct.ComponentSchema {
  collectionName: 'components_page_sections_joined_up_core_models';
  info: {
    displayName: 'Joined Up Core Model';
  };
  attributes: {
    anchorId: Schema.Attribute.String;
    centreEyebrow: Schema.Attribute.String;
    centreHeading: Schema.Attribute.String;
    centreParagraph: Schema.Attribute.Text;
    heading: Schema.Attribute.String;
    introParagraph: Schema.Attribute.Text;
    leftNodes: Schema.Attribute.Component<'ui.joined-up-model-node', true> &
      Schema.Attribute.SetMinMax<
        {
          max: 2;
        },
        number
      >;
    rightNodes: Schema.Attribute.Component<'ui.joined-up-model-node', true> &
      Schema.Attribute.SetMinMax<
        {
          max: 2;
        },
        number
      >;
    sectionLabel: Schema.Attribute.String;
  };
}

export interface PageSectionsJoinedUpDisclaimer extends Struct.ComponentSchema {
  collectionName: 'components_page_sections_joined_up_disclaimers';
  info: {
    displayName: 'Joined Up Disclaimer';
  };
  attributes: {
    text: Schema.Attribute.Text;
  };
}

export interface PageSectionsJoinedUpFinalCta extends Struct.ComponentSchema {
  collectionName: 'components_page_sections_joined_up_final_ctas';
  info: {
    displayName: 'Joined Up Final Cta';
  };
  attributes: {
    heading: Schema.Attribute.String;
    paragraph: Schema.Attribute.Text;
    primaryButton: Schema.Attribute.Component<'shared.button', false>;
    secondaryButton: Schema.Attribute.Component<'shared.button', false>;
  };
}

export interface PageSectionsJoinedUpFramework extends Struct.ComponentSchema {
  collectionName: 'components_page_sections_joined_up_frameworks';
  info: {
    displayName: 'Joined Up Framework';
  };
  attributes: {
    cards: Schema.Attribute.Component<'ui.joined-up-framework-card', true> &
      Schema.Attribute.SetMinMax<
        {
          max: 6;
        },
        number
      >;
    heading: Schema.Attribute.String;
    introParagraph: Schema.Attribute.Text;
    sectionLabel: Schema.Attribute.String;
  };
}

export interface PageSectionsJoinedUpGuide extends Struct.ComponentSchema {
  collectionName: 'components_page_sections_joined_up_guides';
  info: {
    displayName: 'Joined Up Guide';
  };
  attributes: {
    cta: Schema.Attribute.Component<'ui.joined-up-guide-cta', false>;
    heading: Schema.Attribute.String;
    panelImage: Schema.Attribute.Media<'images'>;
    panelImageAlt: Schema.Attribute.String;
    paragraph: Schema.Attribute.Text;
    sectionLabel: Schema.Attribute.String;
  };
}

export interface PageSectionsJoinedUpHero extends Struct.ComponentSchema {
  collectionName: 'components_page_sections_joined_up_heroes';
  info: {
    displayName: 'Joined Up Hero';
  };
  attributes: {
    bodyParagraph: Schema.Attribute.Text;
    captionEyebrow: Schema.Attribute.String;
    captionHeading: Schema.Attribute.String;
    heading: Schema.Attribute.String;
    heroImage: Schema.Attribute.Media<'images'>;
    heroImageAlt: Schema.Attribute.String;
    heroMapItems: Schema.Attribute.Component<
      'ui.joined-up-hero-map-item',
      true
    > &
      Schema.Attribute.SetMinMax<
        {
          max: 3;
        },
        number
      >;
    leadParagraph: Schema.Attribute.Text;
    primaryButton: Schema.Attribute.Component<'shared.button', false>;
    secondaryButton: Schema.Attribute.Component<'shared.button', false>;
    sectionLabel: Schema.Attribute.String;
  };
}

export interface PageSectionsJoinedUpManifesto extends Struct.ComponentSchema {
  collectionName: 'components_page_sections_joined_up_manifestos';
  info: {
    displayName: 'Joined Up Manifesto';
  };
  attributes: {
    asideHeading: Schema.Attribute.String;
    asideParagraph: Schema.Attribute.Text;
    asideSectionLabel: Schema.Attribute.String;
    cardParagraphs: Schema.Attribute.Component<'ui.text-line', true>;
    quoteText: Schema.Attribute.Text;
  };
}

export interface PageSectionsJoinedUpModelPremium
  extends Struct.ComponentSchema {
  collectionName: 'components_page_sections_joined_up_model_premiums';
  info: {
    displayName: 'Joined Up Model Premium';
  };
  attributes: {
    cards: Schema.Attribute.Component<'ui.joined-up-model-card', true> &
      Schema.Attribute.SetMinMax<
        {
          max: 6;
        },
        number
      >;
    coreEyebrow: Schema.Attribute.String;
    coreHeading: Schema.Attribute.String;
    coreParagraph: Schema.Attribute.Text;
    heading: Schema.Attribute.String;
    sectionLabel: Schema.Attribute.String;
  };
}

export interface PageSectionsJoinedUpOutcomes extends Struct.ComponentSchema {
  collectionName: 'components_page_sections_joined_up_outcomes';
  info: {
    displayName: 'Joined Up Outcomes';
  };
  attributes: {
    heading: Schema.Attribute.String;
    introParagraph: Schema.Attribute.Text;
    items: Schema.Attribute.Component<'ui.joined-up-outcome-box', true> &
      Schema.Attribute.SetMinMax<
        {
          max: 4;
        },
        number
      >;
    sectionLabel: Schema.Attribute.String;
  };
}

export interface PageSectionsJoinedUpProcess extends Struct.ComponentSchema {
  collectionName: 'components_page_sections_joined_up_processes';
  info: {
    displayName: 'Joined Up Process';
  };
  attributes: {
    anchorId: Schema.Attribute.String;
    heading: Schema.Attribute.String;
    introParagraph: Schema.Attribute.Text;
    sectionLabel: Schema.Attribute.String;
    steps: Schema.Attribute.Component<'ui.joined-up-process-step', true>;
  };
}

export interface PageSectionsJoinedUpPromise extends Struct.ComponentSchema {
  collectionName: 'components_page_sections_joined_up_promises';
  info: {
    displayName: 'Joined Up Promise';
  };
  attributes: {
    items: Schema.Attribute.Component<'ui.joined-up-promise-item', true> &
      Schema.Attribute.SetMinMax<
        {
          max: 4;
        },
        number
      >;
  };
}

export interface PageSectionsJoinedUpScenario extends Struct.ComponentSchema {
  collectionName: 'components_page_sections_joined_up_scenarios';
  info: {
    displayName: 'Joined Up Scenario';
  };
  attributes: {
    heading: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images'>;
    imageAlt: Schema.Attribute.String;
    paragraphs: Schema.Attribute.Component<'ui.text-line', true>;
    sectionLabel: Schema.Attribute.String;
    steps: Schema.Attribute.Component<'ui.joined-up-scenario-step', true>;
  };
}

export interface PageSectionsLegalContactPanel extends Struct.ComponentSchema {
  collectionName: 'components_page_sections_legal_contact_panels';
  info: {
    displayName: 'Legal Contact Panel';
  };
  attributes: {
    contactItems: Schema.Attribute.Component<'ui.legal-contact-item', true>;
    panelIntro: Schema.Attribute.Text;
    panelTitle: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface PageSectionsLifeStageStrip extends Struct.ComponentSchema {
  collectionName: 'components_page_sections_life_stage_strips';
  info: {
    displayName: 'LifeStageStrip';
  };
  attributes: {
    stages: Schema.Attribute.Component<'ui.life-stage-strip-item', true> &
      Schema.Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
  };
}

export interface PageSectionsLifeWealthAgeMap extends Struct.ComponentSchema {
  collectionName: 'components_page_sections_life_wealth_age_maps';
  info: {
    displayName: 'LifeWealthAgeMap';
  };
  attributes: {
    heading: Schema.Attribute.String;
    introParagraph: Schema.Attribute.Text;
    rows: Schema.Attribute.Component<'ui.age-route-row', true> &
      Schema.Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
    sectionLabel: Schema.Attribute.String;
  };
}

export interface PageSectionsLifeWealthAnchorNav
  extends Struct.ComponentSchema {
  collectionName: 'components_page_sections_life_wealth_anchor_navs';
  info: {
    displayName: 'LifeWealthAnchorNav';
  };
  attributes: {
    links: Schema.Attribute.Component<'shared.action-link', true> &
      Schema.Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
  };
}

export interface PageSectionsLifeWealthEventStack
  extends Struct.ComponentSchema {
  collectionName: 'components_page_sections_life_wealth_event_stacks';
  info: {
    displayName: 'LifeWealthEventStack';
  };
  attributes: {
    heading: Schema.Attribute.String;
    introParagraph: Schema.Attribute.Text;
    rows: Schema.Attribute.Component<'ui.life-event-row', true> &
      Schema.Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
    sectionLabel: Schema.Attribute.String;
  };
}

export interface PageSectionsLifeWealthFinancialAge
  extends Struct.ComponentSchema {
  collectionName: 'components_page_sections_life_wealth_financial_ages';
  info: {
    displayName: 'LifeWealthFinancialAge';
  };
  attributes: {
    anchorId: Schema.Attribute.String;
    bodyParagraphs: Schema.Attribute.Component<'ui.paragraph', true>;
    heading: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    overlayLine: Schema.Attribute.String;
    sectionLabel: Schema.Attribute.String;
    steps: Schema.Attribute.Component<'ui.financial-age-step', true> &
      Schema.Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
  };
}

export interface PageSectionsLifeWealthHubEvents
  extends Struct.ComponentSchema {
  collectionName: 'components_page_sections_life_wealth_hub_events';
  info: {
    displayName: 'LifeWealthHubEvents';
  };
  attributes: {
    heading: Schema.Attribute.String;
    introParagraph: Schema.Attribute.Text;
    items: Schema.Attribute.Component<'ui.hub-event-line', true> &
      Schema.Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
    sectionLabel: Schema.Attribute.String;
  };
}

export interface PageSectionsLifeWealthPlanningNeeds
  extends Struct.ComponentSchema {
  collectionName: 'components_page_sections_life_wealth_planning_needs';
  info: {
    displayName: 'LifeWealthPlanningNeeds';
  };
  attributes: {
    heading: Schema.Attribute.String;
    introParagraph: Schema.Attribute.Text;
    items: Schema.Attribute.Component<'ui.planning-need-line', true> &
      Schema.Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
    sectionLabel: Schema.Attribute.String;
  };
}

export interface PageSectionsLinkPanel extends Struct.ComponentSchema {
  collectionName: 'components_page_sections_link_panels';
  info: {
    displayName: 'Link Panel';
  };
  attributes: {
    heading: Schema.Attribute.String;
    introParagraph: Schema.Attribute.Text;
    links: Schema.Attribute.Component<'ui.panel-link', true>;
    sectionLabel: Schema.Attribute.String;
  };
}

export interface PageSectionsLogoWall extends Struct.ComponentSchema {
  collectionName: 'components_page_sections_logo_walls';
  info: {
    displayName: 'Logo Wall';
  };
  attributes: {
    heading: Schema.Attribute.String;
    introParagraph: Schema.Attribute.Text;
    sectionLabel: Schema.Attribute.String;
    tiles: Schema.Attribute.Component<'ui.logo-tile', true>;
  };
}

export interface PageSectionsMediaAndAwards extends Struct.ComponentSchema {
  collectionName: 'components_page_sections_media_and_awards';
  info: {
    displayName: 'MediaAndAwards';
  };
  attributes: {
    anchorId: Schema.Attribute.String;
    authorityHeading: Schema.Attribute.String;
    authorityMetrics: Schema.Attribute.Blocks;
    awardPoints: Schema.Attribute.Component<'shared.award-item', true>;
    awardsDescription: Schema.Attribute.Blocks;
    awardsLabel: Schema.Attribute.String;
    awardsRecognitionLink: Schema.Attribute.Component<
      'shared.action-link',
      false
    >;
    mediaCentreLink: Schema.Attribute.Component<'shared.action-link', false>;
    mediaLabel: Schema.Attribute.String;
    mediaPoints: Schema.Attribute.Component<'shared.list-item', true>;
    recognitionHeading: Schema.Attribute.String;
  };
}

export interface PageSectionsNewsletter extends Struct.ComponentSchema {
  collectionName: 'components_page_sections_newsletters';
  info: {
    displayName: 'Newsletter';
  };
  attributes: {
    heading: Schema.Attribute.String;
  };
}

export interface PageSectionsNewsletterContactSection
  extends Struct.ComponentSchema {
  collectionName: 'components_page_sections_newsletter_contact_sections';
  info: {
    displayName: 'NewsletterContactSection';
  };
  attributes: {
    anchorId: Schema.Attribute.String;
    contactDescription: Schema.Attribute.Text;
    contactHeading: Schema.Attribute.String;
    contactLabel: Schema.Attribute.String;
    displayedContacts: Schema.Attribute.Component<
      'shared.contact-method',
      true
    >;
    newsletterConsent: Schema.Attribute.Component<
      'ui.newsletter-consent',
      false
    >;
    newsletterDescription: Schema.Attribute.Text;
    newsletterHeading: Schema.Attribute.String;
    newsletterLabel: Schema.Attribute.String;
  };
}

export interface PageSectionsNewsletterHero extends Struct.ComponentSchema {
  collectionName: 'components_page_sections_newsletter_heroes';
  info: {
    displayName: 'NewsletterHero';
  };
  attributes: {
    captionText: Schema.Attribute.String;
    heading: Schema.Attribute.String;
    heroImage: Schema.Attribute.Media<'images'>;
    introParagraph: Schema.Attribute.Text;
    primaryButton: Schema.Attribute.Component<'shared.button', false>;
    secondaryButton: Schema.Attribute.Component<'shared.button', false>;
    sectionLabel: Schema.Attribute.String;
    watermarkText: Schema.Attribute.String;
  };
}

export interface PageSectionsNewsletterIntroRows
  extends Struct.ComponentSchema {
  collectionName: 'components_page_sections_newsletter_intro_rows_sections';
  info: {
    displayName: 'NewsletterIntroRows';
  };
  attributes: {
    heading: Schema.Attribute.String;
    introParagraph: Schema.Attribute.Text;
    rows: Schema.Attribute.Component<'ui.numbered-intro-row', true> &
      Schema.Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
    sectionLabel: Schema.Attribute.String;
  };
}

export interface PageSectionsNewsletterSubscribeBand
  extends Struct.ComponentSchema {
  collectionName: 'components_page_sections_newsletter_subscribe_bands';
  info: {
    displayName: 'NewsletterSubscribeBand';
  };
  attributes: {
    allInsightsLabel: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'All Insights'>;
    anchorId: Schema.Attribute.String;
    areasOfInterestHeading: Schema.Attribute.String;
    emailLabel: Schema.Attribute.String;
    emailPlaceholder: Schema.Attribute.String;
    firstNameLabel: Schema.Attribute.String;
    firstNamePlaceholder: Schema.Attribute.String;
    formNote: Schema.Attribute.Text;
    heading: Schema.Attribute.String;
    introParagraph: Schema.Attribute.Text;
    lastNameLabel: Schema.Attribute.String;
    lastNamePlaceholder: Schema.Attribute.String;
    newsletterConsent: Schema.Attribute.Component<
      'ui.newsletter-consent',
      false
    > &
      Schema.Attribute.Required;
    promises: Schema.Attribute.Component<'ui.promise-tile', true> &
      Schema.Attribute.SetMinMax<
        {
          max: 4;
        },
        number
      >;
    sectionLabel: Schema.Attribute.String;
    showAllInsightsOption: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<true>;
    submitButtonLabel: Schema.Attribute.String;
    subscribeCategories: Schema.Attribute.Relation<
      'manyToMany',
      'api::insight-category.insight-category'
    >;
  };
}

export interface PageSectionsNextStepsSection extends Struct.ComponentSchema {
  collectionName: 'components_page_sections_next_steps_sections';
  info: {
    displayName: 'NextStepsSection';
  };
  attributes: {
    button: Schema.Attribute.Component<'shared.button', false>;
    description: Schema.Attribute.Text;
    heading: Schema.Attribute.String;
    links: Schema.Attribute.Component<'shared.action-link', true>;
    sectionLabel: Schema.Attribute.String;
  };
}

export interface PageSectionsNoticeStrip extends Struct.ComponentSchema {
  collectionName: 'components_page_sections_notice_strips';
  info: {
    displayName: 'Notice Strip';
  };
  attributes: {
    ctaButton: Schema.Attribute.Component<'shared.button', false>;
    heading: Schema.Attribute.String;
    introParagraph: Schema.Attribute.Text;
  };
}

export interface PageSectionsNumberedList extends Struct.ComponentSchema {
  collectionName: 'components_page_sections_numbered_lists';
  info: {
    displayName: 'Numbered List';
  };
  attributes: {
    button: Schema.Attribute.Component<'shared.button', false>;
    heading: Schema.Attribute.String;
    introParagraph: Schema.Attribute.Text;
    items: Schema.Attribute.Component<'ui.numbered-list-item', true>;
    sectionLabel: Schema.Attribute.String;
    variant: Schema.Attribute.Enumeration<
      ['feature-grid', 'boundary', 'value-stream', 'feature-strip']
    > &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'feature-grid'>;
  };
}

export interface PageSectionsOfficesContactBand extends Struct.ComponentSchema {
  collectionName: 'components_page_sections_offices_contact_bands';
  info: {
    displayName: 'Offices Contact Band';
  };
  attributes: {
    anchorId: Schema.Attribute.String;
    customDetails: Schema.Attribute.Component<'ui.contact-detail-row', true>;
    description: Schema.Attribute.Text;
    globalDetails: Schema.Attribute.Component<
      'ui.global-detail-selector',
      true
    >;
    heading: Schema.Attribute.String;
    sectionLabel: Schema.Attribute.String;
  };
}

export interface PageSectionsOfficesGrowth extends Struct.ComponentSchema {
  collectionName: 'components_page_sections_offices_growths';
  info: {
    displayName: 'Offices Growth';
  };
  attributes: {
    anchorId: Schema.Attribute.String;
    heading: Schema.Attribute.String;
    introParagraphs: Schema.Attribute.Component<'ui.paragraph', true>;
    rows: Schema.Attribute.Component<'ui.offices-growth-row', true>;
    sectionLabel: Schema.Attribute.String;
  };
}

export interface PageSectionsOfficesHero extends Struct.ComponentSchema {
  collectionName: 'components_page_sections_offices_heroes';
  info: {
    displayName: 'Offices Hero';
  };
  attributes: {
    anchorId: Schema.Attribute.String;
    bodyParagraph: Schema.Attribute.Text;
    captionHeading: Schema.Attribute.String;
    captionKicker: Schema.Attribute.String;
    facts: Schema.Attribute.Component<'ui.offices-hero-fact', true>;
    heading: Schema.Attribute.String;
    leadParagraph: Schema.Attribute.Text;
    primaryButton: Schema.Attribute.Component<'shared.button', false>;
    secondaryButton: Schema.Attribute.Component<'shared.button', false>;
    sectionLabel: Schema.Attribute.String;
    visualImage: Schema.Attribute.Media<'images'>;
    visualImageAlt: Schema.Attribute.String;
  };
}

export interface PageSectionsOfficesHours extends Struct.ComponentSchema {
  collectionName: 'components_page_sections_offices_hours';
  info: {
    displayName: 'Offices Hours';
  };
  attributes: {
    anchorId: Schema.Attribute.String;
    heading: Schema.Attribute.String;
    introParagraph: Schema.Attribute.Text;
    note: Schema.Attribute.Text;
    rows: Schema.Attribute.Component<'ui.offices-hours-row', true>;
    sectionLabel: Schema.Attribute.String;
  };
}

export interface PageSectionsOfficesNetwork extends Struct.ComponentSchema {
  collectionName: 'components_page_sections_offices_networks';
  info: {
    displayName: 'Offices Network';
  };
  attributes: {
    anchorId: Schema.Attribute.String;
    heading: Schema.Attribute.String;
    introParagraph: Schema.Attribute.Text;
    officeCards: Schema.Attribute.Component<'ui.offices-office-card', true>;
    sectionLabel: Schema.Attribute.String;
  };
}

export interface PageSectionsOfficesRemote extends Struct.ComponentSchema {
  collectionName: 'components_page_sections_offices_remotes';
  info: {
    displayName: 'Offices Remote';
  };
  attributes: {
    anchorId: Schema.Attribute.String;
    heading: Schema.Attribute.String;
    introParagraphs: Schema.Attribute.Component<'ui.paragraph', true>;
    items: Schema.Attribute.Component<'ui.offices-remote-item', true>;
    primaryButton: Schema.Attribute.Component<'shared.button', false>;
    secondaryButton: Schema.Attribute.Component<'shared.button', false>;
    sectionLabel: Schema.Attribute.String;
  };
}

export interface PageSectionsOfficesRoute extends Struct.ComponentSchema {
  collectionName: 'components_page_sections_offices_routes';
  info: {
    displayName: 'Offices Route';
  };
  attributes: {
    anchorId: Schema.Attribute.String;
    cards: Schema.Attribute.Component<'ui.offices-route-card', true>;
    heading: Schema.Attribute.String;
    introParagraph: Schema.Attribute.Text;
    sectionLabel: Schema.Attribute.String;
  };
}

export interface PageSectionsOurApproach extends Struct.ComponentSchema {
  collectionName: 'components_page_sections_our_approaches';
  info: {
    displayName: 'OurApproach';
  };
  attributes: {
    anchorId: Schema.Attribute.String;
    ctaButton: Schema.Attribute.Component<'shared.button', false>;
    description: Schema.Attribute.Blocks;
    heading: Schema.Attribute.String;
    secondaryButton: Schema.Attribute.Component<'shared.button', false>;
    sectionLabel: Schema.Attribute.String;
    tertiaryButton: Schema.Attribute.Component<'shared.button', false>;
    video: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    videoThumbnaiI: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
  };
}

export interface PageSectionsPartnershipDeliveryFlow
  extends Struct.ComponentSchema {
  collectionName: 'components_page_sections_partnership_delivery_flows';
  info: {
    displayName: 'PartnershipDeliveryFlow';
  };
  attributes: {
    button: Schema.Attribute.Component<'shared.button', false>;
    heading: Schema.Attribute.String;
    introParagraph: Schema.Attribute.Text;
    sectionLabel: Schema.Attribute.String;
    steps: Schema.Attribute.Component<'ui.delivery-step', true> &
      Schema.Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
  };
}

export interface PageSectionsPartnershipMaMidSection
  extends Struct.ComponentSchema {
  collectionName: 'components_page_sections_partnership_ma_mid_sections';
  info: {
    displayName: 'PartnershipMaMidSection';
  };
  attributes: {
    heading: Schema.Attribute.String;
    introParagraph: Schema.Attribute.Text;
    items: Schema.Attribute.Component<'ui.why-box', true> &
      Schema.Attribute.SetMinMax<
        {
          max: 6;
          min: 1;
        },
        number
      >;
    sectionLabel: Schema.Attribute.String;
  };
}

export interface PageSectionsPartnershipProgrammeShowcase
  extends Struct.ComponentSchema {
  collectionName: 'components_page_sections_partnership_programme_showcases';
  info: {
    displayName: 'PartnershipProgrammeShowcase';
  };
  attributes: {
    anchorId: Schema.Attribute.String;
    heading: Schema.Attribute.String;
    introParagraph: Schema.Attribute.Text;
    programmes: Schema.Attribute.Component<'ui.programme-row', true> &
      Schema.Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
    sectionLabel: Schema.Attribute.String;
  };
}

export interface PageSectionsPartnershipProgrammeSwitcher
  extends Struct.ComponentSchema {
  collectionName: 'components_page_sections_partnership_programme_switchers';
  info: {
    displayName: 'PartnershipProgrammeSwitcher';
  };
  attributes: {
    heading: Schema.Attribute.String;
    introParagraph: Schema.Attribute.Text;
    links: Schema.Attribute.Component<'ui.switcher-link', true> &
      Schema.Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
    sectionLabel: Schema.Attribute.String;
  };
}

export interface PageSectionsPartnershipReferralStandard
  extends Struct.ComponentSchema {
  collectionName: 'components_page_sections_partnership_referral_standards';
  info: {
    displayName: 'PartnershipReferralStandard';
  };
  attributes: {
    button: Schema.Attribute.Component<'shared.button', false>;
    heading: Schema.Attribute.String;
    introParagraph: Schema.Attribute.Text;
    rows: Schema.Attribute.Component<'ui.referral-route-row', true> &
      Schema.Attribute.SetMinMax<
        {
          max: 2;
        },
        number
      >;
    sectionLabel: Schema.Attribute.String;
  };
}

export interface PageSectionsPartnershipVisualProcess
  extends Struct.ComponentSchema {
  collectionName: 'components_page_sections_partnership_visual_processes';
  info: {
    displayName: 'PartnershipVisualProcess';
  };
  attributes: {
    button: Schema.Attribute.Component<'shared.button', false>;
    heading: Schema.Attribute.String;
    introParagraph: Schema.Attribute.Text;
    sectionLabel: Schema.Attribute.String;
    steps: Schema.Attribute.Component<'ui.visual-process-step', true>;
  };
}

export interface PageSectionsPartnershipWhySection
  extends Struct.ComponentSchema {
  collectionName: 'components_page_sections_partnership_why_sections';
  info: {
    displayName: 'PartnershipWhySection';
  };
  attributes: {
    description: Schema.Attribute.Text;
    heading: Schema.Attribute.String;
    items: Schema.Attribute.Component<'ui.why-box', true> &
      Schema.Attribute.SetMinMax<
        {
          max: 6;
          min: 1;
        },
        number
      >;
    sectionLabel: Schema.Attribute.String;
  };
}

export interface PageSectionsPartnershipWorldPanels
  extends Struct.ComponentSchema {
  collectionName: 'components_page_sections_partnership_world_panels';
  info: {
    displayName: 'PartnershipWorldPanels';
  };
  attributes: {
    heading: Schema.Attribute.String;
    introParagraph: Schema.Attribute.Text;
    panels: Schema.Attribute.Component<'ui.world-panel', true> &
      Schema.Attribute.SetMinMax<
        {
          max: 2;
          min: 1;
        },
        number
      >;
    sectionLabel: Schema.Attribute.String;
  };
}

export interface PageSectionsPhilosophyBehaviourModel
  extends Struct.ComponentSchema {
  collectionName: 'components_page_sections_philosophy_behaviour_models';
  info: {
    displayName: 'Philosophy Behaviour Model';
  };
  attributes: {
    anchorId: Schema.Attribute.String;
    centreEyebrow: Schema.Attribute.String;
    centreHeading: Schema.Attribute.String;
    centreParagraph: Schema.Attribute.Text;
    centreWatermarkText: Schema.Attribute.String;
    heading: Schema.Attribute.String;
    introParagraph: Schema.Attribute.Text;
    leftNodes: Schema.Attribute.Component<'ui.philosophy-model-node', true> &
      Schema.Attribute.SetMinMax<
        {
          max: 2;
        },
        number
      >;
    rightNodes: Schema.Attribute.Component<'ui.philosophy-model-node', true> &
      Schema.Attribute.SetMinMax<
        {
          max: 2;
        },
        number
      >;
    sectionLabel: Schema.Attribute.String;
  };
}

export interface PageSectionsPhilosophyBiasLens extends Struct.ComponentSchema {
  collectionName: 'components_page_sections_philosophy_bias_lenses';
  info: {
    displayName: 'Philosophy Bias Lens';
  };
  attributes: {
    heading: Schema.Attribute.String;
    introParagraph: Schema.Attribute.Text;
    rows: Schema.Attribute.Component<'ui.philosophy-lens-row', true>;
    sectionLabel: Schema.Attribute.String;
  };
}

export interface PageSectionsPhilosophyDisclaimer
  extends Struct.ComponentSchema {
  collectionName: 'components_page_sections_philosophy_disclaimers';
  info: {
    displayName: 'Philosophy Disclaimer';
  };
  attributes: {
    text: Schema.Attribute.Text;
  };
}

export interface PageSectionsPhilosophyFinalCta extends Struct.ComponentSchema {
  collectionName: 'components_page_sections_philosophy_final_ctas';
  info: {
    displayName: 'Philosophy Final Cta';
  };
  attributes: {
    heading: Schema.Attribute.String;
    paragraph: Schema.Attribute.Text;
    primaryButton: Schema.Attribute.Component<'shared.button', false>;
    secondaryButton: Schema.Attribute.Component<'shared.button', false>;
  };
}

export interface PageSectionsPhilosophyFramework
  extends Struct.ComponentSchema {
  collectionName: 'components_page_sections_philosophy_frameworks';
  info: {
    displayName: 'Philosophy Framework';
  };
  attributes: {
    cards: Schema.Attribute.Component<'ui.philosophy-framework-card', true> &
      Schema.Attribute.SetMinMax<
        {
          max: 6;
        },
        number
      >;
    heading: Schema.Attribute.String;
    introParagraph: Schema.Attribute.Text;
    sectionLabel: Schema.Attribute.String;
  };
}

export interface PageSectionsPhilosophyGuide extends Struct.ComponentSchema {
  collectionName: 'components_page_sections_philosophy_guides';
  info: {
    displayName: 'Philosophy Guide';
  };
  attributes: {
    cta: Schema.Attribute.Component<'ui.philosophy-guide-cta', false>;
    heading: Schema.Attribute.String;
    panelImage: Schema.Attribute.Media<'images'>;
    panelImageAlt: Schema.Attribute.String;
    paragraph: Schema.Attribute.Text;
    sectionLabel: Schema.Attribute.String;
  };
}

export interface PageSectionsPhilosophyHero extends Struct.ComponentSchema {
  collectionName: 'components_page_sections_philosophy_heroes';
  info: {
    displayName: 'Philosophy Hero';
  };
  attributes: {
    bodyParagraph: Schema.Attribute.Text;
    captionEyebrow: Schema.Attribute.String;
    captionHeading: Schema.Attribute.String;
    heading: Schema.Attribute.String;
    heroImage: Schema.Attribute.Media<'images'>;
    heroImageAlt: Schema.Attribute.String;
    heroMapItems: Schema.Attribute.Component<
      'ui.philosophy-hero-map-item',
      true
    > &
      Schema.Attribute.SetMinMax<
        {
          max: 3;
        },
        number
      >;
    leadParagraph: Schema.Attribute.Text;
    primaryButton: Schema.Attribute.Component<'shared.button', false>;
    secondaryButton: Schema.Attribute.Component<'shared.button', false>;
    sectionLabel: Schema.Attribute.String;
  };
}

export interface PageSectionsPhilosophyManifesto
  extends Struct.ComponentSchema {
  collectionName: 'components_page_sections_philosophy_manifestos';
  info: {
    displayName: 'Philosophy Manifesto';
  };
  attributes: {
    asideHeading: Schema.Attribute.String;
    asideParagraph: Schema.Attribute.Text;
    asideSectionLabel: Schema.Attribute.String;
    cardParagraphs: Schema.Attribute.Component<'ui.philosophy-text-line', true>;
    cardWatermarkText: Schema.Attribute.String;
    quoteText: Schema.Attribute.Text;
  };
}

export interface PageSectionsPhilosophyMoneyMind
  extends Struct.ComponentSchema {
  collectionName: 'components_page_sections_philosophy_money_minds';
  info: {
    displayName: 'Philosophy Money Mind';
  };
  attributes: {
    columns: Schema.Attribute.Component<'ui.philosophy-mind-column', true> &
      Schema.Attribute.SetMinMax<
        {
          max: 2;
        },
        number
      >;
    heading: Schema.Attribute.String;
    introParagraph: Schema.Attribute.Text;
    sectionLabel: Schema.Attribute.String;
  };
}

export interface PageSectionsPhilosophyOutcomes extends Struct.ComponentSchema {
  collectionName: 'components_page_sections_philosophy_outcomes';
  info: {
    displayName: 'Philosophy Outcomes';
  };
  attributes: {
    heading: Schema.Attribute.String;
    introParagraph: Schema.Attribute.Text;
    items: Schema.Attribute.Component<'ui.philosophy-outcome-box', true>;
    sectionLabel: Schema.Attribute.String;
  };
}

export interface PageSectionsPhilosophyProcess extends Struct.ComponentSchema {
  collectionName: 'components_page_sections_philosophy_processes';
  info: {
    displayName: 'Philosophy Process';
  };
  attributes: {
    anchorId: Schema.Attribute.String;
    heading: Schema.Attribute.String;
    introParagraph: Schema.Attribute.Text;
    sectionLabel: Schema.Attribute.String;
    steps: Schema.Attribute.Component<'ui.philosophy-process-step', true>;
  };
}

export interface PageSectionsPhilosophyPromise extends Struct.ComponentSchema {
  collectionName: 'components_page_sections_philosophy_promises';
  info: {
    displayName: 'Philosophy Promise';
  };
  attributes: {
    items: Schema.Attribute.Component<'ui.philosophy-promise-item', true> &
      Schema.Attribute.SetMinMax<
        {
          max: 4;
        },
        number
      >;
  };
}

export interface PageSectionsPhilosophyScenario extends Struct.ComponentSchema {
  collectionName: 'components_page_sections_philosophy_scenarios';
  info: {
    displayName: 'Philosophy Scenario';
  };
  attributes: {
    heading: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images'>;
    imageAlt: Schema.Attribute.String;
    paragraphs: Schema.Attribute.Component<'ui.philosophy-text-line', true>;
    sectionLabel: Schema.Attribute.String;
    steps: Schema.Attribute.Component<'ui.philosophy-scenario-step', true>;
  };
}

export interface PageSectionsPillStrip extends Struct.ComponentSchema {
  collectionName: 'components_page_sections_pill_strips';
  info: {
    displayName: 'Pill Strip';
  };
  attributes: {
    ariaLabel: Schema.Attribute.String;
    pills: Schema.Attribute.Component<'ui.pill-item', true>;
  };
}

export interface PageSectionsPortraitHero extends Struct.ComponentSchema {
  collectionName: 'components_page_sections_portrait_heroes';
  info: {
    displayName: 'Portrait Hero';
  };
  attributes: {
    heading: Schema.Attribute.String;
    leadParagraph: Schema.Attribute.Text;
    overlayHeading: Schema.Attribute.String;
    overlayKicker: Schema.Attribute.String;
    overlayParagraph: Schema.Attribute.Text;
    portraitImage: Schema.Attribute.Media<'images'>;
    primaryButton: Schema.Attribute.Component<'shared.button', false>;
    secondaryButton: Schema.Attribute.Component<'shared.button', false>;
    secondaryParagraph: Schema.Attribute.Text;
    sectionLabel: Schema.Attribute.String;
    watermark: Schema.Attribute.String;
  };
}

export interface PageSectionsPrivateClientAudiences
  extends Struct.ComponentSchema {
  collectionName: 'components_page_sections_private_client_audiences';
  info: {
    displayName: 'PrivateClientAudiences';
  };
  attributes: {
    cards: Schema.Attribute.Component<'ui.challenge-card', true>;
    heading: Schema.Attribute.String;
    introParagraph: Schema.Attribute.Text;
    sectionLabel: Schema.Attribute.String;
  };
}

export interface PageSectionsPrivateClientContact
  extends Struct.ComponentSchema {
  collectionName: 'components_page_sections_private_client_contacts';
  info: {
    displayName: 'PrivateClientContact';
  };
  attributes: {
    adviceAreaOptions: Schema.Attribute.Component<'ui.form-option', true>;
    detailLines: Schema.Attribute.Component<'ui.info-line', true>;
    dropdownLabel: Schema.Attribute.String;
    dropdownPlaceholder: Schema.Attribute.String;
    emailLabel: Schema.Attribute.String;
    emailPlaceholder: Schema.Attribute.String;
    formHeading: Schema.Attribute.String;
    formNote: Schema.Attribute.Text;
    heading: Schema.Attribute.String;
    messageLabel: Schema.Attribute.String;
    messagePlaceholder: Schema.Attribute.String;
    nameLabel: Schema.Attribute.String;
    namePlaceholder: Schema.Attribute.String;
    newsletterConsent: Schema.Attribute.Component<
      'ui.newsletter-consent',
      false
    >;
    paragraphs: Schema.Attribute.Component<'ui.paragraph', true>;
    phoneLabel: Schema.Attribute.String;
    phonePlaceholder: Schema.Attribute.String;
    sectionLabel: Schema.Attribute.String;
    submitButton: Schema.Attribute.Component<'shared.button', false>;
    successMessage: Schema.Attribute.Text;
  };
}

export interface PageSectionsPrivateClientDifference
  extends Struct.ComponentSchema {
  collectionName: 'components_page_sections_private_client_differences';
  info: {
    displayName: 'PrivateClientDifference';
  };
  attributes: {
    columns: Schema.Attribute.Component<'ui.diff-column', true> &
      Schema.Attribute.SetMinMax<
        {
          max: 2;
          min: 2;
        },
        number
      >;
    heading: Schema.Attribute.String;
    introParagraph: Schema.Attribute.Text;
    sectionLabel: Schema.Attribute.String;
  };
}

export interface PageSectionsPrivateClientDisclaimer
  extends Struct.ComponentSchema {
  collectionName: 'components_page_sections_private_client_disclaimers';
  info: {
    displayName: 'PrivateClientDisclaimer';
  };
  attributes: {
    text: Schema.Attribute.Text & Schema.Attribute.Required;
  };
}

export interface PageSectionsPrivateClientHero extends Struct.ComponentSchema {
  collectionName: 'components_page_sections_private_client_heroes';
  info: {
    displayName: 'PrivateClientHero';
  };
  attributes: {
    bodyParagraph: Schema.Attribute.Text;
    captionHeading: Schema.Attribute.String;
    captionLabel: Schema.Attribute.String;
    heading: Schema.Attribute.String;
    heroImage: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    leadParagraph: Schema.Attribute.Text;
    primaryButton: Schema.Attribute.Component<'shared.button', false>;
    sealItems: Schema.Attribute.Component<'ui.glance-item', true> &
      Schema.Attribute.SetMinMax<
        {
          max: 3;
          min: 1;
        },
        number
      >;
    secondaryButton: Schema.Attribute.Component<'shared.button', false>;
    sectionLabel: Schema.Attribute.String;
  };
}

export interface PageSectionsPrivateClientIntro extends Struct.ComponentSchema {
  collectionName: 'components_page_sections_private_client_intros';
  info: {
    displayName: 'PrivateClientIntro';
  };
  attributes: {
    asideParagraph: Schema.Attribute.Text;
    heading: Schema.Attribute.String;
    panelParagraphs: Schema.Attribute.Component<'ui.paragraph', true>;
    quoteText: Schema.Attribute.Text;
    sectionLabel: Schema.Attribute.String;
    showWatermark: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    watermarkText: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'PRIVATE'>;
  };
}

export interface PageSectionsPrivateClientMap extends Struct.ComponentSchema {
  collectionName: 'components_page_sections_private_client_maps';
  info: {
    displayName: 'PrivateClientMap';
  };
  attributes: {
    centreDescription: Schema.Attribute.Text;
    centreHeading: Schema.Attribute.String;
    centreLabel: Schema.Attribute.String;
    centreWatermark: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'UHNW'>;
    heading: Schema.Attribute.String;
    introParagraph: Schema.Attribute.Text;
    leftNodes: Schema.Attribute.Component<'ui.map-node', true> &
      Schema.Attribute.SetMinMax<
        {
          max: 2;
          min: 1;
        },
        number
      >;
    rightNodes: Schema.Attribute.Component<'ui.map-node', true> &
      Schema.Attribute.SetMinMax<
        {
          max: 2;
          min: 1;
        },
        number
      >;
    sectionLabel: Schema.Attribute.String;
  };
}

export interface PageSectionsPrivateClientOffice
  extends Struct.ComponentSchema {
  collectionName: 'components_page_sections_private_client_offices';
  info: {
    displayName: 'PrivateClientOffice';
  };
  attributes: {
    heading: Schema.Attribute.String;
    introParagraph: Schema.Attribute.Text;
    rows: Schema.Attribute.Component<'ui.office-row', true>;
    sectionLabel: Schema.Attribute.String;
  };
}

export interface PageSectionsPrivateClientPhilosophy
  extends Struct.ComponentSchema {
  collectionName: 'components_page_sections_private_client_philosophies';
  info: {
    displayName: 'PrivateClientPhilosophy';
  };
  attributes: {
    cards: Schema.Attribute.Component<'ui.challenge-card', true>;
    heading: Schema.Attribute.String;
    introParagraph: Schema.Attribute.Text;
    sectionLabel: Schema.Attribute.String;
  };
}

export interface PageSectionsPrivateClientProcess
  extends Struct.ComponentSchema {
  collectionName: 'components_page_sections_private_client_processes';
  info: {
    displayName: 'PrivateClientProcess';
  };
  attributes: {
    button: Schema.Attribute.Component<'shared.button', false>;
    heading: Schema.Attribute.String;
    introParagraph: Schema.Attribute.Text;
    sectionLabel: Schema.Attribute.String;
    steps: Schema.Attribute.Component<'ui.private-process-step', true>;
  };
}

export interface PageSectionsPrivateClientScenario
  extends Struct.ComponentSchema {
  collectionName: 'components_page_sections_private_client_scenarios';
  info: {
    displayName: 'PrivateClientScenario';
  };
  attributes: {
    heading: Schema.Attribute.String;
    paragraphs: Schema.Attribute.Component<'ui.paragraph', true>;
    sectionLabel: Schema.Attribute.String;
    steps: Schema.Attribute.Component<'ui.scenario-flow-step', true>;
    visualImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
  };
}

export interface PageSectionsPrivateClientStrip extends Struct.ComponentSchema {
  collectionName: 'components_page_sections_private_client_strips';
  info: {
    displayName: 'PrivateClientStrip';
  };
  attributes: {
    button: Schema.Attribute.Component<'shared.button', false>;
    items: Schema.Attribute.Component<'ui.strip-item', true> &
      Schema.Attribute.SetMinMax<
        {
          max: 4;
        },
        number
      >;
  };
}

export interface PageSectionsProcessSteps extends Struct.ComponentSchema {
  collectionName: 'components_page_sections_process_steps_sections';
  info: {
    displayName: 'Process Steps';
  };
  attributes: {
    heading: Schema.Attribute.String;
    introParagraph: Schema.Attribute.Text;
    layout: Schema.Attribute.Enumeration<['journey', 'flow']> &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'journey'>;
    sectionLabel: Schema.Attribute.String;
    steps: Schema.Attribute.Component<'ui.process-step', true>;
  };
}

export interface PageSectionsPullQuote extends Struct.ComponentSchema {
  collectionName: 'components_page_sections_pull_quotes';
  info: {
    displayName: 'Pull Quote';
  };
  attributes: {
    closingParagraphs: Schema.Attribute.Component<'ui.paragraph', true>;
    heading: Schema.Attribute.String;
    introParagraph: Schema.Attribute.Text;
    openingParagraphs: Schema.Attribute.Component<'ui.paragraph', true>;
    panelLead: Schema.Attribute.Text;
    panelWatermark: Schema.Attribute.String;
    picture: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    quoteAttribution: Schema.Attribute.String;
    quoteText: Schema.Attribute.Text;
    sectionLabel: Schema.Attribute.String;
  };
}

export interface PageSectionsRelatedGuidesBlock extends Struct.ComponentSchema {
  collectionName: 'components_page_sections_related_guides_blocks';
  info: {
    displayName: 'Related Guides Block';
    icon: 'bulletList';
  };
  attributes: {
    description: Schema.Attribute.Text;
    guides: Schema.Attribute.Relation<'manyToMany', 'api::guide.guide'>;
    heading: Schema.Attribute.String;
    label: Schema.Attribute.String;
  };
}

export interface PageSectionsRelatedInsightsBlock
  extends Struct.ComponentSchema {
  collectionName: 'components_page_sections_related_insights_blocks';
  info: {
    displayName: 'Related Insights Block';
    icon: 'bulletList';
  };
  attributes: {
    description: Schema.Attribute.Text;
    heading: Schema.Attribute.String;
    insights: Schema.Attribute.Relation<'manyToMany', 'api::insight.insight'>;
    label: Schema.Attribute.String;
  };
}

export interface PageSectionsRelatedInsightsSection
  extends Struct.ComponentSchema {
  collectionName: 'components_page_sections_related_insights_sections';
  info: {
    displayName: 'RelatedInsightsSection';
  };
  attributes: {
    guides: Schema.Attribute.Relation<'oneToMany', 'api::guide.guide'>;
    heading: Schema.Attribute.String;
    insights: Schema.Attribute.Relation<'oneToMany', 'api::insight.insight'>;
    introParagraph: Schema.Attribute.Text;
    sectionLabel: Schema.Attribute.String;
  };
}

export interface PageSectionsRequestGuideForm extends Struct.ComponentSchema {
  collectionName: 'components_page_sections_request_guide_forms';
  info: {
    displayName: 'RequestGuideForm';
  };
  attributes: {
    anchorId: Schema.Attribute.String;
    curatedCategories: Schema.Attribute.Relation<
      'oneToMany',
      'api::guide-category.guide-category'
    >;
    customTopics: Schema.Attribute.Component<'elements.dropdown-option', true>;
    heading: Schema.Attribute.String;
    introParagraph: Schema.Attribute.Text;
    sectionLabel: Schema.Attribute.String;
  };
}

export interface PageSectionsReviewsAndMedia extends Struct.ComponentSchema {
  collectionName: 'components_page_sections_reviews_and_medias';
  info: {
    displayName: 'ReviewsAndMedia';
  };
  attributes: {
    anchorId: Schema.Attribute.String;
    featuredLabel: Schema.Attribute.String;
    mediaHeading: Schema.Attribute.String;
    mediaLogos: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    reviewsButton: Schema.Attribute.Component<'shared.button', false>;
    reviewsDescription: Schema.Attribute.Blocks;
    reviewsHeading: Schema.Attribute.Text;
    reviewsLabel: Schema.Attribute.String;
  };
}

export interface PageSectionsRichTextBlock extends Struct.ComponentSchema {
  collectionName: 'components_page_sections_rich_text_blocks';
  info: {
    displayName: 'Rich Text Block';
  };
  attributes: {
    heading: Schema.Attribute.String;
    introParagraph: Schema.Attribute.Text;
    leadParagraph: Schema.Attribute.Text;
    panelWatermark: Schema.Attribute.String;
    paragraphs: Schema.Attribute.Component<'ui.paragraph', true>;
    quoteText: Schema.Attribute.Text;
    sectionLabel: Schema.Attribute.String;
    variant: Schema.Attribute.Enumeration<
      ['centered', 'manifesto', 'statement', 'pale']
    > &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'centered'>;
  };
}

export interface PageSectionsScenariosSection extends Struct.ComponentSchema {
  collectionName: 'components_page_sections_scenarios_sections';
  info: {
    displayName: 'ScenariosSection';
  };
  attributes: {
    heading: Schema.Attribute.String;
    introParagraph: Schema.Attribute.Text;
    scenarios: Schema.Attribute.Component<'ui.scenario-item', true>;
    sectionLabel: Schema.Attribute.String;
  };
}

export interface PageSectionsServiceDepth extends Struct.ComponentSchema {
  collectionName: 'components_page_sections_service_depths';
  info: {
    displayName: 'ServiceDepth';
  };
  attributes: {
    rows: Schema.Attribute.Component<'ui.depth-row', true>;
  };
}

export interface PageSectionsServiceOverview extends Struct.ComponentSchema {
  collectionName: 'components_page_sections_service_overviews';
  info: {
    displayName: 'ServiceOverview';
  };
  attributes: {
    asideParagraph: Schema.Attribute.Text;
    button: Schema.Attribute.Component<'shared.button', false>;
    heading: Schema.Attribute.String;
    panelContent: Schema.Attribute.Blocks;
    sectionLabel: Schema.Attribute.String;
    showWatermark: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
  };
}

export interface PageSectionsServicePageHero extends Struct.ComponentSchema {
  collectionName: 'components_page_sections_service_page_heroes';
  info: {
    displayName: 'ServicePageHero';
  };
  attributes: {
    bodyParagraph: Schema.Attribute.Text;
    captionHeading: Schema.Attribute.String;
    captionLabel: Schema.Attribute.String;
    heading: Schema.Attribute.String;
    heroImage: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    heroImageAlt: Schema.Attribute.String;
    leadParagraph: Schema.Attribute.Text;
    primaryButton: Schema.Attribute.Component<'shared.button', false>;
    secondaryButton: Schema.Attribute.Component<'shared.button', false>;
    sectionLabel: Schema.Attribute.String;
  };
}

export interface PageSectionsServicesClientRoutes
  extends Struct.ComponentSchema {
  collectionName: 'components_page_sections_services_client_routes';
  info: {
    displayName: 'ServicesClientRoutes';
  };
  attributes: {
    clientRoutes: Schema.Attribute.Relation<
      'oneToMany',
      'api::client-route.client-route'
    >;
    description: Schema.Attribute.Text;
    heading: Schema.Attribute.String;
    sectionLabel: Schema.Attribute.String;
  };
}

export interface PageSectionsServicesConnection extends Struct.ComponentSchema {
  collectionName: 'components_page_sections_services_connections';
  info: {
    displayName: 'ServicesConnection';
  };
  attributes: {
    actionButton: Schema.Attribute.Component<'shared.button', false>;
    heading: Schema.Attribute.String;
    paragraphs: Schema.Attribute.Component<'ui.paragraph', true>;
    sectionLabel: Schema.Attribute.String;
    visualImage: Schema.Attribute.Media<'images'>;
    visualLine: Schema.Attribute.String;
  };
}

export interface PageSectionsServicesHubHero extends Struct.ComponentSchema {
  collectionName: 'components_page_sections_services_hub_heroes';
  info: {
    displayName: 'ServicesHubHero';
  };
  attributes: {
    bodyParagraph: Schema.Attribute.Text;
    captionHeading: Schema.Attribute.String;
    captionLabel: Schema.Attribute.String;
    heading: Schema.Attribute.String;
    heroImage: Schema.Attribute.Media<'images'>;
    leadParagraph: Schema.Attribute.Text;
    primaryButton: Schema.Attribute.Component<'shared.button', false>;
    secondaryButton: Schema.Attribute.Component<'shared.button', false>;
    sectionLabel: Schema.Attribute.String;
  };
}

export interface PageSectionsServicesSection extends Struct.ComponentSchema {
  collectionName: 'components_page_sections_services_sections';
  info: {
    displayName: 'ServicesSection';
  };
  attributes: {
    anchorId: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    heading: Schema.Attribute.String;
    sectionLabel: Schema.Attribute.String;
    services: Schema.Attribute.Relation<'oneToMany', 'api::service.service'>;
  };
}

export interface PageSectionsServicesShowcaseIntro
  extends Struct.ComponentSchema {
  collectionName: 'components_page_sections_services_showcase_intros';
  info: {
    displayName: 'ServicesShowcaseIntro';
  };
  attributes: {
    description: Schema.Attribute.Text;
    heading: Schema.Attribute.String;
    sectionLabel: Schema.Attribute.String;
  };
}

export interface PageSectionsSfHomeApproach extends Struct.ComponentSchema {
  collectionName: 'components_page_sections_sf_home_approaches';
  info: {
    displayName: 'SF Home Approach';
  };
  attributes: {
    anchorId: Schema.Attribute.String & Schema.Attribute.DefaultTo<'approach'>;
    eyebrow: Schema.Attribute.Text;
    intro: Schema.Attribute.Text;
    items: Schema.Attribute.Component<'ui.sf-approach-item', true>;
    title: Schema.Attribute.Text;
  };
}

export interface PageSectionsSfHomeAudiences extends Struct.ComponentSchema {
  collectionName: 'components_page_sections_sf_home_audiences';
  info: {
    displayName: 'SF Home Audiences';
  };
  attributes: {
    anchorId: Schema.Attribute.String & Schema.Attribute.DefaultTo<'clients'>;
    cards: Schema.Attribute.Component<'ui.sf-audience-card', true>;
    eyebrow: Schema.Attribute.Text;
    intro: Schema.Attribute.Text;
    title: Schema.Attribute.Text;
  };
}

export interface PageSectionsSfHomeContact extends Struct.ComponentSchema {
  collectionName: 'components_page_sections_sf_home_contacts';
  info: {
    displayName: 'SF Home Contact';
  };
  attributes: {
    anchorId: Schema.Attribute.String & Schema.Attribute.DefaultTo<'contact'>;
    body: Schema.Attribute.Text;
    borrowingLabel: Schema.Attribute.Text;
    borrowingOptions: Schema.Attribute.Component<'ui.sf-form-option', true>;
    briefLabel: Schema.Attribute.Text;
    briefPlaceholder: Schema.Attribute.Text;
    consentText: Schema.Attribute.Text;
    details: Schema.Attribute.Component<'ui.sf-contact-detail', true>;
    emailLabel: Schema.Attribute.Text;
    emailPlaceholder: Schema.Attribute.Text;
    eyebrow: Schema.Attribute.Text;
    formFooterNote: Schema.Attribute.Text;
    nameLabel: Schema.Attribute.Text;
    namePlaceholder: Schema.Attribute.Text;
    reasonLabel: Schema.Attribute.Text;
    reasonOptions: Schema.Attribute.Component<'ui.sf-form-option', true>;
    submitLabel: Schema.Attribute.Text;
    successMessage: Schema.Attribute.Text;
    title: Schema.Attribute.Text;
  };
}

export interface PageSectionsSfHomeCredentials extends Struct.ComponentSchema {
  collectionName: 'components_page_sections_sf_home_credentials';
  info: {
    displayName: 'SF Home Credentials';
  };
  attributes: {
    anchorId: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'credentials'>;
    items: Schema.Attribute.Component<'ui.sf-credential-item', true>;
  };
}

export interface PageSectionsSfHomeHero extends Struct.ComponentSchema {
  collectionName: 'components_page_sections_sf_home_heroes';
  info: {
    displayName: 'SF Home Hero';
  };
  attributes: {
    anchorId: Schema.Attribute.String & Schema.Attribute.DefaultTo<'hero'>;
    body: Schema.Attribute.Text;
    captionBold: Schema.Attribute.Text;
    captionText: Schema.Attribute.Text;
    coverImage: Schema.Attribute.Media<'images'>;
    eyebrow: Schema.Attribute.Text;
    primaryButton: Schema.Attribute.Component<'shared.button', false>;
    secondaryButton: Schema.Attribute.Component<'shared.button', false>;
    title: Schema.Attribute.Text;
  };
}

export interface PageSectionsSfHomeProtection extends Struct.ComponentSchema {
  collectionName: 'components_page_sections_sf_home_protections';
  info: {
    displayName: 'SF Home Protection';
  };
  attributes: {
    anchorId: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'protection'>;
    body: Schema.Attribute.Text;
    cta: Schema.Attribute.Component<'shared.button', false>;
    eyebrow: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images'>;
    imageAlt: Schema.Attribute.String;
    title: Schema.Attribute.Text;
  };
}

export interface PageSectionsSfHomeRoutes extends Struct.ComponentSchema {
  collectionName: 'components_page_sections_sf_home_routes';
  info: {
    displayName: 'SF Home Routes';
  };
  attributes: {
    anchorId: Schema.Attribute.String & Schema.Attribute.DefaultTo<'mortgages'>;
    cards: Schema.Attribute.Component<'ui.sf-route-card', true>;
    eyebrow: Schema.Attribute.Text;
    intro: Schema.Attribute.Text;
    title: Schema.Attribute.Text;
  };
}

export interface PageSectionsSignalPanel extends Struct.ComponentSchema {
  collectionName: 'components_page_sections_signal_panels';
  info: {
    displayName: 'Signal Panel';
  };
  attributes: {
    button: Schema.Attribute.Component<'shared.button', false>;
    heading: Schema.Attribute.String;
    introParagraph: Schema.Attribute.Text;
    items: Schema.Attribute.Component<'ui.signal-item', true>;
    secondaryParagraph: Schema.Attribute.Text;
    sectionLabel: Schema.Attribute.String;
  };
}

export interface PageSectionsSimpleOverview extends Struct.ComponentSchema {
  collectionName: 'components_page_sections_simple_overviews';
  info: {
    displayName: 'Simple Overview';
  };
  attributes: {
    bodyCopy: Schema.Attribute.Text;
    button: Schema.Attribute.Component<'shared.button', false>;
    heading: Schema.Attribute.String;
    sectionLabel: Schema.Attribute.String;
  };
}

export interface PageSectionsSocialCardsGrid extends Struct.ComponentSchema {
  collectionName: 'components_page_sections_social_cards_grids';
  info: {
    displayName: 'SocialCardsGrid';
  };
  attributes: {
    cards: Schema.Attribute.Component<'ui.social-card', true> &
      Schema.Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
    heading: Schema.Attribute.String;
    introParagraph: Schema.Attribute.Text;
    sectionLabel: Schema.Attribute.String;
  };
}

export interface PageSectionsSplitHero extends Struct.ComponentSchema {
  collectionName: 'components_page_sections_split_heroes';
  info: {
    displayName: 'Split Hero';
  };
  attributes: {
    heading: Schema.Attribute.String;
    heroImage: Schema.Attribute.Media<'images'>;
    heroImageAlt: Schema.Attribute.String;
    introParagraph: Schema.Attribute.Text;
    leadParagraph: Schema.Attribute.Text;
    LowerStrap: Schema.Attribute.Component<'shared.list-item', true>;
    primaryButton: Schema.Attribute.Component<'shared.button', false>;
    principleParagraph: Schema.Attribute.Text;
    secondaryButton: Schema.Attribute.Component<'shared.button', false>;
    secondaryParagraph: Schema.Attribute.Text;
    sectionLabel: Schema.Attribute.String;
    UpperStrap: Schema.Attribute.Component<'shared.list-item', true>;
    visualHeading: Schema.Attribute.String;
    visualKicker: Schema.Attribute.String;
    watermark: Schema.Attribute.String;
  };
}

export interface PageSectionsWfGlossaryDeal extends Struct.ComponentSchema {
  collectionName: 'components_page_sections_wf_glossary_deals';
  info: {
    displayName: 'WF Glossary Deal';
  };
  attributes: {
    anchorId: Schema.Attribute.String & Schema.Attribute.DefaultTo<'contact'>;
    heading: Schema.Attribute.Text;
    label: Schema.Attribute.String;
    primaryButton: Schema.Attribute.Component<'shared.button', false>;
    secondaryButton: Schema.Attribute.Component<'shared.button', false>;
    secondaryParagraphs: Schema.Attribute.Text;
  };
}

export interface PageSectionsWfGlossaryDirectory
  extends Struct.ComponentSchema {
  collectionName: 'components_page_sections_wf_glossary_directories';
  info: {
    displayName: 'WF Glossary Directory';
  };
  attributes: {
    anchorId: Schema.Attribute.String & Schema.Attribute.DefaultTo<'glossary'>;
    emptyHeading: Schema.Attribute.String;
    emptySecondaryParagraphs: Schema.Attribute.Text;
    glossary_letters: Schema.Attribute.Relation<
      'oneToMany',
      'api::glossary-letter.glossary-letter'
    >;
  };
}

export interface PageSectionsWfGlossaryHero extends Struct.ComponentSchema {
  collectionName: 'components_page_sections_wf_glossary_heroes';
  info: {
    displayName: 'WF Glossary Hero';
  };
  attributes: {
    anchorId: Schema.Attribute.String;
    label: Schema.Attribute.String;
    secondaryParagraphs: Schema.Attribute.Text;
    title: Schema.Attribute.Text;
  };
}

export interface PageSectionsWfHomeAuthority extends Struct.ComponentSchema {
  collectionName: 'components_page_sections_wf_home_authorities';
  info: {
    displayName: 'WF Home Authority';
  };
  attributes: {
    anchorId: Schema.Attribute.String & Schema.Attribute.DefaultTo<'roxton'>;
    awards: Schema.Attribute.Component<'ui.wf-award-card', true>;
    heading: Schema.Attribute.String;
    label: Schema.Attribute.String;
    primaryButton: Schema.Attribute.Component<'shared.button', false>;
    secondaryButton: Schema.Attribute.Component<'shared.button', false>;
    storyHeading: Schema.Attribute.String;
    storyLabel: Schema.Attribute.String;
    storySecondaryParagraphs: Schema.Attribute.Text;
  };
}

export interface PageSectionsWfHomeContact extends Struct.ComponentSchema {
  collectionName: 'components_page_sections_wf_home_contacts';
  info: {
    displayName: 'WF Home Contact';
  };
  attributes: {
    anchorId: Schema.Attribute.String & Schema.Attribute.DefaultTo<'contact'>;
    consentText: Schema.Attribute.Text;
    detailLabel: Schema.Attribute.String;
    detailPlaceholder: Schema.Attribute.String;
    disclaimer: Schema.Attribute.Text;
    emailLabel: Schema.Attribute.String;
    emailPlaceholder: Schema.Attribute.String;
    experienceLabel: Schema.Attribute.String;
    experienceOptions: Schema.Attribute.Component<'ui.form-option', true>;
    formFooterNote: Schema.Attribute.Text;
    formSecondaryParagraphs: Schema.Attribute.Text;
    formTitle: Schema.Attribute.String;
    heading: Schema.Attribute.String;
    label: Schema.Attribute.String;
    nameLabel: Schema.Attribute.String;
    namePlaceholder: Schema.Attribute.String;
    ownershipLabel: Schema.Attribute.String;
    ownershipOptions: Schema.Attribute.Component<'ui.form-option', true>;
    phoneLabel: Schema.Attribute.String;
    phonePlaceholder: Schema.Attribute.String;
    points: Schema.Attribute.Component<'ui.wf-bullet-point', true>;
    routeLabel: Schema.Attribute.String;
    routeOptions: Schema.Attribute.Component<'ui.form-option', true>;
    secondaryParagraphs: Schema.Attribute.Text;
    submitButtonLabel: Schema.Attribute.String;
    successMessage: Schema.Attribute.Text;
  };
}

export interface PageSectionsWfHomeDealLens extends Struct.ComponentSchema {
  collectionName: 'components_page_sections_wf_home_deal_lenses';
  info: {
    displayName: 'WF Home Deal Lens';
  };
  attributes: {
    anchorId: Schema.Attribute.String;
    heading: Schema.Attribute.String;
    points: Schema.Attribute.Component<'ui.wf-lens-point', true>;
  };
}

export interface PageSectionsWfHomeFaq extends Struct.ComponentSchema {
  collectionName: 'components_page_sections_wf_home_faqs';
  info: {
    displayName: 'WF Home FAQ';
  };
  attributes: {
    anchorId: Schema.Attribute.String & Schema.Attribute.DefaultTo<'faqs'>;
    heading: Schema.Attribute.String;
    items: Schema.Attribute.Component<'ui.wf-faq-item', true>;
    label: Schema.Attribute.String;
    secondaryParagraphs: Schema.Attribute.Text;
    viewAllLabel: Schema.Attribute.String;
    viewAllUrl: Schema.Attribute.String;
    viewAllVariant: Schema.Attribute.Enumeration<
      ['primary', 'outline', 'outline-light']
    > &
      Schema.Attribute.DefaultTo<'primary'>;
  };
}

export interface PageSectionsWfHomeHero extends Struct.ComponentSchema {
  collectionName: 'components_page_sections_wf_home_heroes';
  info: {
    displayName: 'WF Home Hero';
  };
  attributes: {
    anchorId: Schema.Attribute.String;
    coverImage: Schema.Attribute.Media<'images'>;
    label: Schema.Attribute.String;
    mediaCardLabel: Schema.Attribute.String;
    mediaCardTitle: Schema.Attribute.String;
    mediaCount: Schema.Attribute.String;
    mediaLabel: Schema.Attribute.String;
    panelParagraphs: Schema.Attribute.Text;
    primaryButton: Schema.Attribute.Component<'shared.button', false>;
    proofChips: Schema.Attribute.Component<'ui.wf-proof-chip', true>;
    secondaryButton: Schema.Attribute.Component<'shared.button', false>;
    secondaryParagraphs: Schema.Attribute.Text;
    title: Schema.Attribute.String;
    video: Schema.Attribute.Media<'videos' | 'files'>;
  };
}

export interface PageSectionsWfHomeInsights extends Struct.ComponentSchema {
  collectionName: 'components_page_sections_wf_home_insights';
  info: {
    displayName: 'WF Home Insights';
  };
  attributes: {
    anchorId: Schema.Attribute.String & Schema.Attribute.DefaultTo<'insights'>;
    cards: Schema.Attribute.Component<'ui.wf-insight-card', true>;
    heading: Schema.Attribute.String;
    label: Schema.Attribute.String;
    secondaryParagraphs: Schema.Attribute.Text;
  };
}

export interface PageSectionsWfHomeNewsletter extends Struct.ComponentSchema {
  collectionName: 'components_page_sections_wf_home_newsletters';
  info: {
    displayName: 'WF Home Newsletter';
  };
  attributes: {
    anchorId: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'newsletter'>;
    consentText: Schema.Attribute.Text;
    formTitle: Schema.Attribute.String;
    heading: Schema.Attribute.String;
    label: Schema.Attribute.String;
    secondaryParagraphs: Schema.Attribute.Text;
    submitButtonLabel: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Subscribe'>;
  };
}

export interface PageSectionsWfHomeProcess extends Struct.ComponentSchema {
  collectionName: 'components_page_sections_wf_home_processes';
  info: {
    displayName: 'WF Home Process';
  };
  attributes: {
    anchorId: Schema.Attribute.String & Schema.Attribute.DefaultTo<'process'>;
    ctaLabel: Schema.Attribute.String;
    ctaUrl: Schema.Attribute.String;
    ctaVariant: Schema.Attribute.Enumeration<
      ['primary', 'outline', 'outline-light']
    > &
      Schema.Attribute.DefaultTo<'primary'>;
    heading: Schema.Attribute.String;
    label: Schema.Attribute.String;
    secondaryParagraphs: Schema.Attribute.Text;
    sliderCaption: Schema.Attribute.String;
    stages: Schema.Attribute.Component<'ui.wf-process-stage', true>;
  };
}

export interface PageSectionsWfHomeRoutes extends Struct.ComponentSchema {
  collectionName: 'components_page_sections_wf_home_routes';
  info: {
    displayName: 'WF Home Routes';
  };
  attributes: {
    anchorId: Schema.Attribute.String & Schema.Attribute.DefaultTo<'routes'>;
    cards: Schema.Attribute.Component<'ui.wf-route-card', true>;
    heading: Schema.Attribute.String;
    label: Schema.Attribute.String;
    secondaryParagraphs: Schema.Attribute.Text;
  };
}

export interface PageSectionsWfHomeWhy extends Struct.ComponentSchema {
  collectionName: 'components_page_sections_wf_home_whies';
  info: {
    displayName: 'WF Home Why';
  };
  attributes: {
    anchorId: Schema.Attribute.String & Schema.Attribute.DefaultTo<'why'>;
    ctaLabel: Schema.Attribute.String;
    ctaUrl: Schema.Attribute.String;
    heading: Schema.Attribute.String;
    label: Schema.Attribute.String;
    rows: Schema.Attribute.Component<'ui.wf-why-row', true>;
    secondaryParagraphs: Schema.Attribute.Text;
  };
}

export interface PageSectionsWhoWeHelpSection extends Struct.ComponentSchema {
  collectionName: 'components_page_sections_who_we_help_sections';
  info: {
    displayName: 'WhoWeHelpSection';
  };
  attributes: {
    anchorId: Schema.Attribute.String;
    clientRoutes: Schema.Attribute.Relation<
      'oneToMany',
      'api::client-route.client-route'
    >;
    heading: Schema.Attribute.String;
    sectionLabel: Schema.Attribute.String;
  };
}

export interface PageSectionsWhyChooseUs extends Struct.ComponentSchema {
  collectionName: 'components_page_sections_why_chooseuses';
  info: {
    displayName: 'WhyChooseUs';
  };
  attributes: {
    anchorId: Schema.Attribute.String;
    body: Schema.Attribute.Blocks;
    heading: Schema.Attribute.String;
    points: Schema.Attribute.Component<'shared.list-item', true>;
    sectionLabel: Schema.Attribute.String;
    video: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    videoThumbnail: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
  };
}

export interface SharedActionLink extends Struct.ComponentSchema {
  collectionName: 'components_shared_action_links';
  info: {
    displayName: 'ActionLink';
  };
  attributes: {
    downloadFile: Schema.Attribute.Media<'files'>;
    label: Schema.Attribute.String & Schema.Attribute.Required;
    url: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedAwardItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_award_items';
  info: {
    displayName: 'AwardItem';
  };
  attributes: {
    description: Schema.Attribute.String & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedButton extends Struct.ComponentSchema {
  collectionName: 'components_shared_buttons';
  info: {
    displayName: 'Button';
  };
  attributes: {
    downloadFile: Schema.Attribute.Media<'files'>;
    label: Schema.Attribute.String & Schema.Attribute.Required;
    openInNewTab: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    url: Schema.Attribute.String & Schema.Attribute.Required;
    variant: Schema.Attribute.Enumeration<
      ['primary', 'outline', 'outline-light']
    > &
      Schema.Attribute.DefaultTo<'primary'>;
  };
}

export interface SharedContactMethod extends Struct.ComponentSchema {
  collectionName: 'components_shared_contact_methods';
  info: {
    displayName: 'Contact Method';
  };
  attributes: {
    type: Schema.Attribute.Enumeration<
      ['email', 'phone', 'whatsapp', 'linkedin']
    > &
      Schema.Attribute.Required;
  };
}

export interface SharedFooterWarning extends Struct.ComponentSchema {
  collectionName: 'components_shared_footer_warnings';
  info: {
    displayName: 'Footer Warning';
  };
  attributes: {
    text: Schema.Attribute.Text & Schema.Attribute.Required;
  };
}

export interface SharedListItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_list_items';
  info: {
    displayName: 'ListItem';
  };
  attributes: {
    label: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    displayName: 'Seo';
  };
  attributes: {
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    preventIndexing: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<false>;
    shareImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
  };
}

export interface SharedSiteFooter extends Struct.ComponentSchema {
  collectionName: 'components_shared_site_footers';
  info: {
    displayName: 'Site Footer';
  };
  attributes: {
    complianceWarnings: Schema.Attribute.Component<
      'shared.footer-warning',
      true
    >;
    privacyLabel: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Privacy Notice'>;
    privacyUrl: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'/privacy'>;
    regulatoryText: Schema.Attribute.RichText;
  };
}

export interface UiAboutHubAdaNode extends Struct.ComponentSchema {
  collectionName: 'components_ui_about_hub_ada_nodes';
  info: {
    displayName: 'AboutHubAdaNode';
  };
  attributes: {
    heading: Schema.Attribute.String;
    letter: Schema.Attribute.String;
  };
}

export interface UiAboutHubAnchorLink extends Struct.ComponentSchema {
  collectionName: 'components_ui_about_hub_anchor_links';
  info: {
    displayName: 'AboutHubAnchorLink';
  };
  attributes: {
    anchorId: Schema.Attribute.String & Schema.Attribute.Required;
    label: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface UiAboutHubEditorialLine extends Struct.ComponentSchema {
  collectionName: 'components_ui_about_hub_editorial_lines';
  info: {
    displayName: 'AboutHubEditorialLine';
  };
  attributes: {
    heading: Schema.Attribute.String;
    paragraph: Schema.Attribute.Text;
  };
}

export interface UiAboutHubExperienceRow extends Struct.ComponentSchema {
  collectionName: 'components_ui_about_hub_experience_rows';
  info: {
    displayName: 'AboutHubExperienceRow';
  };
  attributes: {
    heading: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images'>;
    imageAlt: Schema.Attribute.String;
    mini: Schema.Attribute.String;
    paragraph: Schema.Attribute.Text;
    reverseLayout: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    watermarkText: Schema.Attribute.String;
  };
}

export interface UiAboutHubFutureStep extends Struct.ComponentSchema {
  collectionName: 'components_ui_about_hub_future_steps';
  info: {
    displayName: 'AboutHubFutureStep';
  };
  attributes: {
    label: Schema.Attribute.String;
    paragraph: Schema.Attribute.Text;
  };
}

export interface UiAboutHubIndRow extends Struct.ComponentSchema {
  collectionName: 'components_ui_about_hub_ind_rows';
  info: {
    displayName: 'AboutHubIndRow';
  };
  attributes: {
    heading: Schema.Attribute.String;
    number: Schema.Attribute.String;
    paragraph: Schema.Attribute.Text;
  };
}

export interface UiAboutHubMapNode extends Struct.ComponentSchema {
  collectionName: 'components_ui_about_hub_map_nodes';
  info: {
    displayName: 'AboutHubMapNode';
  };
  attributes: {
    heading: Schema.Attribute.String;
    kicker: Schema.Attribute.String;
    position: Schema.Attribute.Enumeration<['one', 'two', 'three']> &
      Schema.Attribute.Required;
  };
}

export interface UiAboutHubProofCard extends Struct.ComponentSchema {
  collectionName: 'components_ui_about_hub_proof_cards';
  info: {
    displayName: 'AboutHubProofCard';
  };
  attributes: {
    heading: Schema.Attribute.String;
    kicker: Schema.Attribute.String;
    kickerMark: Schema.Attribute.String;
    linkLabel: Schema.Attribute.String;
    linkUrl: Schema.Attribute.String;
    paragraph: Schema.Attribute.Text;
  };
}

export interface UiAboutHubTextLine extends Struct.ComponentSchema {
  collectionName: 'components_ui_about_hub_text_lines';
  info: {
    displayName: 'AboutHubTextLine';
  };
  attributes: {
    text: Schema.Attribute.String;
  };
}

export interface UiAdaCalmNavLink extends Struct.ComponentSchema {
  collectionName: 'components_ui_ada_calm_nav_links';
  info: {
    displayName: 'AdaCalmNavLink';
  };
  attributes: {
    anchorId: Schema.Attribute.String & Schema.Attribute.Required;
    label: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface UiAdaChoiceCard extends Struct.ComponentSchema {
  collectionName: 'components_ui_ada_choice_cards';
  info: {
    displayName: 'AdaChoiceCard';
  };
  attributes: {
    button: Schema.Attribute.Component<'shared.button', false>;
    heading: Schema.Attribute.String;
    kicker: Schema.Attribute.String;
    paragraph: Schema.Attribute.Text;
    quietNote: Schema.Attribute.Text;
  };
}

export interface UiAdaFaqItem extends Struct.ComponentSchema {
  collectionName: 'components_ui_ada_faq_items';
  info: {
    displayName: 'AdaFaqItem';
  };
  attributes: {
    answer: Schema.Attribute.Text;
    question: Schema.Attribute.String;
  };
}

export interface UiAdaGuideCta extends Struct.ComponentSchema {
  collectionName: 'components_ui_ada_guide_ctas';
  info: {
    description: 'Download / guide link for the ADA guide panel';
    displayName: 'AdaGuideCta';
  };
  attributes: {
    buttonText: Schema.Attribute.String & Schema.Attribute.Required;
    downloadFile: Schema.Attribute.Media<'files'>;
    guide: Schema.Attribute.Relation<'oneToOne', 'api::guide.guide'>;
    url: Schema.Attribute.String;
  };
}

export interface UiAdaJourneyStep extends Struct.ComponentSchema {
  collectionName: 'components_ui_ada_journey_steps';
  info: {
    displayName: 'AdaJourneyStep';
  };
  attributes: {
    heading: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images'>;
    imageAlt: Schema.Attribute.String;
    kicker: Schema.Attribute.String;
    paragraph: Schema.Attribute.Text;
    stepNumber: Schema.Attribute.String;
  };
}

export interface UiAdaNotItem extends Struct.ComponentSchema {
  collectionName: 'components_ui_ada_not_items';
  info: {
    displayName: 'AdaNotItem';
  };
  attributes: {
    heading: Schema.Attribute.String;
    paragraph: Schema.Attribute.Text;
  };
}

export interface UiAdaSummaryCard extends Struct.ComponentSchema {
  collectionName: 'components_ui_ada_summary_cards';
  info: {
    displayName: 'AdaSummaryCard';
  };
  attributes: {
    heading: Schema.Attribute.String;
    iconLetter: Schema.Attribute.String;
    kicker: Schema.Attribute.String;
    paragraph: Schema.Attribute.Text;
  };
}

export interface UiAdaSupportCard extends Struct.ComponentSchema {
  collectionName: 'components_ui_ada_support_cards';
  info: {
    displayName: 'AdaSupportCard';
  };
  attributes: {
    heading: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images'>;
    imageAlt: Schema.Attribute.String;
    label: Schema.Attribute.String;
    miniListItems: Schema.Attribute.Component<'ui.text-line', true>;
    paragraph: Schema.Attribute.Text;
  };
}

export interface UiAdviceAreaCard extends Struct.ComponentSchema {
  collectionName: 'components_ui_advice_area_cards';
  info: {
    displayName: 'AdviceAreaCard';
  };
  attributes: {
    description: Schema.Attribute.Text;
    label: Schema.Attribute.String;
    link: Schema.Attribute.Component<'shared.button', false>;
    mark: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface UiAgeRouteRow extends Struct.ComponentSchema {
  collectionName: 'components_ui_age_route_rows';
  info: {
    displayName: 'AgeRouteRow';
  };
  attributes: {
    decadeLabel: Schema.Attribute.String & Schema.Attribute.Required;
    description: Schema.Attribute.Text;
    heading: Schema.Attribute.String & Schema.Attribute.Required;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    kicker: Schema.Attribute.String;
    link: Schema.Attribute.Component<'shared.action-link', false>;
    tags: Schema.Attribute.Component<'ui.tag', true>;
  };
}

export interface UiAllServicesPage extends Struct.ComponentSchema {
  collectionName: 'components_ui_all_services_pages';
  info: {
    displayName: 'AllServicesPage';
  };
  attributes: {
    extendedDescription: Schema.Attribute.Text;
    featureTags: Schema.Attribute.Component<'ui.tag', true>;
    imageCaption: Schema.Attribute.String;
    showcaseImage: Schema.Attribute.Media<'images'>;
    tagline: Schema.Attribute.String;
  };
}

export interface UiAnchorLink extends Struct.ComponentSchema {
  collectionName: 'components_ui_anchor_links';
  info: {
    displayName: 'AnchorLink';
  };
  attributes: {
    anchorId: Schema.Attribute.String & Schema.Attribute.Required;
    label: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface UiBrandsBrandCard extends Struct.ComponentSchema {
  collectionName: 'components_ui_brands_brand_cards';
  info: {
    displayName: 'Brands Brand Card';
  };
  attributes: {
    description: Schema.Attribute.Text;
    heading: Schema.Attribute.String;
    kicker: Schema.Attribute.String;
    markKicker: Schema.Attribute.String;
    markName: Schema.Attribute.String;
    mediaImage: Schema.Attribute.Media<'images'>;
    mediaImageAlt: Schema.Attribute.String;
    note: Schema.Attribute.Text;
    primaryButton: Schema.Attribute.Component<'shared.button', false>;
    secondaryLinkLabel: Schema.Attribute.String;
    secondaryLinkUrl: Schema.Attribute.String;
    tags: Schema.Attribute.Component<'ui.tag', true>;
  };
}

export interface UiBrandsStandardCard extends Struct.ComponentSchema {
  collectionName: 'components_ui_brands_standard_cards';
  info: {
    displayName: 'Brands Standard Card';
  };
  attributes: {
    description: Schema.Attribute.Text;
    heading: Schema.Attribute.String;
    label: Schema.Attribute.String;
    mark: Schema.Attribute.String;
  };
}

export interface UiChallengeCard extends Struct.ComponentSchema {
  collectionName: 'components_ui_challenge_cards';
  info: {
    displayName: 'ChallengeCard';
  };
  attributes: {
    ctaLabel: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    footnote: Schema.Attribute.Text;
    kicker: Schema.Attribute.String;
    mark: Schema.Attribute.String;
    title: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface UiCheckCard extends Struct.ComponentSchema {
  collectionName: 'components_ui_check_cards';
  info: {
    displayName: 'CheckCard';
  };
  attributes: {
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface UiComplaintDetail extends Struct.ComponentSchema {
  collectionName: 'components_ui_complaint_details';
  info: {
    displayName: 'ComplaintDetail';
  };
  attributes: {
    description: Schema.Attribute.Text;
    kicker: Schema.Attribute.String;
    linkUrl: Schema.Attribute.String;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface UiConsiderationItem extends Struct.ComponentSchema {
  collectionName: 'components_ui_consideration_items';
  info: {
    displayName: 'ConsiderationItem';
  };
  attributes: {
    description: Schema.Attribute.Text;
    label: Schema.Attribute.String;
    mark: Schema.Attribute.String;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface UiContactDetailRow extends Struct.ComponentSchema {
  collectionName: 'components_ui_contact_detail_rows';
  info: {
    displayName: 'Contact Detail Row';
  };
  attributes: {
    label: Schema.Attribute.String & Schema.Attribute.Required;
    linkUrl: Schema.Attribute.String;
    value: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface UiContactRouteCard extends Struct.ComponentSchema {
  collectionName: 'components_ui_contact_route_cards';
  info: {
    displayName: 'ContactRouteCard';
  };
  attributes: {
    badge: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    linkLabel: Schema.Attribute.String;
    linkUrl: Schema.Attribute.String;
    routeNumber: Schema.Attribute.String;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface UiDeliveryStep extends Struct.ComponentSchema {
  collectionName: 'components_ui_delivery_steps';
  info: {
    displayName: 'DeliveryStep';
  };
  attributes: {
    description: Schema.Attribute.Text;
    label: Schema.Attribute.String;
    stepMark: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface UiDepthRow extends Struct.ComponentSchema {
  collectionName: 'components_ui_depth_rows';
  info: {
    displayName: 'DepthRow';
  };
  attributes: {
    actionLink: Schema.Attribute.Component<'shared.action-link', false>;
    heading: Schema.Attribute.String;
    paragraphs: Schema.Attribute.Component<'ui.paragraph', true>;
    reverseLayout: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    sectionLabel: Schema.Attribute.String;
    visualImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    visualImageAlt: Schema.Attribute.String;
    visualLine: Schema.Attribute.String;
  };
}

export interface UiDiffColumn extends Struct.ComponentSchema {
  collectionName: 'components_ui_diff_columns';
  info: {
    displayName: 'DiffColumn';
  };
  attributes: {
    description: Schema.Attribute.Text;
    kicker: Schema.Attribute.String;
    mark: Schema.Attribute.String;
    points: Schema.Attribute.Component<'ui.paragraph', true>;
    title: Schema.Attribute.String;
  };
}

export interface UiFaqItem extends Struct.ComponentSchema {
  collectionName: 'components_ui_faq_items';
  info: {
    displayName: 'FAQ Item';
  };
  attributes: {
    answer: Schema.Attribute.Text;
    question: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface UiFinancialAgeStep extends Struct.ComponentSchema {
  collectionName: 'components_ui_financial_age_steps';
  info: {
    displayName: 'FinancialAgeStep';
  };
  attributes: {
    button: Schema.Attribute.Component<'shared.button', false>;
    description: Schema.Attribute.Text;
    heading: Schema.Attribute.String & Schema.Attribute.Required;
    kicker: Schema.Attribute.String;
  };
}

export interface UiFormOption extends Struct.ComponentSchema {
  collectionName: 'components_ui_form_options';
  info: {
    displayName: 'FormOption';
  };
  attributes: {
    label: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface UiGlanceItem extends Struct.ComponentSchema {
  collectionName: 'components_ui_glance_items';
  info: {
    displayName: 'GlanceItem';
  };
  attributes: {
    label: Schema.Attribute.String & Schema.Attribute.Required;
    value: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface UiGlobalDetailSelector extends Struct.ComponentSchema {
  collectionName: 'components_ui_global_detail_selectors';
  info: {
    displayName: 'Global Detail Selector';
  };
  attributes: {
    globalVariable: Schema.Attribute.Enumeration<
      [
        'email',
        'phone',
        'whatsapp',
        'facebook',
        'instagram',
        'office_address',
        'opening_hours',
      ]
    > &
      Schema.Attribute.Required;
  };
}

export interface UiGridCard extends Struct.ComponentSchema {
  collectionName: 'components_ui_grid_cards';
  info: {
    displayName: 'Grid Card';
  };
  attributes: {
    cardMark: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images'>;
    kicker: Schema.Attribute.String;
    linkLabel: Schema.Attribute.String;
    linkUrl: Schema.Attribute.String;
    publisherCode: Schema.Attribute.String;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface UiGuideTile extends Struct.ComponentSchema {
  collectionName: 'components_ui_guide_tiles';
  info: {
    displayName: 'GuideTile';
  };
  attributes: {
    button: Schema.Attribute.Component<'shared.button', false>;
    description: Schema.Attribute.Text;
    heading: Schema.Attribute.String;
    relatedGuide: Schema.Attribute.Relation<'oneToOne', 'api::guide.guide'>;
  };
}

export interface UiHeroCredential extends Struct.ComponentSchema {
  collectionName: 'components_ui_hero_credentials';
  info: {
    displayName: 'HeroCredential';
  };
  attributes: {
    label: Schema.Attribute.String;
    value: Schema.Attribute.String;
  };
}

export interface UiHmoFaqCategory extends Struct.ComponentSchema {
  collectionName: 'components_ui_hmo_faq_categories';
  info: {
    displayName: 'HMO FAQ Category';
  };
  attributes: {
    anchorId: Schema.Attribute.String & Schema.Attribute.Required;
    heading: Schema.Attribute.String & Schema.Attribute.Required;
    introParagraph: Schema.Attribute.Text;
    items: Schema.Attribute.Component<'ui.faq-item', true>;
  };
}

export interface UiHmoFaqCheckItem extends Struct.ComponentSchema {
  collectionName: 'components_ui_hmo_faq_check_items';
  info: {
    displayName: 'HMO FAQ Check Item';
  };
  attributes: {
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface UiHubEventLine extends Struct.ComponentSchema {
  collectionName: 'components_ui_hub_event_lines';
  info: {
    displayName: 'HubEventLine';
  };
  attributes: {
    button: Schema.Attribute.Component<'shared.button', false>;
    categoryLabel: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    heading: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface UiInfoLine extends Struct.ComponentSchema {
  collectionName: 'components_ui_info_lines';
  info: {
    displayName: 'InfoLine';
  };
  attributes: {
    categoryLabel: Schema.Attribute.String & Schema.Attribute.Required;
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface UiJoinedUpBaColumn extends Struct.ComponentSchema {
  collectionName: 'components_ui_joined_up_ba_columns';
  info: {
    displayName: 'JoinedUpBaColumn';
  };
  attributes: {
    dataMark: Schema.Attribute.String;
    heading: Schema.Attribute.String & Schema.Attribute.Required;
    kicker: Schema.Attribute.String;
    listItems: Schema.Attribute.Component<'ui.text-line', true>;
    paragraph: Schema.Attribute.Text;
  };
}

export interface UiJoinedUpFrameworkCard extends Struct.ComponentSchema {
  collectionName: 'components_ui_joined_up_framework_cards';
  info: {
    displayName: 'JoinedUpFrameworkCard';
  };
  attributes: {
    cardNote: Schema.Attribute.Text;
    dataMark: Schema.Attribute.String;
    heading: Schema.Attribute.String & Schema.Attribute.Required;
    kicker: Schema.Attribute.String;
    paragraph: Schema.Attribute.Text;
  };
}

export interface UiJoinedUpGuideCta extends Struct.ComponentSchema {
  collectionName: 'components_ui_joined_up_guide_ctas';
  info: {
    displayName: 'JoinedUpGuideCta';
  };
  attributes: {
    buttonText: Schema.Attribute.String & Schema.Attribute.Required;
    downloadFile: Schema.Attribute.Media<'files'>;
    guide: Schema.Attribute.Relation<'oneToOne', 'api::guide.guide'>;
    url: Schema.Attribute.String;
  };
}

export interface UiJoinedUpHeroMapItem extends Struct.ComponentSchema {
  collectionName: 'components_ui_joined_up_hero_map_items';
  info: {
    displayName: 'JoinedUpHeroMapItem';
  };
  attributes: {
    heading: Schema.Attribute.String & Schema.Attribute.Required;
    kicker: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface UiJoinedUpLensRow extends Struct.ComponentSchema {
  collectionName: 'components_ui_joined_up_lens_rows';
  info: {
    displayName: 'JoinedUpLensRow';
  };
  attributes: {
    heading: Schema.Attribute.String & Schema.Attribute.Required;
    image: Schema.Attribute.Media<'images'>;
    imageAlt: Schema.Attribute.String;
    kicker: Schema.Attribute.String;
    paragraph: Schema.Attribute.Text;
    points: Schema.Attribute.Component<'ui.text-line', true>;
  };
}

export interface UiJoinedUpModelCard extends Struct.ComponentSchema {
  collectionName: 'components_ui_joined_up_model_cards';
  info: {
    displayName: 'JoinedUpModelCard';
  };
  attributes: {
    cardNumber: Schema.Attribute.String;
    heading: Schema.Attribute.String & Schema.Attribute.Required;
    kicker: Schema.Attribute.String;
    layoutPosition: Schema.Attribute.Enumeration<
      [
        'model-card-1',
        'model-card-2',
        'model-card-3',
        'model-card-4',
        'model-card-5',
        'model-card-6',
      ]
    > &
      Schema.Attribute.Required;
    paragraph: Schema.Attribute.Text;
  };
}

export interface UiJoinedUpModelNode extends Struct.ComponentSchema {
  collectionName: 'components_ui_joined_up_model_nodes';
  info: {
    displayName: 'JoinedUpModelNode';
  };
  attributes: {
    heading: Schema.Attribute.String & Schema.Attribute.Required;
    kicker: Schema.Attribute.String;
    paragraph: Schema.Attribute.Text;
  };
}

export interface UiJoinedUpOutcomeBox extends Struct.ComponentSchema {
  collectionName: 'components_ui_joined_up_outcome_boxes';
  info: {
    displayName: 'JoinedUpOutcomeBox';
  };
  attributes: {
    dataMark: Schema.Attribute.String;
    heading: Schema.Attribute.String & Schema.Attribute.Required;
    kicker: Schema.Attribute.String;
    paragraph: Schema.Attribute.Text;
  };
}

export interface UiJoinedUpProcessStep extends Struct.ComponentSchema {
  collectionName: 'components_ui_joined_up_process_steps';
  info: {
    displayName: 'JoinedUpProcessStep';
  };
  attributes: {
    heading: Schema.Attribute.String & Schema.Attribute.Required;
    image: Schema.Attribute.Media<'images'>;
    imageAlt: Schema.Attribute.String;
    paragraph: Schema.Attribute.Text;
    stepNumber: Schema.Attribute.String;
    stepWord: Schema.Attribute.String;
  };
}

export interface UiJoinedUpPromiseItem extends Struct.ComponentSchema {
  collectionName: 'components_ui_joined_up_promise_items';
  info: {
    displayName: 'JoinedUpPromiseItem';
  };
  attributes: {
    heading: Schema.Attribute.String & Schema.Attribute.Required;
    itemNumber: Schema.Attribute.String;
    paragraph: Schema.Attribute.Text;
  };
}

export interface UiJoinedUpScenarioStep extends Struct.ComponentSchema {
  collectionName: 'components_ui_joined_up_scenario_steps';
  info: {
    displayName: 'JoinedUpScenarioStep';
  };
  attributes: {
    kicker: Schema.Attribute.String & Schema.Attribute.Required;
    text: Schema.Attribute.Text & Schema.Attribute.Required;
  };
}

export interface UiLegalContactItem extends Struct.ComponentSchema {
  collectionName: 'components_ui_legal_contact_items';
  info: {
    displayName: 'Legal Contact Item';
  };
  attributes: {
    label: Schema.Attribute.String & Schema.Attribute.Required;
    value: Schema.Attribute.Text & Schema.Attribute.Required;
  };
}

export interface UiLifeEventRow extends Struct.ComponentSchema {
  collectionName: 'components_ui_life_event_rows';
  info: {
    displayName: 'LifeEventRow';
  };
  attributes: {
    categoryLabel: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    indexMark: Schema.Attribute.String;
    sideHeading: Schema.Attribute.String;
    tags: Schema.Attribute.Component<'ui.tag', true>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface UiLifeStageStripItem extends Struct.ComponentSchema {
  collectionName: 'components_ui_life_stage_strip_items';
  info: {
    displayName: 'LifeStageStripItem';
  };
  attributes: {
    ageValue: Schema.Attribute.String;
    bodyCopy: Schema.Attribute.Text;
    stageLabel: Schema.Attribute.String;
    tags: Schema.Attribute.Component<'ui.tag', true>;
  };
}

export interface UiListRow extends Struct.ComponentSchema {
  collectionName: 'components_ui_list_rows';
  info: {
    displayName: 'List Row';
  };
  attributes: {
    badge: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    emblemCode: Schema.Attribute.String;
    emblemText: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images'>;
    kicker: Schema.Attribute.String;
    linkLabel: Schema.Attribute.String;
    linkUrl: Schema.Attribute.String;
    metaLabel: Schema.Attribute.String;
    rowMark: Schema.Attribute.String;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface UiLogoTile extends Struct.ComponentSchema {
  collectionName: 'components_ui_logo_tiles';
  info: {
    displayName: 'Logo Tile';
  };
  attributes: {
    label: Schema.Attribute.String & Schema.Attribute.Required;
    logoImage: Schema.Attribute.Media<'images'>;
  };
}

export interface UiMapNode extends Struct.ComponentSchema {
  collectionName: 'components_ui_map_nodes';
  info: {
    displayName: 'MapNode';
  };
  attributes: {
    description: Schema.Attribute.Text;
    label: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface UiNarrativeRow extends Struct.ComponentSchema {
  collectionName: 'components_ui_narrative_rows';
  info: {
    displayName: 'Narrative Row';
  };
  attributes: {
    heading: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images'>;
    imagePosition: Schema.Attribute.Enumeration<['left', 'right']> &
      Schema.Attribute.DefaultTo<'right'>;
    paragraphs: Schema.Attribute.Component<'ui.paragraph', true>;
    sectionLabel: Schema.Attribute.String;
    visualLine: Schema.Attribute.String;
  };
}

export interface UiNewsletterConsent extends Struct.ComponentSchema {
  collectionName: 'components_ui_newsletter_consents';
  info: {
    displayName: 'NewsletterConsent';
  };
  attributes: {
    consentText: Schema.Attribute.Text & Schema.Attribute.Required;
    isRequired: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
  };
}

export interface UiNumberedIntroRow extends Struct.ComponentSchema {
  collectionName: 'components_ui_numbered_intro_rows';
  info: {
    displayName: 'NumberedIntroRow';
  };
  attributes: {
    description: Schema.Attribute.Text;
    stepNumber: Schema.Attribute.String & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface UiNumberedListItem extends Struct.ComponentSchema {
  collectionName: 'components_ui_numbered_list_items';
  info: {
    displayName: 'Numbered List Item';
  };
  attributes: {
    body: Schema.Attribute.Text;
    heading: Schema.Attribute.String;
    itemMark: Schema.Attribute.String;
    kicker: Schema.Attribute.String;
  };
}

export interface UiOfficeFlipCard extends Struct.ComponentSchema {
  collectionName: 'components_ui_office_flip_cards';
  info: {
    displayName: 'OfficeFlipCard';
  };
  attributes: {
    backActionLabel: Schema.Attribute.String;
    backCode: Schema.Attribute.String;
    backDescription: Schema.Attribute.Text;
    flipActionLabel: Schema.Attribute.String;
    frontCode: Schema.Attribute.String;
    frontDescription: Schema.Attribute.Text;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface UiOfficeRow extends Struct.ComponentSchema {
  collectionName: 'components_ui_office_rows';
  info: {
    displayName: 'OfficeRow';
  };
  attributes: {
    description: Schema.Attribute.Text;
    kicker: Schema.Attribute.String;
    points: Schema.Attribute.Component<'ui.paragraph', true>;
    title: Schema.Attribute.String;
    visualImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
  };
}

export interface UiOfficesDetailBox extends Struct.ComponentSchema {
  collectionName: 'components_ui_offices_detail_boxes';
  info: {
    displayName: 'Offices Detail Box';
  };
  attributes: {
    label: Schema.Attribute.String;
    value: Schema.Attribute.Text;
  };
}

export interface UiOfficesGrowthRow extends Struct.ComponentSchema {
  collectionName: 'components_ui_offices_growth_rows';
  info: {
    displayName: 'Offices Growth Row';
  };
  attributes: {
    description: Schema.Attribute.Text;
    heading: Schema.Attribute.String;
    label: Schema.Attribute.String;
  };
}

export interface UiOfficesHeroFact extends Struct.ComponentSchema {
  collectionName: 'components_ui_offices_hero_facts';
  info: {
    displayName: 'Offices Hero Fact';
  };
  attributes: {
    label: Schema.Attribute.String;
    value: Schema.Attribute.String;
  };
}

export interface UiOfficesHoursRow extends Struct.ComponentSchema {
  collectionName: 'components_ui_offices_hours_rows';
  info: {
    displayName: 'Offices Hours Row';
  };
  attributes: {
    label: Schema.Attribute.String;
    value: Schema.Attribute.String;
  };
}

export interface UiOfficesOfficeCard extends Struct.ComponentSchema {
  collectionName: 'components_ui_offices_office_cards';
  info: {
    displayName: 'Offices Office Card';
  };
  attributes: {
    alternateLayout: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<false>;
    anchorId: Schema.Attribute.String;
    appointmentNote: Schema.Attribute.Text;
    bookButton: Schema.Attribute.Component<'shared.button', false>;
    cityKicker: Schema.Attribute.String;
    cityName: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    detailBoxes: Schema.Attribute.Component<'ui.offices-detail-box', true>;
    indexLabel: Schema.Attribute.String;
    mapsLinkLabel: Schema.Attribute.String;
    mapsLinkUrl: Schema.Attribute.String;
    mapsOpenInNewTab: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<true>;
    mediaImage: Schema.Attribute.Media<'images'>;
    mediaImageAlt: Schema.Attribute.String;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface UiOfficesRemoteItem extends Struct.ComponentSchema {
  collectionName: 'components_ui_offices_remote_items';
  info: {
    displayName: 'Offices Remote Item';
  };
  attributes: {
    description: Schema.Attribute.Text;
    heading: Schema.Attribute.String;
    label: Schema.Attribute.String;
  };
}

export interface UiOfficesRouteCard extends Struct.ComponentSchema {
  collectionName: 'components_ui_offices_route_cards';
  info: {
    displayName: 'Offices Route Card';
  };
  attributes: {
    description: Schema.Attribute.Text;
    heading: Schema.Attribute.String;
    label: Schema.Attribute.String;
    linkLabel: Schema.Attribute.String;
    linkUrl: Schema.Attribute.String;
    mark: Schema.Attribute.String;
  };
}

export interface UiPanelLink extends Struct.ComponentSchema {
  collectionName: 'components_ui_panel_links';
  info: {
    displayName: 'Panel Link';
  };
  attributes: {
    actionLabel: Schema.Attribute.String;
    label: Schema.Attribute.String & Schema.Attribute.Required;
    linkUrl: Schema.Attribute.String;
  };
}

export interface UiParagraph extends Struct.ComponentSchema {
  collectionName: 'components_ui_paragraphs';
  info: {
    displayName: 'Paragraph';
  };
  attributes: {
    button: Schema.Attribute.Component<'shared.button', false>;
    text: Schema.Attribute.Text & Schema.Attribute.Required;
  };
}

export interface UiPhilosophyFrameworkCard extends Struct.ComponentSchema {
  collectionName: 'components_ui_philosophy_framework_cards';
  info: {
    displayName: 'PhilosophyFrameworkCard';
  };
  attributes: {
    cardNote: Schema.Attribute.Text;
    heading: Schema.Attribute.String & Schema.Attribute.Required;
    kicker: Schema.Attribute.String;
    kickerMark: Schema.Attribute.String;
    paragraph: Schema.Attribute.Text;
  };
}

export interface UiPhilosophyGuideCta extends Struct.ComponentSchema {
  collectionName: 'components_ui_philosophy_guide_ctas';
  info: {
    displayName: 'PhilosophyGuideCta';
  };
  attributes: {
    buttonText: Schema.Attribute.String;
    downloadFile: Schema.Attribute.Media<'files' | 'images'>;
    guide: Schema.Attribute.Relation<'oneToOne', 'api::guide.guide'>;
    url: Schema.Attribute.String;
  };
}

export interface UiPhilosophyHeroMapItem extends Struct.ComponentSchema {
  collectionName: 'components_ui_philosophy_hero_map_items';
  info: {
    displayName: 'PhilosophyHeroMapItem';
  };
  attributes: {
    heading: Schema.Attribute.String;
    kicker: Schema.Attribute.String;
  };
}

export interface UiPhilosophyLensRow extends Struct.ComponentSchema {
  collectionName: 'components_ui_philosophy_lens_rows';
  info: {
    displayName: 'PhilosophyLensRow';
  };
  attributes: {
    heading: Schema.Attribute.String & Schema.Attribute.Required;
    image: Schema.Attribute.Media<'images'>;
    imageAlt: Schema.Attribute.String;
    kicker: Schema.Attribute.String;
    paragraph: Schema.Attribute.Text;
    points: Schema.Attribute.Component<'ui.philosophy-text-line', true>;
  };
}

export interface UiPhilosophyMindColumn extends Struct.ComponentSchema {
  collectionName: 'components_ui_philosophy_mind_columns';
  info: {
    displayName: 'PhilosophyMindColumn';
  };
  attributes: {
    heading: Schema.Attribute.String;
    kicker: Schema.Attribute.String;
    kickerMark: Schema.Attribute.String;
    listItems: Schema.Attribute.Component<'ui.philosophy-text-line', true>;
    paragraph: Schema.Attribute.Text;
  };
}

export interface UiPhilosophyModelNode extends Struct.ComponentSchema {
  collectionName: 'components_ui_philosophy_model_nodes';
  info: {
    displayName: 'PhilosophyModelNode';
  };
  attributes: {
    heading: Schema.Attribute.String;
    kicker: Schema.Attribute.String;
    paragraph: Schema.Attribute.Text;
  };
}

export interface UiPhilosophyOutcomeBox extends Struct.ComponentSchema {
  collectionName: 'components_ui_philosophy_outcome_boxes';
  info: {
    displayName: 'PhilosophyOutcomeBox';
  };
  attributes: {
    heading: Schema.Attribute.String;
    kicker: Schema.Attribute.String;
    kickerMark: Schema.Attribute.String;
    paragraph: Schema.Attribute.Text;
  };
}

export interface UiPhilosophyProcessStep extends Struct.ComponentSchema {
  collectionName: 'components_ui_philosophy_process_steps';
  info: {
    displayName: 'PhilosophyProcessStep';
  };
  attributes: {
    heading: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images'>;
    imageAlt: Schema.Attribute.String;
    paragraph: Schema.Attribute.Text;
    stepMark: Schema.Attribute.String;
    stepWord: Schema.Attribute.String;
  };
}

export interface UiPhilosophyPromiseItem extends Struct.ComponentSchema {
  collectionName: 'components_ui_philosophy_promise_items';
  info: {
    displayName: 'PhilosophyPromiseItem';
  };
  attributes: {
    heading: Schema.Attribute.String;
    itemNumber: Schema.Attribute.String;
    paragraph: Schema.Attribute.Text;
  };
}

export interface UiPhilosophyScenarioStep extends Struct.ComponentSchema {
  collectionName: 'components_ui_philosophy_scenario_steps';
  info: {
    displayName: 'PhilosophyScenarioStep';
  };
  attributes: {
    kicker: Schema.Attribute.String;
    text: Schema.Attribute.Text;
  };
}

export interface UiPhilosophyTextLine extends Struct.ComponentSchema {
  collectionName: 'components_ui_philosophy_text_lines';
  info: {
    displayName: 'PhilosophyTextLine';
  };
  attributes: {
    text: Schema.Attribute.Text;
  };
}

export interface UiPillItem extends Struct.ComponentSchema {
  collectionName: 'components_ui_pill_items';
  info: {
    displayName: 'Pill Item';
  };
  attributes: {
    kicker: Schema.Attribute.String;
    label: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface UiPlanningNeedLine extends Struct.ComponentSchema {
  collectionName: 'components_ui_planning_need_lines';
  info: {
    displayName: 'PlanningNeedLine';
  };
  attributes: {
    actionLink: Schema.Attribute.Component<'shared.action-link', false>;
    categoryLabel: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    heading: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface UiPortalListItem extends Struct.ComponentSchema {
  collectionName: 'components_ui_portal_list_items';
  info: {
    displayName: 'PortalListItem';
  };
  attributes: {
    stepNumber: Schema.Attribute.String & Schema.Attribute.Required;
    text: Schema.Attribute.Text & Schema.Attribute.Required;
  };
}

export interface UiPortalRouteCard extends Struct.ComponentSchema {
  collectionName: 'components_ui_portal_route_cards';
  info: {
    displayName: 'PortalRouteCard';
  };
  attributes: {
    description: Schema.Attribute.Text;
    kicker: Schema.Attribute.String;
    linkLabel: Schema.Attribute.String & Schema.Attribute.Required;
    linkUrl: Schema.Attribute.String & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface UiPrivateProcessStep extends Struct.ComponentSchema {
  collectionName: 'components_ui_private_process_steps';
  info: {
    displayName: 'PrivateProcessStep';
  };
  attributes: {
    description: Schema.Attribute.Text;
    kicker: Schema.Attribute.String;
    stepImage: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    stepMark: Schema.Attribute.String;
    stepWord: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface UiProcessStep extends Struct.ComponentSchema {
  collectionName: 'components_ui_process_steps';
  info: {
    displayName: 'ProcessStep';
  };
  attributes: {
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images'>;
    stepLabel: Schema.Attribute.String;
    stepNumber: Schema.Attribute.String;
    stepWord: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface UiProgrammeRow extends Struct.ComponentSchema {
  collectionName: 'components_ui_programme_rows';
  info: {
    displayName: 'ProgrammeRow';
  };
  attributes: {
    actionLink: Schema.Attribute.Component<'shared.action-link', false>;
    description: Schema.Attribute.Text;
    featureTags: Schema.Attribute.Component<'ui.tag', true>;
    imageCaption: Schema.Attribute.String;
    linkedPage: Schema.Attribute.Relation<
      'oneToOne',
      'api::partnership-page.partnership-page'
    >;
    programmeName: Schema.Attribute.String;
    showcaseImage: Schema.Attribute.Media<'images'>;
    sortOrder: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<0>;
    tagline: Schema.Attribute.String;
  };
}

export interface UiPromiseTile extends Struct.ComponentSchema {
  collectionName: 'components_ui_promise_tiles';
  info: {
    displayName: 'PromiseTile';
  };
  attributes: {
    label: Schema.Attribute.String & Schema.Attribute.Required;
    value: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface UiQuickLinkCard extends Struct.ComponentSchema {
  collectionName: 'components_ui_quick_link_cards';
  info: {
    displayName: 'QuickLinkCard';
  };
  attributes: {
    linkLabel: Schema.Attribute.String;
    linkUrl: Schema.Attribute.String;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface UiReferralRouteRow extends Struct.ComponentSchema {
  collectionName: 'components_ui_referral_route_rows';
  info: {
    displayName: 'ReferralRouteRow';
  };
  attributes: {
    checkItems: Schema.Attribute.Component<'shared.list-item', true>;
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images'>;
    kicker: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface UiScenarioFlowStep extends Struct.ComponentSchema {
  collectionName: 'components_ui_scenario_flow_steps';
  info: {
    displayName: 'ScenarioFlowStep';
  };
  attributes: {
    description: Schema.Attribute.Text;
    stepLabel: Schema.Attribute.String;
  };
}

export interface UiScenarioItem extends Struct.ComponentSchema {
  collectionName: 'components_ui_scenario_items';
  info: {
    displayName: 'ScenarioItem';
  };
  attributes: {
    actionLink: Schema.Attribute.Component<'shared.action-link', false>;
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface UiSfApproachItem extends Struct.ComponentSchema {
  collectionName: 'components_ui_sf_approach_items';
  info: {
    displayName: 'SF Approach Item';
  };
  attributes: {
    description: Schema.Attribute.Text;
    label: Schema.Attribute.Text;
    title: Schema.Attribute.Text;
  };
}

export interface UiSfAudienceCard extends Struct.ComponentSchema {
  collectionName: 'components_ui_sf_audience_cards';
  info: {
    displayName: 'SF Audience Card';
  };
  attributes: {
    description: Schema.Attribute.Text;
    label: Schema.Attribute.Text;
    link: Schema.Attribute.Component<'shared.action-link', false>;
    title: Schema.Attribute.Text;
  };
}

export interface UiSfContactDetail extends Struct.ComponentSchema {
  collectionName: 'components_ui_sf_contact_details';
  info: {
    displayName: 'SF Contact Detail';
  };
  attributes: {
    label: Schema.Attribute.Text;
    value: Schema.Attribute.String;
  };
}

export interface UiSfCredentialItem extends Struct.ComponentSchema {
  collectionName: 'components_ui_sf_credential_items';
  info: {
    displayName: 'SF Credential Item';
  };
  attributes: {
    label: Schema.Attribute.Text;
  };
}

export interface UiSfFormOption extends Struct.ComponentSchema {
  collectionName: 'components_ui_sf_form_options';
  info: {
    displayName: 'SF Form Option';
  };
  attributes: {
    label: Schema.Attribute.Text;
  };
}

export interface UiSfRouteCard extends Struct.ComponentSchema {
  collectionName: 'components_ui_sf_route_cards';
  info: {
    displayName: 'SF Route Card';
  };
  attributes: {
    description: Schema.Attribute.Text;
    kicker: Schema.Attribute.Text;
    link: Schema.Attribute.Component<'shared.action-link', false>;
    title: Schema.Attribute.Text;
  };
}

export interface UiSignalItem extends Struct.ComponentSchema {
  collectionName: 'components_ui_signal_items';
  info: {
    displayName: 'Signal Item';
  };
  attributes: {
    body: Schema.Attribute.Text;
    heading: Schema.Attribute.String & Schema.Attribute.Required;
    kicker: Schema.Attribute.String;
  };
}

export interface UiSocialCard extends Struct.ComponentSchema {
  collectionName: 'components_ui_social_cards';
  info: {
    displayName: 'SocialCard';
  };
  attributes: {
    ctaText: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    kicker: Schema.Attribute.String;
    title: Schema.Attribute.String & Schema.Attribute.Required;
    url: Schema.Attribute.String & Schema.Attribute.Required;
    watermark: Schema.Attribute.String;
  };
}

export interface UiStepItem extends Struct.ComponentSchema {
  collectionName: 'components_ui_step_items';
  info: {
    displayName: 'StepItem';
  };
  attributes: {
    description: Schema.Attribute.Text;
    stepNumber: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface UiStripItem extends Struct.ComponentSchema {
  collectionName: 'components_ui_strip_items';
  info: {
    displayName: 'StripItem';
  };
  attributes: {
    description: Schema.Attribute.Text;
    label: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface UiSwitcherLink extends Struct.ComponentSchema {
  collectionName: 'components_ui_switcher_links';
  info: {
    displayName: 'SwitcherLink';
  };
  attributes: {
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface UiTableBlock extends Struct.ComponentSchema {
  collectionName: 'components_ui_table_blocks';
  info: {
    displayName: 'Table Block';
  };
  attributes: {
    rows: Schema.Attribute.Component<'ui.table-row', true>;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface UiTableRow extends Struct.ComponentSchema {
  collectionName: 'components_ui_table_rows';
  info: {
    displayName: 'Table Row';
  };
  attributes: {
    amount: Schema.Attribute.String;
    amountLabel: Schema.Attribute.String;
    amountNote: Schema.Attribute.Text;
    serviceDescription: Schema.Attribute.Text;
    serviceLabel: Schema.Attribute.String;
    serviceTitle: Schema.Attribute.String & Schema.Attribute.Required;
    timingDescription: Schema.Attribute.Text;
    timingLabel: Schema.Attribute.String;
  };
}

export interface UiTag extends Struct.ComponentSchema {
  collectionName: 'components_ui_tags';
  info: {
    displayName: 'Tag';
  };
  attributes: {
    label: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface UiTextLine extends Struct.ComponentSchema {
  collectionName: 'components_ui_text_lines';
  info: {
    displayName: 'TextLine';
  };
  attributes: {
    text: Schema.Attribute.Text & Schema.Attribute.Required;
  };
}

export interface UiTocItem extends Struct.ComponentSchema {
  collectionName: 'components_ui_toc_items';
  info: {
    displayName: 'TocItem';
  };
  attributes: {
    anchorId: Schema.Attribute.String & Schema.Attribute.Required;
    label: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface UiVisualProcessStep extends Struct.ComponentSchema {
  collectionName: 'components_ui_visual_process_steps';
  info: {
    displayName: 'VisualProcessStep';
  };
  attributes: {
    description: Schema.Attribute.Text;
    stepImage: Schema.Attribute.Media<'images'>;
    stepNumber: Schema.Attribute.String;
    stepWord: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface UiWfAwardCard extends Struct.ComponentSchema {
  collectionName: 'components_ui_wf_award_cards';
  info: {
    displayName: 'WF Award Card';
  };
  attributes: {
    heading: Schema.Attribute.String;
    label: Schema.Attribute.String;
    secondaryParagraphs: Schema.Attribute.Text;
  };
}

export interface UiWfBulletPoint extends Struct.ComponentSchema {
  collectionName: 'components_ui_wf_bullet_points';
  info: {
    displayName: 'WF Bullet Point';
  };
  attributes: {
    text: Schema.Attribute.String;
  };
}

export interface UiWfFaqItem extends Struct.ComponentSchema {
  collectionName: 'components_ui_wf_faq_items';
  info: {
    displayName: 'WF FAQ Item';
  };
  attributes: {
    question: Schema.Attribute.String;
    secondaryParagraphs: Schema.Attribute.Text;
  };
}

export interface UiWfGlossaryArticle extends Struct.ComponentSchema {
  collectionName: 'components_ui_wf_glossary_articles';
  info: {
    displayName: 'WF Glossary Article';
  };
  attributes: {
    linkLabel: Schema.Attribute.String;
    linkUrl: Schema.Attribute.String;
    secondaryParagraphs: Schema.Attribute.Text;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface UiWfInsightCard extends Struct.ComponentSchema {
  collectionName: 'components_ui_wf_insight_cards';
  info: {
    displayName: 'WF Insight Card';
  };
  attributes: {
    heading: Schema.Attribute.String;
    label: Schema.Attribute.String;
    linkLabel: Schema.Attribute.String;
    linkUrl: Schema.Attribute.String;
    secondaryParagraphs: Schema.Attribute.Text;
  };
}

export interface UiWfLensPoint extends Struct.ComponentSchema {
  collectionName: 'components_ui_wf_lens_points';
  info: {
    displayName: 'WF Lens Point';
  };
  attributes: {
    heading: Schema.Attribute.String;
    secondaryParagraphs: Schema.Attribute.Text;
  };
}

export interface UiWfProcessStage extends Struct.ComponentSchema {
  collectionName: 'components_ui_wf_process_stages';
  info: {
    displayName: 'WF Process Stage';
  };
  attributes: {
    heading: Schema.Attribute.String;
    secondaryParagraphs: Schema.Attribute.Text;
    stepNumber: Schema.Attribute.String;
    stepSymbol: Schema.Attribute.String;
  };
}

export interface UiWfProofChip extends Struct.ComponentSchema {
  collectionName: 'components_ui_wf_proof_chips';
  info: {
    displayName: 'WF Proof Chip';
  };
  attributes: {
    label: Schema.Attribute.String;
    value: Schema.Attribute.String;
  };
}

export interface UiWfRouteCard extends Struct.ComponentSchema {
  collectionName: 'components_ui_wf_route_cards';
  info: {
    displayName: 'WF Route Card';
  };
  attributes: {
    heading: Schema.Attribute.String;
    kicker: Schema.Attribute.String;
    linkLabel: Schema.Attribute.String;
    linkUrl: Schema.Attribute.String;
    secondaryParagraphs: Schema.Attribute.Text;
  };
}

export interface UiWfWhyRow extends Struct.ComponentSchema {
  collectionName: 'components_ui_wf_why_rows';
  info: {
    displayName: 'WF Why Row';
  };
  attributes: {
    heading: Schema.Attribute.String;
    secondaryParagraphs: Schema.Attribute.Text;
    stepNumber: Schema.Attribute.String;
    tag: Schema.Attribute.String;
  };
}

export interface UiWhyBox extends Struct.ComponentSchema {
  collectionName: 'components_ui_why_boxes';
  info: {
    displayName: 'WhyBox';
  };
  attributes: {
    description: Schema.Attribute.Text;
    label: Schema.Attribute.String;
    mark: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface UiWorldPanel extends Struct.ComponentSchema {
  collectionName: 'components_ui_world_panels';
  info: {
    displayName: 'WorldPanel';
  };
  attributes: {
    image: Schema.Attribute.Media<'images'>;
    kicker: Schema.Attribute.String;
    listItems: Schema.Attribute.Component<'shared.list-item', true>;
    paragraphs: Schema.Attribute.Component<'ui.paragraph', true>;
    title: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'elements.dropdown-option': ElementsDropdownOption;
      'page-sections.about-hub-ada-teaser': PageSectionsAboutHubAdaTeaser;
      'page-sections.about-hub-anchor-bar': PageSectionsAboutHubAnchorBar;
      'page-sections.about-hub-experience': PageSectionsAboutHubExperience;
      'page-sections.about-hub-final-cta': PageSectionsAboutHubFinalCta;
      'page-sections.about-hub-future': PageSectionsAboutHubFuture;
      'page-sections.about-hub-hero': PageSectionsAboutHubHero;
      'page-sections.about-hub-independent': PageSectionsAboutHubIndependent;
      'page-sections.about-hub-proof': PageSectionsAboutHubProof;
      'page-sections.about-hub-story': PageSectionsAboutHubStory;
      'page-sections.ada-calm-nav': PageSectionsAdaCalmNav;
      'page-sections.ada-choice': PageSectionsAdaChoice;
      'page-sections.ada-faq': PageSectionsAdaFaq;
      'page-sections.ada-final-cta': PageSectionsAdaFinalCta;
      'page-sections.ada-guide-panel': PageSectionsAdaGuidePanel;
      'page-sections.ada-hero': PageSectionsAdaHero;
      'page-sections.ada-intro': PageSectionsAdaIntro;
      'page-sections.ada-journey': PageSectionsAdaJourney;
      'page-sections.ada-not-section': PageSectionsAdaNotSection;
      'page-sections.ada-support': PageSectionsAdaSupport;
      'page-sections.ada-visual-summary': PageSectionsAdaVisualSummary;
      'page-sections.alternating-narrative': PageSectionsAlternatingNarrative;
      'page-sections.brands-hero': PageSectionsBrandsHero;
      'page-sections.brands-portfolio': PageSectionsBrandsPortfolio;
      'page-sections.brands-standard': PageSectionsBrandsStandard;
      'page-sections.card-grid': PageSectionsCardGrid;
      'page-sections.client-login-hero': PageSectionsClientLoginHero;
      'page-sections.client-login-support-routes': PageSectionsClientLoginSupportRoutes;
      'page-sections.client-route-advice-areas': PageSectionsClientRouteAdviceAreas;
      'page-sections.client-route-case-situations': PageSectionsClientRouteCaseSituations;
      'page-sections.client-route-challenges': PageSectionsClientRouteChallenges;
      'page-sections.client-route-guides': PageSectionsClientRouteGuides;
      'page-sections.client-route-hero': PageSectionsClientRouteHero;
      'page-sections.client-route-image-break': PageSectionsClientRouteImageBreak;
      'page-sections.client-route-overview': PageSectionsClientRouteOverview;
      'page-sections.client-route-persona-strip': PageSectionsClientRoutePersonaStrip;
      'page-sections.client-route-process': PageSectionsClientRouteProcess;
      'page-sections.considerations-section': PageSectionsConsiderationsSection;
      'page-sections.contact-advice-fit': PageSectionsContactAdviceFit;
      'page-sections.contact-anchor-bar': PageSectionsContactAnchorBar;
      'page-sections.contact-callback': PageSectionsContactCallback;
      'page-sections.contact-hero': PageSectionsContactHero;
      'page-sections.contact-offices': PageSectionsContactOffices;
      'page-sections.contact-quick-links': PageSectionsContactQuickLinks;
      'page-sections.contact-routes': PageSectionsContactRoutes;
      'page-sections.data-table': PageSectionsDataTable;
      'page-sections.disclaimer-strip': PageSectionsDisclaimerStrip;
      'page-sections.dual-guide-band': PageSectionsDualGuideBand;
      'page-sections.editorial-split': PageSectionsEditorialSplit;
      'page-sections.faq-grid': PageSectionsFaqGrid;
      'page-sections.final-cta': PageSectionsFinalCta;
      'page-sections.glance-strip': PageSectionsGlanceStrip;
      'page-sections.guide-band': PageSectionsGuideBand;
      'page-sections.guides-featured-block': PageSectionsGuidesFeaturedBlock;
      'page-sections.guides-list-header': PageSectionsGuidesListHeader;
      'page-sections.guides-section': PageSectionsGuidesSection;
      'page-sections.hero': PageSectionsHero;
      'page-sections.hmo-faq-deal-check': PageSectionsHmoFaqDealCheck;
      'page-sections.hmo-faq-directory': PageSectionsHmoFaqDirectory;
      'page-sections.hmo-faq-final-cta': PageSectionsHmoFaqFinalCta;
      'page-sections.hmo-faq-hero': PageSectionsHmoFaqHero;
      'page-sections.hmo-faq-search': PageSectionsHmoFaqSearch;
      'page-sections.homepage-anchor-bar': PageSectionsHomepageAnchorBar;
      'page-sections.hub-list-header': PageSectionsHubListHeader;
      'page-sections.hub-search-bar': PageSectionsHubSearchBar;
      'page-sections.information-section': PageSectionsInformationSection;
      'page-sections.insights-featured-block': PageSectionsInsightsFeaturedBlock;
      'page-sections.insights-section': PageSectionsInsightsSection;
      'page-sections.item-list': PageSectionsItemList;
      'page-sections.joined-up-before-after': PageSectionsJoinedUpBeforeAfter;
      'page-sections.joined-up-connected-lens': PageSectionsJoinedUpConnectedLens;
      'page-sections.joined-up-core-model': PageSectionsJoinedUpCoreModel;
      'page-sections.joined-up-disclaimer': PageSectionsJoinedUpDisclaimer;
      'page-sections.joined-up-final-cta': PageSectionsJoinedUpFinalCta;
      'page-sections.joined-up-framework': PageSectionsJoinedUpFramework;
      'page-sections.joined-up-guide': PageSectionsJoinedUpGuide;
      'page-sections.joined-up-hero': PageSectionsJoinedUpHero;
      'page-sections.joined-up-manifesto': PageSectionsJoinedUpManifesto;
      'page-sections.joined-up-model-premium': PageSectionsJoinedUpModelPremium;
      'page-sections.joined-up-outcomes': PageSectionsJoinedUpOutcomes;
      'page-sections.joined-up-process': PageSectionsJoinedUpProcess;
      'page-sections.joined-up-promise': PageSectionsJoinedUpPromise;
      'page-sections.joined-up-scenario': PageSectionsJoinedUpScenario;
      'page-sections.legal-contact-panel': PageSectionsLegalContactPanel;
      'page-sections.life-stage-strip': PageSectionsLifeStageStrip;
      'page-sections.life-wealth-age-map': PageSectionsLifeWealthAgeMap;
      'page-sections.life-wealth-anchor-nav': PageSectionsLifeWealthAnchorNav;
      'page-sections.life-wealth-event-stack': PageSectionsLifeWealthEventStack;
      'page-sections.life-wealth-financial-age': PageSectionsLifeWealthFinancialAge;
      'page-sections.life-wealth-hub-events': PageSectionsLifeWealthHubEvents;
      'page-sections.life-wealth-planning-needs': PageSectionsLifeWealthPlanningNeeds;
      'page-sections.link-panel': PageSectionsLinkPanel;
      'page-sections.logo-wall': PageSectionsLogoWall;
      'page-sections.media-and-awards': PageSectionsMediaAndAwards;
      'page-sections.newsletter': PageSectionsNewsletter;
      'page-sections.newsletter-contact-section': PageSectionsNewsletterContactSection;
      'page-sections.newsletter-hero': PageSectionsNewsletterHero;
      'page-sections.newsletter-intro-rows': PageSectionsNewsletterIntroRows;
      'page-sections.newsletter-subscribe-band': PageSectionsNewsletterSubscribeBand;
      'page-sections.next-steps-section': PageSectionsNextStepsSection;
      'page-sections.notice-strip': PageSectionsNoticeStrip;
      'page-sections.numbered-list': PageSectionsNumberedList;
      'page-sections.offices-contact-band': PageSectionsOfficesContactBand;
      'page-sections.offices-growth': PageSectionsOfficesGrowth;
      'page-sections.offices-hero': PageSectionsOfficesHero;
      'page-sections.offices-hours': PageSectionsOfficesHours;
      'page-sections.offices-network': PageSectionsOfficesNetwork;
      'page-sections.offices-remote': PageSectionsOfficesRemote;
      'page-sections.offices-route': PageSectionsOfficesRoute;
      'page-sections.our-approach': PageSectionsOurApproach;
      'page-sections.partnership-delivery-flow': PageSectionsPartnershipDeliveryFlow;
      'page-sections.partnership-ma-mid-section': PageSectionsPartnershipMaMidSection;
      'page-sections.partnership-programme-showcase': PageSectionsPartnershipProgrammeShowcase;
      'page-sections.partnership-programme-switcher': PageSectionsPartnershipProgrammeSwitcher;
      'page-sections.partnership-referral-standard': PageSectionsPartnershipReferralStandard;
      'page-sections.partnership-visual-process': PageSectionsPartnershipVisualProcess;
      'page-sections.partnership-why-section': PageSectionsPartnershipWhySection;
      'page-sections.partnership-world-panels': PageSectionsPartnershipWorldPanels;
      'page-sections.philosophy-behaviour-model': PageSectionsPhilosophyBehaviourModel;
      'page-sections.philosophy-bias-lens': PageSectionsPhilosophyBiasLens;
      'page-sections.philosophy-disclaimer': PageSectionsPhilosophyDisclaimer;
      'page-sections.philosophy-final-cta': PageSectionsPhilosophyFinalCta;
      'page-sections.philosophy-framework': PageSectionsPhilosophyFramework;
      'page-sections.philosophy-guide': PageSectionsPhilosophyGuide;
      'page-sections.philosophy-hero': PageSectionsPhilosophyHero;
      'page-sections.philosophy-manifesto': PageSectionsPhilosophyManifesto;
      'page-sections.philosophy-money-mind': PageSectionsPhilosophyMoneyMind;
      'page-sections.philosophy-outcomes': PageSectionsPhilosophyOutcomes;
      'page-sections.philosophy-process': PageSectionsPhilosophyProcess;
      'page-sections.philosophy-promise': PageSectionsPhilosophyPromise;
      'page-sections.philosophy-scenario': PageSectionsPhilosophyScenario;
      'page-sections.pill-strip': PageSectionsPillStrip;
      'page-sections.portrait-hero': PageSectionsPortraitHero;
      'page-sections.private-client-audiences': PageSectionsPrivateClientAudiences;
      'page-sections.private-client-contact': PageSectionsPrivateClientContact;
      'page-sections.private-client-difference': PageSectionsPrivateClientDifference;
      'page-sections.private-client-disclaimer': PageSectionsPrivateClientDisclaimer;
      'page-sections.private-client-hero': PageSectionsPrivateClientHero;
      'page-sections.private-client-intro': PageSectionsPrivateClientIntro;
      'page-sections.private-client-map': PageSectionsPrivateClientMap;
      'page-sections.private-client-office': PageSectionsPrivateClientOffice;
      'page-sections.private-client-philosophy': PageSectionsPrivateClientPhilosophy;
      'page-sections.private-client-process': PageSectionsPrivateClientProcess;
      'page-sections.private-client-scenario': PageSectionsPrivateClientScenario;
      'page-sections.private-client-strip': PageSectionsPrivateClientStrip;
      'page-sections.process-steps': PageSectionsProcessSteps;
      'page-sections.pull-quote': PageSectionsPullQuote;
      'page-sections.related-guides-block': PageSectionsRelatedGuidesBlock;
      'page-sections.related-insights-block': PageSectionsRelatedInsightsBlock;
      'page-sections.related-insights-section': PageSectionsRelatedInsightsSection;
      'page-sections.request-guide-form': PageSectionsRequestGuideForm;
      'page-sections.reviews-and-media': PageSectionsReviewsAndMedia;
      'page-sections.rich-text-block': PageSectionsRichTextBlock;
      'page-sections.scenarios-section': PageSectionsScenariosSection;
      'page-sections.service-depth': PageSectionsServiceDepth;
      'page-sections.service-overview': PageSectionsServiceOverview;
      'page-sections.service-page-hero': PageSectionsServicePageHero;
      'page-sections.services-client-routes': PageSectionsServicesClientRoutes;
      'page-sections.services-connection': PageSectionsServicesConnection;
      'page-sections.services-hub-hero': PageSectionsServicesHubHero;
      'page-sections.services-section': PageSectionsServicesSection;
      'page-sections.services-showcase-intro': PageSectionsServicesShowcaseIntro;
      'page-sections.sf-home-approach': PageSectionsSfHomeApproach;
      'page-sections.sf-home-audiences': PageSectionsSfHomeAudiences;
      'page-sections.sf-home-contact': PageSectionsSfHomeContact;
      'page-sections.sf-home-credentials': PageSectionsSfHomeCredentials;
      'page-sections.sf-home-hero': PageSectionsSfHomeHero;
      'page-sections.sf-home-protection': PageSectionsSfHomeProtection;
      'page-sections.sf-home-routes': PageSectionsSfHomeRoutes;
      'page-sections.signal-panel': PageSectionsSignalPanel;
      'page-sections.simple-overview': PageSectionsSimpleOverview;
      'page-sections.social-cards-grid': PageSectionsSocialCardsGrid;
      'page-sections.split-hero': PageSectionsSplitHero;
      'page-sections.wf-glossary-deal': PageSectionsWfGlossaryDeal;
      'page-sections.wf-glossary-directory': PageSectionsWfGlossaryDirectory;
      'page-sections.wf-glossary-hero': PageSectionsWfGlossaryHero;
      'page-sections.wf-home-authority': PageSectionsWfHomeAuthority;
      'page-sections.wf-home-contact': PageSectionsWfHomeContact;
      'page-sections.wf-home-deal-lens': PageSectionsWfHomeDealLens;
      'page-sections.wf-home-faq': PageSectionsWfHomeFaq;
      'page-sections.wf-home-hero': PageSectionsWfHomeHero;
      'page-sections.wf-home-insights': PageSectionsWfHomeInsights;
      'page-sections.wf-home-newsletter': PageSectionsWfHomeNewsletter;
      'page-sections.wf-home-process': PageSectionsWfHomeProcess;
      'page-sections.wf-home-routes': PageSectionsWfHomeRoutes;
      'page-sections.wf-home-why': PageSectionsWfHomeWhy;
      'page-sections.who-we-help-section': PageSectionsWhoWeHelpSection;
      'page-sections.why-choose-us': PageSectionsWhyChooseUs;
      'shared.action-link': SharedActionLink;
      'shared.award-item': SharedAwardItem;
      'shared.button': SharedButton;
      'shared.contact-method': SharedContactMethod;
      'shared.footer-warning': SharedFooterWarning;
      'shared.list-item': SharedListItem;
      'shared.seo': SharedSeo;
      'shared.site-footer': SharedSiteFooter;
      'ui.about-hub-ada-node': UiAboutHubAdaNode;
      'ui.about-hub-anchor-link': UiAboutHubAnchorLink;
      'ui.about-hub-editorial-line': UiAboutHubEditorialLine;
      'ui.about-hub-experience-row': UiAboutHubExperienceRow;
      'ui.about-hub-future-step': UiAboutHubFutureStep;
      'ui.about-hub-ind-row': UiAboutHubIndRow;
      'ui.about-hub-map-node': UiAboutHubMapNode;
      'ui.about-hub-proof-card': UiAboutHubProofCard;
      'ui.about-hub-text-line': UiAboutHubTextLine;
      'ui.ada-calm-nav-link': UiAdaCalmNavLink;
      'ui.ada-choice-card': UiAdaChoiceCard;
      'ui.ada-faq-item': UiAdaFaqItem;
      'ui.ada-guide-cta': UiAdaGuideCta;
      'ui.ada-journey-step': UiAdaJourneyStep;
      'ui.ada-not-item': UiAdaNotItem;
      'ui.ada-summary-card': UiAdaSummaryCard;
      'ui.ada-support-card': UiAdaSupportCard;
      'ui.advice-area-card': UiAdviceAreaCard;
      'ui.age-route-row': UiAgeRouteRow;
      'ui.all-services-page': UiAllServicesPage;
      'ui.anchor-link': UiAnchorLink;
      'ui.brands-brand-card': UiBrandsBrandCard;
      'ui.brands-standard-card': UiBrandsStandardCard;
      'ui.challenge-card': UiChallengeCard;
      'ui.check-card': UiCheckCard;
      'ui.complaint-detail': UiComplaintDetail;
      'ui.consideration-item': UiConsiderationItem;
      'ui.contact-detail-row': UiContactDetailRow;
      'ui.contact-route-card': UiContactRouteCard;
      'ui.delivery-step': UiDeliveryStep;
      'ui.depth-row': UiDepthRow;
      'ui.diff-column': UiDiffColumn;
      'ui.faq-item': UiFaqItem;
      'ui.financial-age-step': UiFinancialAgeStep;
      'ui.form-option': UiFormOption;
      'ui.glance-item': UiGlanceItem;
      'ui.global-detail-selector': UiGlobalDetailSelector;
      'ui.grid-card': UiGridCard;
      'ui.guide-tile': UiGuideTile;
      'ui.hero-credential': UiHeroCredential;
      'ui.hmo-faq-category': UiHmoFaqCategory;
      'ui.hmo-faq-check-item': UiHmoFaqCheckItem;
      'ui.hub-event-line': UiHubEventLine;
      'ui.info-line': UiInfoLine;
      'ui.joined-up-ba-column': UiJoinedUpBaColumn;
      'ui.joined-up-framework-card': UiJoinedUpFrameworkCard;
      'ui.joined-up-guide-cta': UiJoinedUpGuideCta;
      'ui.joined-up-hero-map-item': UiJoinedUpHeroMapItem;
      'ui.joined-up-lens-row': UiJoinedUpLensRow;
      'ui.joined-up-model-card': UiJoinedUpModelCard;
      'ui.joined-up-model-node': UiJoinedUpModelNode;
      'ui.joined-up-outcome-box': UiJoinedUpOutcomeBox;
      'ui.joined-up-process-step': UiJoinedUpProcessStep;
      'ui.joined-up-promise-item': UiJoinedUpPromiseItem;
      'ui.joined-up-scenario-step': UiJoinedUpScenarioStep;
      'ui.legal-contact-item': UiLegalContactItem;
      'ui.life-event-row': UiLifeEventRow;
      'ui.life-stage-strip-item': UiLifeStageStripItem;
      'ui.list-row': UiListRow;
      'ui.logo-tile': UiLogoTile;
      'ui.map-node': UiMapNode;
      'ui.narrative-row': UiNarrativeRow;
      'ui.newsletter-consent': UiNewsletterConsent;
      'ui.numbered-intro-row': UiNumberedIntroRow;
      'ui.numbered-list-item': UiNumberedListItem;
      'ui.office-flip-card': UiOfficeFlipCard;
      'ui.office-row': UiOfficeRow;
      'ui.offices-detail-box': UiOfficesDetailBox;
      'ui.offices-growth-row': UiOfficesGrowthRow;
      'ui.offices-hero-fact': UiOfficesHeroFact;
      'ui.offices-hours-row': UiOfficesHoursRow;
      'ui.offices-office-card': UiOfficesOfficeCard;
      'ui.offices-remote-item': UiOfficesRemoteItem;
      'ui.offices-route-card': UiOfficesRouteCard;
      'ui.panel-link': UiPanelLink;
      'ui.paragraph': UiParagraph;
      'ui.philosophy-framework-card': UiPhilosophyFrameworkCard;
      'ui.philosophy-guide-cta': UiPhilosophyGuideCta;
      'ui.philosophy-hero-map-item': UiPhilosophyHeroMapItem;
      'ui.philosophy-lens-row': UiPhilosophyLensRow;
      'ui.philosophy-mind-column': UiPhilosophyMindColumn;
      'ui.philosophy-model-node': UiPhilosophyModelNode;
      'ui.philosophy-outcome-box': UiPhilosophyOutcomeBox;
      'ui.philosophy-process-step': UiPhilosophyProcessStep;
      'ui.philosophy-promise-item': UiPhilosophyPromiseItem;
      'ui.philosophy-scenario-step': UiPhilosophyScenarioStep;
      'ui.philosophy-text-line': UiPhilosophyTextLine;
      'ui.pill-item': UiPillItem;
      'ui.planning-need-line': UiPlanningNeedLine;
      'ui.portal-list-item': UiPortalListItem;
      'ui.portal-route-card': UiPortalRouteCard;
      'ui.private-process-step': UiPrivateProcessStep;
      'ui.process-step': UiProcessStep;
      'ui.programme-row': UiProgrammeRow;
      'ui.promise-tile': UiPromiseTile;
      'ui.quick-link-card': UiQuickLinkCard;
      'ui.referral-route-row': UiReferralRouteRow;
      'ui.scenario-flow-step': UiScenarioFlowStep;
      'ui.scenario-item': UiScenarioItem;
      'ui.sf-approach-item': UiSfApproachItem;
      'ui.sf-audience-card': UiSfAudienceCard;
      'ui.sf-contact-detail': UiSfContactDetail;
      'ui.sf-credential-item': UiSfCredentialItem;
      'ui.sf-form-option': UiSfFormOption;
      'ui.sf-route-card': UiSfRouteCard;
      'ui.signal-item': UiSignalItem;
      'ui.social-card': UiSocialCard;
      'ui.step-item': UiStepItem;
      'ui.strip-item': UiStripItem;
      'ui.switcher-link': UiSwitcherLink;
      'ui.table-block': UiTableBlock;
      'ui.table-row': UiTableRow;
      'ui.tag': UiTag;
      'ui.text-line': UiTextLine;
      'ui.toc-item': UiTocItem;
      'ui.visual-process-step': UiVisualProcessStep;
      'ui.wf-award-card': UiWfAwardCard;
      'ui.wf-bullet-point': UiWfBulletPoint;
      'ui.wf-faq-item': UiWfFaqItem;
      'ui.wf-glossary-article': UiWfGlossaryArticle;
      'ui.wf-insight-card': UiWfInsightCard;
      'ui.wf-lens-point': UiWfLensPoint;
      'ui.wf-process-stage': UiWfProcessStage;
      'ui.wf-proof-chip': UiWfProofChip;
      'ui.wf-route-card': UiWfRouteCard;
      'ui.wf-why-row': UiWfWhyRow;
      'ui.why-box': UiWhyBox;
      'ui.world-panel': UiWorldPanel;
    }
  }
}
