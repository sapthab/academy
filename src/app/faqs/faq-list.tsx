"use client";

import { useState } from "react";
import { faqs } from "@/lib/data";

const groups = [...new Set(faqs.map((f) => f.group))];

export function FaqList() {
  const [activeGroup, setActiveGroup] = useState<string>(groups[0]);
  const [open, setOpen] = useState<number | null>(0);

  const visible = faqs.filter((f) => f.group === activeGroup);

  return (
    <div className="grid gap-10 lg:grid-cols-[0.3fr_0.7fr]">
      {/* Group nav */}
      <nav className="flex flex-row flex-wrap gap-2 lg:flex-col lg:gap-1.5">
        {groups.map((g) => (
          <button
            key={g}
            onClick={() => {
              setActiveGroup(g);
              setOpen(0);
            }}
            className={`rounded-full px-5 py-2.5 text-left text-[14px] font-semibold transition-all lg:rounded-2xl ${
              activeGroup === g
                ? "bg-crimson text-white shadow-[0_8px_24px_-8px_rgba(205,44,44,0.5)]"
                : "bg-surface text-ink/65 hover:bg-rose-tint hover:text-crimson"
            }`}
          >
            {g}
          </button>
        ))}
      </nav>

      {/* Questions */}
      <div className="space-y-3">
        {visible.map((f, i) => {
          const isOpen = open === i;
          return (
            <div
              key={f.q}
              className={`overflow-hidden rounded-2xl border transition-colors ${
                isOpen ? "border-crimson/30 bg-surface" : "border-line bg-surface"
              }`}
            >
              <button
                onClick={() => setOpen(isOpen ? null : i)}
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
                  <p className="px-6 pb-6 text-[14.5px] leading-relaxed text-ink-soft">{f.a}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
