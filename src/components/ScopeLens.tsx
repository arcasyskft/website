"use client";

import { useEffect, useMemo, useState } from "react";
import {
  BRIEF_STORAGE_KEY,
  suggestedServiceLineIds,
  type BriefState,
} from "@/content/brief";
import { serviceLines, type ServiceLine } from "@/content/services";

function readStoredBrief(): BriefState | null {
  try {
    const raw = sessionStorage.getItem(BRIEF_STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as { state?: BriefState };
    return parsed.state ?? null;
  } catch {
    return null;
  }
}

export function ScopeLens() {
  const [activeId, setActiveId] = useState<string>(serviceLines[0]?.id ?? "");
  const [matchedIds, setMatchedIds] = useState<string[]>([]);

  useEffect(() => {
    const state = readStoredBrief();
    if (!state) return;
    const ids = suggestedServiceLineIds(state);
    setMatchedIds(ids);
    if (ids[0]) setActiveId(ids[0]);
  }, []);

  const active: ServiceLine | undefined = useMemo(
    () => serviceLines.find((line) => line.id === activeId),
    [activeId],
  );

  if (!active) return null;

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap gap-2">
        {serviceLines.map((line) => {
          const selected = line.id === activeId;
          const matched = matchedIds.includes(line.id);
          return (
            <button
              key={line.id}
              type="button"
              id={line.id}
              onClick={() => setActiveId(line.id)}
              className={`scroll-mt-28 rounded-soft border px-4 py-2.5 text-left text-sm font-semibold transition ${
                selected
                  ? "border-accent bg-accent text-white"
                  : "border-steel bg-white text-paper hover:border-accent/40"
              }`}
            >
              <span className="block">{line.name.split("—")[0].trim()}</span>
              {matched ? (
                <span
                  className={`mt-1 block font-mono text-[10px] uppercase tracking-[0.14em] ${
                    selected ? "text-white/70" : "text-mist"
                  }`}
                >
                  Matches your brief
                </span>
              ) : null}
            </button>
          );
        })}
      </div>

      <div className="rounded-panel border border-steel bg-white p-6 md:p-8">
        <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-mist">
          Scope lens · {active.id}
        </p>
        <h3 className="mt-2 font-display text-2xl font-semibold text-paper">{active.name}</h3>
        <p className="mt-1 text-sm text-mist">{active.nameHu}</p>
        <p className="mt-4 text-sm leading-relaxed text-mist md:text-base">{active.summary}</p>

        <div className="mt-8 grid gap-8 md:grid-cols-2">
          <div className="rounded-soft border border-steel bg-ink-soft/70 p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">In scope</p>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-mist">
              {active.deliverables.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="rounded-soft border border-steel bg-white p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
              Out of scope
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-mist">
              {active.outOfScope.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        <dl className="mt-8 grid gap-6 border-t border-steel pt-6 text-sm sm:grid-cols-2">
          <div>
            <dt className="font-semibold text-paper">Responsible party</dt>
            <dd className="mt-2 text-mist">{active.responsibleParty}</dd>
          </div>
          <div>
            <dt className="font-semibold text-paper">Change process</dt>
            <dd className="mt-2 text-mist">{active.changeProcess}</dd>
          </div>
          <div>
            <dt className="font-semibold text-paper">SLA posture</dt>
            <dd className="mt-2 text-mist">{active.sla}</dd>
          </div>
          <div>
            <dt className="font-semibold text-paper">Billing posture</dt>
            <dd className="mt-2 text-mist">{active.billing}</dd>
          </div>
        </dl>
      </div>
    </div>
  );
}
