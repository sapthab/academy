"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import type { BlogPost } from "@/lib/blogger";
import { ArrowRight } from "@/components/icons";

function formatDate(d: string) {
  return new Date(d).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

type CardPost = Pick<
  BlogPost,
  "id" | "title" | "summary" | "published" | "thumbnail" | "slug" | "categories"
> & { author: string };

export function BlogListing({ posts }: { posts: CardPost[] }) {
  const categories = useMemo(() => {
    const set = new Set<string>();
    posts.forEach((p) => p.categories.forEach((c) => set.add(c)));
    return ["All", ...Array.from(set).sort()];
  }, [posts]);

  const [active, setActive] = useState("All");

  const filtered =
    active === "All"
      ? posts
      : posts.filter((p) => p.categories.includes(active));

  const [featured, ...rest] = filtered;

  return (
    <div>
      {/* Filter chips (only if the blog actually uses labels) */}
      {categories.length > 1 && (
        <div className="mb-12 flex flex-wrap justify-center gap-2.5">
          {categories.map((c) => (
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
      )}

      {filtered.length === 0 ? (
        <p className="py-20 text-center text-[15px] text-ink-soft">
          No posts in this category yet — check back soon.
        </p>
      ) : (
        <>
          {/* Featured */}
          {featured && (
            <Link
              href={`/blog/${featured.slug}`}
              className="lift group mb-8 grid gap-8 rounded-[2rem] border border-line bg-surface p-6 sm:p-8 lg:grid-cols-2"
            >
              <div className="aspect-[16/10] overflow-hidden rounded-3xl border border-line bg-surface-warm">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={featured.thumbnail}
                  alt={featured.title}
                  className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="eager"
                />
              </div>
              <div className="flex flex-col justify-center">
                <div className="flex items-center gap-3">
                  {featured.categories[0] && (
                    <span className="font-tech rounded-full bg-rose-tint px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-crimson-ink">
                      {featured.categories[0]}
                    </span>
                  )}
                  <span className="text-[12.5px] text-ink/45">{formatDate(featured.published)}</span>
                </div>
                <h2
                  className="font-display mt-4 text-2xl font-bold leading-tight transition-colors group-hover:text-crimson sm:text-3xl"
                  dangerouslySetInnerHTML={{ __html: featured.title }}
                />
                <p className="mt-3 text-[15px] leading-relaxed text-ink-soft">{featured.summary}</p>
                <span className="mt-6 inline-flex items-center gap-2 text-[14.5px] font-semibold text-crimson">
                  Read article
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          )}

          {/* Grid */}
          {rest.length > 0 && (
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {rest.map((p) => (
                <Link
                  key={p.id}
                  href={`/blog/${p.slug}`}
                  className="lift group flex flex-col overflow-hidden rounded-3xl border border-line bg-surface"
                >
                  <div className="aspect-[16/10] overflow-hidden bg-surface-warm">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={p.thumbnail}
                      alt={p.title}
                      className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <div className="flex items-center gap-3">
                      {p.categories[0] && (
                        <span className="font-tech rounded-full bg-rose-tint px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.1em] text-crimson-ink">
                          {p.categories[0]}
                        </span>
                      )}
                      <span className="text-[12px] text-ink/40">{formatDate(p.published)}</span>
                    </div>
                    <h3
                      className="font-display mt-3 flex-1 text-[18px] font-bold leading-snug transition-colors group-hover:text-crimson"
                      dangerouslySetInnerHTML={{ __html: p.title }}
                    />
                    <p className="mt-2.5 text-[13.5px] leading-relaxed text-ink-soft">
                      {p.summary.length > 130 ? p.summary.slice(0, 130).trim() + "…" : p.summary}
                    </p>
                    <span className="mt-5 inline-flex items-center gap-1.5 border-t border-line pt-4 text-[13px] font-semibold text-crimson">
                      Read More
                      <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
}
