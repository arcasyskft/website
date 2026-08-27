export const BRIEF_STORAGE_KEY = "arcasys-constraint-brief";

export const briefPage = {
  eyebrow: "Planning tool",
  title: "Build a constraint brief.",
  description:
    "Toggle what you already know. We write a planning brief and list the gaps that still need answers — before any capacity claim.",
} as const;

export type ConstraintOption = {
  id: string;
  label: string;
  briefLine: string;
  gaps: readonly string[];
};

export const workloadOptions: readonly ConstraintOption[] = [
  {
    id: "training",
    label: "Model training",
    briefLine: "Primary workload: model training / fine-tuning.",
    gaps: [
      "Approximate model size and precision?",
      "Single-node or multi-node expectation?",
      "Checkpoint / storage needs?",
    ],
  },
  {
    id: "inference",
    label: "Live inference",
    briefLine: "Primary workload: live inference / serving.",
    gaps: [
      "Latency or concurrency targets (as goals, not SLAs yet)?",
      "Expected QPS or concurrent sessions?",
      "Model family and context length?",
    ],
  },
  {
    id: "media",
    label: "Visual & media",
    briefLine: "Primary workload: visual / media compute.",
    gaps: [
      "Resolution, codec, or batch size constraints?",
      "Interactive vs batch pipeline?",
    ],
  },
  {
    id: "isolated",
    label: "Higher isolation",
    briefLine: "Primary need: higher-isolation deployment constraints.",
    gaps: [
      "Which controls are mandatory (network, access, tenancy)?",
      "Who must operate the runtime — customer, supplier, or jointly?",
    ],
  },
] as const;

export const isolationOptions: readonly ConstraintOption[] = [
  {
    id: "shared",
    label: "Shared",
    briefLine: "Isolation preference: shared / multi-tenant style (planning label).",
    gaps: ["Any data classes that forbid shared tenancy?"],
  },
  {
    id: "dedicated",
    label: "Dedicated",
    briefLine: "Isolation preference: dedicated capacity (planning label).",
    gaps: ["Must dedication be contractual, or is reserved capacity enough?"],
  },
  {
    id: "private",
    label: "Higher / private",
    briefLine: "Isolation preference: private / harder boundary (planning label).",
    gaps: ["List the boundary controls that must appear in the SOW."],
  },
  {
    id: "unsure-isolation",
    label: "Not sure yet",
    briefLine: "Isolation preference: still open — to be clarified in scoping.",
    gaps: ["Who decides isolation level on your side?"],
  },
] as const;

export const residencyOptions: readonly ConstraintOption[] = [
  {
    id: "eu-required",
    label: "EU / EEA required",
    briefLine: "Data residency: EU/EEA processing is a hard requirement if contracted.",
    gaps: ["Which data types must stay in-region?"],
  },
  {
    id: "flexible",
    label: "Flexible",
    briefLine: "Data residency: flexible — region to be confirmed per engagement.",
    gaps: ["Any preferred region even if not mandatory?"],
  },
  {
    id: "unsure-residency",
    label: "Not decided",
    briefLine: "Data residency: not decided yet.",
    gaps: ["Is legal/compliance review required before region choice?"],
  },
] as const;

export const timelineOptions: readonly ConstraintOption[] = [
  {
    id: "exploratory",
    label: "Exploring",
    briefLine: "Timeline: exploratory — no fixed start date.",
    gaps: ["What decision date would unlock a formal ask?"],
  },
  {
    id: "weeks",
    label: "Weeks",
    briefLine: "Timeline: looking to start within weeks (subject to supply).",
    gaps: ["Hard deadline vs preferred window?"],
  },
  {
    id: "quarter",
    label: "This quarter",
    briefLine: "Timeline: this quarter, pending confirmation.",
    gaps: ["Dependencies on budget approval or security review?"],
  },
  {
    id: "unsure-timeline",
    label: "Unknown",
    briefLine: "Timeline: unknown.",
    gaps: ["What blocks setting a start window?"],
  },
] as const;

export const readinessOptions: readonly ConstraintOption[] = [
  {
    id: "have-model",
    label: "Model known",
    briefLine: "Already known: target model / family.",
    gaps: [],
  },
  {
    id: "have-budget",
    label: "Budget band",
    briefLine: "Already known: rough budget band (to be shared privately).",
    gaps: [],
  },
  {
    id: "have-security",
    label: "Security checklist",
    briefLine: "Already known: internal security / compliance checklist exists.",
    gaps: [],
  },
  {
    id: "have-none",
    label: "Still early",
    briefLine: "Already known: early stage — requirements still forming.",
    gaps: ["Who is the internal owner of this inquiry?"],
  },
] as const;

export type BriefState = {
  workload: string | null;
  isolation: string | null;
  residency: string | null;
  timeline: string | null;
  readiness: readonly string[];
};

export const emptyBriefState: BriefState = {
  workload: null,
  isolation: null,
  residency: null,
  timeline: null,
  readiness: [],
};

function findOption(
  list: readonly ConstraintOption[],
  id: string | null,
): ConstraintOption | undefined {
  if (!id) return undefined;
  return list.find((item) => item.id === id);
}

export function buildBriefText(state: BriefState): string {
  const lines: string[] = [
    "ArcaSys planning brief (draft — not a quote or capacity confirmation)",
    "",
  ];

  const workload = findOption(workloadOptions, state.workload);
  const isolation = findOption(isolationOptions, state.isolation);
  const residency = findOption(residencyOptions, state.residency);
  const timeline = findOption(timelineOptions, state.timeline);

  if (workload) lines.push(workload.briefLine);
  if (isolation) lines.push(isolation.briefLine);
  if (residency) lines.push(residency.briefLine);
  if (timeline) lines.push(timeline.briefLine);

  const readinessLines = state.readiness
    .map((id) => findOption(readinessOptions, id)?.briefLine)
    .filter(Boolean) as string[];

  if (readinessLines.length) {
    lines.push("");
    lines.push("Known inputs:");
    readinessLines.forEach((line) => lines.push(`- ${line}`));
  }

  lines.push("");
  lines.push(
    "Scope note: ArcaSys acts as a resource-integration partner. Capacity and commercial terms are confirmed per engagement — this brief does not reserve inventory or create an SLA.",
  );

  if (!workload && !isolation && !residency && !timeline && readinessLines.length === 0) {
    return "Toggle constraints on the left. A planning brief will appear here.";
  }

  return lines.join("\n");
}

export function buildGaps(state: BriefState): string[] {
  const gaps = new Set<string>();

  const push = (option?: ConstraintOption) => {
    option?.gaps.forEach((g) => gaps.add(g));
  };

  push(findOption(workloadOptions, state.workload));
  push(findOption(isolationOptions, state.isolation));
  push(findOption(residencyOptions, state.residency));
  push(findOption(timelineOptions, state.timeline));

  state.readiness.forEach((id) => push(findOption(readinessOptions, id)));

  if (!state.workload) gaps.add("What is the primary workload?");
  if (!state.isolation) gaps.add("What isolation level is preferred?");
  if (!state.residency) gaps.add("Is region / residency a hard constraint?");
  if (!state.timeline) gaps.add("What is the intended start window?");

  return Array.from(gaps);
}

export function suggestedServiceLineIds(state: BriefState): string[] {
  const ids = new Set<string>(["resource-integration"]);
  if (state.workload === "inference" || state.isolation === "private") {
    ids.add("serving-planning");
  }
  if (state.workload && state.workload !== "isolated") {
    ids.add("capacity-on-request");
  }
  if (state.workload === "isolated" || state.isolation === "private") {
    ids.add("capacity-on-request");
    ids.add("serving-planning");
  }
  return Array.from(ids);
}
