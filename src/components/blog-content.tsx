import "./blog-content.css";

/**
 * Renders Blogger HTML content as static, crawlable markup.
 * Cleanup is done server-side (string ops) so it works under `output: export`
 * with no client JS — best for SEO.
 */
function cleanBloggerHtml(html: string): string {
  let out = html;
  // Drop the leading <h1> (we render the title separately in the page header).
  out = out.replace(/<h1[\s\S]*?<\/h1>/i, "");
  // Remove Blogger's duplicate "Published: … Reading Time: … minutes" line.
  out = out.replace(/<(p|div)[^>]*>\s*Published:[\s\S]*?Reading Time:[\s\S]*?minutes?\s*<\/(p|div)>/gi, "");
  // Remove trailing "Keywords: …" blocks.
  out = out.replace(/<(p|div)[^>]*>\s*Keywords?:[\s\S]*?<\/(p|div)>/gi, "");
  // Make images responsive + lazy without touching layout.
  out = out.replace(/<img /gi, '<img loading="lazy" decoding="async" ');
  return out;
}

export function BlogContent({ content }: { content: string }) {
  return (
    <div
      className="blog-prose"
      dangerouslySetInnerHTML={{ __html: cleanBloggerHtml(content) }}
    />
  );
}
