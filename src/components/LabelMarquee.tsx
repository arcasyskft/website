import { gpuLabels } from "@/content/site";

const REPEAT = 6;

export function LabelMarquee() {
  const items = gpuLabels.map((label, i) => ({
    label,
    index: String(i + 1).padStart(2, "0"),
  }));

  const sequence = Array.from({ length: REPEAT }, () => items).flat();

  return (
    <div className="label-marquee-wrap mt-12 md:mt-16" aria-hidden="true">
      <div className="label-marquee">
        <div className="label-marquee-track">
          {sequence.map((item, i) => (
            <span key={`${item.label}-${i}`} className="label-marquee-item">
              <span className="label-marquee-index">{item.index}</span>
              {item.label}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
