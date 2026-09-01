import type { Metadata } from "next";
import { site } from "@/content/site";

export function routeMeta(
  path: string,
  title: string,
  description: string,
): Metadata {
  const pathname = path.startsWith("/") ? path : `/${path}`;
  const url = pathname === "/" ? site.url : `${site.url}${pathname}`;

  return {
    title,
    description,
    alternates: {
      canonical: pathname,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: site.name,
      locale: "en",
      type: "website",
    },
  };
}
