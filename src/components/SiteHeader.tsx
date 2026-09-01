"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { KeyboardEvent, useEffect, useRef, useState } from "react";
import { BrandLogo } from "@/components/BrandLogo";
import { nav, navMenus } from "@/content/site";

const linkClass =
  "rounded-sm text-[13px] font-bold uppercase tracking-[0.12em] text-white/90 transition hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [mobileGroup, setMobileGroup] = useState<string | null>(null);
  const navRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    function onKey(event: globalThis.KeyboardEvent) {
      if (event.key === "Escape") {
        setActiveMenu(null);
        setOpen(false);
      }
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    setOpen(false);
    setActiveMenu(null);
    setMobileGroup(null);
  }, [pathname]);

  function isCurrent(href: string) {
    if (href === "/") return pathname === "/";
    if (href.startsWith("/#")) return pathname === "/";
    return pathname === href || pathname.startsWith(`${href}/`);
  }

  function toggleMenu(label: string) {
    setActiveMenu((current) => (current === label ? null : label));
  }

  function onTriggerKey(event: KeyboardEvent<HTMLButtonElement>, label: string) {
    if (event.key === "ArrowDown" || event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      setActiveMenu(label);
    }
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 md:px-5 md:pt-4">
      <div className="mx-auto w-full max-w-6xl overflow-visible rounded-bar border border-white/10 bg-accent shadow-bar backdrop-blur-md">
        <div className="relative flex h-[3.9rem] items-center justify-between gap-6 overflow-visible px-5 md:px-7">
          <div className="relative z-20 flex shrink-0 items-center">
            <BrandLogo height={40} priority />
          </div>

          <nav
            ref={navRef}
            className="relative hidden flex-1 items-center justify-end gap-6 lg:gap-8 md:flex"
            aria-label="Primary"
            onBlur={(event) => {
              if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
                setActiveMenu(null);
              }
            }}
          >
            {nav.map((item) => {
              const menu = navMenus[item.label] ?? [];
              const hasMenu = menu.length > 0;
              const isOpen = activeMenu === item.label;
              const current = isCurrent(item.href);

              if (!hasMenu) {
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`${linkClass} ${current ? "text-white" : ""}`}
                    aria-current={current ? "page" : undefined}
                  >
                    {item.label}
                  </Link>
                );
              }

              return (
                <div
                  key={item.href}
                  className="relative"
                  onMouseEnter={() => setActiveMenu(item.label)}
                  onMouseLeave={() => setActiveMenu(null)}
                >
                  <div className="inline-flex items-center gap-1">
                    <Link
                      href={item.href}
                      className={`${linkClass} ${current ? "text-white" : ""}`}
                      aria-current={current ? "page" : undefined}
                    >
                      {item.label}
                    </Link>
                    <button
                      type="button"
                      className={`${linkClass} px-0.5`}
                      aria-expanded={isOpen}
                      aria-haspopup="true"
                      aria-controls={`menu-${item.label}`}
                      onClick={() => toggleMenu(item.label)}
                      onKeyDown={(event) => onTriggerKey(event, item.label)}
                    >
                      <span className="sr-only">Open {item.label} menu</span>
                      <span
                        aria-hidden
                        className={`text-[10px] transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                      >
                        ▾
                      </span>
                    </button>
                  </div>

                  {isOpen ? (
                    <div
                      id={`menu-${item.label}`}
                      className="absolute left-0 top-full z-50 min-w-[14rem] pt-3"
                    >
                      <ul className="overflow-hidden rounded-soft border border-white/10 bg-accent-deep py-1.5 shadow-lift">
                        {menu.map((option) => (
                          <li key={option.label}>
                            <Link
                              href={option.href}
                              className="block whitespace-nowrap px-4 py-2.5 text-sm font-semibold text-white/90 transition hover:bg-white/10 hover:text-white focus-visible:bg-white/10 focus-visible:outline-none"
                              onClick={() => setActiveMenu(null)}
                            >
                              {option.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : null}
                </div>
              );
            })}
          </nav>

          <div className="relative hidden shrink-0 items-center gap-3 md:flex">
            <Link
              href="/contact"
              className="rounded-soft bg-white px-4 py-2 text-sm font-semibold text-accent shadow-lift transition hover:bg-white/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Talk to us
            </Link>
          </div>

          <button
            type="button"
            className="relative inline-flex items-center justify-center rounded-soft border border-white/25 px-3 py-2 text-sm font-semibold text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white md:hidden"
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
            className="max-h-[calc(100svh-5.5rem)] overflow-y-auto border-t border-white/10 bg-accent-deep px-5 py-4 md:hidden"
          >
            <nav className="flex flex-col gap-1" aria-label="Mobile">
              {nav.map((item) => {
                const menu = navMenus[item.label] ?? [];
                const expanded = mobileGroup === item.label;
                const current = isCurrent(item.href);

                return (
                  <div key={item.href}>
                    <div className="flex items-center justify-between gap-2">
                      <Link
                        href={item.href}
                        className={`block flex-1 py-2 text-base font-semibold ${current ? "text-white" : "text-white/90"}`}
                        aria-current={current ? "page" : undefined}
                        onClick={() => setOpen(false)}
                      >
                        {item.label}
                      </Link>
                      {menu.length > 0 ? (
                        <button
                          type="button"
                          className="px-2 py-2 text-white/80"
                          aria-expanded={expanded}
                          onClick={() =>
                            setMobileGroup((currentGroup) =>
                              currentGroup === item.label ? null : item.label,
                            )
                          }
                        >
                          <span className="sr-only">Toggle {item.label} links</span>
                          <span aria-hidden>{expanded ? "▴" : "▾"}</span>
                        </button>
                      ) : null}
                    </div>
                    {expanded ? (
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
