import type { Metadata } from "next";
import { site, programs, studentReviews, type Program, type Event } from "./data";

export const SITE_URL = site.url;
export const OG_IMAGE = `${SITE_URL}/og.png`;

/** Absolute canonical URL with a trailing slash (matches next.config trailingSlash). */
export function canonical(path = "/"): string {
  if (path === "/" || path === "") return `${SITE_URL}/`;
  const clean = "/" + path.replace(/^\/+/, "").replace(/\/+$/, "") + "/";
  return `${SITE_URL}${clean}`;
}

type PageMetaInput = {
  title: string;
  description: string;
  path: string;
  ogType?: "website" | "article";
  image?: string;
  noindex?: boolean;
};

/**
 * Build a complete Metadata object for a page: canonical + OpenGraph + Twitter.
 * `title` here is the page-specific part; the root layout applies the
 * "%s | AGS AI Academy Pondicherry" template.
 */
export function pageMeta({
  title,
  description,
  path,
  ogType = "website",
  image = OG_IMAGE,
  noindex = false,
}: PageMetaInput): Metadata {
  const url = canonical(path);
  return {
    title,
    description,
    alternates: { canonical: url },
    robots: noindex ? { index: false, follow: true } : { index: true, follow: true },
    openGraph: {
      title: `${title} | AGS AI Academy`,
      description,
      url,
      siteName: "AGS AI Academy",
      locale: "en_IN",
      type: ogType,
      images: [{ url: image, width: 1200, height: 630, alt: "AGS AI Academy" }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | AGS AI Academy`,
      description,
      images: [image],
    },
  };
}

/* ----------------------------- JSON-LD builders ---------------------------- */

export function organizationSchema() {
  const reviewCount = studentReviews.length;
  return {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "@id": `${SITE_URL}/#organization`,
    name: site.name,
    legalName: site.legalName,
    alternateName: "AGS Academy",
    description:
      "Puducherry's build-first AI academy — AI courses, internships, startup incubation and placement assistance.",
    url: `${SITE_URL}/`,
    logo: {
      "@type": "ImageObject",
      url: `${SITE_URL}/icon.png`,
      width: 512,
      height: 512,
    },
    image: OG_IMAGE,
    email: site.email,
    telephone: site.phone,
    foundingDate: site.foundingYear,
    address: {
      "@type": "PostalAddress",
      streetAddress: site.street,
      addressLocality: site.city,
      addressRegion: site.region,
      postalCode: site.postalCode,
      addressCountry: site.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: site.geo.lat,
      longitude: site.geo.lng,
    },
    openingHours: site.openingHours,
    areaServed: [
      { "@type": "City", name: "Puducherry" },
      { "@type": "AdministrativeArea", name: "Tamil Nadu" },
    ],
    knowsAbout: [
      "Artificial Intelligence",
      "Machine Learning",
      "Generative AI",
      "LangChain",
      "RAG",
      "AI Agents",
      "Python Programming",
    ],
    parentOrganization: {
      "@type": "Organization",
      name: site.parent.name,
      url: site.parent.url,
    },
    sameAs: [site.parent.url, ...site.socials],
    aggregateRating:
      reviewCount > 0
        ? {
            "@type": "AggregateRating",
            ratingValue: "5",
            reviewCount: String(reviewCount),
            bestRating: "5",
            worstRating: "1",
          }
        : undefined,
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    name: site.name,
    url: `${SITE_URL}/`,
    publisher: { "@id": `${SITE_URL}/#organization` },
    inLanguage: "en-IN",
  };
}

export function courseSchema(p: Program) {
  return {
    "@context": "https://schema.org",
    "@type": "Course",
    name: p.name,
    description: p.description,
    url: canonical(`/courses#${p.slug}`),
    provider: { "@type": "EducationalOrganization", name: site.name, sameAs: `${SITE_URL}/` },
    educationalLevel: "Beginner to Advanced",
    inLanguage: "en-IN",
    teaches: p.modules,
    hasCourseInstance: {
      "@type": "CourseInstance",
      courseMode: ["onsite", "blended"],
      courseWorkload: p.weeks,
      location: {
        "@type": "Place",
        name: "AGS AI Academy Campus",
        address: site.address,
      },
    },
  };
}

export function coursesItemListSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "AGS AI Academy Programs",
    itemListElement: programs.map((p, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: courseSchema(p),
    })),
  };
}

export function eventSchema(e: Event) {
  return {
    "@context": "https://schema.org",
    "@type": "EducationalEvent",
    name: e.title,
    description: e.description,
    startDate: e.date,
    eventAttendanceMode: e.location.toLowerCase().includes("online")
      ? "https://schema.org/MixedEventAttendanceMode"
      : "https://schema.org/OfflineEventAttendanceMode",
    eventStatus: "https://schema.org/EventScheduled",
    location: {
      "@type": "Place",
      name: e.location,
      address: site.address,
    },
    organizer: { "@type": "Organization", name: site.name, url: `${SITE_URL}/` },
    ...(e.free
      ? {
          offers: {
            "@type": "Offer",
            price: "0",
            priceCurrency: "INR",
            availability: "https://schema.org/InStock",
            url: canonical("/events"),
          },
        }
      : {}),
  };
}

export function reviewsSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "@id": `${SITE_URL}/#organization`,
    name: site.name,
    url: `${SITE_URL}/`,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5",
      reviewCount: String(studentReviews.length),
      bestRating: "5",
      worstRating: "1",
    },
    review: studentReviews.map((r) => ({
      "@type": "Review",
      author: { "@type": "Person", name: r.name },
      reviewBody: r.quote,
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
    })),
  };
}

export function breadcrumbSchema(items: { name: string; path?: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      ...(it.path ? { item: canonical(it.path) } : {}),
    })),
  };
}

/** Helper to render a JSON-LD <script> from any schema object. */
export function jsonLd(schema: object) {
  return { __html: JSON.stringify(schema) };
}
