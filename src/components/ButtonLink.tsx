import Link from "next/link";
import type { ReactNode } from "react";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
};

const variants = {
  primary:
    "bg-accent text-white shadow-lift hover:bg-accent-deep focus-visible:outline-accent",
  secondary:
    "border border-accent/80 text-accent bg-white/80 hover:bg-accent hover:text-white focus-visible:outline-accent",
  ghost:
    "text-mist hover:text-accent underline-offset-4 hover:underline focus-visible:outline-accent",
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className = "",
}: ButtonProps) {
  return (
    <Link
      href={href}
      className={`group inline-flex items-center justify-center gap-2 rounded-soft px-6 py-3.5 text-sm font-semibold tracking-wide transition duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${variants[variant]} ${className}`}
    >
      {children}
      {variant !== "ghost" ? (
        <span
          aria-hidden
          className="translate-x-0 font-mono text-xs transition-transform duration-300 group-hover:translate-x-0.5"
        >
          →
        </span>
      ) : null}
    </Link>
  );
}
