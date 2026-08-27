import { site } from "./site";

/**
 * P0 — Capacity catalog.
 * Only publish verified rows. Until then, show schema + honest empty state.
 * Do not invent NVIDIA SKUs, interconnect claims, or performance numbers.
 */

export const catalogPage = {
  title: "Capacity catalog",
  intro:
    "This catalog is reserved for configurations that ArcaSys can substantiate. Until a row is marked Verified, fields remain “On request” or “Not published.” We do not list unverified SKUs or performance figures.",
  verificationLegend: [
    {
      code: "Official",
      meaning: "Vendor-published specification cited with product name and document version.",
    },
    {
      code: "Verified",
      meaning: "Configuration confirmed in a real engagement or lab note with date and environment.",
    },
    {
      code: "Proposed",
      meaning: "Planning suggestion only — not validated. Shown only when clearly labeled.",
    },
  ],
} as const;

export type CapacityRow = {
  id: string;
  gpuModel: string;
  vram: string;
  topology: string;
  interconnect: string;
  maxNodes: string;
  suitedFor: string;
  region: string;
  leadTime: string;
  billing: string;
  verification: "Official" | "Verified" | "Proposed" | "Not published";
  notes: string;
};

/** Empty published catalog — add rows only when verified. */
export const capacityRows: readonly CapacityRow[] = [] as const;

export const capacityColumns = [
  "GPU model",
  "VRAM",
  "Node topology",
  "Interconnect",
  "Max nodes",
  "Suited for",
  "Region",
  "Lead time",
  "Billing",
  "Status",
] as const;

export const capacityInquiryHint =
  "To request a configuration, send GPU class preferences, VRAM needs, node count, interconnect constraints, region preference, and target start date via Contact. We will respond with what can be confirmed — and what remains open.";

export const referenceArchitectures = [
  {
    id: "training",
    title: "Training — suggested planning topology",
    caveat: "Suggested configuration only. Not a verified design unless marked with deployment evidence.",
    nodes: ["GPU compute nodes (count TBD)", "Shared or parallel filesystem (TBD)", "Job scheduler / orchestration (TBD)"],
    notes: "Interconnect, storage bandwidth, and checkpoint strategy are defined during scoping.",
  },
  {
    id: "inference",
    title: "Inference — suggested planning topology",
    caveat: "Suggested configuration only. Latency and concurrency targets require measurement before acceptance.",
    nodes: ["Serving nodes (count TBD)", "API / gateway layer (TBD)", "Observability plane (TBD)"],
    notes: "Engine choice (e.g. vLLM / TensorRT-LLM / Triton) is selected per model and only after compatibility review.",
  },
  {
    id: "render",
    title: "Render / media — suggested planning topology",
    caveat: "Suggested configuration only. Throughput claims require a measured pipeline.",
    nodes: ["GPU workers (count TBD)", "Asset storage (TBD)", "Queue / batch controller (TBD)"],
    notes: "Codec, resolution, and batch size drive sizing; no public throughput numbers are published yet.",
  },
  {
    id: "isolated",
    title: "Higher-isolation — suggested planning topology",
    caveat: "Suggested configuration only. Isolation controls must be named in the contract.",
    nodes: ["Dedicated GPU nodes (TBD)", "Network / tenancy boundary (TBD)", "Access & audit controls (TBD)"],
    notes: "Shared vs dedicated vs private is a contracting choice, not a default product feature.",
  },
] as const;

export const softwareStackNote = {
  title: "Software stack & compatibility",
  body: `ArcaSys does not yet publish a verified CUDA / runtime / inference-engine matrix. When a stack is proposed in an engagement, we will cite vendor compatibility documents and record the versions and last review date. Until then, treat any stack discussion as planning input only.`,
  company: site.legalName,
} as const;
