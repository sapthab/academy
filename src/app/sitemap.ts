import type { MetadataRoute } from "next";

const base = "https://agsacademy.in";

export default function sitemap(): MetadataRoute.Sitemap {
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
  return routes.map((route) => ({
    url: `${base}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" || route === "/blog" || route === "/events" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route === "/courses" || route === "/apply" ? 0.9 : 0.7,
  }));
}
