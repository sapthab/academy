import { ButtonGhost, ButtonPrimary, Pill } from "./ui";

export function CtaBand({
  title = "Ready to Start Your AI Career?",
  body = "Batches are capped at 50 students and fill fast. Talk to a counsellor — we'll help you pick the right track, free.",
  primary = { href: "/apply", label: "Apply Now" },
  secondary = { href: "/contact#counselling", label: "Schedule Consultation" },
}: {
  title?: string;
  body?: string;
  primary?: { href: string; label: string };
  secondary?: { href: string; label: string };
}) {
  return (
    <section className="px-5 pb-24 lg:px-8">
      <div className="reveal relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-ink px-6 py-16 text-center sm:px-12 lg:py-20">
        {/* atmosphere */}
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(42rem 22rem at 20% 0%, rgba(205,44,44,0.35), transparent 60%), radial-gradient(36rem 20rem at 85% 100%, rgba(232,163,61,0.18), transparent 60%)",
          }}
        />
        <div
          aria-hidden
          className="absolute inset-0 opacity-[0.12]"
          style={{
            backgroundImage: "radial-gradient(rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "26px 26px",
          }}
        />
        <div className="relative">
          <Pill className="!border-white/15 !bg-white/10 !text-rose-soft">
            Admissions Open · Next Batch
          </Pill>
          <h2 className="font-display mx-auto mt-6 max-w-2xl text-balance text-3xl font-bold leading-[1.08] text-white sm:text-4xl lg:text-5xl">
            {title}
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-[15.5px] leading-relaxed text-white/70">
            {body}
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-3.5 sm:flex-row">
            <ButtonPrimary href={primary.href}>{primary.label}</ButtonPrimary>
            <ButtonGhost
              href={secondary.href}
              className="!border-white/20 !bg-transparent !text-white hover:!border-white/50 hover:!text-white"
            >
              {secondary.label}
            </ButtonGhost>
          </div>
          <p className="font-tech mt-7 text-[11px] uppercase tracking-[0.18em] text-white/40">
            Free counselling · Guaranteed internship · Placement support
          </p>
        </div>
      </div>
    </section>
  );
}
