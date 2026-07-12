import type { MetadataRoute } from "next";
import { SITE } from "@/lib/utils";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/services",
    "/how-it-works",
    "/for-clients",
    "/for-applicants",
    "/for-contractors",
    "/about",
    "/contact",
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
