import Link from "next/link";
import { BrandLogo } from "@/components/BrandLogo";
import { policyLinks } from "@/content/compliance";
import { footerDisclosure, footerNav, site } from "@/content/site";

export function SiteFooter() {
  const contactBits = [site.email, site.phone, site.address].filter(Boolean);

  return (
    <footer className="px-3 pb-3 md:px-5 md:pb-5">
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-bar border border-white/10 bg-accent text-white shadow-bar">
        <div className="relative mx-auto grid gap-10 px-5 py-14 md:grid-cols-[1.3fr_1fr_1fr_1fr] md:px-8 md:py-16">
          <div>
            <BrandLogo height={112} />
            <p className="mt-3 text-sm font-medium text-white/80">{site.legalName}</p>
            <p className="mt-1 text-sm font-medium text-white/80">
              {[site.location, site.region].filter(Boolean).join(" · ")}
            </p>
            <p className="mt-4 max-w-sm text-sm font-medium leading-relaxed text-white/70">
              {site.tagline}
            </p>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-white/45">Navigate</p>
            <ul className="mt-4 space-y-2">
              {footerNav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm font-semibold text-white/90 transition hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-white/45">
              Legal & disclosure
            </p>
            <ul className="mt-4 space-y-2">
              {footerDisclosure.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm font-semibold text-white/90 transition hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              {policyLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm font-semibold text-white/90 transition hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-white/45">Contact</p>
            {contactBits.length > 0 ? (
              <ul className="mt-4 space-y-2 text-sm font-semibold text-white/90">
                {site.email ? (
                  <li>
                    <a href={`mailto:${site.email}`} className="transition hover:text-white">
                      {site.email}
                    </a>
                  </li>
                ) : null}
                {site.phone ? <li>{site.phone}</li> : null}
                {site.address ? <li>{site.address}</li> : null}
              </ul>
            ) : (
              <p className="mt-4 text-sm font-semibold text-white/90">
                <Link href="/contact" className="transition hover:text-white">
                  Talk to us
                </Link>
              </p>
            )}
            <p className="mt-4 text-xs leading-relaxed text-white/45">
              Registered seat is for correspondence — not presented as a compute facility.
            </p>
          </div>
        </div>

        <div className="relative border-t border-white/10">
          <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-5 text-xs font-medium text-white/45 md:flex-row md:items-center md:justify-between md:px-8">
            <p>
              © {new Date().getFullYear()} {site.legalName}. All rights reserved.
            </p>
            <p className="uppercase tracking-[0.16em]">NeoCloud · Resource integration</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
