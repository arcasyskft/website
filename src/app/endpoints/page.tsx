import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { Section } from "@/components/Section";
import { endpointsPage } from "@/content/site";
import { routeMeta } from "@/lib/seo";

export const metadata: Metadata = routeMeta("/endpoints", endpointsPage.title, endpointsPage.support);

export default function EndpointsPage() {
  return (
    <>
      <PageHero
        eyebrow={endpointsPage.title}
        title={endpointsPage.headline}
        support={endpointsPage.support}
        primaryCta={{ label: "Ask about serving", href: "/contact" }}
        secondaryCta={{ label: "Service scope", href: "/services" }}
      />

      <Section
        id="serving-patterns"
        eyebrow={endpointsPage.sectionLabels.types.eyebrow}
        title={endpointsPage.sectionLabels.types.title}
        description={endpointsPage.sectionLabels.types.description}
        className="-mt-6 md:-mt-10"
      >
        <div className="grid gap-10 md:grid-cols-3">
          {endpointsPage.types.map((item) => (
            <Reveal key={item.title} className="border-t border-steel pt-6">
              <h3 className="font-display text-xl font-semibold text-paper">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-mist">{item.description}</p>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section
        id="architecture"
        eyebrow={endpointsPage.sectionLabels.layers.eyebrow}
        title={endpointsPage.sectionLabels.layers.title}
        description={endpointsPage.sectionLabels.layers.description}
        className="bg-ink-soft/80"
      >
        <ol className="space-y-8">
          {endpointsPage.layers.map((layer) => (
            <Reveal
              key={layer.number}
              as="li"
              className="grid gap-3 border-l border-accent/30 pl-5 md:grid-cols-[5rem_1fr] md:gap-8"
            >
              <p className="font-display text-2xl font-semibold text-accent/35">{layer.number}</p>
              <div>
                <h3 className="font-display text-lg font-semibold text-paper">{layer.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-mist md:text-base">
                  {layer.description}
                </p>
              </div>
            </Reveal>
          ))}
        </ol>
      </Section>

      <Section
        id="acceptance"
        eyebrow="Acceptance metrics"
        title="No published benchmarks yet."
        description="TTFT, TPOT, throughput, training samples/s, and MFU will appear only with test environment, software versions, model, precision, batch, and date. Until then, acceptance criteria are written per engagement."
      >
        <div className="rounded-panel border border-steel bg-white p-6 text-sm leading-relaxed text-mist md:p-8">
          <p>
            Do not treat any homepage or marketing figure as an SLA or measured result. If you need
            acceptance metrics in a quote, list them in the Contact intake and we will confirm what
            can be measured in that environment.
          </p>
        </div>
      </Section>
    </>
  );
}
