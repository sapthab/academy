import type { Metadata } from "next";
import { posts, blogCategories } from "@/lib/data";
import { PageHero } from "@/components/page-hero";
import { ArrowRight } from "@/components/icons";
import { CtaBand } from "@/components/cta-band";

export const metadata: Metadata = {
  title: "Blog — AI Tutorials, Career Advice & Student Projects",
  description:
    "Learn AI with AGS Academy's blog: hands-on tutorials on RAG, AI agents and MCP servers, career roadmaps for AI engineers in India, and student project deep-dives.",
};

export default function BlogPage() {
  const [featured, ...rest] = posts;

  return (
    <>
      <PageHero
        pill="Blog"
        title="Learn something"
        accent="buildable, every week."
        body="Tutorials, career intelligence and student project breakdowns — written by mentors and students who actually ship."
      >
        <div className="flex flex-wrap justify-center gap-2.5">
          {blogCategories.map((c, i) => (
            <span
              key={c}
              className={`rounded-full border px-4 py-1.5 text-[13px] font-semibold ${
                i === 0
                  ? "border-crimson bg-crimson text-white"
                  : "border-line bg-surface text-ink/60"
              }`}
            >
              {c}
            </span>
          ))}
        </div>
      </PageHero>

      <section className="px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          {/* Featured post */}
          <article className="reveal lift group grid cursor-pointer gap-8 rounded-[2rem] border border-line bg-surface p-8 sm:p-10 lg:grid-cols-2">
            <div className="flex aspect-[16/10] items-center justify-center overflow-hidden rounded-3xl bg-ink lg:aspect-auto">
              <div className="p-8 font-tech text-[13px] leading-relaxed text-white/60">
                <p><span className="text-crimson">const</span> <span className="text-white">answer</span> = <span className="text-white/80">await rag</span>(</p>
                <p className="pl-5"><span className="text-gold">&quot;your own data&quot;</span>,</p>
                <p className="pl-5">{`{ grounded: `}<span className="text-emerald-400">true</span>{` }`}</p>
                <p>)</p>
                <p className="mt-3 text-white/30">{"// the most in-demand GenAI skill of 2026"}</p>
              </div>
            </div>
            <div className="flex flex-col justify-center">
              <div className="flex items-center gap-3">
                <span className="font-tech rounded-full bg-rose-tint px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-crimson-ink">
                  {featured.category}
                </span>
                <span className="text-[12.5px] text-ink/45">
                  {featured.date} · {featured.readTime} read
                </span>
              </div>
              <h2 className="font-display mt-4 text-2xl font-bold leading-tight transition-colors group-hover:text-crimson sm:text-3xl">
                {featured.title}
              </h2>
              <p className="mt-3 text-[15px] leading-relaxed text-ink-soft">{featured.excerpt}</p>
              <span className="group mt-6 inline-flex items-center gap-2 text-[14.5px] font-semibold text-crimson">
                Read article
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </span>
            </div>
          </article>

          {/* Grid */}
          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {rest.map((p, i) => (
              <article
                key={p.slug}
                className="reveal lift group flex cursor-pointer flex-col rounded-3xl border border-line bg-surface p-7"
                style={{ transitionDelay: `${(i % 3) * 70}ms` }}
              >
                <div className="flex items-center gap-3">
                  <span className="font-tech rounded-full bg-rose-tint px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-crimson-ink">
                    {p.category}
                  </span>
                  <span className="text-[12px] text-ink/40">{p.readTime}</span>
                </div>
                <h3 className="font-display mt-4 flex-1 text-[18px] font-bold leading-snug transition-colors group-hover:text-crimson">
                  {p.title}
                </h3>
                <p className="mt-2.5 text-[13.5px] leading-relaxed text-ink-soft">{p.excerpt}</p>
                <div className="mt-5 flex items-center justify-between border-t border-line pt-4">
                  <span className="text-[12px] text-ink/45">{p.date}</span>
                  <ArrowRight className="size-4 text-ink/30 transition-all group-hover:translate-x-1 group-hover:text-crimson" />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="Stop reading about AI. Start building it."
        body="Everything on this blog is taught hands-on inside our programs — with mentors beside you."
      />
    </>
  );
}
