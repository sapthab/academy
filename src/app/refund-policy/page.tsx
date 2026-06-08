import { pageMeta } from "@/lib/seo";
import { LegalShell } from "@/components/legal-shell";
import { site } from "@/lib/data";

export const metadata = pageMeta({
  title: "Refund Policy",
  description:
    "AGS AI Academy's refund policy — a full refund within the first 7 days of your batch, no questions asked.",
  path: "/refund-policy",
});

export default function RefundPolicyPage() {
  return (
    <LegalShell title="Refund Policy" crumbLabel="Refund Policy" lastUpdated="June 2026">
      <p>
        We want you in the right program. If it isn&apos;t the right fit, here&apos;s exactly how
        refunds work at AGS AI Academy.
      </p>

      <h2>7-day full refund</h2>
      <p>
        You may request a <strong>full refund within the first 7 calendar days</strong> of your
        batch start date — no questions asked. We process approved refunds within 7–10 business
        days to the original payment method.
      </p>

      <h2>After 7 days</h2>
      <ul>
        <li>Refunds requested after the first 7 days are considered on a pro-rata basis at our discretion, less any non-recoverable costs (e.g. third-party tools or certification fees).</li>
        <li>Once the internship phase or incubation track has begun, fees for that phase are non-refundable.</li>
      </ul>

      <h2>EMI &amp; scholarships</h2>
      <p>
        For EMI plans, refunds are adjusted against amounts already paid. Scholarship discounts
        are not refundable as cash.
      </p>

      <h2>How to request a refund</h2>
      <p>
        Email <a href={`mailto:${site.email}`}>{site.email}</a> from your registered email with
        your name, batch and reason. We&apos;ll confirm within 2 business days.
      </p>

      <h2>Contact</h2>
      <p>AGS AI Academy, {site.address}.</p>
    </LegalShell>
  );
}
