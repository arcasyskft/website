# ArcaSys Kft. Website

Company website for **ArcaSys Kft.** (Hungary) — NeoCloud / Resources Integration Services.

**Positioning:** resource-integration partner (planning and delivery; capacity on request).

## Information architecture

| Route | Layer |
|---|---|
| `/` | Positioning + verified facts + service entry |
| `/services` | **P0** Service scope, exclusions, billing/SLA posture, delivery flow |
| `/compute` | Capacity catalog (verified-only) + suggested reference topologies |
| `/endpoints` | Serving patterns + architecture + acceptance-metrics policy |
| `/compliance` | Data residency, isolation labels, statutory EN/HU, policy links |
| `/resources` | FAQ + placeholders (no fake guides/status/cases) |
| `/about` | Company overview |
| `/contact` | Inquiry + privacy consent |
| `/legal/*` | Privacy, Cookies, Terms, AUP |

## Content rules

- Do not invent SKUs, SLAs, benchmarks, certifications, or customer logos.
- Capacity catalog rows stay empty until Official / Verified evidence exists.
- Registry number and tax ID publish when confirmed in `src/content/site.ts`.

## Stack

- Next.js (App Router), TypeScript, Tailwind CSS 3

## Develop

```bash
npm install
npm run dev
```
