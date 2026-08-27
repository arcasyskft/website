import type { ReactNode } from "react";
import { ButtonLink } from "@/components/ButtonLink";
import { HeroVisual } from "@/components/HeroVisual";

type Cta = {
  label: string;
  href: string;
};

type PageHeroProps = {
  eyebrow: string;
  title: string;
  support: string;
  note?: string;
  primaryCta?: Cta;
  secondaryCta?: Cta;
  /** Home-style full viewport; inner pages use a tall but shorter band. */
  fullHeight?: boolean;
  children?: ReactNode;
};

export function PageHero({
  eyebrow,
  title,
  support,
  note,
  primaryCta = { label: "Talk to us", href: "/contact" },
  secondaryCta = { label: "Service scope", href: "/services" },
  fullHeight = false,
  children,
}: PageHeroProps) {
  const heightClass = fullHeight
    ? "min-h-[100svh] pb-8 md:pb-12"
    : "min-h-[72svh] pb-6 md:pb-10";
  const innerHeightClass = fullHeight
    ? "min-h-[100svh] pb-36 pt-32 md:pb-44 md:pt-36"
    : "min-h-[72svh] pb-28 pt-32 md:pb-36 md:pt-36";

  return (
    <section className={`relative isolate overflow-hidden ${heightClass}`}>
      <HeroVisual />
      <div
        className={`relative mx-auto flex max-w-6xl items-center px-5 md:px-8 ${innerHeightClass}`}
      >
        <div className="max-w-2xl">
          <div className="hero-rise mb-5">
            <span className="inline-flex rounded-soft border border-white/25 bg-white/10 px-3 py-1.5 font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-white/85 backdrop-blur-sm">
              {eyebrow}
            </span>
          </div>
          <h1 className="hero-rise hero-rise-delay-1 max-w-3xl font-display text-4xl font-semibold leading-tight tracking-tight text-white text-balance md:text-5xl lg:text-[2.75rem]">
            {title}
          </h1>
          <p className="hero-rise hero-rise-delay-2 mt-5 max-w-xl text-base leading-relaxed text-white/80 md:text-lg">
            {support}
          </p>
          {note ? (
            <p className="hero-rise hero-rise-delay-2 mt-4 max-w-xl rounded-soft border border-white/20 bg-black/25 px-4 py-3 text-sm leading-relaxed text-white/75 backdrop-blur-sm">
              {note}
            </p>
          ) : null}
          <div className="hero-rise hero-rise-delay-3 mt-9 flex flex-wrap items-center gap-3">
            <ButtonLink href={primaryCta.href} className="hero-cta">
              {primaryCta.label}
            </ButtonLink>
            <ButtonLink href={secondaryCta.href} variant="secondary" className="hero-cta">
              {secondaryCta.label}
            </ButtonLink>
          </div>
          {children}
        </div>
      </div>
    </section>
  );
}
