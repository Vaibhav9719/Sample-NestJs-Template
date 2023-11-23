module.exports = {
  lang: 'en-US',
  title: 'NestJS Base Project Documentation 🎉',
  description: 'An NestJS Base Project wrote in typescript',
  base: process.env.DEPLOY_ENV === 'gh-pages' ? '/nestjs-base-project/' : '/',
  themeConfig: {
    sidebar: [
      ['/', 'Introduction'],
      '/docs/development',
      '/docs/architecture',
      '/docs/naming-cheatsheet',
      '/docs/linting',
    ],
  },
};
