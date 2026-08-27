import type { Metadata } from "next";
import { LegalDocument } from "@/components/LegalDocument";
import { cookiePolicy, legalMeta } from "@/content/legal";

export const metadata: Metadata = {
  title: cookiePolicy.title,
  description: "Cookie policy for the ArcaSys Kft. website.",
};

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
