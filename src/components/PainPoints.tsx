"use client";

import { motion } from "framer-motion";
import { painPoints } from "@/lib/content";

export default function PainPoints() {
  return (
    <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
      {painPoints.map((it, i) => (
        <motion.div
          key={it.pain}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 0.6, delay: (i % 4) * 0.06, ease: [0.16, 1, 0.3, 1] }}
          className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/[0.02] p-6 backdrop-blur-sm transition hover:border-cyan-400/40"
        >
          <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg border border-cyan-400/30 bg-cyan-400/10 text-cyan-300">
            <Icon name={it.icon} />
          </div>
          <div className="mb-1 font-mono text-[10px] uppercase tracking-[0.2em] text-white/40">
            Pain point
          </div>
          <h3 className="mb-4 text-base font-semibold leading-snug text-white">
            {it.pain}
          </h3>
          <div className="mb-1 font-mono text-[10px] uppercase tracking-[0.2em] text-cyan-300/80">
            With Cannonrad
          </div>
          <p className="text-sm leading-relaxed text-white/65">{it.solution}</p>
        </motion.div>
      ))}
    </div>
  );
}

function Icon({ name }: { name: string }) {
  const common = {
    width: 20,
    height: 20,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.6,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  switch (name) {
    case "clock":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="9" />
          <path d="M12 7v5l3.5 2" />
        </svg>
      );
    case "bolt":
      return (
        <svg {...common}>
          <path d="M13 2 4 14h7l-1 8 9-12h-7z" />
        </svg>
      );
    case "inbox":
      return (
        <svg {...common}>
          <path d="M3 12h5l2 3h4l2-3h5" />
          <path d="M4 5h16l1 7v6a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-6z" />
        </svg>
      );
    case "badge":
      return (
        <svg {...common}>
          <circle cx="12" cy="9" r="5" />
          <path d="m8.5 13.5-1 7.5 4.5-2.5 4.5 2.5-1-7.5" />
        </svg>
      );
    case "stack":
      return (
        <svg {...common}>
          <path d="m12 3 9 5-9 5-9-5 9-5z" />
          <path d="m3 13 9 5 9-5" />
        </svg>
      );
    case "target":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="9" />
          <circle cx="12" cy="12" r="5" />
          <circle cx="12" cy="12" r="1.5" fill="currentColor" stroke="none" />
        </svg>
      );
    case "link":
      return (
        <svg {...common}>
          <path d="M10 13a5 5 0 0 0 7 0l2-2a5 5 0 0 0-7-7l-1 1" />
          <path d="M14 11a5 5 0 0 0-7 0l-2 2a5 5 0 0 0 7 7l1-1" />
        </svg>
      );
    case "shield":
      return (
        <svg {...common}>
          <path d="M12 3 4 6v6c0 5 3.5 8.5 8 9 4.5-.5 8-4 8-9V6l-8-3z" />
          <path d="M12 8v4M12 15.5v.5" />
        </svg>
      );
    default:
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="9" />
        </svg>
      );
  }
}
