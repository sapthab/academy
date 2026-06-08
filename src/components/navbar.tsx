"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo, ArrowRight } from "./icons";

const links = [
  { href: "/", label: "Home" },
  { href: "/courses", label: "Courses" },
  { href: "/internship", label: "Internship" },
  { href: "/projects", label: "Projects" },
  { href: "/success-stories", label: "Success Stories" },
  { href: "/pricing", label: "Pricing" },
];

const moreLinks = [
  { href: "/about", label: "About Us" },
  { href: "/blog", label: "Blog" },
  { href: "/events", label: "Events" },
  { href: "/faqs", label: "FAQs" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-50 border-b border-line/70 bg-bg/85 backdrop-blur-xl">
      <div className="mx-auto flex h-[68px] max-w-7xl items-center justify-between px-5 lg:px-8">
        <Link href="/" className="flex items-center gap-2.5" onClick={() => setOpen(false)}>
          <Logo className="size-8" />
          <span className="font-display text-[19px] font-bold tracking-tight">
            AGS<span className="text-crimson"> Academy</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 lg:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`rounded-full px-3.5 py-2 text-[13.5px] font-medium transition-colors ${
                isActive(l.href)
                  ? "bg-rose-tint text-crimson"
                  : "text-ink/70 hover:bg-surface-warm hover:text-ink"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <div
            className="relative"
            onMouseEnter={() => setMoreOpen(true)}
            onMouseLeave={() => setMoreOpen(false)}
          >
            <button
              className={`flex items-center gap-1 rounded-full px-3.5 py-2 text-[13.5px] font-medium transition-colors ${
                moreLinks.some((l) => isActive(l.href))
                  ? "bg-rose-tint text-crimson"
                  : "text-ink/70 hover:bg-surface-warm hover:text-ink"
              }`}
            >
              More
              <svg viewBox="0 0 12 12" className={`size-2.5 fill-none stroke-current stroke-[1.6] transition-transform ${moreOpen ? "rotate-180" : ""}`}>
                <path d="M2.5 4.5 6 8l3.5-3.5" />
              </svg>
            </button>
            {moreOpen && (
              <div className="absolute right-0 top-full pt-2">
                <div className="w-44 rounded-2xl border border-line bg-surface p-1.5 shadow-[0_18px_44px_-16px_rgba(22,18,15,0.18)]">
                  {moreLinks.map((l) => (
                    <Link
                      key={l.href}
                      href={l.href}
                      className={`block rounded-xl px-3.5 py-2 text-[13.5px] font-medium transition-colors ${
                        isActive(l.href)
                          ? "bg-rose-tint text-crimson"
                          : "text-ink/70 hover:bg-surface-warm hover:text-ink"
                      }`}
                    >
                      {l.label}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Link
            href="/apply"
            className="group inline-flex items-center gap-2 rounded-full bg-crimson px-5 py-2.5 text-[13.5px] font-semibold text-white transition-colors hover:bg-crimson-deep"
          >
            Apply Now
            <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          aria-label="Toggle menu"
          onClick={() => setOpen(!open)}
          className="flex size-10 items-center justify-center rounded-full border border-line lg:hidden"
        >
          <div className="space-y-1.5">
            <span className={`block h-[1.5px] w-5 bg-ink transition-transform ${open ? "translate-y-[3.5px] rotate-45" : ""}`} />
            <span className={`block h-[1.5px] w-5 bg-ink transition-transform ${open ? "-translate-y-[3.5px] -rotate-45" : ""}`} />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-line bg-bg px-5 pb-6 pt-3 lg:hidden">
          <nav className="flex flex-col gap-1">
            {[...links, ...moreLinks].map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className={`rounded-xl px-4 py-2.5 text-[15px] font-medium ${
                  isActive(l.href) ? "bg-rose-tint text-crimson" : "text-ink/75"
                }`}
              >
                {l.label}
              </Link>
            ))}
          </nav>
          <Link
            href="/apply"
            onClick={() => setOpen(false)}
            className="mt-4 flex items-center justify-center gap-2 rounded-full bg-crimson px-5 py-3 text-[15px] font-semibold text-white"
          >
            Apply Now <ArrowRight className="size-4" />
          </Link>
        </div>
      )}
    </header>
  );
}
