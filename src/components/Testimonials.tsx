"use client";

import { testimonials } from "@/lib/content";

export default function Testimonials() {
  // Duplicated so the marquee can loop seamlessly at -50%.
  const items = [...testimonials, ...testimonials];

  return (
    <div className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-black to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-black to-transparent" />

      <div className="marquee-track flex w-max gap-5">
        {items.map((t, i) => (
          <figure
            key={i}
            className="w-[380px] shrink-0 rounded-xl border border-white/10 bg-white/[0.02] p-6 backdrop-blur-sm"
          >
            <svg
              className="mb-4 h-5 w-5 text-cyan-300/70"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M7 7h4v4H7v3a4 4 0 0 0 4 4v2a6 6 0 0 1-6-6V9a2 2 0 0 1 2-2zm10 0h4v4h-4v3a4 4 0 0 0 4 4v2a6 6 0 0 1-6-6V9a2 2 0 0 1 2-2z" />
            </svg>
            <blockquote className="text-sm leading-relaxed text-neutral-200">
              &ldquo;{t.quote}&rdquo;
            </blockquote>
            <figcaption className="mt-4 text-xs text-neutral-500">
              <span className="text-neutral-300">{t.author}</span> &mdash; {t.org}
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}
