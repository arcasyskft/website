import Link from "next/link";

export default function NotFound() {
  return (
    <section className="mx-auto flex min-h-[70vh] max-w-6xl flex-col justify-center px-5 py-32 md:px-8">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">404</p>
      <h1 className="mt-4 font-display text-4xl font-semibold text-paper md:text-5xl">
        Page not found
      </h1>
      <p className="mt-4 max-w-md text-mist">
        The page you requested is not part of the ArcaSys site map.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex w-fit items-center rounded-sm bg-accent px-5 py-3 text-sm font-semibold text-white transition hover:bg-accent-deep"
      >
        Back to home →
      </Link>
    </section>
  );
}
