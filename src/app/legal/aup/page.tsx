import type { Metadata } from "next";
import { LegalDocument } from "@/components/LegalDocument";
import { aup, legalMeta } from "@/content/legal";
import { routeMeta } from "@/lib/seo";

export const metadata: Metadata = routeMeta(
  "/legal/aup",
  aup.title,
  "Acceptable use policy for ArcaSys Kft. sites and coordinated environments.",
);

export default function AupPage() {
  return (
    <LegalDocument
      title={aup.title}
      titleHu={aup.titleHu}
      lastUpdated={legalMeta.lastUpdated}
      sections={aup.sections}
    />
  );
}
