import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { Section } from "@/components/Section";
import { faqItems, resourcePlaceholders, resourcesPage } from "@/content/resources";

export const metadata: Metadata = {
  title: resourcesPage.title,
  description: resourcesPage.support,
};

export default function ResourcesPage() {
  return (
    <>
      <PageHero
        eyebrow={resourcesPage.title}
        title={resourcesPage.headline}
        support={resourcesPage.support}
        primaryCta={{ label: "Talk to us", href: "/contact" }}
        secondaryCta={{ label: "Build a brief", href: "/#constraint-brief" }}
      />

      <Section
        id="faq"
        eyebrow="FAQ"
        title="Procurement questions we can answer now."
        description="Answers match the early stage of the company. Where a policy is not defined, we say so."
        className="-mt-6 md:-mt-10"
      >
        <div className="space-y-6">
          {faqItems.map((item) => (
            <Reveal key={item.q} className="border-b border-steel pb-6">
              <h3 className="font-display text-lg font-semibold text-paper">{item.q}</h3>
              <p className="mt-2 text-sm leading-relaxed text-mist md:text-base">{item.a}</p>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section
        id="upcoming"
        eyebrow="Later"
        title="Guides and case studies stay empty until evidenced."
        description="No status page until a real monitored service exists."
        className="bg-ink-soft/80"
      >
        <ul className="grid gap-4 md:grid-cols-3">
          {resourcePlaceholders.map((item) => (
            <li key={item.title} className="rounded-soft border border-steel bg-white p-5">
              <p className="font-display text-lg font-semibold text-paper">{item.title}</p>
              <p className="mt-2 text-sm text-mist">{item.status}</p>
            </li>
          ))}
        </ul>
      </Section>
    </>
  );
}
