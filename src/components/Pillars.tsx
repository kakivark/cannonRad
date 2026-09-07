"use client";

import { motion } from "framer-motion";
import { pillars } from "@/lib/content";

const icons: Record<string, React.ReactNode> = {
  coverage: <IconReaders />,
  turnaround: <IconClock />,
  access: <IconShare />,
};

export default function Pillars() {
  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
      {pillars.map((p, i) => (
        <motion.article
          key={p.id}
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 0.65, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-7 backdrop-blur-sm transition hover:border-cyan-400/40"
        >
          {/* top accent line */}
          <span className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent" />

          <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl border border-cyan-400/30 bg-cyan-400/10 text-cyan-300">
            {icons[p.id]}
          </div>

          <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-white/40">
            {p.kicker}
          </div>
          <h3 className="mt-2 text-xl font-semibold leading-snug text-white">
            {p.title}
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-white/65">{p.body}</p>

          <ul className="mt-6 space-y-2.5 border-t border-white/10 pt-5">
            {p.points.map((pt) => (
              <li key={pt} className="flex items-start gap-2.5 text-sm text-white/75">
                <svg
                  className="mt-[3px] h-3.5 w-3.5 shrink-0 text-cyan-300"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m5 13 4 4L19 7" />
                </svg>
                <span>{pt}</span>
              </li>
            ))}
          </ul>
        </motion.article>
      ))}
    </div>
  );
}

function IconReaders() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="9" cy="8" r="3" />
      <path d="M3 20a6 6 0 0 1 12 0" />
      <path d="M16 5.5a3 3 0 0 1 0 5" />
      <path d="M18 14.5a6 6 0 0 1 3 5.5" />
    </svg>
  );
}

function IconClock() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3.5 2" />
    </svg>
  );
}

function IconShare() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="6" cy="12" r="2.5" />
      <circle cx="18" cy="6" r="2.5" />
      <circle cx="18" cy="18" r="2.5" />
      <path d="m8.3 10.8 7.4-3.6M8.3 13.2l7.4 3.6" />
    </svg>
  );
}
