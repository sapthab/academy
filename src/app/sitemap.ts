import type { MetadataRoute } from "next";
import { getAllBlogPosts } from "@/lib/blogger";

const base = "https://agsacademy.in";

export const dynamic = "force-static";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const routes = [
    "",
    "/about",
    "/courses",
    "/internship",
    "/projects",
    "/success-stories",
    "/blog",
    "/events",
    "/pricing",
    "/faqs",
    "/contact",
    "/apply",
  ];

  const staticEntries: MetadataRoute.Sitemap = routes.map((route) => ({
    url: `${base}${route}`,
    lastModified: new Date(),
    changeFrequency:
      route === "" || route === "/blog" || route === "/events" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route === "/courses" || route === "/apply" ? 0.9 : 0.7,
  }));

  const posts = await getAllBlogPosts();
  const blogEntries: MetadataRoute.Sitemap = posts.map((p) => ({
    url: `${base}/blog/${p.slug}`,
    lastModified: new Date(p.updated || p.published),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticEntries, ...blogEntries];
}
