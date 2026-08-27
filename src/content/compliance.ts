import { site } from "./site";

/**
 * P0 — Compliance & statutory disclosure.
 * Only state controls we can honor. No ISO/SOC logos unless held.
 */

export const compliancePage = {
  title: "Compliance",
  headline: "Data handling, isolation, and company disclosure.",
  support:
    "This page states what ArcaSys can say today. Certifications, regions, and processing details that are not yet defined are marked clearly — we do not display logos or claims for programs we have not obtained.",
} as const;

export const dataResidency = {
  title: "Data location & residency",
  items: [
    {
      label: "Default stance",
      value:
        "No public default region is published. Data location is agreed per engagement with the capacity or hosting party named in the contract.",
    },
    {
      label: "EU processing",
      value:
        "If an engagement requires processing inside the EU/EEA, that requirement must be written into the order. We do not imply EU residency for all work by default.",
    },
    {
      label: "ArcaSys systems",
      value:
        "Inquiry forms and email may be processed using tools selected by ArcaSys. See the Privacy Policy for contact-data handling. Workload data should not be sent in inquiry forms unless necessary.",
    },
  ],
} as const;

export const isolationLevels = [
  {
    level: "Shared",
    meaning: "Planning label for multi-tenant style capacity. Exact tenancy depends on the supplier environment named in the order.",
  },
  {
    level: "Dedicated",
    meaning: "Planning label for capacity reserved to one customer context. Confirmation is contractual, not marketing.",
  },
  {
    level: "Private / higher isolation",
    meaning: "Planning label for stronger boundary requirements (network, access, or facility controls). Controls are listed in the SOW only when available.",
  },
] as const;

export const securityControls = {
  title: "Security & lifecycle (honest scope)",
  items: [
    {
      label: "Certifications held",
      value: "None published. ArcaSys does not display ISO 27001, SOC 2, or similar marks on this site.",
    },
    {
      label: "Access control",
      value: "Defined per engagement with the operating party. Not a global ArcaSys control plane claim.",
    },
    {
      label: "Logging & retention",
      value: "Not standardized on this site. Retention and log access are set in the relevant agreement or supplier policy.",
    },
    {
      label: "Destruction / return",
      value: "Data return or destruction obligations apply only when written into the contract or required by law.",
    },
    {
      label: "GDPR",
      value:
        "Where ArcaSys processes personal data (for example inquiry contacts), processing follows the Privacy Policy. Workload/content data processing roles (controller/processor) are assigned in the engagement documents.",
    },
  ],
} as const;

export const companyStatutory = {
  titleEn: "Company information",
  titleHu: "Céginformáció",
  rows: [
    {
      labelEn: "Full legal name",
      labelHu: "Teljes cégnév",
      valueEn: site.fullLegalName,
      valueHu: site.fullLegalName,
    },
    {
      labelEn: "Short name",
      labelHu: "Rövidített név",
      valueEn: site.legalName,
      valueHu: site.legalName,
    },
    {
      labelEn: "Registered seat",
      labelHu: "Székhely",
      valueEn: site.address,
      valueHu: site.address,
    },
    {
      labelEn: "Managing director",
      labelHu: "Ügyvezető",
      valueEn: site.managingDirector,
      valueHu: site.managingDirector,
    },
    {
      labelEn: "Main activity",
      labelHu: "Főtevékenység",
      valueEn: site.mainActivity,
      valueHu: "NeoCloud / erőforrás-integrációs szolgáltatások",
    },
    {
      labelEn: "Company registry number",
      labelHu: "Cégjegyzékszám",
      valueEn: site.registry || "To be published when confirmed",
      valueHu: site.registry || "Közzététel folyamatban / megerősítés után",
    },
    {
      labelEn: "Tax number",
      labelHu: "Adószám",
      valueEn: site.taxId || "To be published when confirmed",
      valueHu: site.taxId || "Közzététel folyamatban / megerősítés után",
    },
    {
      labelEn: "Note on seat",
      labelHu: "Megjegyzés a székhelyről",
      valueEn:
        "The address above is the registered seat for correspondence. It is not presented as an owned office campus or compute facility.",
      valueHu:
        "A fenti cím a cég székhelye levelezéshez. Nem saját irodakampusz vagy számítási létesítmény bemutatása.",
    },
  ],
} as const;

export const policyLinks = [
  { label: "Privacy Policy", href: "/legal/privacy" },
  { label: "Cookie Policy", href: "/legal/cookies" },
  { label: "Terms of Service", href: "/legal/terms" },
  { label: "Acceptable Use Policy", href: "/legal/aup" },
] as const;
