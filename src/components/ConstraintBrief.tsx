"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import {
  BRIEF_STORAGE_KEY,
  BriefState,
  buildBriefText,
  buildGaps,
  briefPage,
  emptyBriefState,
  isolationOptions,
  readinessOptions,
  residencyOptions,
  suggestedServiceLineIds,
  timelineOptions,
  workloadOptions,
  type ConstraintOption,
} from "@/content/brief";

function ChipGroup({
  label,
  options,
  value,
  onChange,
  multi = false,
  selectedMulti = [],
}: {
  label: string;
  options: readonly ConstraintOption[];
  value?: string | null;
  onChange?: (id: string) => void;
  multi?: boolean;
  selectedMulti?: readonly string[];
}) {
  return (
    <div>
      <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-mist">
        {label}
      </p>
      <div className="mt-3 flex flex-wrap gap-2">
        {options.map((option) => {
          const active = multi
            ? selectedMulti.includes(option.id)
            : value === option.id;
          return (
            <button
              key={option.id}
              type="button"
              onClick={() => onChange?.(option.id)}
              className={`rounded-soft border px-3 py-2 text-sm font-semibold transition duration-200 ${
                active
                  ? "border-accent bg-accent text-white"
                  : "border-steel bg-white text-paper hover:border-accent/40"
              }`}
              aria-pressed={active}
            >
              {option.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export function ConstraintBrief() {
  const [state, setState] = useState<BriefState>(emptyBriefState);
  const [briefEdit, setBriefEdit] = useState("");
  const [manualEdit, setManualEdit] = useState(false);

  const generated = useMemo(() => buildBriefText(state), [state]);
  const gaps = useMemo(() => buildGaps(state), [state]);
  const serviceHints = useMemo(() => suggestedServiceLineIds(state), [state]);

  useEffect(() => {
    if (!manualEdit) setBriefEdit(generated);
  }, [generated, manualEdit]);

  function selectSingle<K extends "workload" | "isolation" | "residency" | "timeline">(
    key: K,
    id: string,
  ) {
    setManualEdit(false);
    setState((prev) => ({
      ...prev,
      [key]: prev[key] === id ? null : id,
    }));
  }

  function toggleReadiness(id: string) {
    setManualEdit(false);
    setState((prev) => {
      const exists = prev.readiness.includes(id);
      const next = exists
        ? prev.readiness.filter((item) => item !== id)
        : id === "have-none"
          ? ["have-none"]
          : [...prev.readiness.filter((item) => item !== "have-none"), id];
      return { ...prev, readiness: next };
    });
  }

  function saveAndContinue() {
    const payload = {
      state,
      brief: briefEdit,
      updatedAt: new Date().toISOString(),
    };
    try {
      sessionStorage.setItem(BRIEF_STORAGE_KEY, JSON.stringify(payload));
    } catch {
      // ignore storage failures
    }
  }

  return (
    <div id="constraint-brief" className="scroll-mt-28">
      <div className="mb-10 max-w-3xl">
        <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-accent">
          {briefPage.eyebrow}
        </p>
        <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-paper text-balance md:text-4xl">
          {briefPage.title}
        </h2>
        <p className="mt-4 text-base leading-relaxed text-mist md:text-lg">
          {briefPage.description}
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="space-y-8 rounded-panel border border-steel bg-white p-5 md:p-7">
          <ChipGroup
            label="Workload"
            options={workloadOptions}
            value={state.workload}
            onChange={(id) => selectSingle("workload", id)}
          />
          <ChipGroup
            label="Isolation"
            options={isolationOptions}
            value={state.isolation}
            onChange={(id) => selectSingle("isolation", id)}
          />
          <ChipGroup
            label="Residency"
            options={residencyOptions}
            value={state.residency}
            onChange={(id) => selectSingle("residency", id)}
          />
          <ChipGroup
            label="Timeline"
            options={timelineOptions}
            value={state.timeline}
            onChange={(id) => selectSingle("timeline", id)}
          />
          <ChipGroup
            label="Already known"
            options={readinessOptions}
            multi
            selectedMulti={state.readiness}
            onChange={toggleReadiness}
          />
        </div>

        <div className="space-y-6">
          <div className="rounded-panel border border-steel bg-ink-soft/80 p-5 md:p-7">
            <div className="flex items-center justify-between gap-3">
              <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-mist">
                Live brief
              </p>
              {manualEdit ? (
                <button
                  type="button"
                  className="text-xs font-semibold text-accent underline-offset-2 hover:underline"
                  onClick={() => {
                    setManualEdit(false);
                    setBriefEdit(generated);
                  }}
                >
                  Reset to generated
                </button>
              ) : null}
            </div>
            <textarea
              value={briefEdit}
              onChange={(event) => {
                setManualEdit(true);
                setBriefEdit(event.target.value);
              }}
              rows={12}
              className="mt-4 w-full resize-y rounded-soft border border-steel bg-white px-4 py-3 font-mono text-xs leading-relaxed text-cloud outline-none transition focus:border-accent"
            />
          </div>

          <div className="rounded-panel border border-steel bg-white p-5 md:p-7">
            <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-mist">
              Gaps we still need
            </p>
            {gaps.length === 0 ? (
              <p className="mt-3 text-sm text-mist">
                No open gaps yet — unusual; double-check assumptions.
              </p>
            ) : (
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-mist">
                {gaps.map((gap) => (
                  <li key={gap}>{gap}</li>
                ))}
              </ul>
            )}
            <p className="mt-4 text-xs text-mist">
              Related service lines to review:{" "}
              {serviceHints.map((id, index) => (
                <span key={id}>
                  {index > 0 ? ", " : ""}
                  <Link
                    href={`/services#${id}`}
                    className="font-semibold text-paper hover:underline"
                  >
                    {id}
                  </Link>
                </span>
              ))}
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <Link
              href="/contact"
              onClick={saveAndContinue}
              className="inline-flex items-center justify-center rounded-soft bg-accent px-6 py-3.5 text-sm font-semibold text-white shadow-lift transition hover:bg-accent-deep"
            >
              Use this brief in Contact →
            </Link>
            <Link
              href="/services#scope"
              className="inline-flex items-center justify-center rounded-soft border border-accent/80 bg-white px-6 py-3.5 text-sm font-semibold text-accent transition hover:bg-accent hover:text-white"
            >
              Open Scope Lens
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
