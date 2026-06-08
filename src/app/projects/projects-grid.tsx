"use client";

import { useState } from "react";
import { projects, projectCategories } from "@/lib/data";
import { ArrowRight, Check } from "@/components/icons";

export function ProjectsGrid() {
  const [active, setActive] = useState<string>("All");

  const filtered =
    active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <div>
      {/* Filters */}
      <div className="flex flex-wrap justify-center gap-2.5">
        {projectCategories.map((c) => (
          <button
            key={c}
            onClick={() => setActive(c)}
            className={`rounded-full border px-5 py-2 text-[13.5px] font-semibold transition-all ${
              active === c
                ? "border-crimson bg-crimson text-white shadow-[0_8px_24px_-8px_rgba(205,44,44,0.5)]"
                : "border-line bg-surface text-ink/65 hover:border-crimson/40 hover:text-crimson"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {filtered.map((p) => (
          <article
            key={p.slug}
            className="lift group flex flex-col rounded-3xl border border-line bg-surface p-7"
          >
            <div className="flex items-center justify-between">
              <span className="font-tech rounded-full bg-rose-tint px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-crimson-ink">
                {p.category}
              </span>
              {p.placed && (
                <span className="font-tech inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.08em] text-emerald-600">
                  <Check className="size-3" /> Placed
                </span>
              )}
            </div>

            <h3 className="font-display mt-5 text-[19px] font-bold leading-snug">{p.name}</h3>
            <p className="mt-2.5 flex-1 text-[14px] leading-relaxed text-ink-soft">
              {p.description}
            </p>

            <div className="mt-5 flex flex-wrap gap-1.5">
              {p.tech.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-line px-2.5 py-1 text-[11px] font-medium text-ink/60"
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="mt-6 flex items-end justify-between border-t border-line pt-5">
              <div className="flex items-center gap-2.5">
                <span className="font-display flex size-9 items-center justify-center rounded-full bg-ink text-[12px] font-bold text-white">
                  {p.student.charAt(0)}
                </span>
                <div>
                  <p className="text-[13px] font-semibold leading-tight">{p.student}</p>
                  <p className="text-[11px] text-ink/45">
                    {p.placed ? p.placed : "Student Project"}
                  </p>
                </div>
              </div>
              <ArrowRight className="size-4 text-ink/25 transition-all group-hover:translate-x-1 group-hover:text-crimson" />
            </div>
          </article>
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="mt-16 text-center text-[15px] text-ink-soft">
          Projects in this category are being built by the current batch — check back
          after the next demo day.
        </p>
      )}
    </div>
  );
}
