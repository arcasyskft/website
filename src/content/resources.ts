export const resourcesPage = {
  title: "Resources",
  headline: "Decision aids without unverifiable claims.",
  support:
    "Guides and status pages will appear here only when backed by engineering notes. Today we publish FAQ answers that match our early operating stage.",
} as const;

export const faqItems = [
  {
    q: "What does ArcaSys sell today?",
    a: "Resource-integration planning and delivery coordination for NeoCloud / GPU-related needs. Capacity access is arranged on request — not from a public inventory catalog.",
  },
  {
    q: "Is there a minimum order?",
    a: "No public minimum is published. Minimums, if any, will appear in the quote for that engagement.",
  },
  {
    q: "On-demand vs reserved?",
    a: "Both can be discussed as planning options. What is actually available depends on suppliers and is confirmed per request.",
  },
  {
    q: "Which regions are available?",
    a: "No default region list is published yet. Region preference is part of intake and confirmed before order.",
  },
  {
    q: "Who owns the models and data?",
    a: "Unless a contract says otherwise, you retain ownership of your models and data. ArcaSys does not claim rights to customer IP through the inquiry form.",
  },
  {
    q: "Can I export my data?",
    a: "Export and return obligations apply when written into the engagement or required by law. Ask for this in intake if it is a hard requirement.",
  },
  {
    q: "Cancellation policy?",
    a: "Defined in the quote / SOW. Website pages do not create a cancellation right by themselves.",
  },
  {
    q: "Payment methods?",
    a: "Confirmed commercially per engagement. Not listed as self-serve options on the site.",
  },
  {
    q: "Do you have ISO 27001 or SOC 2?",
    a: "Not published / not claimed on this site. Do not treat any page as certification evidence.",
  },
  {
    q: "Where is the status page?",
    a: "Not enabled. A public status page will launch only when ArcaSys operates a monitored service surface worth reporting.",
  },
] as const;

export const resourcePlaceholders = [
  {
    title: "Capacity planning guide",
    status: "Not published — will require engineering-reviewed methodology.",
  },
  {
    title: "Benchmark methodology",
    status: "Not published — no unverified numbers will be posted.",
  },
  {
    title: "Case studies",
    status: "None — only with written customer authorization and measurable results.",
  },
] as const;
