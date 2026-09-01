import Link from "next/link";
import { ButtonLink } from "@/components/ButtonLink";
import { ConstraintBrief } from "@/components/ConstraintBrief";
import { HeroVisual } from "@/components/HeroVisual";
import { LabelMarquee } from "@/components/LabelMarquee";
import { Reveal } from "@/components/Reveal";
import { Section } from "@/components/Section";
import {
  finalCta,
  hero,
  homeSections,
  pillars,
  processSteps,
  trust,
  workloads,
} from "@/content/site";

export default function HomePage() {
  return (
    <>
      {/* White band: hero → 01 */}
      <div className="bg-white">
        <section className="relative isolate min-h-[100svh] overflow-hidden pb-8 md:pb-12">
          <HeroVisual />
          <div className="relative mx-auto flex min-h-[100svh] max-w-6xl items-center px-5 pb-20 pt-32 md:px-8 md:pb-24 md:pt-36">
            <div className="max-w-xl">
              <div className="hero-rise mb-5 flex flex-wrap items-center gap-3">
                <span className="inline-flex rounded-soft border border-white/25 bg-white/10 px-3 py-1.5 font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-white/85 backdrop-blur-sm">
                  NeoCloud · Resource integration
                </span>
                <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/65">
                  Budapest · EU
                </span>
              </div>
              <p className="hero-rise font-display text-5xl font-semibold tracking-tight text-white sm:text-6xl md:text-7xl">
                {hero.brand}
              </p>
              <h1 className="hero-rise hero-rise-delay-1 mt-6 max-w-xl font-display text-3xl font-semibold leading-tight tracking-tight text-white text-balance sm:text-4xl md:text-[2.65rem]">
                {hero.headlineBefore}{" "}
                <span className="text-white">{hero.headlineAccent}</span>
              </h1>
              <p className="hero-rise hero-rise-delay-2 mt-5 max-w-md text-base leading-relaxed text-white/80 md:text-lg">
                {hero.support}
              </p>
              <div className="hero-rise hero-rise-delay-3 mt-9 flex flex-wrap items-center gap-3">
                <ButtonLink
                  href={hero.primaryCta.href}
                  className="hero-cta"
                >
                  {hero.primaryCta.label}
                </ButtonLink>
                <ButtonLink
                  href={hero.secondaryCta.href}
                  variant="secondary"
                  className="hero-cta"
                >
                  {hero.secondaryCta.label}
                </ButtonLink>
              </div>
            </div>
          </div>
        </section>

        <div className="mx-auto max-w-6xl px-5 pt-10 md:px-8">
          <div className="grid gap-4 rounded-panel border border-steel bg-ink-soft/70 p-5 md:grid-cols-4 md:p-6">
            {[
              { label: "Service scope", href: "/services", detail: "Boundaries & exclusions" },
              { label: "Capacity catalog", href: "/compute#capacity-catalog", detail: "Verified rows only" },
              { label: "Compliance", href: "/compliance", detail: "Residency & disclosure" },
              { label: "FAQ", href: "/resources#faq", detail: "Procurement answers" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-soft border border-steel bg-white px-4 py-4 transition hover:border-accent"
              >
                <p className="font-display text-base font-semibold text-paper">{item.label}</p>
                <p className="mt-1 text-sm text-mist">{item.detail}</p>
              </Link>
            ))}
          </div>
        </div>

        <LabelMarquee />

        <Section
          id="capabilities"
          index="01"
          eyebrow={homeSections.pillars.eyebrow}
          title={homeSections.pillars.title}
          description={homeSections.pillars.description}
        >
          <div className="grid gap-8 md:grid-cols-2">
            {pillars.map((pillar, i) => (
              <Reveal
                key={pillar.title}
                className="group rounded-soft border border-steel bg-ink-soft/80 p-6 transition duration-300 hover:-translate-y-0.5 hover:border-accent/25 hover:shadow-panel md:p-7"
              >
                <div className="mb-4 flex items-center justify-between">
                  <span className="font-mono text-[11px] font-semibold tracking-[0.16em] text-mist">
                    MOD · {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="h-px w-12 bg-accent/30" />
                </div>
                <h3 className="font-display text-xl font-semibold text-paper">
                  <Link href={pillar.href} className="transition hover:text-accent">
                    {pillar.title}
                  </Link>
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-mist md:text-base">
                  {pillar.description}
                </p>
                <ul className="mt-5 flex flex-wrap gap-x-4 gap-y-2">
                  {pillar.items.map((item) => (
                    <li
                      key={item}
                      className="font-mono text-[11px] uppercase tracking-[0.14em] text-accent"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </Section>
      </div>

      {/* Black band: 02 + 03 */}
      <div className="bg-[#0a0a0a]">
        <Section
          index="02"
          eyebrow={homeSections.process.eyebrow}
          title={homeSections.process.title}
          description={homeSections.process.description}
          tone="dark"
        >
          <ol className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step) => (
              <Reveal
                key={step.number}
                as="li"
                className="rounded-soft border border-white/15 bg-white/[0.06] p-5"
              >
                <p className="font-mono text-3xl font-semibold text-white/25">{step.number}</p>
                <h3 className="mt-3 font-display text-lg font-semibold text-white">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/60">{step.description}</p>
              </Reveal>
            ))}
          </ol>
        </Section>

        <Section
          id="solutions"
          index="03"
          eyebrow={homeSections.workloads.eyebrow}
          title={homeSections.workloads.title}
          description={homeSections.workloads.description}
          tone="dark"
        >
          <div className="grid max-w-2xl gap-10">
            {workloads.map((item, i) => (
              <Reveal
                key={item.id}
                id={item.id}
                className="scroll-mt-32 border-l-4 border-white/80 pl-5"
              >
                <p className="mb-2 font-mono text-[11px] uppercase tracking-[0.16em] text-white/45">
                  WL · {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="font-display text-lg font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/60 md:text-base">
                  {item.description}
                </p>
              </Reveal>
            ))}
          </div>
        </Section>
      </div>

      {/* White band: 04 + constraint brief + inquiry */}
      <div className="bg-white">
        <Section
          index="04"
          eyebrow="Company"
          title={trust.title}
          description={trust.description}
        >
          <Reveal>
            <ButtonLink href="/about" variant="secondary">
              About ArcaSys
            </ButtonLink>
          </Reveal>
        </Section>

        <section className="px-5 py-24 md:px-8 md:py-32">
          <div className="mx-auto max-w-6xl">
            <ConstraintBrief />
          </div>
        </section>

        <section className="relative overflow-hidden px-5 pb-24 md:px-8 md:pb-32">
          <div className="relative mx-auto max-w-3xl rounded-panel border border-steel bg-ink-soft/90 px-8 py-14 text-center md:px-12">
            <Reveal>
              <p className="mb-5 font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-mist">
                Inquiry
              </p>
              <h2 className="font-display text-3xl font-semibold tracking-tight text-paper text-balance md:text-5xl">
                {finalCta.title}
              </h2>
              <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-mist md:text-lg">
                {finalCta.description}
              </p>
              <div className="mt-10 flex flex-wrap justify-center gap-3">
                <ButtonLink href="#constraint-brief" variant="secondary">
                  Build a brief first
                </ButtonLink>
                <ButtonLink href={finalCta.cta.href}>{finalCta.cta.label}</ButtonLink>
              </div>
            </Reveal>
          </div>
        </section>
      </div>
    </>
  );
}
