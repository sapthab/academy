import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  getAllBlogPosts,
  getPostBySlug,
  stripHtml,
  readingTime,
  formatDate,
} from "@/lib/blogger";
import { SITE_URL } from "@/lib/seo";
import { BlogContent } from "@/components/blog-content";
import { ArrowRight } from "@/components/icons";
import { CtaBand } from "@/components/cta-band";

// Static export: enumerate every post at build time; unknown slugs 404.
export const dynamicParams = false;

export async function generateStaticParams() {
  const posts = await getAllBlogPosts();
  return posts.map((p) => ({ slug: p.slug.split("/") }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const slugPath = slug.join("/");
  const post = await getPostBySlug(slugPath);

  if (!post) {
    return { title: "Post Not Found — AGS AI Academy Blog" };
  }

  const title = stripHtml(post.title);
  const description = stripHtml(post.summary).substring(0, 160);
  const canonical = `${SITE_URL}/blog/${slugPath}/`;
  const image = post.thumbnail.startsWith("data:") ? undefined : post.thumbnail;

  return {
    title: `${title} — AGS AI Academy Blog`,
    description,
    alternates: { canonical },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: "AGS AI Academy Blog",
      type: "article",
      publishedTime: post.published,
      modifiedTime: post.updated,
      images: image ? [{ url: image, width: 1200, height: 630, alt: title }] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: image ? [image] : undefined,
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const { slug } = await params;
  const slugPath = slug.join("/");
  const post = await getPostBySlug(slugPath);

  if (!post) notFound();

  const title = stripHtml(post.title);
  const mins = readingTime(post.content);
  const canonical = `${SITE_URL}/blog/${slugPath}/`;

  const all = await getAllBlogPosts();
  const more = all.filter((p) => p.slug !== slugPath).slice(0, 4);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    mainEntityOfPage: { "@type": "WebPage", "@id": canonical },
    headline: title,
    description: stripHtml(post.summary).substring(0, 200),
    datePublished: post.published,
    dateModified: post.updated,
    ...(post.thumbnail.startsWith("data:")
      ? {}
      : { image: { "@type": "ImageObject", url: post.thumbnail, width: 1200, height: 630 } }),
    author: { "@type": "Person", name: post.author.name },
    publisher: {
      "@type": "Organization",
      name: "AGS AI Academy",
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_URL}/blog/` },
      { "@type": "ListItem", position: 3, name: title, item: canonical },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Header */}
      <header className="hero-atmosphere grain relative overflow-hidden border-b border-line/60">
        <div className="mx-auto max-w-3xl px-5 py-14 lg:px-8 lg:py-16">
          <nav className="flex items-center gap-2 text-[13px] text-ink-soft">
            <Link href="/" className="hover:text-crimson">Home</Link>
            <span className="text-ink/30">/</span>
            <Link href="/blog" className="hover:text-crimson">Blog</Link>
          </nav>
          {post.categories[0] && (
            <span className="font-tech mt-6 inline-block rounded-full bg-rose-tint px-3 py-1 text-[10.5px] font-semibold uppercase tracking-[0.12em] text-crimson-ink">
              {post.categories[0]}
            </span>
          )}
          <h1
            className="font-display mt-4 text-balance text-3xl font-bold leading-[1.1] tracking-tight sm:text-4xl lg:text-[2.75rem]"
            dangerouslySetInnerHTML={{ __html: post.title }}
          />
          <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 text-[13.5px] text-ink-soft">
            <span className="inline-flex items-center gap-2">
              {post.author.image ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={post.author.image}
                  alt={post.author.name}
                  className="size-7 rounded-full object-cover"
                />
              ) : (
                <span className="flex size-7 items-center justify-center rounded-full bg-crimson text-[11px] font-bold text-white">
                  {post.author.name.charAt(0)}
                </span>
              )}
              By {post.author.name}
            </span>
            <span className="text-ink/30">·</span>
            <span>{formatDate(post.published)}</span>
            <span className="text-ink/30">·</span>
            <span>{mins} min read</span>
          </div>
        </div>
      </header>

      {/* Body */}
      <article className="px-5 py-14 lg:px-8">
        <div className="mx-auto max-w-3xl">
          {!post.thumbnail.startsWith("data:") && (
            <div className="mb-10 overflow-hidden rounded-[1.5rem] border border-line">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={post.thumbnail} alt={title} className="w-full object-cover" />
            </div>
          )}

          <BlogContent content={post.content} />

          {post.categories.length > 0 && (
            <div className="mt-12 flex flex-wrap gap-2 border-t border-line pt-8">
              {post.categories.map((c) => (
                <span
                  key={c}
                  className="rounded-full border border-line bg-surface px-3.5 py-1.5 text-[12.5px] font-medium text-ink/70"
                >
                  {c}
                </span>
              ))}
            </div>
          )}

          <div className="mt-10">
            <Link
              href="/blog"
              className="group inline-flex items-center gap-2 text-[14.5px] font-semibold text-crimson hover:text-crimson-deep"
            >
              <ArrowRight className="size-4 rotate-180 transition-transform group-hover:-translate-x-1" />
              Back to all posts
            </Link>
          </div>
        </div>
      </article>

      {/* More posts */}
      {more.length > 0 && (
        <section className="border-t border-line bg-surface-warm px-5 py-20 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <h2 className="font-display text-2xl font-bold">More from the blog</h2>
            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {more.map((p) => (
                <Link
                  key={p.id}
                  href={`/blog/${p.slug}`}
                  className="lift group flex flex-col overflow-hidden rounded-3xl border border-line bg-surface"
                >
                  <div className="aspect-[16/10] overflow-hidden bg-surface-warm">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={p.thumbnail}
                      alt={stripHtml(p.title)}
                      className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <span className="text-[12px] text-ink/40">{formatDate(p.published)}</span>
                    <h3
                      className="font-display mt-2 flex-1 text-[15.5px] font-bold leading-snug transition-colors group-hover:text-crimson"
                      dangerouslySetInnerHTML={{ __html: p.title }}
                    />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <CtaBand />
    </>
  );
}
