import type { Metadata } from "next";
import Link from "next/link";
import { ButtonLink } from "@/components/ButtonLink";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { Section } from "@/components/Section";
import {
  companyStatutory,
  compliancePage,
  dataResidency,
  isolationLevels,
  policyLinks,
  securityControls,
} from "@/content/compliance";
import { routeMeta } from "@/lib/seo";

export const metadata: Metadata = routeMeta(
  "/compliance",
  compliancePage.title,
  compliancePage.support,
);

export default function CompliancePage() {
  return (
    <>
      <PageHero
        eyebrow={compliancePage.title}
        title={compliancePage.headline}
        support={compliancePage.support}
        primaryCta={{ label: "Talk to us", href: "/contact" }}
        secondaryCta={{ label: "Privacy policy", href: "/legal/privacy" }}
      />

      <Section
        id="data-residency"
        eyebrow="Data residency"
        title={dataResidency.title}
        description="Only statements we can stand behind without inventing a default region."
        className="-mt-6 md:-mt-10"
      >
        <div className="grid gap-6 md:grid-cols-3">
          {dataResidency.items.map((item) => (
            <Reveal key={item.label} className="rounded-soft border border-steel p-5">
              <h3 className="font-display text-lg font-semibold text-paper">{item.label}</h3>
              <p className="mt-3 text-sm leading-relaxed text-mist">{item.value}</p>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section
        id="isolation"
        eyebrow="Isolation levels"
        title="Shared, dedicated, private — as planning labels."
        description="Exact controls are contractual. These labels alone are not a security guarantee."
        className="bg-ink-soft/80"
      >
        <div className="grid gap-6 md:grid-cols-3">
          {isolationLevels.map((item) => (
            <Reveal key={item.level} className="border-t border-steel pt-5">
              <h3 className="font-display text-lg font-semibold text-paper">{item.level}</h3>
              <p className="mt-3 text-sm leading-relaxed text-mist">{item.meaning}</p>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section
        id="security"
        eyebrow="Security controls"
        title={securityControls.title}
        description="No certification logos. No implied ISO/SOC status."
      >
        <dl className="grid gap-6 md:grid-cols-2">
          {securityControls.items.map((item) => (
            <div key={item.label} className="rounded-soft border border-steel p-5">
              <dt className="font-semibold text-paper">{item.label}</dt>
              <dd className="mt-2 text-sm leading-relaxed text-mist">{item.value}</dd>
            </div>
          ))}
        </dl>
      </Section>

      <Section
        id="company"
        eyebrow="Statutory disclosure"
        title={`${companyStatutory.titleEn} / ${companyStatutory.titleHu}`}
        description="Hungarian–English company facts for procurement and legal review."
        className="bg-[#0a0a0a]"
        tone="dark"
      >
        <div className="overflow-x-auto rounded-panel border border-white/15">
          <table className="min-w-[720px] w-full border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-white/15">
                <th className="px-4 py-3 font-mono text-[10px] uppercase tracking-[0.14em] text-white/45">
                  Field (EN)
                </th>
                <th className="px-4 py-3 font-mono text-[10px] uppercase tracking-[0.14em] text-white/45">
                  Mező (HU)
                </th>
                <th className="px-4 py-3 font-mono text-[10px] uppercase tracking-[0.14em] text-white/45">
                  Value
                </th>
              </tr>
            </thead>
            <tbody>
              {companyStatutory.rows.map((row) => (
                <tr key={row.labelEn} className="border-b border-white/10 align-top">
                  <td className="px-4 py-3 text-white/70">{row.labelEn}</td>
                  <td className="px-4 py-3 text-white/70">{row.labelHu}</td>
                  <td className="px-4 py-3 text-white">
                    <p>{row.valueEn}</p>
                    {row.valueHu !== row.valueEn ? (
                      <p className="mt-1 text-white/55">{row.valueHu}</p>
                    ) : null}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <Section
        id="policies"
        eyebrow="Policies"
        title="Privacy, cookies, terms, acceptable use."
        description="Standard disclosure set for Hungarian / EU B2B sites."
      >
        <ul className="grid gap-4 sm:grid-cols-2">
          {policyLinks.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="flex items-center justify-between rounded-soft border border-steel px-4 py-4 text-sm font-semibold text-paper transition hover:border-accent"
              >
                {item.label}
                <span aria-hidden>→</span>
              </Link>
            </li>
          ))}
        </ul>
        <div className="mt-10">
          <ButtonLink href="/services" variant="secondary">
            Review service scope
          </ButtonLink>
        </div>
      </Section>
    </>
  );
}
