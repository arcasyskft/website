import {
  capacityColumns,
  capacityInquiryHint,
  capacityRows,
  catalogPage,
} from "@/content/catalog";

export function CapacityCatalogTable() {
  return (
    <div className="space-y-6">
      <p className="text-sm leading-relaxed text-mist md:text-base">{catalogPage.intro}</p>

      <ul className="grid gap-3 sm:grid-cols-3">
        {catalogPage.verificationLegend.map((item) => (
          <li key={item.code} className="rounded-soft border border-steel bg-ink-soft/80 p-4">
            <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-accent">
              {item.code}
            </p>
            <p className="mt-2 text-sm text-mist">{item.meaning}</p>
          </li>
        ))}
      </ul>

      <div className="overflow-x-auto rounded-panel border border-steel">
        <table className="min-w-[960px] w-full border-collapse text-left text-sm">
          <thead className="bg-ink-soft">
            <tr>
              {capacityColumns.map((col) => (
                <th
                  key={col}
                  className="border-b border-steel px-3 py-3 font-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-mist"
                >
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {capacityRows.length === 0 ? (
              <tr>
                <td
                  colSpan={capacityColumns.length}
                  className="px-3 py-10 text-center text-mist"
                >
                  No verified capacity rows published yet. All GPU models, interconnects, regions,
                  lead times, and billing modes remain <strong className="font-semibold text-paper">On
                  request</strong> until substantiated.
                </td>
              </tr>
            ) : (
              capacityRows.map((row) => (
                <tr key={row.id} className="border-b border-steel/80">
                  <td className="px-3 py-3 text-paper">{row.gpuModel}</td>
                  <td className="px-3 py-3 text-mist">{row.vram}</td>
                  <td className="px-3 py-3 text-mist">{row.topology}</td>
                  <td className="px-3 py-3 text-mist">{row.interconnect}</td>
                  <td className="px-3 py-3 text-mist">{row.maxNodes}</td>
                  <td className="px-3 py-3 text-mist">{row.suitedFor}</td>
                  <td className="px-3 py-3 text-mist">{row.region}</td>
                  <td className="px-3 py-3 text-mist">{row.leadTime}</td>
                  <td className="px-3 py-3 text-mist">{row.billing}</td>
                  <td className="px-3 py-3 font-mono text-[11px] uppercase tracking-[0.12em] text-accent">
                    {row.verification}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      <p className="text-sm leading-relaxed text-mist">{capacityInquiryHint}</p>
    </div>
  );
}
