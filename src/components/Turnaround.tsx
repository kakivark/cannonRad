"use client";

import { motion } from "framer-motion";
import { turnaroundTiers } from "@/lib/content";

/**
 * Turnaround tiers rendered as animated bars. Bar length is driven by each
 * tier's `weight` (relative, purely visual) so STAT reads visibly short and
 * routine reads visibly long without implying a shared linear time axis.
 */
export default function Turnaround() {
  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-sm">
      {turnaroundTiers.map((tier, i) => (
        <motion.div
          key={tier.priority}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 0.5, delay: i * 0.12 }}
          className="group border-b border-white/[0.07] px-6 py-6 last:border-b-0 md:px-8"
        >
          <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
            <div className="font-mono text-[11px] uppercase tracking-[0.24em] text-neutral-400">
              {tier.priority}
            </div>
            <div className="text-2xl font-semibold tracking-tight text-white md:text-3xl">
              {tier.target}
            </div>
          </div>

          {/* Animated bar */}
          <div className="mt-4 h-1.5 w-full overflow-hidden rounded-full bg-white/[0.06]">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: `${tier.weight}%` }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{
                duration: 1.1,
                delay: 0.2 + i * 0.12,
                ease: [0.16, 1, 0.3, 1],
              }}
              className={`h-full rounded-full bg-gradient-to-r ${tier.accent}`}
            />
          </div>

          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-neutral-400">
            {tier.description}
          </p>
        </motion.div>
      ))}
    </div>
  );
}
