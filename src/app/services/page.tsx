import type { Metadata } from "next";
import { ButtonLink } from "@/components/ButtonLink";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { ScopeLens } from "@/components/ScopeLens";
import { Section } from "@/components/Section";
import { deliveryFlow, servicesPage } from "@/content/services";
import { routeMeta } from "@/lib/seo";

export const metadata: Metadata = routeMeta("/services", servicesPage.title, servicesPage.support);

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow={servicesPage.title}
        title={servicesPage.headline}
        support={servicesPage.support}
        note={servicesPage.positioningNote}
        primaryCta={{ label: "Talk to us", href: "/contact" }}
        secondaryCta={{ label: "Build a brief", href: "/#constraint-brief" }}
      />

      <Section
        id="scope"
        eyebrow="Scope lens"
        title="What we provide — and what we do not."
        description="Select a service line to compare deliverables against exclusions. If you built a constraint brief, matching lines are marked."
        className="-mt-6 md:-mt-10"
      >
        <ScopeLens />
      </Section>

      <Section
        id="delivery"
        eyebrow="Delivery flow"
        title="From intake to acceptance."
        description="Procurement-oriented sequence. PoC and rollback exist only when written into the engagement."
        className="bg-[#0a0a0a]"
        tone="dark"
      >
        <ol className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {deliveryFlow.map((item) => (
            <Reveal key={item.step} as="li" className="border-t border-white/15 pt-4">
              <p className="font-mono text-sm text-white/40">{item.step}</p>
              <h3 className="mt-2 font-display text-lg font-semibold text-white">{item.title}</h3>
              <p className="mt-2 text-sm text-white/60">{item.description}</p>
            </Reveal>
          ))}
        </ol>
        <div className="mt-12 flex flex-wrap gap-3">
          <ButtonLink href="/#constraint-brief" variant="secondary">
            Build a constraint brief
          </ButtonLink>
          <ButtonLink href="/contact">Start intake</ButtonLink>
        </div>
      </Section>
    </>
  );
}
