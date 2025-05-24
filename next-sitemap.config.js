/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://example.com', // Replace with your actual site URL
  generateRobotsTxt: true, // Creates a robots.txt if not present in public/
  // optional
  // robotsTxtOptions: {
  //   additionalSitemaps: [
  //     'https://example.com/my-custom-sitemap-1.xml',
  //     'https://example.com/my-custom-sitemap-2.xml',
  //   ],
  // },
};
