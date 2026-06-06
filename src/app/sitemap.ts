import type { MetadataRoute } from "next";
import { pageMeta, site } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const corePages = Object.values(pageMeta).map((page) => ({
    url: `${site.url}${page.path}`,
    lastModified: new Date(),
    changeFrequency: page.path === "/" ? ("weekly" as const) : ("monthly" as const),
    priority: page.path === "/" ? 1 : page.path.includes("privacy") || page.path.includes("terms") ? 0.2 : 0.8
  }));

  return corePages;
}
