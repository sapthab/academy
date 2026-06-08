import { pageMeta } from "@/lib/seo";
import { LegalShell } from "@/components/legal-shell";
import { site } from "@/lib/data";

export const metadata = pageMeta({
  title: "Terms & Conditions",
  description:
    "The terms that govern your use of the AGS AI Academy website and enrolment in our programs.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <LegalShell title="Terms & Conditions" crumbLabel="Terms" lastUpdated="June 2026">
      <p>
        These terms govern your use of {site.url} and enrolment in programs offered by AGS AI
        Academy ({site.legalName}). By using this site or enrolling, you agree to them.
      </p>

      <h2>Programs &amp; admissions</h2>
      <ul>
        <li>Program details, durations, fees and batch dates are subject to change; the version confirmed at admission applies to you.</li>
        <li>Seats are limited per batch and confirmed on receipt of fees or an agreed EMI plan.</li>
        <li>Outcomes such as internships and placement assistance are support services; we do not guarantee employment or specific salary outcomes.</li>
      </ul>

      <h2>Fees &amp; payments</h2>
      <p>
        Fees are payable as per the plan agreed at admission. EMI options are offered through
        third-party providers and are subject to their terms. Refunds are governed by our{" "}
        <a href="/refund-policy">Refund Policy</a>.
      </p>

      <h2>Student conduct</h2>
      <p>
        Students are expected to engage respectfully, meet program commitments, and not misuse
        academy resources, client project access, or other students&apos; work.
      </p>

      <h2>Intellectual property</h2>
      <p>
        Course materials remain the property of AGS AI Academy and AgileSoftLabs. Projects you
        build remain yours, subject to any separate client agreements you sign.
      </p>

      <h2>Limitation of liability</h2>
      <p>
        The website and content are provided &ldquo;as is&rdquo;. To the extent permitted by law,
        we are not liable for indirect or consequential losses arising from use of the site or
        services.
      </p>

      <h2>Contact</h2>
      <p>
        Questions about these terms? Email <a href={`mailto:${site.email}`}>{site.email}</a>.
      </p>
    </LegalShell>
  );
}
