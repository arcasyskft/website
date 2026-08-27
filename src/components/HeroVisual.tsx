"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const photos = [
  { src: "/hero/rack.jpg", alt: "Server rack aisle atmosphere" },
  { src: "/hero/gpu.jpg", alt: "Accelerator hardware detail" },
  { src: "/hero/network.jpg", alt: "Network fabric atmosphere" },
] as const;

const INTERVAL_MS = 5000;

export function HeroVisual() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const id = window.setInterval(() => {
      setIndex((current) => (current + 1) % photos.length);
    }, INTERVAL_MS);

    return () => window.clearInterval(id);
  }, []);

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden" aria-hidden>
      {photos.map((photo, i) => (
        <Image
          key={photo.src}
          src={photo.src}
          alt=""
          fill
          priority={i === 0}
          sizes="100vw"
          className={`scale-105 object-cover transition-opacity duration-1000 ease-out motion-reduce:transition-none ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      {/* Copy readability on the left */}
      <div className="absolute inset-0 bg-black/20" />
      <div className="absolute inset-y-0 left-0 w-full max-w-3xl bg-gradient-to-r from-black/50 via-black/20 to-transparent" />

      {/* Soft blend into the white page below */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[42%] bg-gradient-to-t from-white from-15% via-white/80 via-45% to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white to-transparent" />

      <div className="absolute bottom-[18%] right-6 z-10 flex gap-1.5 md:right-8">
        {photos.map((photo, i) => (
          <span
            key={photo.src}
            className={`h-1.5 w-1.5 rounded-full transition ${
              i === index ? "bg-accent/80" : "bg-accent/25"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
