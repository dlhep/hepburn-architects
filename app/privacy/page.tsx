import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Notice | Hepburn Architects",
  description: "How Hepburn Architects handles website enquiry and calculator information.",
  alternates: { canonical: "/privacy" }
};

export default function PrivacyPage() {
  return (
    <section className="section">
      <div className="shell content-page">
        <div className="eyebrow">Privacy notice</div>
        <h1>Website enquiries and calculator details.</h1>
        <p className="lead">
          When you submit your name, email address and project information through the website,
          Hepburn Architects uses it to respond to your enquiry and discuss the services that may
          be relevant to your project.
        </p>
        <div className="privacy-copy">
          <h2>Information collected</h2>
          <p>Name, email address and the project selections entered into the fee or build-cost calculator.</p>
          <h2>How it is used</h2>
          <p>To provide the requested indicative result, follow up on the enquiry and prepare a more tailored proposal where appropriate.</p>
          <h2>Retention and sharing</h2>
          <p>Information is retained only for legitimate enquiry and business-administration purposes and is not sold to third parties.</p>
          <h2>Your rights</h2>
          <p>You may request access, correction or deletion by emailing info@hepburnarchitects.com.</p>
        </div>
      </div>
    </section>
  );
}
