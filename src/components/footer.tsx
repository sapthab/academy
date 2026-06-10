import Link from "next/link";
import { WhatsApp, SocialIcon } from "./icons";
import { site, socialLinks } from "@/lib/data";

const cols = [
  {
    title: "Programs",
    links: [
      { href: "/courses#ai-foundations", label: "AI Foundations" },
      { href: "/courses#professional-ai-engineer", label: "Professional AI Engineer" },
      { href: "/courses#ai-startup-builder", label: "AI Startup Builder" },
      { href: "/courses#corporate-ai-training", label: "Corporate AI Training" },
      { href: "/internship", label: "AI Internship Program" },
    ],
  },
  {
    title: "Academy",
    links: [
      { href: "/about", label: "About Us" },
      { href: "/projects", label: "Projects Portfolio" },
      { href: "/success-stories", label: "Success Stories" },
      { href: "/events", label: "Events & Workshops" },
      { href: "/pricing", label: "Pricing" },
    ],
  },
  {
    title: "Courses in Pondicherry",
    links: [
      { href: "/ai-course-in-pondicherry", label: "AI Course in Pondicherry" },
      { href: "/ai-course-with-placement-in-pondicherry", label: "AI Course with Placement" },
      { href: "/data-science-course-in-pondicherry", label: "Data Science Course" },
      { href: "/python-course-in-pondicherry", label: "Python Course" },
    ],
  },
  {
    title: "Resources",
    links: [
      { href: "/blog", label: "Blog" },
      { href: "/faqs", label: "FAQs" },
      { href: "/contact", label: "Contact Us" },
      { href: "/apply", label: "Apply Now" },
      { href: "/contact#counselling", label: "Free Counselling" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="relative border-t border-line bg-surface-warm">
      <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_2fr]">
          <div>
            <Link href="/" className="flex items-center" aria-label="AGS AI Academy — home">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/ags-ai-academy-logo.png"
                alt="AGS AI Academy — AI training academy in Puducherry"
                width={1496}
                height={525}
                className="h-11 w-auto"
              />
            </Link>
            <p className="mt-4 max-w-sm text-[14.5px] leading-relaxed text-ink-soft">
              Puducherry&apos;s build-first AI academy and the training arm of{" "}
              <a
                href={site.parent.url}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-ink hover:text-crimson"
              >
                {site.parent.name}
              </a>
              . Real client projects, real internships, real careers — learn AI by
              shipping products, not watching slides.
            </p>
            <div className="mt-6 space-y-2 text-[14px] text-ink-soft">
              <p>{site.address}</p>
              <p>
                <a href={`mailto:${site.email}`} className="hover:text-crimson">{site.email}</a>
                {" · "}
                <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="hover:text-crimson">{site.phone}</a>
              </p>
            </div>
            <a
              href={site.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 rounded-full border border-line bg-surface px-4 py-2 text-[13.5px] font-semibold text-ink transition-colors hover:border-crimson/40 hover:text-crimson"
            >
              <WhatsApp className="size-4 text-[#25D366]" />
              Chat on WhatsApp
            </a>

            <div className="mt-6 flex items-center gap-2.5">
              {socialLinks.map((s) => (
                <a
                  key={s.name}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`AGS AI Academy on ${s.name}`}
                  className="flex size-9 items-center justify-center rounded-full border border-line bg-surface text-ink/60 transition-colors hover:border-crimson/40 hover:bg-rose-tint hover:text-crimson"
                >
                  <SocialIcon name={s.icon} className="size-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {cols.map((col) => (
              <div key={col.title}>
                <h3 className="font-tech text-[11px] font-semibold uppercase tracking-[0.16em] text-ink/50">
                  {col.title}
                </h3>
                <ul className="mt-4 space-y-2.5">
                  {col.links.map((l) => (
                    <li key={l.label}>
                      <Link
                        href={l.href}
                        className="text-[14px] text-ink/70 transition-colors hover:text-crimson"
                      >
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-line pt-7 sm:flex-row sm:items-center">
          <p className="text-[13px] text-ink-soft">
            © {new Date().getFullYear()} AGS AI Academy · A{" "}
            <a
              href={site.parent.url}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-ink hover:text-crimson"
            >
              {site.parent.name}
            </a>{" "}
            company, Puducherry. All rights reserved.
          </p>
          <nav className="flex flex-wrap items-center gap-x-4 gap-y-2 text-[12.5px] text-ink-soft">
            <Link href="/privacy" className="hover:text-crimson">Privacy</Link>
            <span className="text-ink/25">·</span>
            <Link href="/terms" className="hover:text-crimson">Terms</Link>
            <span className="text-ink/25">·</span>
            <Link href="/refund-policy" className="hover:text-crimson">Refund Policy</Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
