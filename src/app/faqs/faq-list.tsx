"use client";

import { useState } from "react";
import { faqs } from "@/lib/data";

const groups = [...new Set(faqs.map((f) => f.group))];
const slug = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, "-");

export function FaqList() {
  // Default the first question open; all answers render in the DOM regardless
  // (collapsed via CSS) so the full FAQ text is in the static HTML for SEO.
  const [open, setOpen] = useState<string | null>(faqs[0]?.q ?? null);

  return (
    <div className="grid gap-10 lg:grid-cols-[0.28fr_0.72fr]">
      {/* Group quick-links */}
      <nav className="hidden h-fit lg:sticky lg:top-24 lg:flex lg:flex-col lg:gap-1.5">
        {groups.map((g) => (
          <a
            key={g}
            href={`#faq-${slug(g)}`}
            className="rounded-2xl px-5 py-2.5 text-[14px] font-semibold text-ink/65 transition-colors hover:bg-rose-tint hover:text-crimson"
          >
            {g}
          </a>
        ))}
      </nav>

      {/* All groups + questions rendered (answers always in the DOM) */}
      <div className="space-y-10">
        {groups.map((g) => (
          <div key={g} id={`faq-${slug(g)}`} className="scroll-mt-24">
            <h2 className="font-tech mb-4 text-[12px] font-semibold uppercase tracking-[0.16em] text-crimson">
              {g}
            </h2>
            <div className="space-y-3">
              {faqs
                .filter((f) => f.group === g)
                .map((f) => {
                  const isOpen = open === f.q;
                  return (
                    <div
                      key={f.q}
                      className={`overflow-hidden rounded-2xl border transition-colors ${
                        isOpen ? "border-crimson/30 bg-surface" : "border-line bg-surface"
                      }`}
                    >
                      <button
                        onClick={() => setOpen(isOpen ? null : f.q)}
                        className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                      >
                        <span className="font-display text-[16px] font-bold">{f.q}</span>
                        <span
                          className={`font-tech flex size-7 shrink-0 items-center justify-center rounded-full text-lg leading-none transition-all ${
                            isOpen ? "rotate-45 bg-crimson text-white" : "bg-rose-tint text-crimson"
                          }`}
                        >
                          +
                        </span>
                      </button>
                      <div
                        className={`grid transition-all duration-300 ${
                          isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                        }`}
                      >
                        <div className="overflow-hidden">
                          <p className="px-6 pb-6 text-[14.5px] leading-relaxed text-ink-soft">
                            {f.a}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
