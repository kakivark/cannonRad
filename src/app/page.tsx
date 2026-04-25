import HeroVideo from "@/components/HeroVideo";
import LoginBox from "@/components/LoginBox";
import TechBackdrop from "@/components/TechBackdrop";
import CountUp from "@/components/CountUp";
import PainPoints from "@/components/PainPoints";
import Testimonials from "@/components/Testimonials";

const OLD_SITE_URL = "https://old.cannonrad.com"; // TODO: replace with the real legacy URL

export default function Home() {
  return (
    <main className="relative">
      {/* ===================== HERO ===================== */}
      <section className="relative h-[100svh] min-h-[640px] w-full overflow-hidden">
        <HeroVideo />

        {/* Top-left: brand + login */}
        <div className="pointer-events-none absolute left-0 right-0 top-0 z-20 p-5 md:p-8">
          <div className="flex items-start justify-between gap-6">
            <div className="pointer-events-auto flex flex-col gap-4">
              <Brand />
              <LoginBox />
            </div>

            {/* Top-right: subtle link to the old website */}
            <a
              href={OLD_SITE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="pointer-events-auto group inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-black/40 px-3 py-1.5 text-[11px] font-mono uppercase tracking-[0.2em] text-white/55 backdrop-blur transition hover:border-white/30 hover:text-white"
            >
              <span>Legacy site</span>
              <svg
                width="11"
                height="11"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="translate-y-[1px] transition group-hover:translate-x-0.5"
              >
                <path d="M7 17 17 7M9 7h8v8" />
              </svg>
            </a>
          </div>
        </div>

        {/* Center headline */}
        <div className="pointer-events-none absolute inset-0 z-10 flex items-end md:items-center">
          <div className="mx-auto w-full max-w-6xl px-6 pb-32 md:pb-0">
            <h1 className="pointer-events-auto max-w-3xl text-balance text-4xl font-semibold leading-[1.05] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
              RIS / PACS,{" "}
              <span className="bg-gradient-to-r from-cyan-300 via-white to-violet-300 bg-clip-text text-transparent">
                reimagined.
              </span>
            </h1>
            <p className="pointer-events-auto mt-5 max-w-xl text-base text-white/70 md:text-lg">
              Cannonrad CORE PACS — built for the way modern radiology actually
              works. Faster reads, fewer headaches, zero compromises.
            </p>
          </div>
        </div>

        {/* Bottom: scroll prompt */}
        <a
          href="#impact"
          aria-label="Scroll down"
          className="absolute bottom-6 left-1/2 z-20 -translate-x-1/2 text-center text-white/70 transition hover:text-white"
        >
          <div className="font-mono text-[10px] uppercase tracking-[0.3em]">
            Scroll
          </div>
          <div className="chev-bounce mt-2 inline-flex">
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M6 9l6 6 6-6" />
            </svg>
          </div>
        </a>

        {/* Subtle radiology "scan line" overlay */}
        <div className="scan-line" aria-hidden />
      </section>

      {/* ===================== IMPACT / STATS ===================== */}
      <section
        id="impact"
        className="relative isolate overflow-hidden border-t border-white/5 py-28 md:py-36"
      >
        <TechBackdrop />
        <div className="relative mx-auto max-w-6xl px-6">
          <SectionLabel>By the numbers</SectionLabel>
          <h2 className="mt-3 max-w-3xl text-3xl font-semibold leading-tight tracking-tight text-white md:text-5xl">
            Trusted at scale by the people who actually read the studies.
          </h2>

          <div className="mt-16 grid grid-cols-1 gap-10 sm:grid-cols-2">
            <Stat
              value={
                <>
                  <CountUp value={6.8} decimals={1} duration={2.4} />
                  <span className="text-cyan-300">M+</span>
                </>
              }
              label="Studies completed"
              hint="Across modalities, sites, and timezones."
            />
            <Stat
              value={
                <>
                  <CountUp value={600} duration={2.0} />
                  <span className="text-cyan-300">+</span>
                </>
              }
              label="Active sites"
              hint="From single-suite imaging centers to nationwide networks."
            />
          </div>
        </div>
      </section>

      {/* ===================== PAIN POINTS ===================== */}
      <section className="relative isolate overflow-hidden border-t border-white/5 py-28 md:py-36">
        <div className="tech-grid absolute inset-0 opacity-60" aria-hidden />
        <div className="relative mx-auto max-w-6xl px-6">
          <SectionLabel>Why CORE PACS</SectionLabel>
          <h2 className="mt-3 max-w-3xl text-3xl font-semibold leading-tight tracking-tight text-white md:text-5xl">
            The problems radiology directors lose sleep over —{" "}
            <span className="bg-gradient-to-r from-cyan-300 to-violet-300 bg-clip-text text-transparent">
              solved by design.
            </span>
          </h2>
          <p className="mt-4 max-w-2xl text-white/60">
            We built CORE PACS by listening to the people running imaging
            operations every day. Every feature is a direct response to a real
            pain point.
          </p>

          <div className="mt-14">
            <PainPoints />
          </div>
        </div>
      </section>

      {/* ===================== TESTIMONIALS ===================== */}
      <section className="relative isolate overflow-hidden border-t border-white/5 py-28 md:py-36">
        <TechBackdrop />
        <div className="relative mx-auto max-w-6xl px-6">
          <SectionLabel>Reputation</SectionLabel>
          <h2 className="mt-3 max-w-3xl text-3xl font-semibold leading-tight tracking-tight text-white md:text-5xl">
            What our customers say.
          </h2>
          <p className="mt-4 max-w-2xl text-white/60">
            Reliability isn&rsquo;t a slogan &mdash; it&rsquo;s what gets us invited back.
          </p>
        </div>

        <div className="relative mt-14">
          <Testimonials />
        </div>
      </section>

      {/* ===================== CTA / FOOTER ===================== */}
      <section className="relative isolate overflow-hidden border-t border-white/5 py-24">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(34,211,238,0.08),transparent_60%)]" />
        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <h3 className="text-2xl font-semibold tracking-tight text-white md:text-4xl">
            Ready to see CORE PACS in action?
          </h3>
          <p className="mx-auto mt-3 max-w-xl text-white/60">
            We&rsquo;ll walk you through a live environment with your workflows
            in mind.
          </p>
          <div className="mt-8 flex items-center justify-center gap-3">
            <a
              href="mailto:hello@cannonrad.com?subject=CORE%20PACS%20demo%20request"
              className="rounded-md bg-cyan-400 px-5 py-2.5 text-sm font-semibold uppercase tracking-wider text-black transition hover:bg-cyan-300"
            >
              Request a demo
            </a>
            <a
              href="mailto:hello@cannonrad.com"
              className="rounded-md border border-white/15 px-5 py-2.5 text-sm font-semibold uppercase tracking-wider text-white/80 transition hover:border-white/40 hover:text-white"
            >
              Contact us
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/5 py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 text-xs text-white/40 md:flex-row">
          <div className="flex items-center gap-2">
            <BrandMark className="h-4 w-4" />
            <span>© {new Date().getFullYear()} Cannonrad, LLC. All rights reserved.</span>
          </div>
          <div className="flex items-center gap-5">
            <a href={OLD_SITE_URL} className="hover:text-white/80">
              Legacy site
            </a>
            <a href="mailto:hello@cannonrad.com" className="hover:text-white/80">
              hello@cannonrad.com
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}

/* ---------- small subcomponents ---------- */

function Brand() {
  return (
    <div className="flex items-center gap-2">
      <BrandMark className="h-6 w-6" />
      <div className="leading-none">
        <div className="text-sm font-semibold tracking-wide text-white">
          CANNONRAD
        </div>
        <div className="font-mono text-[9px] uppercase tracking-[0.25em] text-white/50">
          RIS · PACS · CORE
        </div>
      </div>
    </div>
  );
}

function BrandMark({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      className={className}
      aria-hidden
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <defs>
        <linearGradient id="cnr-grad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#22d3ee" />
          <stop offset="100%" stopColor="#a78bfa" />
        </linearGradient>
      </defs>
      <circle cx="16" cy="16" r="13" stroke="url(#cnr-grad)" />
      <circle cx="16" cy="16" r="7" stroke="url(#cnr-grad)" opacity="0.7" />
      <circle cx="16" cy="16" r="2" fill="url(#cnr-grad)" stroke="none" />
      <path d="M16 1.5v6M16 24.5v6M1.5 16h6M24.5 16h6" stroke="url(#cnr-grad)" />
    </svg>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2">
      <span className="h-px w-8 bg-cyan-400/50" />
      <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-cyan-300/80">
        {children}
      </span>
    </div>
  );
}

function Stat({
  value,
  label,
  hint,
}: {
  value: React.ReactNode;
  label: string;
  hint?: string;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-8 backdrop-blur-sm">
      <div className="text-5xl font-semibold tracking-tight text-white md:text-7xl">
        {value}
      </div>
      <div className="mt-3 text-base font-medium text-white/85">{label}</div>
      {hint && <div className="mt-1 text-sm text-white/50">{hint}</div>}
    </div>
  );
}
