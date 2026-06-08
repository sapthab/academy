import type { Metadata } from "next";
import { Bricolage_Grotesque, Figtree, Chakra_Petch } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { RevealObserver } from "@/components/reveal-observer";

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

export const metadata: Metadata = {
  metadataBase: new URL("https://agsacademy.in"),
  title: {
    default: "AGS AI Academy — AI Course in Pondicherry | Learn AI By Building Real Products",
    template: "%s | AGS AI Academy Pondicherry",
  },
  description:
    "AGS AI Academy is Puducherry's hands-on AI academy. Become an AI Engineer through real client projects, AI internships, startup incubation and mentorship. Artificial Intelligence training in Pondicherry with placement assistance.",
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
    type: "website",
    locale: "en_IN",
    siteName: "AGS AI Academy",
  },
};

const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: "AGS AI Academy",
  description:
    "Puducherry's build-first AI academy — AI courses, internships, startup incubation and placement assistance.",
  url: "https://agsacademy.in",
  email: "hello@agsacademy.in",
  telephone: "+91 90000 00000",
  address: {
    "@type": "PostalAddress",
    streetAddress: "First Floor, 208, 100 Feet Road, Mudaliarpet",
    addressLocality: "Puducherry",
    postalCode: "605004",
    addressCountry: "IN",
  },
  parentOrganization: {
    "@type": "Organization",
    name: "AgileSoftLabs",
    url: "https://www.agilesoftlabs.com/",
  },
  sameAs: ["https://www.agilesoftlabs.com/"],
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
        <RevealObserver />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
