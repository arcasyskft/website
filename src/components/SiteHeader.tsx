"use client";

import Link from "next/link";
import { useState } from "react";
import { BrandLogo } from "@/components/BrandLogo";
import { nav, navMenus } from "@/content/site";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 md:px-5 md:pt-4">
      <div className="mx-auto w-full max-w-6xl overflow-visible rounded-bar border border-white/10 bg-accent shadow-bar backdrop-blur-md">
        <div className="relative flex h-[3.9rem] items-center justify-between gap-6 overflow-visible px-5 md:px-7">
          {/* Layout slot stays compact; logo can sit larger without stretching the bar */}
          <div className="relative z-20 h-10 w-[6.75rem] shrink-0">
            <div className="absolute left-0 top-1/2 -translate-y-[calc(50%-4px)]">
              <BrandLogo height={80} priority />
            </div>
          </div>

          <nav
            className="relative hidden flex-1 items-center justify-end gap-6 lg:gap-8 md:flex"
            aria-label="Primary"
          >
            {nav.map((item) => {
              const menu = navMenus[item.label] ?? [];
              const hasMenu = menu.length > 0;
              const isOpen = activeMenu === item.label;

              if (!hasMenu) {
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-[13px] font-bold uppercase tracking-[0.12em] text-white/90 transition hover:text-white"
                  >
                    {item.label}
                  </Link>
                );
              }

              return (
                <div
                  key={item.href}
                  className="relative inline-flex shrink-0"
                  onMouseEnter={() => setActiveMenu(item.label)}
                  onMouseLeave={() => setActiveMenu(null)}
                >
                  <Link
                    href={item.href}
                    className="inline-flex items-center gap-1.5 text-[13px] font-bold uppercase tracking-[0.12em] text-white/90 transition hover:text-white"
                    aria-expanded={isOpen}
                    aria-haspopup="true"
                  >
                    {item.label}
                    <span
                      aria-hidden
                      className={`text-[10px] transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                    >
                      ▾
                    </span>
                  </Link>

                  <div
                    className={`absolute left-1/2 top-full z-50 w-max min-w-full -translate-x-1/2 pt-2 transition duration-200 ${
                      isOpen
                        ? "pointer-events-auto translate-y-0 opacity-100"
                        : "pointer-events-none -translate-y-1 opacity-0"
                    }`}
                  >
                    <ul className="overflow-hidden rounded-xl border border-white/10 bg-accent-deep py-1 shadow-lift">
                      {menu.map((option) => (
                        <li key={option.label}>
                          <Link
                            href={option.href}
                            className="block whitespace-nowrap px-3.5 py-2 text-sm font-semibold text-white/90 transition hover:bg-white/10 hover:text-white"
                            onClick={() => setActiveMenu(null)}
                          >
                            {option.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </nav>

          <div className="relative hidden shrink-0 items-center gap-3 md:flex">
            <Link
              href="/contact"
              className="rounded-soft bg-white px-4 py-2 text-sm font-semibold text-accent shadow-lift transition hover:bg-white/90"
            >
              Talk to us
            </Link>
          </div>

          <button
            type="button"
            className="relative inline-flex items-center justify-center rounded-soft border border-white/25 px-3 py-2 text-sm font-semibold text-white md:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>

        {open ? (
          <div
            id="mobile-nav"
            className="border-t border-white/10 bg-accent-deep px-5 py-4 md:hidden"
          >
            <nav className="flex flex-col gap-1" aria-label="Mobile">
              {nav.map((item) => {
                const menu = navMenus[item.label] ?? [];
                return (
                  <div key={item.href}>
                    <Link
                      href={item.href}
                      className="block py-2 text-base font-semibold text-white"
                      onClick={() => setOpen(false)}
                    >
                      {item.label}
                    </Link>
                    {menu.length > 0 ? (
                      <ul className="mb-2 ml-3 space-y-1 border-l border-white/15 pl-3">
                        {menu.map((option) => (
                          <li key={option.label}>
                            <Link
                              href={option.href}
                              className="block py-1.5 text-sm text-white/70"
                              onClick={() => setOpen(false)}
                            >
                              {option.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    ) : null}
                  </div>
                );
              })}
              <Link
                href="/contact"
                className="mt-3 rounded-soft bg-white px-4 py-3 text-center text-sm font-semibold text-accent"
                onClick={() => setOpen(false)}
              >
                Talk to us
              </Link>
            </nav>
          </div>
        ) : null}
      </div>
    </header>
  );
}
