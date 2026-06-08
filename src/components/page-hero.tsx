import { Pill } from "./ui";

export function PageHero({
  pill,
  title,
  accent,
  body,
  children,
}: {
  pill: string;
  title: string;
  accent?: string;
  body?: string;
  children?: React.ReactNode;
}) {
  return (
    <section className="hero-atmosphere grain relative overflow-hidden border-b border-line/60">
      <div className="mx-auto max-w-7xl px-5 py-16 text-center lg:px-8 lg:py-20">
        <div className="rise rise-1">
          <Pill>{pill}</Pill>
        </div>
        <h1 className="rise rise-2 font-display mx-auto mt-6 max-w-4xl text-balance text-4xl font-bold leading-[1.06] tracking-tight sm:text-5xl lg:text-[3.4rem]">
          {title}{" "}
          {accent ? (
            <span className="font-tech font-semibold text-crimson">{accent}</span>
          ) : null}
        </h1>
        {body ? (
          <p className="rise rise-3 mx-auto mt-5 max-w-2xl text-[16px] leading-relaxed text-ink-soft sm:text-lg">
            {body}
          </p>
        ) : null}
        {children ? <div className="rise rise-4 mt-9">{children}</div> : null}
      </div>
    </section>
  );
}
