import { getAllBlogPosts } from "@/lib/blogger";
import { pageMeta, SITE_URL, canonical } from "@/lib/seo";
import { PageHero } from "@/components/page-hero";
import { CtaBand } from "@/components/cta-band";
import { BlogListing } from "./blog-listing";

export const metadata = pageMeta({
  title: "Blog — AI Tutorials, Career Advice & Insights",
  description:
    "The AGS AI Academy blog: hands-on AI tutorials, career guidance, and insights on building with AI — from Puducherry's build-first AI academy, part of AgileSoftLabs.",
  path: "/blog",
});

export default async function BlogPage() {
  const posts = await getAllBlogPosts();

  const cardPosts = posts.map((p) => ({
    id: p.id,
    title: p.title,
    summary: p.summary,
    published: p.published,
    thumbnail: p.thumbnail,
    slug: p.slug,
    categories: p.categories,
    author: p.author.name,
  }));

  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "AGS AI Academy Blog",
    description: "AI tutorials, career advice and insights from AGS AI Academy, Puducherry.",
    url: canonical("/blog"),
    publisher: { "@type": "Organization", name: "AGS AI Academy", "@id": `${SITE_URL}/#organization` },
    blogPost: posts.slice(0, 10).map((p) => ({
      "@type": "BlogPosting",
      headline: p.title.replace(/<[^>]*>/g, ""),
      datePublished: p.published,
      dateModified: p.updated,
      author: { "@type": "Person", name: p.author.name },
      image: p.thumbnail.startsWith("data:") ? undefined : p.thumbnail,
      url: canonical(`/blog/${p.slug}`),
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
      />
      <PageHero
        crumbs={[{ name: "Home", path: "/" }, { name: "Blog" }]}
        pill="Blog"
        title="Learn something"
        accent="buildable, every week."
        body="Hands-on AI tutorials, career intelligence and field notes — written for students who'd rather build than memorize."
      />
      <section className="px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          {cardPosts.length === 0 ? (
            <p className="py-20 text-center text-[15px] text-ink-soft">
              No posts published yet — check back soon.
            </p>
          ) : (
            <BlogListing posts={cardPosts} />
          )}
        </div>
      </section>
      <CtaBand
        title="Stop reading about AI. Start building it."
        body="Everything on this blog is taught hands-on inside our programs — with mentors beside you."
      />
    </>
  );
}
