import { pageMeta } from "@/lib/seo";
import { LegalShell } from "@/components/legal-shell";
import { site } from "@/lib/data";

export const metadata = pageMeta({
  title: "Privacy Policy",
  description:
    "How AGS AI Academy collects, uses and protects your personal information when you enquire, apply or use our website.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <LegalShell title="Privacy Policy" crumbLabel="Privacy Policy" lastUpdated="June 2026">
      <p>
        AGS AI Academy ({site.legalName}) (&ldquo;we&rdquo;, &ldquo;us&rdquo;) respects your
        privacy. This policy explains what information we collect, why, and how we protect it
        when you visit {site.url} or contact us.
      </p>

      <h2>Information we collect</h2>
      <ul>
        <li><strong>Details you give us:</strong> name, phone, email, course interest and any message you submit through our enquiry, application or event forms.</li>
        <li><strong>Usage data:</strong> anonymised analytics such as pages visited and device type, collected via cookies and analytics tools to improve the site.</li>
      </ul>

      <h2>How we use it</h2>
      <ul>
        <li>To respond to your enquiry and provide counselling about our programs.</li>
        <li>To process admissions and keep you informed about batches, events and offers you opt into.</li>
        <li>To improve our website, content and services.</li>
      </ul>

      <h2>Sharing</h2>
      <p>
        We do not sell your data. We share it only with our admissions and operations team, our
        parent company AgileSoftLabs, and trusted service providers (e.g. email and CRM tools)
        strictly to deliver the services above, and where required by law.
      </p>

      <h2>Data retention &amp; security</h2>
      <p>
        We keep your information only as long as needed for the purposes above and apply
        reasonable safeguards to protect it. No method of transmission over the internet is
        100% secure, but we work to protect your data.
      </p>

      <h2>Your rights</h2>
      <p>
        You can request access to, correction of, or deletion of your personal data, and opt out
        of marketing messages at any time. Email{" "}
        <a href={`mailto:${site.email}`}>{site.email}</a> and we&apos;ll action your request.
      </p>

      <h2>Contact</h2>
      <p>
        AGS AI Academy, {site.address}. Email: <a href={`mailto:${site.email}`}>{site.email}</a>.
      </p>
    </LegalShell>
  );
}
