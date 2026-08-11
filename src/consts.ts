/**
 * Site metadata that is used across the site.
 *
 * A few of these are not used yet, and are subject to change, example of this is Author.
 */
export const SITE_METADATA = {
  theme: 'dark', // Options: system, light, dark
  siteUrl: 'https://gatheluck.net/',
  siteRepo: 'https://github.com/gatheluck/homepage',
  robots: 'index, follow', // Options: index, noindex, follow, nofollow

  // These are not supported yet
  analytics: {
    fathom: {
      site: '', // Add your site id here
      src: 'https://cdn.usefathom.com/fathom.js',
    },
    googleAnalyticsId: null, // Add your Google Analytics id here
    metricalApp: null, // Add your Metrical app here
    plausible: {
      domain: '', // Add your domain here
      src: 'https://plausible.io/js/plausible.js',
    },
    simpleAnalytics: false, // Activate Simple Analytics
    umami: {
      site: '', // Add your site id here
      dataId: '', // Add your data id here
      host: '/umami.js', // Add your host here
    },
    // amplitudeApiKey: null, // Add your Amplitude Api Key here, not yet implemented
    matomo: {
      id: '', // Add your Matomo id here
      url: '', // Add your Matomo url here
    },
    minimalAnalyticsId: null, // Add your Minimal Analytics id here
  },
  comments: {
    // Visit https://giscus.app/ to get your configuration
    // Enable discussions in your repository settings and install the Giscus app
    //
    // Disabled until this site has its own giscus configuration. The values below
    // were still the ones inherited from the starter template, which pointed at a
    // third-party repository, so every comment posted here would have been filed
    // as a discussion on someone else's project. Set `provider` back to 'giscus'
    // once `repo`, `repositoryId` and `categoryId` describe gatheluck/homepage.
    provider: null, // Set to 'giscus' to enable comments or null to disable
    giscusConfig: {
      repo: 'gatheluck/homepage', // Your GitHub repository (e.g., 'username/repo')
      repositoryId: '', // Your repository ID from giscus.app
      category: 'General', // Discussion category (e.g., 'General')
      categoryId: '', // Category ID from giscus.app
      mapping: 'title', // How to map pages to discussions: 'pathname', 'url', 'title', etc.
      reactionsEnabled: '1', // Enable reactions: '1' or '0'
      emitMetadata: '0', // Emit discussion metadata: '1' or '0'
      inputPosition: 'top', // Comment box position: 'top' or 'bottom'
      theme: 'preferred_color_scheme', // Theme for light mode: 'light', 'dark', 'dark_dimmed', 'dark_high_contrast', 'transparent_dark', 'preferred_color_scheme', or custom CSS URL
      darkTheme: 'dark', // Theme for dark mode: same options as theme
      lang: 'en', // Language code
      loading: 'lazy', // Loading mode: 'lazy' or 'eager'
    },
  },
  search: {
    provider: 'custom', // Custom Solid.js search implementation
    kbarConfig: {
      searchDocumentsPath: 'search.json', // path to load documents to search
    },
  },
}

/**
 * Default posts per page for pagination.
 */
export const ITEMS_PER_PAGE = 5

/**
 * Name to emphasise inside author lists on the publications page.
 */
export const AUTHOR_NAME = 'Yoshihiro Fukuhara'

/**
 * Human readable labels for the link types on a publication entry.
 */
export const PUBLICATION_LINK_LABELS: Record<string, string> = {
  arxiv: 'arXiv',
  pdf: 'PDF',
  project: 'Project page',
  github: 'Code',
  doi: 'DOI',
  // Released artefacts, kept apart from `github` because a checkpoint or a
  // corpus is not the code that produced it, and a reader looking for one is
  // usually not looking for the other.
  model: 'Model',
  dataset: 'Dataset',
  video: 'Video',
}

/**
 * Reserve the trailing teaser column on each index.
 *
 * Entries without an image get a generated placeholder, so a page can be turned
 * on before every entry is illustrated. Turn one off if a list would be all
 * placeholders and the column is not earning its width.
 */
export const SHOW_TEASERS = {
  talks: true,
  publications: true,
  service: true,
  blog: true,
} as const

/**
 * Navigation items.
 If title is not found in the translation file, it will be used as is.
 example: if title is "nav.home", and translation file does not have "nav.home", it will be displayed as "nav.home"

 You should add translations for these in src/i18n/ui.ts or use as is.
 */
export const NAVIGATION = [
  { href: '/', title: 'nav.home' },
  { href: '/publications', title: 'nav.publications' },
  { href: '/journey', title: 'nav.journey' },
  { href: '/talks', title: 'nav.talks' },
  { href: '/service', title: 'nav.service' },
  { href: '/blog', title: 'nav.blog' },
  { href: '/about', title: 'nav.about' },
] as const

export const POST_METADATA = {
  defaultLayout: 'column', // Default layout for blog posts, options: simple and column
  showFullWidthCover: false, // Show full width cover image in blog post
  showCover: true, // Show cover image in blog post
  showTags: true, // Show tags in blog post, TODO: Add support for hiding tags
  showDate: true, // Show date in blog post, TODO: Add support for hiding date
  showSummary: true, // Show summary in blog post
  showAuthors: true, // Show authors in blog post, TODO: Add support for hiding authors
  showRelatedPosts: true, // Show related posts in blog post, TODO: Add support for hiding related posts
  showTableOfContents: true, // Show table of contents in blog post
  showShareButtons: 'both', // Show share buttons in blog post, options: top, bottom, both, none
  showComments: true, // Show comments section in blog post
}
