import Link from "next/link";
import { breadcrumbSchema, jsonLd } from "@/lib/seo";

export type Crumb = { name: string; path?: string };

/**
 * Renders a visible breadcrumb trail + BreadcrumbList JSON-LD.
 * Always include Home as the first crumb and the current page (no path) last.
 */
export function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(breadcrumbSchema(items))} />
      <nav aria-label="Breadcrumb" className="mx-auto max-w-7xl px-5 pt-6 lg:px-8">
        <ol className="flex flex-wrap items-center gap-1.5 text-[12.5px] text-ink-soft">
          {items.map((it, i) => {
            const last = i === items.length - 1;
            return (
              <li key={it.name} className="flex items-center gap-1.5">
                {it.path && !last ? (
                  <Link href={it.path} className="hover:text-crimson">
                    {it.name}
                  </Link>
                ) : (
                  <span className={last ? "text-ink/80" : ""}>{it.name}</span>
                )}
                {!last && <span className="text-ink/30">/</span>}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
