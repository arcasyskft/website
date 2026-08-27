import type { ReactNode } from "react";

type SectionProps = {
  id?: string;
  eyebrow?: string;
  title: string;
  description?: string;
  children: ReactNode;
  className?: string;
  index?: string;
  tone?: "light" | "dark";
};

export function Section({
  id,
  eyebrow,
  title,
  description,
  children,
  className = "",
  index,
  tone = "light",
}: SectionProps) {
  const dark = tone === "dark";

  return (
    <section
      id={id}
      className={`relative scroll-mt-28 px-5 py-24 md:px-8 md:py-32 ${className}`}
    >
      <div className="mx-auto max-w-6xl">
        <div className="max-w-3xl">
          {(eyebrow || index) && (
            <div className="mb-3 flex flex-wrap items-center gap-3">
              {index ? (
                <span
                  className={`font-mono text-[11px] font-semibold tracking-[0.16em] ${
                    dark ? "text-white/45" : "text-mist"
                  }`}
                >
                  {index}
                </span>
              ) : null}
              {eyebrow ? (
                <p
                  className={`font-mono text-[11px] font-semibold uppercase tracking-[0.2em] ${
                    dark ? "text-white/70" : "text-accent"
                  }`}
                >
                  {eyebrow}
                </p>
              ) : null}
            </div>
          )}
          <h2
            className={`font-display text-3xl font-semibold tracking-tight text-balance md:text-4xl lg:text-[2.6rem] ${
              dark ? "text-white" : "text-paper"
            }`}
          >
            {title}
          </h2>
          {description ? (
            <p
              className={`mt-4 max-w-2xl text-base leading-relaxed md:text-lg ${
                dark ? "text-white/65" : "text-mist"
              }`}
            >
              {description}
            </p>
          ) : null}
        </div>
        <div className="mt-14">{children}</div>
      </div>
    </section>
  );
}
