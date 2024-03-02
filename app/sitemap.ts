import { getMetaData } from "@/lib/getMetaData";
import { MetadataRoute } from "next";

export default function sitemap() {
  const baseUrl = "https://www.cccmii.org/";

  // const dynamicpages = await getMetaData();

  // const DynamicUr = dynamicpages.map((Article) => {
  //   return {
  //     url: `${baseUrl}/OurNews/${Article.title}`,
  //     lastModified: new Date(),
  //   };
  // });
  return [
    {
      url: `${baseUrl}`,
      lastModified: new Date(),
      changeFrequency: "daily",
    },
    {
      url: `${baseUrl}/Blog`,
      lastModified: new Date(),
      changeFrequency: "daily",
    },
    {
      url: `${baseUrl}/OurProfile`,
      lastModified: new Date(),
      changeFrequency: "daily",
    },
    {
      url: `${baseUrl}/OurContacts`,
      lastModified: new Date(),
      changeFrequency: "daily",
    },
    {
      url: `${baseUrl}/OurCourses`,
      lastModified: new Date(),
      changeFrequency: "daily",
    },
    {
      url: `${baseUrl}/OurEvents`,
      lastModified: new Date(),
      changeFrequency: "daily",
    },
    {
      url: `${baseUrl}/OurPolicies`,
      lastModified: new Date(),
      changeFrequency: "daily",
    },
    {
      url: `${baseUrl}/OurResources`,
      lastModified: new Date(),
      changeFrequency: "daily",
    },

    // ...ArticleUrls,
  ];
}
