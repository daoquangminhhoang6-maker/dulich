/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || "https://vietnamwellnessretreat.com.vn",
  generateRobotsTxt: true,
  exclude: ["/api/*"],
  alternateRefs: [
    {
      href: process.env.SITE_URL || "https://vietnamwellnessretreat.com.vn",
      hreflang: "vi",
    },
  ],
};
