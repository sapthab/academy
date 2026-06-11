import { cache } from "react";

/**
 * Blogger (Blogspot) integration.
 *
 * Posts are pulled from the public Blogger JSON feed at BUILD TIME and rendered
 * into static pages (the site uses `output: "export"`). To surface new posts,
 * trigger a fresh deploy. Swap BLOG_FEED_BASE to point at a different blog.
 */
const BLOG_FEED_BASE = "https://te3123123sf.blogspot.com";

export interface BlogAuthor {
  name: string;
  uri?: string;
  image?: string;
}

export interface BlogPost {
  id: string;
  title: string;
  content: string;
  summary: string;
  published: string;
  updated: string;
  url: string;
  slug: string;
  thumbnail: string;
  categories: string[];
  author: BlogAuthor;
}

type BloggerEntry = {
  id: { $t: string };
  title: { $t: string };
  content: { $t: string };
  published: { $t: string };
  updated: { $t: string };
  link: Array<{ rel: string; href: string }>;
  media$thumbnail?: { url: string };
  summary?: { $t: string };
  category?: Array<{ term: string }>;
  author?: Array<{
    name?: { $t: string };
    uri?: { $t: string };
    gd$image?: { src?: string };
  }>;
};

const MAX_POSTS_PER_PAGE = 25;
const MAX_PAGES = 8;

const PLACEHOLDER_THUMB =
  "data:image/svg+xml," +
  encodeURIComponent(
    `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 450'><defs><linearGradient id='g' x1='0' y1='0' x2='1' y2='1'><stop offset='0' stop-color='%23fbeeec'/><stop offset='1' stop-color='%23f7e3df'/></linearGradient></defs><rect width='800' height='450' fill='url(%23g)'/><text x='400' y='235' font-family='sans-serif' font-size='34' font-weight='700' fill='%23cd2c2c' text-anchor='middle'>AGS AI Academy</text></svg>`
  );

function upgradeThumb(src: string): string {
  return src
    .replace(/\/(s\d+(-w\d+-h\d+)?(-c)?|w\d+-h\d+(-[a-z-]+)?)\//, "/w800-h450-p-k-no-nu/")
    .replace(/=s\d+(-c)?(-rw)?/, "=w800-h450-p-k-no-nu");
}

function entryToPost(item: BloggerEntry): BlogPost {
  const alternateLink = item.link.find((l) => l.rel === "alternate");
  const url = alternateLink?.href || "";

  let slug = "";
  try {
    slug = new URL(url).pathname.replace(/^\//, "").replace(/\.html$/, "");
  } catch {
    /* keep empty slug */
  }

  let thumbnail = PLACEHOLDER_THUMB;
  const imgMatch = item.content.$t.substring(0, 6000).match(/<img[^>]+src=["']([^"']+)["']/i);
  if (imgMatch?.[1]) thumbnail = upgradeThumb(imgMatch[1]);
  else if (item.media$thumbnail?.url) thumbnail = upgradeThumb(item.media$thumbnail.url);

  const summary =
    (item.summary?.$t || item.content.$t.substring(0, 1200))
      .replace(/<[^>]*>/g, " ")
      .replace(/&nbsp;/g, " ")
      .replace(/&[a-z]+;/gi, " ")
      .replace(/\s+/g, " ")
      .trim()
      .substring(0, 200)
      .trim() + "…";

  const categories = item.category?.map((c) => c.term) || [];

  // Two fixed bylines, assigned deterministically by post type so the same name
  // always shows for a given post: technical/tutorial posts → Karthik, everything
  // else (career, guidance, local, news) → Ezilarasan. (Ignores the Blogger account.)
  const author: BlogAuthor = { name: authorFor(categories) };

  return {
    id: item.id.$t,
    title: item.title.$t,
    content: item.content.$t,
    summary,
    published: item.published.$t,
    updated: item.updated.$t,
    url,
    slug,
    thumbnail,
    categories,
    author,
  };
}

const TECHNICAL_LABELS = ["AI Tutorials"];

/** Pick the byline from the post's labels — keeps the author consistent per post. */
function authorFor(categories: string[]): string {
  const isTechnical = categories.some((c) => TECHNICAL_LABELS.includes(c));
  return isTechnical ? "Karthik" : "Ezilarasan";
}

/** Fetch all posts (up to MAX_POSTS_PER_PAGE * MAX_PAGES), deduped via React cache(). */
export const getAllBlogPosts = cache(async (): Promise<BlogPost[]> => {
  try {
    const initialRes = await fetch(
      `${BLOG_FEED_BASE}/feeds/posts/default?alt=json&max-results=1`,
      { next: { revalidate: 3600 } }
    );
    if (!initialRes.ok) return [];

    const initialData = await initialRes.json();
    const totalCount = parseInt(
      initialData.feed?.["openSearch$totalResults"]?.["$t"] || "0",
      10
    );
    if (!totalCount) return [];

    const pageCount = Math.ceil(
      Math.min(totalCount, MAX_POSTS_PER_PAGE * MAX_PAGES) / MAX_POSTS_PER_PAGE
    );

    const pages = await Promise.all(
      Array.from({ length: pageCount }, (_, i) => i + 1).map((page) =>
        fetch(
          `${BLOG_FEED_BASE}/feeds/posts/default?alt=json&max-results=${MAX_POSTS_PER_PAGE}&start-index=${
            (page - 1) * MAX_POSTS_PER_PAGE + 1
          }`,
          { next: { revalidate: 3600 } }
        ).then((res) => (res.ok ? res.json() : { feed: { entry: [] } }))
      )
    );

    const allEntries: BloggerEntry[] = pages.flatMap((p) => p.feed?.entry || []);
    return allEntries
      .map(entryToPost)
      .filter((p) => p.slug)
      .sort((a, b) => +new Date(b.published) - +new Date(a.published));
  } catch (err) {
    console.error("Error fetching blog posts:", err);
    return [];
  }
});

export async function getPostBySlug(slugPath: string): Promise<BlogPost | null> {
  const all = await getAllBlogPosts();
  return all.find((p) => p.slug === slugPath) || null;
}

/** Strip tags + collapse whitespace — used for meta/reading-time. */
export function stripHtml(html: string): string {
  return html
    .replace(/<[^>]*>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&[a-z]+;/gi, " ")
    .replace(/\s+/g, " ")
    .trim();
}

export function readingTime(content: string): number {
  const words = stripHtml(content).split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.ceil(words / 200));
}

export function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
