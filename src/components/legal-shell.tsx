import "./blog-content.css";
import { PageHero } from "./page-hero";

export function LegalShell({
  title,
  crumbLabel,
  lastUpdated,
  children,
}: {
  title: string;
  crumbLabel: string;
  lastUpdated: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <PageHero
        crumbs={[{ name: "Home", path: "/" }, { name: crumbLabel }]}
        pill="Legal"
        title={title}
      />
      <section className="px-5 py-16 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <p className="mb-8 font-tech text-[12px] uppercase tracking-[0.14em] text-ink/45">
            Last updated: {lastUpdated}
          </p>
          <div className="blog-prose">{children}</div>
        </div>
      </section>
    </>
  );
}
