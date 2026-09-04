/** @type {import('next-sitemap').IConfig} */
module.exports = {
  // TODO: cập nhật khi có domain chính thức
  siteUrl: process.env.SITE_URL || "https://vietnamwellnessretreat.example",
  generateRobotsTxt: true,
  exclude: ["/api/*"],
  alternateRefs: [
    {
      href: process.env.SITE_URL || "https://vietnamwellnessretreat.example",
      hreflang: "vi",
    },
  ],
};
