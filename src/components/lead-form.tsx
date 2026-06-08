"use client";

import { useState } from "react";
import { courseInterests } from "@/lib/data";
import { ArrowRight, Check } from "./icons";

const inputCls =
  "w-full rounded-xl border border-line bg-surface px-4 py-3 text-[15px] text-ink placeholder:text-ink/35 outline-none transition-colors focus:border-crimson/50 focus:ring-2 focus:ring-crimson/10";

export function LeadForm({
  heading = "Get a call back",
  submitLabel = "Submit Application",
  showMessage = true,
}: {
  heading?: string;
  submitLabel?: string;
  showMessage?: boolean;
}) {
  const [sent, setSent] = useState(false);

  if (sent) {
    return (
      <div className="flex flex-col items-center justify-center rounded-3xl border border-line bg-surface px-8 py-16 text-center">
        <div className="flex size-14 items-center justify-center rounded-full bg-rose-tint">
          <Check className="size-7 text-crimson" />
        </div>
        <h3 className="font-display mt-5 text-2xl font-bold">Application received!</h3>
        <p className="mt-2 max-w-sm text-[15px] leading-relaxed text-ink-soft">
          Our counselling team will call you within 24 hours. Meanwhile, check
          your inbox for the program brochure.
        </p>
      </div>
    );
  }

  return (
    <form
      className="rounded-3xl border border-line bg-surface p-6 shadow-[0_24px_60px_-30px_rgba(22,18,15,0.18)] sm:p-8"
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
    >
      <h3 className="font-display text-xl font-bold">{heading}</h3>
      <p className="mt-1 text-[13.5px] text-ink-soft">
        Fill this in — a counsellor responds within 24 hours.
      </p>
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="mb-1.5 block text-[13px] font-semibold text-ink/70">Full Name</span>
          <input required name="name" placeholder="Your name" className={inputCls} />
        </label>
        <label className="block">
          <span className="mb-1.5 block text-[13px] font-semibold text-ink/70">Phone</span>
          <input
            required
            name="phone"
            type="tel"
            pattern="[0-9+ -]{10,}"
            placeholder="+91 ..."
            className={inputCls}
          />
        </label>
        <label className="block sm:col-span-2">
          <span className="mb-1.5 block text-[13px] font-semibold text-ink/70">Email</span>
          <input required name="email" type="email" placeholder="you@email.com" className={inputCls} />
        </label>
        <label className="block sm:col-span-2">
          <span className="mb-1.5 block text-[13px] font-semibold text-ink/70">Course Interest</span>
          <select required name="course" defaultValue="" className={inputCls}>
            <option value="" disabled>
              Select a program
            </option>
            {courseInterests.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </label>
        {showMessage && (
          <label className="block sm:col-span-2">
            <span className="mb-1.5 block text-[13px] font-semibold text-ink/70">
              Message <span className="font-normal text-ink/40">(optional)</span>
            </span>
            <textarea
              name="message"
              rows={3}
              placeholder="Tell us about your background or goals..."
              className={inputCls}
            />
          </label>
        )}
      </div>
      <button
        type="submit"
        className="group mt-6 flex w-full items-center justify-center gap-2.5 rounded-full bg-crimson px-7 py-3.5 text-[15px] font-semibold text-white transition-colors hover:bg-crimson-deep"
      >
        {submitLabel}
        <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
      </button>
      <p className="mt-4 text-center text-[12px] text-ink/45">
        No spam. Your details go only to our admissions team.
      </p>
    </form>
  );
}
