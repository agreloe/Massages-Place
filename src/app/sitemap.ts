import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {

  return [
    {
      url: 'https://masajescompostela.com/',
      lastModified: new Date(),
    },
    {
      url: `https://masajescompostela.com/en`,
      lastModified: new Date(),
    },
    {
      url: `https://masajescompostela.com/de`,
      lastModified: new Date(),
    },
    {
      url: `https://masajescompostela.com/fr`,
      lastModified: new Date(),
    },
  ];

}