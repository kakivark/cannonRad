"use client";

import { motion } from "framer-motion";
import { platform } from "@/lib/content";

/**
 * CORE PACS, intentionally positioned as supporting infrastructure rather than
 * the headline offering.
 */
export default function Platform() {
  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {platform.features.map((f, i) => (
        <motion.div
          key={f.title}
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 0.5, delay: (i % 3) * 0.07 }}
          className="rounded-xl border border-white/[0.08] bg-white/[0.015] p-5"
        >
          <div className="flex items-center gap-2">
            <span className="h-1 w-1 rounded-full bg-cyan-400" />
            <h3 className="text-sm font-semibold text-white/90">{f.title}</h3>
          </div>
          <p className="mt-2.5 text-sm leading-relaxed text-white/55">{f.body}</p>
        </motion.div>
      ))}
    </div>
  );
}
