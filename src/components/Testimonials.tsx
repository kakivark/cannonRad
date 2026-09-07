"use client";

const testimonials = [
  {
    quote:
      "Cannonrad reads our overnights and holidays so my team doesn't burn out. STAT turnaround is faster now than when we staffed it ourselves.",
    author: "Chief of Radiology",
    org: "Regional hospital system",
  },
  {
    quote:
      "One partner for the reads, the PACS, and the hosting. One number to call. It ended the vendor finger-pointing overnight.",
    author: "VP, Radiology Operations",
    org: "National teleradiology group",
  },
  {
    quote:
      "The subspecialty coverage is the real deal — MSK, neuro, body, peds — final reads, not just prelims. Our referrers noticed.",
    author: "Medical Director",
    org: "Multi-site outpatient network",
  },
  {
    quote:
      "Switching to Cannonrad CORE PACS was the cleanest cutover we've ever had. Studies open instantly and priors are just there.",
    author: "Imaging Director",
    org: "Regional hospital system",
  },
  {
    quote:
      "Transparent pricing, open standards, real engineers on the phone. That's a rare trifecta in this industry.",
    author: "CIO",
    org: "Independent imaging center",
  },
];

export default function Testimonials() {
  // Duplicate for seamless marquee
  const items = [...testimonials, ...testimonials];
  return (
    <div className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-black to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-black to-transparent" />

      <div className="marquee-track flex w-max gap-5">
        {items.map((t, i) => (
          <figure
            key={i}
            className="w-[360px] shrink-0 rounded-xl border border-white/10 bg-white/[0.02] p-6 backdrop-blur-sm"
          >
            <svg
              className="mb-4 h-5 w-5 text-cyan-300/70"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M7 7h4v4H7v3a4 4 0 0 0 4 4v2a6 6 0 0 1-6-6V9a2 2 0 0 1 2-2zm10 0h4v4h-4v3a4 4 0 0 0 4 4v2a6 6 0 0 1-6-6V9a2 2 0 0 1 2-2z" />
            </svg>
            <blockquote className="text-sm leading-relaxed text-white/85">
              &ldquo;{t.quote}&rdquo;
            </blockquote>
            <figcaption className="mt-4 text-xs text-white/50">
              <span className="text-white/80">{t.author}</span> — {t.org}
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}
