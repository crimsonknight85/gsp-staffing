import type { MetadataRoute } from "next";
import { SITE } from "@/lib/utils";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/services",
    "/for-clients",
    "/for-applicants",
    "/jobs",
    "/about",
    "/contact",
    "/login",
    "/privacy",
    "/terms",
    "/cookies",
  ];

  const now = new Date();

  return routes.map((route) => ({
    url: `${SITE.url}${route}`,
    lastModified: now,
    changeFrequency: route === "" ? ("weekly" as const) : ("monthly" as const),
    priority: route === "" ? 1 : route === "/contact" ? 0.9 : 0.7,
  }));
}
