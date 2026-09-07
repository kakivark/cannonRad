"use client";

import { motion } from "framer-motion";

type Service = {
  title: string;
  blurb: string;
  icon: React.ReactNode;
};

const services: Service[] = [
  {
    title: "CORE PACS",
    blurb:
      "Our high-availability, streaming-first PACS. Instant study open, intelligent prefetch, and one worklist across every site.",
    icon: <IconLayers />,
  },
  {
    title: "RIS & workflow",
    blurb:
      "Scheduling, worklists, reporting, and billing hooks that bend to your protocols — one operational backbone across facilities.",
    icon: <IconClipboard />,
  },
  {
    title: "Hosting, IT & uptime",
    blurb:
      "We run the infrastructure so you don't have to — secure hosting, monitoring, and on-call engineers keeping reads moving.",
    icon: <IconServer />,
  },
  {
    title: "AI, integrated",
    blurb:
      "A model-agnostic inference layer drops results straight into the worklist — bring the AI you trust, no extra tabs.",
    icon: <IconCpu />,
  },
  {
    title: "Migration & support",
    blurb:
      "DICOM-first migrations in and out, transparent pricing, and real engineers on the phone. Your data stays yours.",
    icon: <IconLifebuoy />,
  },
];

const readingHighlights = [
  "Final & preliminary reads",
  "STAT / emergent turnaround",
  "Subspecialty coverage",
  "US board-certified, ABR radiologists",
  "Multi-state licensing",
  "Overflow, nighthawk & full outsourcing",
];

export default function Services() {
  return (
    <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
      {/* Lead card: 24/7/365 Reading Services — the headline offering */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10% 0px" }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="relative overflow-hidden rounded-2xl border border-cyan-400/30 bg-gradient-to-br from-cyan-400/[0.08] via-white/[0.02] to-transparent p-8 lg:col-span-2 lg:row-span-2"
      >
        <div className="absolute -right-16 -top-16 h-52 w-52 rounded-full bg-cyan-400/10 blur-3xl" />
        <div className="relative">
          <div className="mb-5 flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-cyan-400/40 bg-cyan-400/10 text-cyan-300">
              <IconEye />
            </div>
            <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-cyan-300/90">
              Flagship service
            </span>
          </div>

          <h3 className="text-2xl font-semibold tracking-tight text-white md:text-4xl">
            24/7/365 reading services
          </h3>
          <p className="mt-4 max-w-xl text-white/70">
            Hand off your reads — day, night, weekend, and holiday. A deep bench
            of subspecialty radiologists covers your volume around the clock, so
            studies never sit and your team never burns out. This is the core of
            what we do; everything else exists to make the read faster.
          </p>

          <ul className="mt-7 grid grid-cols-1 gap-x-6 gap-y-3 sm:grid-cols-2">
            {readingHighlights.map((h) => (
              <li key={h} className="flex items-start gap-2.5 text-sm text-white/85">
                <CheckIcon />
                <span>{h}</span>
              </li>
            ))}
          </ul>

          <a
            href="mailto:hello@cannonrad.com?subject=24%2F7%20reading%20services"
            className="mt-8 inline-flex items-center gap-1.5 rounded-md bg-cyan-400 px-5 py-2.5 text-sm font-semibold uppercase tracking-wider text-black transition hover:bg-cyan-300"
          >
            Talk to our reading team
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </a>
        </div>
      </motion.div>

      {/* Supporting offerings */}
      {services.map((s, i) => (
        <motion.div
          key={s.title}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 0.6, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
          className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/[0.02] p-6 backdrop-blur-sm transition hover:border-cyan-400/40"
        >
          <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg border border-cyan-400/30 bg-cyan-400/10 text-cyan-300">
            {s.icon}
          </div>
          <h3 className="mb-2 text-lg font-semibold text-white">{s.title}</h3>
          <p className="text-sm leading-relaxed text-white/70">{s.blurb}</p>
        </motion.div>
      ))}
    </div>
  );
}

/* ---------- Icons (inline SVG, no deps) ---------- */

function CheckIcon() {
  return (
    <svg className="mt-0.5 h-4 w-4 shrink-0 text-cyan-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}
function IconEye() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}
function IconLayers() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2 2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
    </svg>
  );
}
function IconClipboard() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <rect x="8" y="3" width="8" height="4" rx="1" />
      <path d="M8 5H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2M9 12h6M9 16h4" />
    </svg>
  );
}
function IconServer() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="7" rx="1.5" />
      <rect x="3" y="13" width="18" height="7" rx="1.5" />
      <path d="M7 7.5h.01M7 16.5h.01" />
    </svg>
  );
}
function IconCpu() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <rect x="6" y="6" width="12" height="12" rx="2" />
      <rect x="9" y="9" width="6" height="6" />
      <path d="M9 2v3M15 2v3M9 19v3M15 19v3M2 9h3M2 15h3M19 9h3M19 15h3" />
    </svg>
  );
}
function IconLifebuoy() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="3.5" />
      <path d="m5 5 3.5 3.5M15.5 15.5 19 19M19 5l-3.5 3.5M8.5 15.5 5 19" />
    </svg>
  );
}
