import type { Metadata } from "next";
import { LegalDocument } from "@/components/LegalDocument";
import { aup, legalMeta } from "@/content/legal";

export const metadata: Metadata = {
  title: aup.title,
  description: "Acceptable use policy for ArcaSys Kft. sites and coordinated environments.",
};

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
