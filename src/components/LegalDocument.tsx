type LegalDocumentProps = {
  title: string;
  titleHu?: string;
  lastUpdated: string;
  sections: readonly { heading: string; body: string }[];
};

export function LegalDocument({ title, titleHu, lastUpdated, sections }: LegalDocumentProps) {
  return (
    <article className="mx-auto max-w-3xl px-5 pb-24 pt-32 md:px-8 md:pb-32 md:pt-40">
      <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-mist">
        Legal · Updated {lastUpdated}
      </p>
      <h1 className="mt-4 font-display text-4xl font-semibold tracking-tight text-paper md:text-5xl">
        {title}
      </h1>
      {titleHu ? <p className="mt-2 text-lg text-mist">{titleHu}</p> : null}
      <div className="mt-12 space-y-10">
        {sections.map((section) => (
          <section key={section.heading}>
            <h2 className="font-display text-xl font-semibold text-paper">{section.heading}</h2>
            <p className="mt-3 text-sm leading-relaxed text-mist md:text-base">{section.body}</p>
          </section>
        ))}
      </div>
    </article>
  );
}
