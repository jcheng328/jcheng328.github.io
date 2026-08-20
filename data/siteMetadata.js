/** @type {import("pliny/config").PlinyConfig } */
const siteMetadata = {
  title: 'Jiahui Cheng',
  author: 'Jiahui Cheng',
  headerTitle: 'Jiahui Cheng',
  description:
    'Notes on machine learning, high-dimensional statistics, and things I got wrong.',
  language: 'en-us',
  theme: 'system', // system, dark or light
  siteUrl: 'https://jcheng328.github.io',
  siteRepo: 'https://github.com/jcheng328/jcheng328.github.io',
  siteLogo: `${process.env.BASE_PATH || ''}/static/images/logo.png`,
  socialBanner: `${process.env.BASE_PATH || ''}/static/images/twitter-card.png`,
  // Leave a social field empty ('') to hide its icon in the footer.
  // NOTE: email is intentionally blank -- your jemdoc site never published one.
  // Set it if you want a mail icon in the footer.
  email: '',
  github: 'https://github.com/jcheng328',
  x: '',
  facebook: '',
  youtube: '',
  linkedin: '',
  threads: '',
  instagram: '',
  medium: '',
  bluesky: '',
  mastodon: '',
  locale: 'en-US',
  // set to true if you want a navbar fixed to the top
  stickyNav: false,
  analytics: {
    // NOTE: your old site used Google Analytics UA-31107207-1. Universal Analytics
    // was shut down in 2023, so that property no longer collects anything.
    // If you want analytics, create a GA4 property and uncomment below, or use
    // one of the privacy-friendly providers. Remember to add the domain to the
    // content security policy in `next.config.js`.
    // googleAnalytics: {
    //   googleAnalyticsId: '', // e.g. G-XXXXXXX
    // },
  },
  newsletter: {
    // supports mailchimp, buttondown, convertkit, klaviyo, revue, emailoctopus, beehive
    provider: '',
  },
  comments: {
    // Set provider to 'giscus' and fill the env vars if you want comments on posts.
    provider: '',
    giscusConfig: {
      repo: process.env.NEXT_PUBLIC_GISCUS_REPO,
      repositoryId: process.env.NEXT_PUBLIC_GISCUS_REPOSITORY_ID,
      category: process.env.NEXT_PUBLIC_GISCUS_CATEGORY,
      categoryId: process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID,
      mapping: 'pathname',
      reactions: '1',
      metadata: '0',
      theme: 'light',
      darkTheme: 'transparent_dark',
      themeURL: '',
      lang: 'en',
    },
  },
  search: {
    provider: 'kbar', // kbar or algolia
    kbarConfig: {
      searchDocumentsPath: `${process.env.BASE_PATH || ''}/search.json`,
    },
  },
}

module.exports = siteMetadata
