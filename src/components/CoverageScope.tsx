"use client";

import { motion } from "framer-motion";
import { modalities, subspecialties } from "@/lib/content";

export default function CoverageScope() {
  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
      <ScopeCard
        label="Subspecialty coverage"
        note="Studies route to a matched subspecialist, not to whoever is available."
        items={subspecialties}
      />
      <ScopeCard
        label="Modalities read"
        note="One partner across your entire imaging footprint."
        items={modalities}
        delay={0.12}
      />
    </div>
  );
}

function ScopeCard({
  label,
  note,
  items,
  delay = 0,
}: {
  label: string;
  note: string;
  items: string[];
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
      className="rounded-2xl border border-white/10 bg-white/[0.02] p-7 backdrop-blur-sm"
    >
      <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-cyan-300/80">
        {label}
      </div>
      <p className="mt-3 text-sm text-neutral-400">{note}</p>
      <div className="mt-6 flex flex-wrap gap-2">
        {items.map((item, i) => (
          <motion.span
            key={item}
            initial={{ opacity: 0, scale: 0.94 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 0.35, delay: delay + 0.25 + i * 0.035 }}
            className="rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1.5 text-xs text-neutral-200 transition hover:border-cyan-400/40 hover:text-white"
          >
            {item}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
}
