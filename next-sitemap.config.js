/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.imaginationg.studio',
  generateRobotsTxt: false, // We have custom robots.txt
  changefreq: 'weekly',
  priority: 0.7,
  sitemapSize: 5000,
  exclude: ['/api/*'],
  generateIndexSitemap: false,
  // Custom transformation for better AI crawler optimization
  transform: async (config, path) => {
    // Higher priority for answer pages and core content
    if (path.includes('/answers/')) {
      return {
        loc: path,
        changefreq: 'weekly',
        priority: 0.9,
        lastmod: new Date().toISOString(),
      }
    }
    
    // High priority for weapons/services
    if (path.includes('/weapons/') || path.includes('/services/')) {
      return {
        loc: path,
        changefreq: 'monthly',
        priority: 0.8,
        lastmod: new Date().toISOString(),
      }
    }
    
    // Standard priority for other pages
    return {
      loc: path,
      changefreq: config.changefreq,
      priority: config.priority,
      lastmod: new Date().toISOString(),
    }
  },
}