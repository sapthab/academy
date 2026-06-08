import Link from "next/link";
import { ArrowRight } from "./icons";

export function Pill({
  children,
  tone = "rose",
  className = "",
}: {
  children: React.ReactNode;
  tone?: "rose" | "ghost";
  className?: string;
}) {
  const tones = {
    rose: "bg-rose-tint text-crimson-ink border-crimson/15",
    ghost: "bg-surface text-ink-soft border-line",
  };
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border px-4 py-1.5 font-tech text-[11px] font-medium uppercase tracking-[0.14em] ${tones[tone]} ${className}`}
    >
      <span className="size-1.5 rounded-full bg-crimson pulse-dot" />
      {children}
    </span>
  );
}

export function SectionHead({
  pill,
  title,
  accent,
  body,
  align = "center",
}: {
  pill: string;
  title: string;
  accent?: string;
  body?: string;
  align?: "center" | "left";
}) {
  const isCenter = align === "center";
  return (
    <div className={`reveal max-w-3xl ${isCenter ? "mx-auto text-center" : ""}`}>
      <Pill>{pill}</Pill>
      <h2 className="font-display mt-5 text-balance text-3xl font-bold leading-[1.1] tracking-tight sm:text-4xl lg:text-[2.75rem]">
        {title}{" "}
        {accent ? <span className="font-tech font-semibold text-crimson">{accent}</span> : null}
      </h2>
      {body ? (
        <p className={`mt-4 text-base leading-relaxed text-ink-soft sm:text-lg ${isCenter ? "mx-auto" : ""} max-w-2xl`}>
          {body}
        </p>
      ) : null}
    </div>
  );
}

export function ButtonPrimary({
  href,
  children,
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={`group inline-flex items-center justify-center gap-2.5 rounded-full bg-crimson px-7 py-3.5 text-[15px] font-semibold text-white shadow-[0_10px_30px_-10px_rgba(205,44,44,0.55)] transition-all hover:bg-crimson-deep hover:shadow-[0_14px_34px_-10px_rgba(169,31,36,0.6)] ${className}`}
    >
      {children}
      <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
    </Link>
  );
}

export function ButtonGhost({
  href,
  children,
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center gap-2 rounded-full border border-ink/15 bg-surface px-7 py-3.5 text-[15px] font-semibold text-ink transition-all hover:border-crimson/40 hover:text-crimson ${className}`}
    >
      {children}
    </Link>
  );
}

export function Chip({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-line bg-surface px-3.5 py-1.5 text-[13px] font-medium text-ink/80 transition-colors hover:border-crimson/35 hover:text-crimson">
      {children}
    </span>
  );
}
