import { defineConfig } from 'vitepress';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'saferinsulin.org',
  description:
    "Bolton Critical Care 'Control of Glucose in Critical Care' Guideline",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Guidelines', link: '/' },
      { text: 'Calculator', link: 'https://saferinsulin.org' },
    ],

    sidebar: [
      {
        text: 'Glucose Control',
        link: '/',
        items: [
          { text: 'Key Principles', link: '/key-principles' },
          { text: 'Admissions', link: '/admissions' },
          { text: 'Hyperglycaemia', link: '/hyperglycaemia' },
          { text: 'Hypoglycaemia', link: '/hypoglycaemia' },
          { text: 'Basal Insulin', link: '/basal' },
          { text: 'Drugs', link: '/drugs' },
          { text: 'COVID-19', link: '/covid' },
        ],
      },
    ],

    socialLinks: [],

    footer: {
      message: 'MIT licensed',
      copyright: 'Copyright © 2023',
    },
    lastUpdated: {
      text: 'Updated at',
      formatOptions: {
        dateStyle: 'full',
        timeStyle: 'medium',
      },
      externalLinkIcon: true,
    },
  },
});
