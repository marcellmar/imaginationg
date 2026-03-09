/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://gpi.studio',
  generateRobotsTxt: false, // We maintain robots.txt manually (AI crawler rules)
  changefreq: 'weekly',
  priority: 0.7,
  sitemapSize: 5000,
  exclude: ['/api/*', '/admin/*'],
  generateIndexSitemap: false,
  transform: async (config, path) => {
    const highPriority = ['/', '/diagnostic', '/insights', '/gpi-framework', '/companies'];
    const isHighPriority = highPriority.includes(path);
    const isArticle = path.startsWith('/insights/') && path !== '/insights';
    const isCompany = path.startsWith('/companies/') && path !== '/companies';
    const isFramework = path.startsWith('/gpi-framework/') && path !== '/gpi-framework';

    return {
      loc: path,
      changefreq: isHighPriority ? 'daily' : 'weekly',
      priority: isHighPriority ? 1.0 : (isArticle || isCompany) ? 0.8 : isFramework ? 0.8 : 0.7,
      lastmod: new Date().toISOString(),
    };
  },
}
