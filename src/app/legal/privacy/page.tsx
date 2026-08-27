import type { Metadata } from "next";
import { LegalDocument } from "@/components/LegalDocument";
import { legalMeta, privacyPolicy } from "@/content/legal";

export const metadata: Metadata = {
  title: privacyPolicy.title,
  description: "Privacy policy for ArcaSys Kft. inquiry and website data processing.",
};

export default function PrivacyPage() {
  return (
    <LegalDocument
      title={privacyPolicy.title}
      titleHu={privacyPolicy.titleHu}
      lastUpdated={legalMeta.lastUpdated}
      sections={privacyPolicy.sections}
    />
  );
}
