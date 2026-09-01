import type { Metadata } from "next";
import { ButtonLink } from "@/components/ButtonLink";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { Section } from "@/components/Section";
import { aboutPage, site } from "@/content/site";
import { routeMeta } from "@/lib/seo";

export const metadata: Metadata = routeMeta("/about", aboutPage.title, aboutPage.support);

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow={aboutPage.title}
        title={aboutPage.headline}
        support={aboutPage.support}
        primaryCta={{ label: "Contact ArcaSys", href: "/contact" }}
        secondaryCta={{ label: "Capacity planning", href: "/compute" }}
      />

      <Section
        id="company-facts"
        eyebrow={site.fullLegalName}
        title="NeoCloud. Resource integration. Planning and delivery."
        description={`Registered seat: ${site.address}`}
        className="-mt-6 md:-mt-10"
      >
        <div className="grid gap-10 md:grid-cols-2">
          {aboutPage.points.map((point) => {
            const id = point.title === "Registered seat" ? "registered-seat" : undefined;
            return (
              <Reveal key={point.title} className="border-t border-steel pt-6">
                <div id={id} className={id ? "scroll-mt-28" : undefined}>
                  <h3 className="font-display text-xl font-semibold text-paper">{point.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-mist">{point.description}</p>
                </div>
              </Reveal>
            );
          })}
        </div>

        <dl className="mt-14 grid gap-6 border-t border-steel pt-8 text-sm sm:grid-cols-3">
          <div>
            <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-mist/70">
              Short name
            </dt>
            <dd className="mt-2 text-cloud">{site.legalName}</dd>
          </div>
          <div>
            <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-mist/70">
              Main activity
            </dt>
            <dd className="mt-2 text-cloud">{site.mainActivity}</dd>
          </div>
          <div>
            <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-mist/70">
              Registered seat
            </dt>
            <dd className="mt-2 text-cloud">{site.address}</dd>
          </div>
        </dl>

        <div className="mt-12 flex flex-wrap gap-4">
          <ButtonLink href="/contact">Contact ArcaSys</ButtonLink>
          <ButtonLink href="/compute" variant="secondary">
            Capacity planning
          </ButtonLink>
        </div>
      </Section>
    </>
  );
}
