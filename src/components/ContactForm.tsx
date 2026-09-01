"use client";

import { FormEvent, useEffect, useState } from "react";
import { ButtonLink } from "@/components/ButtonLink";
import { BRIEF_STORAGE_KEY } from "@/content/brief";
import { contactPage, site } from "@/content/site";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [requestId, setRequestId] = useState("");
  const [showMailto, setShowMailto] = useState(false);
  const [workload, setWorkload] = useState("");
  const [briefLoaded, setBriefLoaded] = useState(false);

  useEffect(() => {
    try {
      const raw = sessionStorage.getItem(BRIEF_STORAGE_KEY);
      if (!raw) return;
      const parsed = JSON.parse(raw) as { brief?: string };
      if (parsed.brief) {
        setWorkload(parsed.brief);
        setBriefLoaded(true);
      }
    } catch {
      // ignore
    }
  }, []);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    setSubmitted(false);
    setShowMailto(false);
    setRequestId("");
    setSubmitting(true);

    const form = event.currentTarget;
    const data = new FormData(form);

    const inquiry = {
      name: String(data.get("name") ?? "").trim(),
      email: String(data.get("email") ?? "").trim(),
      company: String(data.get("company") ?? "").trim(),
      workload: String(data.get("workload") ?? "").trim(),
      website: String(data.get("website") ?? "").trim(),
      privacy: data.get("privacy") === "on",
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(inquiry),
      });

      const payload = (await response.json().catch(() => ({}))) as {
        ok?: boolean;
        error?: string;
        requestId?: string;
        mailto?: boolean;
      };

      if (payload.requestId) setRequestId(payload.requestId);

      if (!response.ok || !payload.ok) {
        setShowMailto(payload.mailto === true || response.status >= 500);
        throw new Error(payload.error || "Could not send the inquiry.");
      }

      setSubmitted(true);
      form.reset();
      setWorkload("");
      setBriefLoaded(false);
      sessionStorage.removeItem(BRIEF_STORAGE_KEY);
    } catch (submitError) {
      setError(
        submitError instanceof Error
          ? submitError.message
          : "Could not send the inquiry.",
      );
    } finally {
      setSubmitting(false);
    }
  }

  const mailtoHref = `mailto:${site.email}?subject=${encodeURIComponent("ArcaSys inquiry")}&body=${encodeURIComponent(workload ? `Requirements:\n${workload}` : "")}`;

  const fieldClass =
    "mt-2 w-full rounded-soft border border-steel-mid bg-ink-soft/60 px-3 py-3 text-cloud outline-none transition focus:border-accent focus:bg-white disabled:opacity-70";

  return (
    <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.2fr_0.8fr]">
      <form
        onSubmit={handleSubmit}
        className="space-y-5 rounded-panel border border-steel bg-white p-6 shadow-panel md:p-8"
        noValidate={false}
      >
        {briefLoaded ? (
          <p className="rounded-soft border border-steel bg-ink-soft/80 px-3 py-2 text-xs text-mist">
            Constraint brief loaded from your planning tool. Edit freely before submit.
          </p>
        ) : null}
        <div className="absolute -left-[9999px] h-0 w-0 overflow-hidden" aria-hidden>
          <label>
            Website
            <input type="text" name="website" tabIndex={-1} autoComplete="off" />
          </label>
        </div>
        <div className="grid gap-5 sm:grid-cols-2">
          <label className="block text-sm text-mist">
            {contactPage.fields.name}
            <input
              required
              name="name"
              type="text"
              autoComplete="name"
              disabled={submitting}
              className={fieldClass}
            />
          </label>
          <label className="block text-sm text-mist">
            {contactPage.fields.email}
            <input
              required
              name="email"
              type="email"
              autoComplete="email"
              disabled={submitting}
              className={fieldClass}
            />
          </label>
        </div>
        <label className="block text-sm text-mist">
          {contactPage.fields.company}
          <input
            name="company"
            type="text"
            autoComplete="organization"
            disabled={submitting}
            className={fieldClass}
          />
        </label>
        <label className="block text-sm text-mist">
          {contactPage.fields.workload}
          <textarea
            required
            name="workload"
            rows={10}
            minLength={8}
            value={workload}
            disabled={submitting}
            onChange={(event) => setWorkload(event.target.value)}
            className={`${fieldClass} resize-y`}
            aria-describedby="workload-hint"
          />
        </label>
        <p id="workload-hint" className="text-xs text-mist">
          Do not submit secrets, credentials, customer datasets, or personal data of third parties.
        </p>
        <button
          type="submit"
          disabled={submitting}
          className="inline-flex items-center justify-center rounded-soft bg-accent px-6 py-3.5 text-sm font-semibold text-white shadow-lift transition hover:bg-accent-deep focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent disabled:cursor-wait disabled:opacity-70"
        >
          {submitting ? "Sending…" : `${contactPage.submitLabel} →`}
        </button>
        <label className="flex items-start gap-3 text-xs leading-relaxed text-mist">
          <input
            required
            type="checkbox"
            name="privacy"
            disabled={submitting}
            className="mt-0.5 h-4 w-4 shrink-0 rounded border-steel-mid"
          />
          <span>
            I agree that ArcaSys may process my contact details to handle this inquiry, as described
            in the{" "}
            <a
              href="/legal/privacy"
              className="font-semibold text-paper underline-offset-2 hover:underline"
            >
              Privacy Policy
            </a>
            .
          </span>
        </label>
        {error ? (
          <p role="alert" className="text-sm text-red-700">
            {error}
            {requestId ? ` Reference: ${requestId}.` : ""}{" "}
            {showMailto ? (
              <a href={mailtoHref} className="font-semibold underline-offset-2 hover:underline">
                Email {site.email}
              </a>
            ) : null}
          </p>
        ) : null}
        {submitted ? (
          <p role="status" aria-live="polite" className="text-sm text-accent">
            Inquiry delivered to {site.email}. We will reply to the work email you provided.
            {requestId ? ` Reference: ${requestId}.` : ""}
          </p>
        ) : contactPage.note ? (
          <p className="text-xs text-mist">{contactPage.note}</p>
        ) : null}
      </form>

      <aside className="space-y-6 border-t border-steel pt-6 lg:border-t-0 lg:border-l lg:pl-10 lg:pt-0">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-mist">Company</p>
          <p className="mt-3 font-display text-xl font-semibold text-paper">{site.legalName}</p>
          {(site.address || site.location || site.region) && (
            <p className="mt-2 text-sm text-mist">
              {site.address ? (
                <>
                  {site.address}
                  <br />
                </>
              ) : null}
              {[site.location, site.region].filter(Boolean).join(" · ")}
            </p>
          )}
        </div>
        {(site.email || site.phone) && (
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-mist">Direct</p>
            {site.email ? (
              <p className="mt-3 text-sm text-cloud">
                <a href={`mailto:${site.email}`} className="transition hover:text-accent">
                  {site.email}
                </a>
              </p>
            ) : null}
            {site.phone ? <p className="mt-1 text-sm text-mist">{site.phone}</p> : null}
          </div>
        )}
        <ButtonLink href="/#constraint-brief" variant="secondary">
          Open constraint brief
        </ButtonLink>
      </aside>
    </div>
  );
}
