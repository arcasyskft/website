import type { Metadata } from "next";
import { LegalDocument } from "@/components/LegalDocument";
import { cookiePolicy, legalMeta } from "@/content/legal";
import { routeMeta } from "@/lib/seo";

export const metadata: Metadata = routeMeta(
  "/legal/cookies",
  cookiePolicy.title,
  "Cookie policy for the ArcaSys Kft. website.",
);

export default function CookiesPage() {
  return (
    <LegalDocument
      title={cookiePolicy.title}
      titleHu={cookiePolicy.titleHu}
      lastUpdated={legalMeta.lastUpdated}
      sections={cookiePolicy.sections}
    />
  );
}
