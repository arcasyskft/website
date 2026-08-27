import type { MetadataRoute } from "next";
import { site } from "@/content/site";

const routes = [
  "/",
  "/services",
  "/compute",
  "/endpoints",
  "/compliance",
  "/resources",
  "/about",
  "/contact",
  "/legal/privacy",
  "/legal/cookies",
  "/legal/terms",
  "/legal/aup",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((path) => ({
    url: `${site.url}${path}`,
    lastModified: new Date(),
    changeFrequency: path === "/" || path === "/contact" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : path === "/contact" ? 0.8 : 0.6,
  }));
}
