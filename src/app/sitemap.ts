import type { MetadataRoute } from "next";
import { getAllBlogPosts } from "@/lib/blogger";
import { SITE_URL } from "@/lib/seo";

export const dynamic = "force-static";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const routes: { path: string; freq: MetadataRoute.Sitemap[number]["changeFrequency"]; pr: number }[] = [
    { path: "", freq: "weekly", pr: 1 },
    { path: "/courses", freq: "monthly", pr: 0.9 },
    { path: "/ai-course-in-pondicherry", freq: "monthly", pr: 0.9 },
    { path: "/ai-course-with-placement-in-pondicherry", freq: "monthly", pr: 0.9 },
    { path: "/data-science-course-in-pondicherry", freq: "monthly", pr: 0.85 },
    { path: "/python-course-in-pondicherry", freq: "monthly", pr: 0.85 },
    { path: "/apply", freq: "monthly", pr: 0.9 },
    { path: "/internship", freq: "monthly", pr: 0.8 },
    { path: "/projects", freq: "monthly", pr: 0.7 },
    { path: "/success-stories", freq: "monthly", pr: 0.7 },
    { path: "/about", freq: "monthly", pr: 0.7 },
    { path: "/blog", freq: "weekly", pr: 0.8 },
    { path: "/events", freq: "weekly", pr: 0.7 },
    { path: "/faqs", freq: "monthly", pr: 0.6 },
    { path: "/contact", freq: "monthly", pr: 0.6 },
    { path: "/privacy", freq: "yearly", pr: 0.3 },
    { path: "/terms", freq: "yearly", pr: 0.3 },
    { path: "/refund-policy", freq: "yearly", pr: 0.3 },
  ];

  const staticEntries: MetadataRoute.Sitemap = routes.map((r) => ({
    url: `${SITE_URL}${r.path}/`.replace(/\/+$/, "/"),
    lastModified: new Date(),
    changeFrequency: r.freq,
    priority: r.pr,
  }));

  const posts = await getAllBlogPosts();
  const blogEntries: MetadataRoute.Sitemap = posts.map((p) => ({
    url: `${SITE_URL}/blog/${p.slug}/`,
    lastModified: new Date(p.updated || p.published),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticEntries, ...blogEntries];
}
