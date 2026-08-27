import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { contactPage } from "@/content/site";

export const metadata: Metadata = {
  title: contactPage.title,
  description: contactPage.support,
};

export default function ContactPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-white px-5 pb-10 pt-32 md:px-8 md:pb-12 md:pt-40">
        <div className="relative mx-auto max-w-6xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            {contactPage.title}
          </p>
          <h1 className="mt-4 max-w-3xl font-display text-4xl font-semibold tracking-tight text-paper text-balance md:text-5xl">
            {contactPage.headline}
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-mist md:text-lg">
            {contactPage.support}
          </p>
        </div>
      </section>

      <section id="inquiry" className="scroll-mt-28 px-5 pb-24 md:px-8 md:pb-32">
        <div id="details">
          <ContactForm />
        </div>
      </section>
    </>
  );
}
