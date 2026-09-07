"use client";

import { motion } from "framer-motion";
import { accessRoles } from "@/lib/content";

/**
 * "Everyone who needs the report, gets the report."
 *
 * On large screens the roles split into two flanking columns with the signed
 * report as a hub in a dedicated centre column. Below `lg` the hub moves inline
 * above a simple stacked/2-up grid so nothing overlaps.
 */
export default function ReportAccess() {
  const mid = Math.ceil(accessRoles.length / 2);
  const left = accessRoles.slice(0, mid);
  const right = accessRoles.slice(mid);

  return (
    <>
      {/* Small / medium: hub on top, then a plain grid */}
      <div className="lg:hidden">
        <div className="mb-8 flex justify-center">
          <Hub />
        </div>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {accessRoles.map((r, i) => (
            <RoleCard key={r.role} role={r} index={i} />
          ))}
        </div>
      </div>

      {/* Large: flanking columns around a centre hub */}
      <div className="hidden lg:grid lg:grid-cols-[1fr_auto_1fr] lg:items-center lg:gap-10">
        <div className="space-y-5">
          {left.map((r, i) => (
            <RoleCard key={r.role} role={r} index={i} align="right" />
          ))}
        </div>

        <div className="relative flex justify-center">
          {/* connective spokes */}
          <span
            aria-hidden
            className="absolute left-1/2 top-1/2 -z-10 h-px w-[calc(100%+5rem)] -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-cyan-400/30 via-cyan-400/60 to-cyan-400/30"
          />
          <Hub />
        </div>

        <div className="space-y-5">
          {right.map((r, i) => (
            <RoleCard key={r.role} role={r} index={i} />
          ))}
        </div>
      </div>
    </>
  );
}

function Hub() {
  return (
    <div className="relative flex h-44 w-44 shrink-0 items-center justify-center rounded-full border border-cyan-400/30 bg-black text-center">
      <span className="absolute inset-0 animate-pulse rounded-full bg-cyan-400/[0.07]" />
      <span
        aria-hidden
        className="absolute -inset-3 rounded-full border border-cyan-400/10"
      />
      <div className="relative px-5">
        <div className="font-mono text-[9px] uppercase tracking-[0.2em] text-cyan-300/80">
          Signed report
        </div>
        <div className="mt-1.5 text-sm font-semibold leading-tight text-white">
          One source,
          <br />
          many doors
        </div>
      </div>
    </div>
  );
}

function RoleCard({
  role,
  index,
  align = "left",
}: {
  role: (typeof accessRoles)[number];
  index: number;
  align?: "left" | "right";
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: align === "right" ? -18 : 18 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{ duration: 0.55, delay: index * 0.09, ease: [0.16, 1, 0.3, 1] }}
      className="rounded-xl border border-white/10 bg-white/[0.02] p-5 backdrop-blur-sm transition hover:border-cyan-400/40"
    >
      <h3 className="text-sm font-semibold text-white">{role.role}</h3>
      <p className="mt-2 text-sm leading-relaxed text-white/60">{role.need}</p>
      <div className="mt-4 border-t border-white/10 pt-3 font-mono text-[10px] uppercase leading-relaxed tracking-[0.14em] text-cyan-300/70">
        {role.channel}
      </div>
    </motion.div>
  );
}
