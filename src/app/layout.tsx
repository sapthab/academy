import type { Metadata } from "next";
import Script from "next/script";
import { Bricolage_Grotesque, Figtree, Chakra_Petch } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { RevealObserver } from "@/components/reveal-observer";
import { SITE_URL, OG_IMAGE, organizationSchema, websiteSchema, jsonLd } from "@/lib/seo";

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  display: "swap",
});

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
  display: "swap",
});

const chakra = Chakra_Petch({
  variable: "--font-chakra",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const GA_ID = "G-SKW58Y044R";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "AI Course in Pondicherry | AGS AI Academy",
    template: "%s | AGS AI Academy",
  },
  description:
    "Become an AI engineer in Puducherry by building real projects. Hands-on AI courses, guaranteed internships and placement support at AGS AI Academy, Pondicherry.",
  applicationName: "AGS AI Academy",
  alternates: { canonical: `${SITE_URL}/` },
  icons: { icon: [{ url: "/icon.png", type: "image/png" }], apple: "/icon.png" },
  keywords: [
    "AI Course in Pondicherry",
    "Artificial Intelligence Training Pondicherry",
    "AI Internship Pondicherry",
    "Generative AI Course Pondicherry",
    "AI Academy Pondicherry",
    "AI Training for Students",
    "Machine Learning Course Pondicherry",
  ],
  openGraph: {
    title: "AGS AI Academy — Learn AI By Building Real Products",
    description:
      "Become an AI Engineer through real-world projects, internships, and mentorship in Puducherry.",
    url: `${SITE_URL}/`,
    type: "website",
    locale: "en_IN",
    siteName: "AGS AI Academy",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "AGS AI Academy" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "AGS AI Academy — Learn AI By Building Real Products",
    description:
      "Become an AI Engineer through real-world projects, internships, and mentorship in Puducherry.",
    images: [OG_IMAGE],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${bricolage.variable} ${figtree.variable} ${chakra.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {/* Google tag (gtag.js) — Google Analytics 4 */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${GA_ID}');`}
        </Script>

        <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(organizationSchema())} />
        <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(websiteSchema())} />
        <RevealObserver />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
