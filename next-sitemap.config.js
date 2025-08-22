/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://daviddamon.dev',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  exclude: ['/api/*'],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
  },
}