import type { Metadata } from "next";
import { LegalDocument } from "@/components/LegalDocument";
import { legalMeta, termsOfService } from "@/content/legal";
import { routeMeta } from "@/lib/seo";

export const metadata: Metadata = routeMeta(
  "/legal/terms",
  termsOfService.title,
  "Website terms for ArcaSys Kft.",
);

export default function TermsPage() {
  return (
    <LegalDocument
      title={termsOfService.title}
      titleHu={termsOfService.titleHu}
      lastUpdated={legalMeta.lastUpdated}
      sections={termsOfService.sections}
    />
  );
}
