type StatusChipProps = {
  label?: string;
  tone?: "light" | "dark";
};

export function StatusChip({ label = "SYSTEM ONLINE", tone = "light" }: StatusChipProps) {
  const isDark = tone === "dark";

  return (
    <span
      className={`inline-flex items-center gap-2 rounded-soft border px-3 py-1 font-mono text-[10px] font-semibold uppercase tracking-[0.18em] ${
        isDark
          ? "border-white/15 bg-white/5 text-white/75"
          : "border-steel bg-white/80 text-mist backdrop-blur-sm"
      }`}
    >
      <span className="relative flex h-2 w-2">
        <span
          className={`absolute inset-0 rounded-full status-pulse ${isDark ? "bg-white" : "bg-accent"}`}
        />
        <span className={`relative h-2 w-2 rounded-full ${isDark ? "bg-white" : "bg-accent"}`} />
      </span>
      {label}
    </span>
  );
}
