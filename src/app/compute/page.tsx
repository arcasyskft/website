import type { Metadata } from "next";
import { ButtonLink } from "@/components/ButtonLink";
import { CapacityCatalogTable } from "@/components/CapacityCatalogTable";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { Section } from "@/components/Section";
import { referenceArchitectures, softwareStackNote } from "@/content/catalog";
import { computePage } from "@/content/site";

export const metadata: Metadata = {
  title: computePage.title,
  description: computePage.support,
};

export default function ComputePage() {
  return (
    <>
      <PageHero
        eyebrow={computePage.title}
        title={computePage.headline}
        support={computePage.support}
        primaryCta={{ label: "Request capacity discussion", href: "/contact" }}
        secondaryCta={{ label: "Service scope", href: "/services" }}
      />

      <Section
        id="capacity-catalog"
        eyebrow="Capacity catalog"
        title="Verified configurations only."
        description="Empty until rows are substantiated. No invented NVIDIA SKUs or performance numbers."
        className="-mt-6 md:-mt-10"
      >
        <CapacityCatalogTable />
      </Section>

      <Section
        id="capacity-shapes"
        eyebrow={computePage.sectionLabels.classes.eyebrow}
        title={computePage.sectionLabels.classes.title}
        description={computePage.sectionLabels.classes.description}
        className="bg-ink-soft/80"
      >
        <div className="grid gap-10 md:grid-cols-3">
          {computePage.classes.map((item) => (
            <Reveal key={item.title} className="border-t border-steel pt-6">
              <h3 className="font-display text-xl font-semibold text-paper">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-mist">{item.description}</p>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section
        id="reference-architectures"
        eyebrow="Reference architectures"
        title="Suggested planning topologies."
        description="Labeled as suggestions — not verified designs — until real deployment evidence exists."
      >
        <div className="grid gap-6 md:grid-cols-2">
          {referenceArchitectures.map((item) => (
            <Reveal key={item.id} className="rounded-panel border border-steel p-6">
              <h3 className="font-display text-xl font-semibold text-paper">{item.title}</h3>
              <p className="mt-2 text-xs font-semibold uppercase tracking-[0.14em] text-accent">
                {item.caveat}
              </p>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-mist">
                {item.nodes.map((node) => (
                  <li key={node}>{node}</li>
                ))}
              </ul>
              <p className="mt-4 text-sm text-mist">{item.notes}</p>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section
        id="software-stack"
        eyebrow="Software stack"
        title={softwareStackNote.title}
        description={softwareStackNote.body}
        className="bg-[#0a0a0a]"
        tone="dark"
      >
        <p className="text-sm text-white/55">
          Compatibility matrices will cite vendor documents with version and last review date when
          available.
        </p>
      </Section>

      <Section
        eyebrow={computePage.sectionLabels.path.eyebrow}
        title={computePage.sectionLabels.path.title}
        description={computePage.sectionLabels.path.description}
      >
        <ol className="grid gap-8 md:grid-cols-3">
          {computePage.path.map((step, index) => (
            <Reveal key={step.title} as="li">
              <p className="font-display text-3xl font-semibold text-accent/30">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-3 font-display text-lg font-semibold text-paper">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-mist">{step.description}</p>
            </Reveal>
          ))}
        </ol>
        <div className="mt-12">
          <ButtonLink href="/contact" variant="secondary">
            Discuss capacity needs
          </ButtonLink>
        </div>
      </Section>
    </>
  );
}
