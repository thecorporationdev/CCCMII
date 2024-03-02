export default function robots() {
  const BaseUrl = "https://www.cccmii.org";

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/OurPolicies",
    },
    sitemap: `${BaseUrl}/sitemap.xml`,
  };
}
