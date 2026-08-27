import Image from "next/image";
import Link from "next/link";
import { site } from "@/content/site";

type BrandLogoProps = {
  /** Pixel height of the logo mark */
  height?: number;
  className?: string;
  /** When false, render image only (no link) */
  linked?: boolean;
  priority?: boolean;
};

export function BrandLogo({
  height = 32,
  className = "",
  linked = true,
  priority = false,
}: BrandLogoProps) {
  const width = Math.round(height * 1.35);

  const image = (
    <Image
      src="/brand/arcasys-logo.png"
      alt={site.name}
      width={width}
      height={height}
      priority={priority}
      className={`h-auto w-auto object-contain ${className}`.trim()}
      style={{ height, width: "auto" }}
    />
  );

  if (!linked) return image;

  return (
    <Link
      href="/"
      className="relative inline-flex shrink-0 items-center transition hover:opacity-90"
      aria-label={`${site.name} home`}
    >
      {image}
    </Link>
  );
}
