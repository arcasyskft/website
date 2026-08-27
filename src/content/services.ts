import { site } from "./site";

/**
 * P0 — Service scope.
 * Positioning: resource-integration / planning & delivery coordination.
 * Do not invent SLA targets, SKUs, or owned-facility claims.
 */

export const servicesPage = {
  title: "Services",
  headline: "Service scope and procurement boundaries.",
  support:
    "ArcaSys Kft. positions as a NeoCloud resource-integration partner: we help define requirements, outline options, and coordinate delivery on request. The items below state what is in scope, what is excluded, and what is confirmed only per engagement.",
  positioningNote:
    "We do not currently publish a GPU resale price list, a managed-inference product SKU, or an end-to-end construction offer on this site. Those models can be discussed only if and when they are contractually defined.",
} as const;

export type ServiceLine = {
  id: string;
  name: string;
  nameHu: string;
  summary: string;
  deliverables: readonly string[];
  responsibleParty: string;
  outOfScope: readonly string[];
  changeProcess: string;
  sla: string;
  billing: string;
};

export const serviceLines: readonly ServiceLine[] = [
  {
    id: "resource-integration",
    name: "Resource integration — planning & delivery coordination",
    nameHu: "Erőforrás-integráció — tervezés és szállítási koordináció",
    summary:
      "Primary offering. We clarify GPU / NeoCloud requirements, propose planning options, and coordinate access through suppliers once commercial terms are agreed.",
    deliverables: [
      "Requirements summary and open-questions list",
      "Capacity / serving options memo (planning level)",
      "Delivery coordination notes and handoff checklist (when capacity is arranged)",
    ],
    responsibleParty:
      "ArcaSys Kft. for planning and coordination within the agreed statement of work. Upstream capacity providers remain responsible for their infrastructure under their own terms.",
    outOfScope: [
      "Owning or operating a public GPU cloud on behalf of ArcaSys",
      "Guaranteed inventory, published SKUs, or fixed regional capacity",
      "Application development, model training execution, or MLOps as a default product",
      "Legal opinions, certification audits, or security assessments unless separately contracted",
    ],
    changeProcess:
      "Scope changes require written confirmation (email or signed change note) before additional work or third-party commitments proceed.",
    sla: "No public SLA commitment on this website. Response and delivery targets are defined in the engagement agreement only.",
    billing:
      "Commercial terms are set per engagement (for example fixed scoping fee, success-based coordination fee, or pass-through with disclosed margin). No self-serve pricing is published.",
  },
  {
    id: "capacity-on-request",
    name: "GPU capacity — on request (coordinated access)",
    nameHu: "GPU kapacitás — kérésre (koordinált hozzáférés)",
    summary:
      "When a workload is scoped, we can help request and coordinate access to capacity. This is not a standing inventory catalog.",
    deliverables: [
      "Scoped capacity ask (topology, timing, constraints)",
      "Supplier alignment notes when available",
      "Access handoff information once delivery is confirmed",
    ],
    responsibleParty:
      "ArcaSys coordinates. The capacity operator / supplier remains responsible for hardware, network, and facility operations under their contract.",
    outOfScope: [
      "Immediate on-demand provisioning from an ArcaSys-owned pool",
      "Unverified GPU model, interconnect, or performance claims",
      "Network peering, colo build-outs, or power contracts unless separately scoped",
    ],
    changeProcess:
      "Changes to GPU class, node count, region, or start date restart supplier confirmation and may change price and lead time.",
    sla: "Availability, uptime, and support SLAs — if any — come from the capacity provider and the signed order, not from marketing copy.",
    billing: "Quoted per request after supplier confirmation. Pass-through and fee structure disclosed in the quote.",
  },
  {
    id: "serving-planning",
    name: "Model serving — planning support",
    nameHu: "Modellkiszolgálás — tervezési támogatás",
    summary:
      "We help choose serving patterns (shared / dedicated / higher isolation) as a plan. Live managed endpoints are not sold as a catalog product here.",
    deliverables: [
      "Serving-pattern recommendation with trade-offs",
      "Isolation and data-handling questions for contracting",
      "Acceptance criteria draft for later validation (when a runtime is in scope)",
    ],
    responsibleParty:
      "ArcaSys for planning artifacts. Runtime operation sits with the party named in the engagement (customer, supplier, or ArcaSys only if explicitly contracted).",
    outOfScope: [
      "Guaranteed latency, concurrency, or throughput numbers without a measured environment",
      "Default inclusion of vLLM / TensorRT-LLM / Triton operations",
      "24/7 managed inference SRE unless separately contracted",
    ],
    changeProcess:
      "Pattern or isolation changes require a revised plan and may change supplier or security controls.",
    sla: "Not published. Operational SLAs apply only if a managed runtime is later contracted in writing.",
    billing: "Usually included in scoping / integration fees, or quoted as a discrete planning work package.",
  },
] as const;

export const verifiedFacts = [
  {
    label: "Legal entity",
    value: site.fullLegalName,
  },
  {
    label: "Registered seat",
    value: site.address,
  },
  {
    label: "Main activity",
    value: site.mainActivity,
  },
  {
    label: "Managing director",
    value: site.managingDirector,
  },
  {
    label: "Commercial model on this site",
    value: "Capacity and terms on request — no public SKU or SLA sheet",
  },
] as const;

export const deliveryFlow = [
  {
    step: "01",
    title: "Intake",
    description: "Workload, timeline, data constraints, isolation needs.",
  },
  {
    step: "02",
    title: "Assessment",
    description: "Feasibility, open questions, planning options.",
  },
  {
    step: "03",
    title: "Commercial alignment",
    description: "Quote / SOW — including what is excluded.",
  },
  {
    step: "04",
    title: "Coordination & handoff",
    description: "Supplier alignment, access notes, checklist.",
  },
  {
    step: "05",
    title: "Acceptance",
    description: "Customer confirms deliverables against the SOW. Rollback only if defined in the agreement.",
  },
] as const;
