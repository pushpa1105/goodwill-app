import { getBlogs } from "@/actions/get-blogs";
import { MetadataRoute } from "next";

const siteUrl = process.env.NEXT_PUBLIC_APP_URL!;
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const links = [
    {
      url: siteUrl,
      lastModified: new Date(),
    },
    {
      url: `${siteUrl}/about-us`,
      lastModified: new Date(),
    },
    {
      url: `${siteUrl}/account-opening`,
      lastModified: new Date(),
    },
    {
      url: `${siteUrl}/blogs`,
      lastModified: new Date(),
    },
    {
      url: `${siteUrl}/courses`,
      lastModified: new Date(),
    },
    {
      url: `${siteUrl}/privacy-policy`,
      lastModified: new Date(),
    },
    {
      url: `${siteUrl}/terms`,
      lastModified: new Date(),
    },

    {
      url: `${siteUrl}/products`,
      lastModified: new Date(),
    },
    {
      url: `${siteUrl}/webinars`,
      lastModified: new Date(),
    },
  ];

  const blogs = await getBlogs({});
  blogs.forEach(blog => {
    links.push({
      url: `${siteUrl}/blogs/${blog.slug}`,
      lastModified: blog.updatedAt
    });
  })
  return links;
}
