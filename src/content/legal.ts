import { site } from "./site";

const lastUpdated = "2026-09-01";

export const legalMeta = {
  lastUpdated,
  controller: site.fullLegalName,
  seat: site.address,
  contactEmail: site.email || "Not published yet — use the Contact form",
} as const;

export const privacyPolicy = {
  title: "Privacy Policy",
  titleHu: "Adatvédelmi tájékoztató",
  sections: [
    {
      heading: "1. Controller / Adatkezelő",
      body: `${site.fullLegalName} (“ArcaSys”, “we”), registered seat: ${site.address}. Managing director: ${site.managingDirector}. Contact for privacy requests: ${legalMeta.contactEmail}.`,
    },
    {
      heading: "2. Data we collect",
      body: "When you use the Contact form or email us, we may process: name, work email, company name, and the content of your inquiry. We do not ask you to send secrets, personal data of third parties, or production datasets through the form.",
    },
    {
      heading: "3. Purpose and legal basis",
      body: "We process inquiry data to respond to your request and, where relevant, to prepare a commercial discussion (legitimate interest and/or steps prior to a contract — Art. 6(1)(b) and 6(1)(f) GDPR as applicable). Marketing emails are not sent unless you separately agree.",
    },
    {
      heading: "4. Retention",
      body: "Inquiry records are kept only as long as needed to handle the request and related follow-up, then deleted or anonymized unless a longer retention is required by law or an active contract.",
    },
    {
      heading: "5. Recipients",
      body: `Inquiry submissions are delivered by email to ${site.email} using Resend as the sending processor. Resend may process message content on servers outside the EU/EEA; where required we rely on Standard Contractual Clauses. We do not sell personal data. If a supplier must receive contact details to fulfill a request, we will do so only as needed for that purpose.`,
    },
    {
      heading: "6. International transfers",
      body: "If inquiry email is processed outside the EU/EEA by Resend, we rely on an appropriate transfer mechanism (Standard Contractual Clauses) where required.",
    },
    {
      heading: "7. Your rights",
      body: "You may request access, rectification, erasure, restriction, objection, or portability where applicable, and you may lodge a complaint with the Hungarian National Authority for Data Protection and Freedom of Information (NAIH).",
    },
    {
      heading: "8. Updates",
      body: `This policy was last updated on ${lastUpdated}. Material changes will be reflected on this page.`,
    },
  ],
} as const;

export const cookiePolicy = {
  title: "Cookie Policy",
  titleHu: "Cookie tájékoztató",
  sections: [
    {
      heading: "1. What we use today",
      body: "The public marketing site is designed to work without non-essential tracking cookies. Essential cookies or local storage may be used by the hosting platform for security and basic operation.",
    },
    {
      heading: "2. Analytics / advertising",
      body: "No analytics or advertising cookies are enabled by ArcaSys on this site at the time of the last update. If that changes, this page will list categories, purposes, and a consent mechanism where required.",
    },
    {
      heading: "3. Contact",
      body: `Questions: ${legalMeta.contactEmail}. Controller: ${site.fullLegalName}, ${site.address}.`,
    },
  ],
} as const;

export const termsOfService = {
  title: "Terms of Service",
  titleHu: "Általános szerződési feltételek (web)",
  sections: [
    {
      heading: "1. Nature of this website",
      body: "This website provides company information and a way to inquire. Content is informational. Published pages do not themselves create a capacity reservation, SLA, or binding price.",
    },
    {
      heading: "2. Services",
      body: "Commercial services are provided only under a separate written agreement (quote, order, or SOW). Service scope and exclusions are described on the Services page and refined in that agreement.",
    },
    {
      heading: "3. No unverified performance claims",
      body: "Any latency, throughput, availability, or benchmark figures appear only when a measured environment is documented. Marketing adjectives do not amend contracts.",
    },
    {
      heading: "4. Acceptable use of the site",
      body: "Do not misuse the site (including scraping that degrades service, injecting harmful content, or submitting unlawful material). See also the Acceptable Use Policy.",
    },
    {
      heading: "5. Liability",
      body: "To the extent permitted by applicable law, ArcaSys is not liable for decisions made solely on the basis of marketing pages. Contractual liability is governed by the signed agreement.",
    },
    {
      heading: "6. Governing law",
      body: "Unless a signed contract states otherwise, Hungarian law applies to the use of this website, without prejudice to mandatory consumer or data-protection rules.",
    },
  ],
} as const;

export const aup = {
  title: "Acceptable Use Policy",
  titleHu: "Elfogadható használati szabályzat",
  sections: [
    {
      heading: "1. Scope",
      body: "This AUP applies to use of ArcaSys websites and, when referenced, to environments coordinated through ArcaSys. Supplier AUPs may also apply to capacity you receive.",
    },
    {
      heading: "2. Prohibited uses",
      body: "Unlawful content or activity; infringement of IP or privacy rights; malware distribution; attempts to disrupt systems; cryptocurrency mining or abusive high-load activity without prior written approval; use that violates export, sanctions, or applicable AI/content laws.",
    },
    {
      heading: "3. Customer content",
      body: "You are responsible for models, data, and prompts you introduce into any environment. Do not submit special-category personal data through inquiry channels unless we have agreed a lawful basis and process in writing.",
    },
    {
      heading: "4. Enforcement",
      body: "We may suspend site access or escalate to the operating party if an AUP breach is suspected. Contractual remedies are set out in the relevant agreement.",
    },
  ],
} as const;
