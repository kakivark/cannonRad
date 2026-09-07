import HeroVideo from "@/components/HeroVideo";
import LoginBox from "@/components/LoginBox";
import TechBackdrop from "@/components/TechBackdrop";
import CountUp from "@/components/CountUp";
import Pillars from "@/components/Pillars";
import Turnaround from "@/components/Turnaround";
import ReportAccess from "@/components/ReportAccess";
import CoverageScope from "@/components/CoverageScope";
import PainPoints from "@/components/PainPoints";
import Platform from "@/components/Platform";
import Testimonials from "@/components/Testimonials";
import { cta, hero, platform, site, stats } from "@/lib/content";

const mailto = (subject: string) =>
  `mailto:${site.contactEmail}?subject=${encodeURIComponent(subject)}`;

export default function Home() {
  return (
    <main className="relative">
      {/* ===================== HERO ===================== */}
      <section className="relative h-[100svh] min-h-[660px] w-full overflow-hidden">
        <HeroVideo />

        {/* Top bar: brand (left) and legacy link (right), with login beneath */}
        <div className="pointer-events-none absolute left-0 right-0 top-0 z-20 p-5 md:p-8">
          <div className="flex items-center justify-between gap-4">
            <div className="pointer-events-auto">
              <Brand />
            </div>

            <a
              href={site.legacySiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="pointer-events-auto group inline-flex shrink-0 items-center gap-1.5 whitespace-nowrap rounded-full border border-white/10 bg-black/40 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.12em] text-white/55 backdrop-blur transition hover:border-white/30 hover:text-white sm:text-[11px] sm:tracking-[0.2em]"
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

          <div className="pointer-events-auto mt-4">
            <LoginBox />
          </div>
        </div>

        {/* Headline. The top padding on this flex container shrinks the region
            the content centers within, so the eyebrow always clears the login
            card even on short large-screen viewports. */}
        <div className="pointer-events-none absolute inset-0 z-10 flex items-end md:items-center md:pb-16 md:pt-64">
          <div className="mx-auto w-full max-w-6xl px-6 pb-36 md:pb-0">
            <div className="pointer-events-auto inline-flex items-center gap-2 rounded-full border border-cyan-400/25 bg-cyan-400/5 px-3 py-1 backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_2px_rgba(34,211,238,0.7)]" />
              <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-cyan-200/90">
                {hero.eyebrow}
              </span>
            </div>

            <h1 className="pointer-events-auto mt-5 max-w-4xl text-balance text-4xl font-semibold leading-[1.04] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
              {hero.headlineLead}{" "}
              <span className="bg-gradient-to-r from-cyan-300 via-white to-violet-300 bg-clip-text text-transparent">
                {hero.headlineAccent}
              </span>
            </h1>

            <p className="pointer-events-auto mt-6 max-w-2xl text-base leading-relaxed text-white/70 md:text-lg">
              {hero.subhead}
            </p>

            <div className="pointer-events-auto mt-8 flex flex-wrap items-center gap-3">
              <a
                href={mailto("Radiology coverage inquiry")}
                className="rounded-md bg-cyan-400 px-5 py-2.5 text-sm font-semibold uppercase tracking-wider text-black transition hover:bg-cyan-300"
              >
                {hero.primaryCta.label}
              </a>
              <a
                href={hero.secondaryCta.href}
                className="rounded-md border border-white/20 px-5 py-2.5 text-sm font-semibold uppercase tracking-wider text-white/85 backdrop-blur transition hover:border-white/50 hover:text-white"
              >
                {hero.secondaryCta.label}
              </a>
            </div>
          </div>
        </div>

        {/* Scroll prompt */}
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

        <div className="scan-line" aria-hidden />
      </section>

      {/* ===================== STATS ===================== */}
      <Section id="impact" backdrop="canvas">
        <SectionLabel>By the numbers</SectionLabel>
        <SectionHeading>
          Coverage at scale, proven by volume.
        </SectionHeading>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s) => (
            <div
              key={s.label}
              className="rounded-2xl border border-white/10 bg-white/[0.02] p-7 backdrop-blur-sm"
            >
              <div className="text-4xl font-semibold tracking-tight text-white md:text-5xl">
                {s.display ? (
                  <StaticStat text={s.display} />
                ) : (
                  <>
                    <CountUp value={s.value ?? 0} decimals={s.decimals ?? 0} />
                    <span className="text-cyan-300">{s.suffix}</span>
                  </>
                )}
              </div>
              <div className="mt-3 text-sm font-medium text-white/85">
                {s.label}
              </div>
              <div className="mt-1 text-sm text-white/50">{s.hint}</div>
            </div>
          ))}
        </div>
      </Section>

      {/* ===================== THREE PILLARS ===================== */}
      <Section id="pillars" backdrop="grid">
        <SectionLabel>What we provide</SectionLabel>
        <SectionHeading>
          Radiology as a complete service —{" "}
          <Accent>reads, turnaround, and access.</Accent>
        </SectionHeading>
        <SectionLede>
          Most vendors sell you software and leave the hard part to you.
          Cannonrad delivers the interpretation, the clock, and the last mile to
          everyone who needs the result.
        </SectionLede>

        <div className="mt-14">
          <Pillars />
        </div>
      </Section>

      {/* ===================== TURNAROUND ===================== */}
      <Section id="turnaround" backdrop="canvas">
        <SectionLabel>Turnaround</SectionLabel>
        <SectionHeading>
          Reads come back on a clock you can <Accent>plan around.</Accent>
        </SectionHeading>
        <SectionLede>
          Turnaround targets are contracted per study priority and tracked live.
          You should never have to ask where a report is.
        </SectionLede>

        <div className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-[1.35fr_1fr] lg:items-start">
          <Turnaround />

          <div className="space-y-4">
            <Callout
              title="Escalation is built in, not bolted on"
              body="Critical findings trigger direct provider contact with a closed-loop acknowledgement record — so a finding is never merely posted and forgotten."
            />
            <Callout
              title="Surges absorbed, targets held"
              body="An elastic reader pool means a seasonal spike or a new scanner coming online doesn't quietly push your turnaround out."
            />
            <Callout
              title="You see the same numbers we do"
              body="Live turnaround dashboards replace month-end reports, which replaces arguing about performance with just looking at it."
            />
          </div>
        </div>
      </Section>

      {/* ===================== REPORT ACCESS ===================== */}
      <Section id="access" backdrop="grid">
        <SectionLabel>Report access</SectionLabel>
        <SectionHeading>
          A report nobody can reach <Accent>isn&rsquo;t a result.</Accent>
        </SectionHeading>
        <SectionLede>
          Cannonrad treats delivery as part of the read. Every person at your
          organization who needs the report has a frictionless path to it — no
          installs, no phone calls, no support tickets.
        </SectionLede>

        <div className="mt-16">
          <ReportAccess />
        </div>
      </Section>

      {/* ===================== COVERAGE SCOPE ===================== */}
      <Section id="scope" backdrop="canvas">
        <SectionLabel>Scope of coverage</SectionLabel>
        <SectionHeading>
          Every modality. Every subspecialty. <Accent>Every hour.</Accent>
        </SectionHeading>
        <SectionLede>
          Board-certified, US-licensed radiologists credentialed in the states
          you operate in — reading the full breadth of your volume.
        </SectionLede>

        <div className="mt-14">
          <CoverageScope />
        </div>
      </Section>

      {/* ===================== PAIN POINTS ===================== */}
      <Section id="why" backdrop="grid">
        <SectionLabel>Why Cannonrad</SectionLabel>
        <SectionHeading>
          The problems radiology directors lose sleep over —{" "}
          <Accent>covered.</Accent>
        </SectionHeading>
        <SectionLede>
          We built our service model by listening to the people running imaging
          operations every day. Each of these is a direct response to a real
          complaint.
        </SectionLede>

        <div className="mt-14">
          <PainPoints />
        </div>
      </Section>

      {/* ===================== PLATFORM (PACS, demoted) ===================== */}
      <Section id="platform" backdrop="canvas">
        <SectionLabel>{platform.kicker}</SectionLabel>
        <SectionHeading>{platform.title}</SectionHeading>
        <SectionLede>{platform.body}</SectionLede>

        <div className="mt-12">
          <Platform />
        </div>
      </Section>

      {/* ===================== TESTIMONIALS ===================== */}
      <section className="relative isolate overflow-hidden border-t border-white/5 py-28 md:py-36">
        <TechBackdrop />
        <div className="relative mx-auto max-w-6xl px-6">
          <SectionLabel>Reputation</SectionLabel>
          <SectionHeading>What our customers say.</SectionHeading>
          <SectionLede>
            Reliability isn&rsquo;t a slogan &mdash; it&rsquo;s what gets us
            invited back.
          </SectionLede>
        </div>

        <div className="relative mt-14">
          <Testimonials />
        </div>
      </section>

      {/* ===================== CTA ===================== */}
      <section
        id="contact"
        className="relative isolate overflow-hidden border-t border-white/5 py-28"
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(34,211,238,0.09),transparent_60%)]" />
        <div className="relative mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-white md:text-5xl">
            {cta.title}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-white/60">{cta.body}</p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <a
              href={mailto("Radiology coverage inquiry")}
              className="rounded-md bg-cyan-400 px-6 py-3 text-sm font-semibold uppercase tracking-wider text-black transition hover:bg-cyan-300"
            >
              {cta.primary.label}
            </a>
            <a
              href={`mailto:${site.contactEmail}`}
              className="rounded-md border border-white/15 px-6 py-3 text-sm font-semibold uppercase tracking-wider text-white/80 transition hover:border-white/40 hover:text-white"
            >
              {cta.secondary.label}
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/5 py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 text-xs text-white/40 md:flex-row">
          <div className="flex items-center gap-2">
            <BrandMark className="h-4 w-4" />
            <span>
              © {new Date().getFullYear()} {site.company}. All rights reserved.
            </span>
          </div>
          <div className="flex items-center gap-5">
            <a href={site.legacySiteUrl} className="hover:text-white/80">
              Legacy site
            </a>
            <a
              href={`mailto:${site.contactEmail}`}
              className="hover:text-white/80"
            >
              {site.contactEmail}
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}

/* ---------- layout helpers ---------- */

function Section({
  id,
  backdrop,
  children,
}: {
  id?: string;
  backdrop: "canvas" | "grid";
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      className="relative isolate overflow-hidden border-t border-white/5 py-28 md:py-36"
    >
      {backdrop === "canvas" ? (
        <TechBackdrop />
      ) : (
        <div className="tech-grid absolute inset-0 opacity-60" aria-hidden />
      )}
      <div className="relative mx-auto max-w-6xl px-6">{children}</div>
    </section>
  );
}

/** Renders a fixed stat string, tinting the separators to match the counters. */
function StaticStat({ text }: { text: string }) {
  const [head, ...rest] = text.split("/");
  return (
    <>
      {head}
      {rest.map((part) => (
        <span key={part} className="text-cyan-300">
          /{part}
        </span>
      ))}
    </>
  );
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mt-3 max-w-3xl text-3xl font-semibold leading-tight tracking-tight text-white md:text-5xl">
      {children}
    </h2>
  );
}

function SectionLede({ children }: { children: React.ReactNode }) {
  return <p className="mt-4 max-w-2xl text-white/60">{children}</p>;
}

function Accent({ children }: { children: React.ReactNode }) {
  return (
    <span className="bg-gradient-to-r from-cyan-300 to-violet-300 bg-clip-text text-transparent">
      {children}
    </span>
  );
}

function Callout({ title, body }: { title: string; body: string }) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/[0.02] p-5 backdrop-blur-sm">
      <h3 className="text-sm font-semibold text-white">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-white/60">{body}</p>
    </div>
  );
}

function Brand() {
  return (
    <div className="flex items-center gap-2">
      <BrandMark className="h-6 w-6" />
      <div className="leading-none">
        <div className="text-sm font-semibold tracking-wide text-white">
          {site.brand}
        </div>
        <div className="font-mono text-[9px] uppercase tracking-[0.12em] text-white/50 sm:tracking-[0.25em]">
          {site.tagline}
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
