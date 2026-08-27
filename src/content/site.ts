export const site = {
  name: "ArcaSys",
  legalName: "ArcaSys Kft.",
  fullLegalName: "ArcaSys Korlátolt Felelősségű Társaság",
  tagline: "NeoCloud resource integration — planning and delivery",
  description:
    "ArcaSys Kft. is a Budapest-registered company focused on NeoCloud and resources integration services: helping teams plan GPU capacity needs and coordinate delivery on request.",
  location: "Budapest, Hungary",
  region: "European Union",
  email: "arcasys@arcasys.net",
  url: "https://arcasys.net",
  phone: "",
  address: "1077 Budapest, Rózsa utca 38/A",
  registry: "",
  taxId: "",
  managingDirector: "Sia Chain Yang",
  mainActivity: "NeoCloud / Resources Integration Services",
  /** Positioning note (internal): integrator / planning & coordination — not owned cloud, not published SKUs/SLA. */
  positioning: "resource-integration",
} as const;

export const nav = [
  { label: "Services", href: "/services" },
  { label: "Solutions", href: "/#solutions" },
  { label: "Resources", href: "/resources" },
  { label: "Company", href: "/about" },
] as const;

export type NavMenuItem = {
  label: string;
  href: string;
};

/** Dropdowns: pure link lists only (2–4 items). No descriptions. */
export const navMenus: Record<string, readonly NavMenuItem[]> = {
  Services: [
    { label: "GPU Compute", href: "/compute" },
    { label: "Model Endpoints", href: "/endpoints" },
    { label: "Integration path", href: "/services" },
  ],
  Solutions: [
    { label: "Model training", href: "/#solution-training" },
    { label: "Live inference", href: "/#solution-inference" },
    { label: "Visual & media compute", href: "/#solution-media" },
    { label: "Isolated deployments", href: "/#solution-isolated" },
  ],
  Resources: [
    {
      label: "Constraint brief",
      href: "/#constraint-brief",
    },
    {
      label: "Reference architecture",
      href: "/compute#reference-architectures",
    },
    {
      label: "Compliance & data residency",
      href: "/compliance",
    },
    {
      label: "FAQ",
      href: "/resources#faq",
    },
  ],
  Company: [
    { label: "About", href: "/about" },
    { label: "Legal & privacy", href: "/legal/privacy" },
    { label: "Contact", href: "/contact" },
  ],
} as const;

/** Footer navigation — includes domains that live outside the top bar. */
export const footerNav = [
  { label: "Services", href: "/services" },
  { label: "Compute", href: "/compute" },
  { label: "Endpoints", href: "/endpoints" },
  { label: "Solutions", href: "/#solutions" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;

export const footerDisclosure = [
  { label: "Compliance", href: "/compliance" },
  { label: "Resources", href: "/resources" },
] as const;

export const hero = {
  brand: "ArcaSys",
  headlineBefore: "NeoCloud resource integration for",
  headlineAccent: "AI teams",
  support:
    "Budapest-registered planning and delivery partner — we help scope GPU capacity and coordinate resource integration on request. Read service boundaries and compliance facts before you inquire.",
  primaryCta: { label: "Talk to us", href: "/contact" },
  secondaryCta: { label: "Service scope", href: "/services" },
} as const;

export const gpuLabels = [
  "NeoCloud",
  "Resource integration",
  "Capacity on request",
  "Planning & delivery",
  "Budapest · EU",
] as const;

export const homeSections = {
  pillars: {
    eyebrow: "What we offer",
    title: "Integration support around capacity and serving plans.",
    description:
      "We work as a resource-integration partner: clarify the need, outline options, and coordinate delivery paths — without claiming a public SKU list or fixed SLA yet.",
  },
  process: {
    eyebrow: "Engagement flow",
    title: "A short path from requirement to a delivery plan.",
    description:
      "Understand the workload, shape options, agree next steps, then coordinate access when capacity is available on request.",
  },
  workloads: {
    eyebrow: "Where teams use us",
    title: "Discussions start from the job, not a price sheet.",
    description:
      "Training, inference, media compute, or stricter isolation needs — we use your constraints to shape a planning conversation.",
  },
} as const;

export const pillars = [
  {
    title: "GPU capacity planning",
    description:
      "Help define node count, topology, and timing so capacity discussions stay concrete. Availability and commercial terms are confirmed per request.",
    items: ["Scope", "Topology", "On request"],
    href: "/compute",
  },
  {
    title: "Model serving planning",
    description:
      "Map shared, dedicated, or more isolated serving patterns to your latency, data, and ownership constraints — as a plan, not a live product catalog.",
    items: ["Shared", "Dedicated", "Isolated"],
    href: "/endpoints",
  },
  {
    title: "Delivery coordination",
    description:
      "Keep stakeholders aligned on access, timeline, and handoff as capacity is arranged through partners and suppliers.",
    items: ["Access", "Timeline", "Handoff"],
    href: "/#capabilities",
  },
  {
    title: "Integration path",
    description:
      "Practical next steps toward tools and interfaces teams already use — introduced when the engagement needs them, not as a marketed platform.",
    items: ["APIs later", "Tooling", "Fit"],
    href: "/contact",
  },
] as const;

export const processSteps = [
  {
    number: "01",
    title: "Scope",
    description: "Capture workload shape, timeline, data constraints, and success criteria.",
  },
  {
    number: "02",
    title: "Plan",
    description: "Outline capacity and serving options that fit the job — with clear open questions.",
  },
  {
    number: "03",
    title: "Coordinate",
    description: "Align suppliers, access path, and delivery window once terms are agreed.",
  },
  {
    number: "04",
    title: "Handoff",
    description: "Confirm what was delivered and remain available for follow-up questions.",
  },
] as const;

export const workloads = [
  {
    id: "solution-training",
    title: "Model training",
    description:
      "Discuss memory, node count, and run windows so training plans are sized before capacity is requested.",
  },
  {
    id: "solution-inference",
    title: "Live inference",
    description:
      "Clarify latency and concurrency targets before locking a serving pattern or capacity ask.",
  },
  {
    id: "solution-media",
    title: "Visual & media compute",
    description:
      "Scope GPU time for image, video, 3D, and multimodal pipelines when throughput is the constraint.",
  },
  {
    id: "solution-isolated",
    title: "Isolated deployments",
    description:
      "Flag data, model, or control requirements early so the delivery plan can account for harder boundaries.",
  },
] as const;

export const trust = {
  title: "Registered in Budapest.",
  description:
    "ArcaSys Kft. is registered in Hungary with a focus on NeoCloud and resources integration. Our listed seat is the company’s registered address; we do not present it as a data center or owned facility.",
} as const;

export const finalCta = {
  title: "Describe the workload. We’ll outline a delivery path.",
  description:
    "Share model type, expected scale, timeline, and any isolation needs. We’ll respond with planning questions and capacity options on request — not a fixed catalog quote.",
  cta: { label: "Start an inquiry", href: "/contact" },
} as const;

export const computePage = {
  title: "GPU Compute",
  headline: "Capacity planning first — access coordinated on request.",
  support:
    "ArcaSys helps you define the footprint you need and coordinates delivery through the integration path. Specific GPU classes, pricing, and timelines are confirmed per engagement.",
  classes: [
    {
      title: "Single-node discussions",
      description:
        "For prototyping, fine-tuning, and smaller jobs — we help size a single-node ask before requesting capacity.",
    },
    {
      title: "Multi-node planning",
      description:
        "For larger training or parallel pipelines — topology and node count are planned with your constraints in view.",
    },
    {
      title: "Scheduled windows",
      description:
        "When milestones matter, we discuss reserved windows as a planning item; confirmation depends on available supply.",
    },
  ],
  path: [
    {
      title: "Share the workload",
      description: "Model family, expected scale, and when you need capacity.",
    },
    {
      title: "Agree a plan",
      description: "We outline options, open questions, and a practical next step.",
    },
    {
      title: "Coordinate delivery",
      description: "Once terms are clear, we help arrange access on request.",
    },
  ],
  sectionLabels: {
    classes: {
      eyebrow: "Capacity shapes",
      title: "Talk in shapes, confirm per request.",
      description:
        "These are planning categories — not a published SKU or price list.",
    },
    path: {
      eyebrow: "How capacity discussions work",
      title: "Three steps from inquiry to a delivery plan.",
      description: "Clear sequence. Commercial and technical details filled in case by case.",
    },
  },
} as const;

export const endpointsPage = {
  title: "Model Endpoints",
  headline: "Plan how models will be served — then coordinate the path.",
  support:
    "We help choose serving patterns and isolation levels as part of resource integration. Live endpoints, SLAs, and network details are defined when an engagement is scoped.",
  types: [
    {
      title: "Managed-style serving",
      description:
        "A planning path when standard inference and faster start matter more than deep customization.",
    },
    {
      title: "Dedicated serving",
      description:
        "For workloads that need clearer isolation around latency, concurrency, or model size.",
    },
    {
      title: "Higher-isolation setups",
      description:
        "When data, proprietary models, or control requirements call for a harder boundary in the plan.",
    },
  ],
  layers: [
    {
      number: "01",
      title: "Requirements",
      description: "What teams need to access, protect, and measure once serving is live.",
    },
    {
      number: "02",
      title: "Coordination",
      description: "How access, reservations, and handoff stay aligned during delivery.",
    },
    {
      number: "03",
      title: "Runtime plan",
      description: "Capacity and serving topology proposed for the workload — confirmed on request.",
    },
    {
      number: "04",
      title: "Follow-up",
      description: "What to review after handoff so the next change is easier to scope.",
    },
  ],
  sectionLabels: {
    types: {
      eyebrow: "Serving patterns",
      title: "Choose a pattern in planning — not from a live catalog.",
      description: "Match topology ideas to latency, data sensitivity, and ownership.",
    },
    layers: {
      eyebrow: "How we structure work",
      title: "Serving plans connected to capacity plans.",
      description:
        "Endpoints are part of the same integration conversation as compute — not a separate product claim.",
    },
  },
} as const;

export const aboutPage = {
  title: "About ArcaSys",
  headline: "A Budapest-registered company for NeoCloud resource integration.",
  support:
    "ArcaSys Korlátolt Felelősségű Társaság (ArcaSys Kft.) is registered in Budapest. Main activity: NeoCloud / Resources Integration Services — planning and coordinating GPU-related capacity and serving paths on request.",
  points: [
    {
      title: "How we position",
      description:
        "We act as a resource-integration partner: clarify requirements, outline options, and coordinate delivery. We are not publishing a GPU resale catalog, managed-cloud SKUs, or SLA claims on this site.",
    },
    {
      title: "Registered seat",
      description:
        "1077 Budapest, Rózsa utca 38/A, Hungary — the company’s registered address for correspondence. It is not presented as an owned office campus or compute facility.",
    },
  ],
} as const;

export const contactPage = {
  title: "Contact",
  headline: "Tell us what you need to plan.",
  support:
    "Workload type, expected scale, timeline, and any isolation requirements are enough to start. ArcaSys Kft. is registered at 1077 Budapest, Rózsa utca 38/A.",
  fields: {
    name: "Name",
    email: "Work email",
    company: "Company",
    workload: "Workload / requirements",
  },
  submitLabel: "Submit inquiry",
  note: "Inquiries are emailed to arcasys@arcasys.net and reviewed manually. Capacity and commercial terms are confirmed per request.",
} as const;
