/**
 * Single source of truth for site copy and numbers.
 *
 * Anything marked PLACEHOLDER needs real data from Cannonrad before launch.
 * Editing this file is enough to change the site — no component edits required.
 */

export const site = {
  company: "Cannonrad, LLC",
  brand: "CANNONRAD",
  tagline: "READS · TURNAROUND · ACCESS",
  contactEmail: "hello@cannonrad.com", // PLACEHOLDER
  phone: "", // PLACEHOLDER — shown in the header/footer when set
  legacySiteUrl: "https://old.cannonrad.com", // PLACEHOLDER
};

export const hero = {
  eyebrow: "Full-service radiology",
  headlineLead: "Every study read.",
  headlineAccent: "Every report, everywhere.",
  subhead:
    "Cannonrad provides complete radiology coverage — board-certified radiologists reading around the clock, turnaround times you can schedule around, and reports that reach everyone who needs them.",
  primaryCta: { label: "Talk to us", href: "#contact" },
  secondaryCta: { label: "How coverage works", href: "#pillars" },
};

/** Headline metrics. Replace with exact figures when available. */
export const stats = [
  {
    value: 6.8,
    decimals: 1,
    suffix: "M+",
    label: "Studies read",
    hint: "Across every modality, site type, and time zone.",
  },
  {
    value: 600,
    decimals: 0,
    suffix: "+",
    label: "Active sites",
    hint: "From single-suite imaging centers to nationwide networks.",
  },
  {
    value: 24,
    decimals: 0,
    suffix: "/7/365",
    label: "Coverage",
    hint: "Nights, weekends, and holidays are not exceptions — they're the baseline.",
  },
  {
    value: 100,
    decimals: 0,
    suffix: "%",
    label: "Board-certified readers",
    hint: "US-licensed, state-credentialed, subspecialty-matched.",
  },
];

/** The three things Cannonrad sells, in priority order. */
export const pillars = [
  {
    id: "coverage",
    kicker: "01 — The reads",
    title: "Full radiology reading coverage",
    body: "Board-certified, US-licensed radiologists cover your entire volume — final reads, preliminary reads, overflow, nights, weekends, and holidays. Subspecialty studies route to a subspecialist, not to whoever is awake.",
    points: [
      "Final and preliminary interpretations",
      "Subspecialty-matched assignment",
      "Overflow, after-hours, and full-service models",
      "Credentialing and state licensure handled",
    ],
  },
  {
    id: "turnaround",
    kicker: "02 — The clock",
    title: "Turnaround you can schedule around",
    body: "Turnaround time is a commitment, not a hope. STAT studies are read in minutes, routine studies inside your service window — and you can see the clock in real time rather than finding out after the fact.",
    points: [
      "Contracted TAT targets by study priority",
      "Live TAT dashboards, not month-end surprises",
      "Escalation paths for critical findings",
      "Volume surges absorbed without TAT drift",
    ],
  },
  {
    id: "access",
    kicker: "03 — The report",
    title: "Reports that reach everyone",
    body: "A finished report is worthless if the person who needs it cannot get to it. Cannonrad puts the report in front of referring providers, ED staff, front-office teams, and patients — on any device, without a support ticket.",
    points: [
      "Referring-provider portal, no install required",
      "Delivered into your EHR, plus fax and secure message",
      "Images and report together, not in two systems",
      "Role-based access with a full audit trail",
    ],
  },
];

/** Turnaround tiers. Replace the target values with your contracted numbers. */
export const turnaroundTiers = [
  {
    priority: "STAT",
    target: "< 15 min",
    // Bar fill 0-100, relative to the slowest tier. Purely visual.
    weight: 6,
    description:
      "Emergent studies. Read immediately, with a direct call for critical findings.",
    accent: "from-rose-400 to-orange-300",
  },
  {
    priority: "Urgent",
    target: "< 60 min",
    weight: 22,
    description:
      "Time-sensitive inpatient and ED work that cannot wait for the routine queue.",
    accent: "from-amber-300 to-yellow-200",
  },
  {
    priority: "Routine",
    target: "< 12 hrs",
    weight: 62,
    description:
      "Scheduled outpatient volume, returned well inside the next business cycle.",
    accent: "from-cyan-300 to-sky-200",
  },
  {
    priority: "Overnight",
    target: "< 30 min",
    weight: 12,
    description:
      "Nighthawk coverage with the same reader quality as your daytime service.",
    accent: "from-violet-300 to-fuchsia-200",
  },
];

/** Who at the client needs the report, and how Cannonrad gets it to them. */
export const accessRoles = [
  {
    role: "Referring physicians",
    need: "The report and the images, the moment they're signed.",
    channel: "Provider portal · EHR result · secure message",
  },
  {
    role: "ED & hospitalists",
    need: "Critical findings communicated, not just posted.",
    channel: "Direct call · STAT notification · live worklist",
  },
  {
    role: "Front office & schedulers",
    need: "Report status without calling the reading group.",
    channel: "Status dashboard · automated notifications",
  },
  {
    role: "Patients",
    need: "Their own results, in plain reach.",
    channel: "Patient release workflow · portal link",
  },
  {
    role: "Billing & compliance",
    need: "Complete, coded, auditable documentation.",
    channel: "Structured reports · audit log · export",
  },
  {
    role: "Radiology leadership",
    need: "Proof the service is performing as contracted.",
    channel: "TAT dashboards · volume reporting · SLA review",
  },
];

/** Problems the buyer actually has, and how Cannonrad answers them. */
export const painPoints = [
  {
    pain: "Coverage gaps at nights and weekends",
    solution:
      "Cannonrad covers the whole calendar. Nights, weekends, and holidays are staffed by the same board-certified bench that reads your daytime volume — no drop in quality when the sun goes down.",
    icon: "clock",
  },
  {
    pain: "Turnaround times that slip without warning",
    solution:
      "Contracted TAT targets per priority, tracked live. You see performance as it happens and we escalate before a study ages out, instead of explaining a miss at the quarterly review.",
    icon: "bolt",
  },
  {
    pain: "Referrers calling the front desk for reports",
    solution:
      "Reports land where referrers already work — their EHR, their inbox, or a zero-install portal. The phone calls stop because the answer is already in front of them.",
    icon: "inbox",
  },
  {
    pain: "Recruiting and credentialing radiologists",
    solution:
      "We carry the bench, the state licenses, and the credentialing paperwork. You get coverage without owning a recruiting pipeline or a malpractice conversation.",
    icon: "badge",
  },
  {
    pain: "Unread backlogs and volume spikes",
    solution:
      "A shared, elastic reader pool absorbs surges. Seasonal spikes, a scanner coming online, or a colleague out sick stop being staffing emergencies.",
    icon: "stack",
  },
  {
    pain: "Subspecialty studies read by generalists",
    solution:
      "Neuro, MSK, body, breast, cardiac, and pediatric studies route to a matched subspecialist automatically — so the read is right the first time.",
    icon: "target",
  },
  {
    pain: "Juggling a reading group and a PACS vendor",
    solution:
      "One accountable partner for reads and imaging infrastructure. When something breaks, there is nobody to point at but us — and that is the point.",
    icon: "link",
  },
  {
    pain: "Critical findings that don't get communicated",
    solution:
      "Critical results follow a documented escalation path with direct provider contact and a closed-loop acknowledgement record.",
    icon: "shield",
  },
];

/** Subspecialty reading coverage. */
export const subspecialties = [
  "Neuroradiology",
  "Musculoskeletal",
  "Body / abdominal",
  "Breast imaging",
  "Cardiothoracic",
  "Pediatric",
  "Emergency radiology",
  "Nuclear medicine",
  "Women's imaging",
  "Interventional consult",
];

/** Modalities read. */
export const modalities = [
  "CT",
  "MRI",
  "X-ray",
  "Ultrasound",
  "Mammography",
  "Nuclear medicine",
  "PET/CT",
  "DEXA",
  "Fluoroscopy",
  "Echo",
];

/** Supporting technology — CORE PACS is now infrastructure, not the headline. */
export const platform = {
  kicker: "Included, not upsold",
  title: "CORE PACS comes with the service",
  body: "Cannonrad CORE PACS is the imaging backbone underneath the reads. You can run it as your primary PACS or keep your own — either way, the reading service and the technology are one contract and one accountable partner.",
  features: [
    {
      title: "Bring your PACS or use ours",
      body: "DICOM-first and standards-based. We integrate with what you have, or replace it if you'd rather we did.",
    },
    {
      title: "Priors where they belong",
      body: "Intelligent prefetch and streaming delivery put relevant priors in front of the radiologist before they click.",
    },
    {
      title: "Built for uptime",
      body: "Active-active failover so reads keep moving even when something upstream blinks.",
    },
    {
      title: "HIPAA-aligned by default",
      body: "Encryption in transit and at rest, role-based access, and complete audit trails — no bolt-ons required.",
    },
    {
      title: "Open integration",
      body: "HL7 and FHIR interfaces into your EHR and RIS, plus APIs when you need something custom.",
    },
    {
      title: "AI-ready, not AI-locked",
      body: "A model-agnostic inference layer means results land in the worklist rather than in another tab.",
    },
  ],
};

/**
 * PLACEHOLDER testimonials — deliberately generic so they cannot be mistaken
 * for real attributed quotes. Replace with approved customer language.
 */
export const testimonials = [
  {
    quote:
      "They took over our entire read volume and our turnaround actually improved. We stopped triaging coverage and went back to running the department.",
    author: "Imaging Director",
    org: "Multi-site outpatient network",
  },
  {
    quote:
      "Our referrers used to call the front desk hunting for reports. That stopped almost overnight once results started landing in their EHR.",
    author: "Practice Administrator",
    org: "Orthopedic specialty group",
  },
  {
    quote:
      "Overnight coverage reads like our daytime coverage. Same quality, same responsiveness, and a real radiologist on the phone for critical findings.",
    author: "ED Medical Director",
    org: "Regional hospital system",
  },
  {
    quote:
      "One partner for the reads and the imaging platform removed an entire category of finger-pointing from my week.",
    author: "VP, Radiology Operations",
    org: "National imaging group",
  },
  {
    quote:
      "We can see turnaround performance live instead of arguing about it at the quarterly review. That transparency built the trust.",
    author: "Chief of Radiology",
    org: "Academic medical center",
  },
];

export const cta = {
  title: "Let's talk about your coverage.",
  body: "Tell us your volume, your modalities, and where your turnaround hurts. We'll come back with a coverage model and a real TAT commitment.",
  primary: { label: "Request coverage", href: "" }, // href filled from contactEmail
  secondary: { label: "Contact us", href: "" },
};
