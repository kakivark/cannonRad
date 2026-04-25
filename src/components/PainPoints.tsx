"use client";

import { motion } from "framer-motion";

type Pain = {
  pain: string;
  solution: string;
  icon: React.ReactNode;
};

const items: Pain[] = [
  {
    pain: "Downtime kills throughput",
    solution:
      "CORE PACS is engineered for high availability with active-active failover, so reads keep moving — even when something upstream blinks.",
    icon: <IconHeartbeat />,
  },
  {
    pain: "Studies stuck in transit",
    solution:
      "Streaming-first delivery and intelligent prefetch put priors in front of the radiologist before they click.",
    icon: <IconBolt />,
  },
  {
    pain: "Workflow friction across sites",
    solution:
      "One worklist, many facilities. Smart routing, per-site SLAs, and rules that bend to your protocols — not the other way around.",
    icon: <IconNetwork />,
  },
  {
    pain: "Vendor lock-in & opaque pricing",
    solution:
      "DICOM-first, standards-based, and transparent. Migrate in, migrate out — your data is always yours.",
    icon: <IconLock />,
  },
  {
    pain: "Security & compliance overhead",
    solution:
      "HIPAA-aligned by default. Audit trails, encryption in transit and at rest, role-based access — no bolt-ons required.",
    icon: <IconShield />,
  },
  {
    pain: "AI that lives in a silo",
    solution:
      "Open APIs and a model-agnostic inference layer let you bring the AI you trust — results land in the worklist, not in another tab.",
    icon: <IconCpu />,
  },
];

export default function PainPoints() {
  return (
    <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
      {items.map((it, i) => (
        <motion.div
          key={it.pain}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 0.6, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
          className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/[0.02] p-6 backdrop-blur-sm transition hover:border-cyan-400/40"
        >
          <div className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition group-hover:opacity-100"
               style={{
                 background:
                   "radial-gradient(600px circle at var(--mx,50%) var(--my,0%), rgba(34,211,238,0.10), transparent 40%)",
               }}
          />
          <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg border border-cyan-400/30 bg-cyan-400/10 text-cyan-300">
            {it.icon}
          </div>
          <div className="mb-1 font-mono text-[10px] uppercase tracking-[0.2em] text-white/40">
            Pain point
          </div>
          <h3 className="mb-3 text-lg font-semibold text-white">{it.pain}</h3>
          <div className="mb-1 font-mono text-[10px] uppercase tracking-[0.2em] text-cyan-300/80">
            CORE PACS
          </div>
          <p className="text-sm leading-relaxed text-white/70">{it.solution}</p>
        </motion.div>
      ))}
    </div>
  );
}

/* ---------- Icons (inline SVG, no deps) ---------- */

function IconHeartbeat() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 12h4l2-5 4 10 2-5h6" />
    </svg>
  );
}
function IconBolt() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M13 2 4 14h7l-1 8 9-12h-7z" />
    </svg>
  );
}
function IconNetwork() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="5" cy="6" r="2" />
      <circle cx="19" cy="6" r="2" />
      <circle cx="12" cy="18" r="2" />
      <path d="M7 7l4 9M17 7l-4 9M7 6h10" />
    </svg>
  );
}
function IconLock() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <rect x="4" y="11" width="16" height="9" rx="2" />
      <path d="M8 11V8a4 4 0 1 1 8 0v3" />
    </svg>
  );
}
function IconShield() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3 4 6v6c0 5 3.5 8.5 8 9 4.5-.5 8-4 8-9V6l-8-3z" />
      <path d="m9 12 2 2 4-4" />
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
