import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Breadcrumbs } from "@/components/Breadcrumbs";

const data = {"title": "Planning Application Services", "meta": "Planning drawings, application submissions and planning strategy for residential projects across Birmingham, the Midlands and Teesside.", "h1": "Planning applications built around policy and evidence.", "intro": "Good planning work is more than drawings. We review context, policy, constraints and planning history so the submission has a clear rationale.", "sections": [["Planning strategy", "We identify the most appropriate route, including Permitted Development, householder planning, full planning or pre-application advice."], ["Application information", "We prepare drawings, forms and supporting statements appropriate to the project."], ["Authority liaison", "Where appointed, we manage submission and respond to reasonable planning queries during determination."]]};

export const metadata: Metadata = {
  title: data.title,
  description: data.meta,
  alternates: { canonical: `/services/planning-applications` },
  openGraph: {
    title: `${data.title} | Hepburn Architects`,
    description: data.meta,
    url: `https://www.hepburnarchitects.net/services/planning-applications`
  }
};

export default function ServicePage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: data.title,
    provider: {
      "@type": "Architect",
      name: "Hepburn Architects Ltd",
      url: "https://www.hepburnarchitects.net"
    },
    areaServed: ["Birmingham", "Midlands", "Middlesbrough", "Teesside"],
    description: data.meta
  };

  return (
    <section className="section">
      <div className="shell content-page">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
        />
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Services", href: "/#services" },
            { label: data.title }
          ]}
        />

        <div className="eyebrow">Residential architectural services</div>
        <h1>{data.h1}</h1>
        <p className="lead">{data.intro}</p>

        <div className="content-grid">
          {data.sections.map((section: string[]) => {
            const [title, body] = section;
            return (
              <article key={title}>
                <CheckCircle2 />
                <h2>{title}</h2>
                <p>{body}</p>
              </article>
            );
          })}
        </div>

        <div className="content-cta">
          <h2>Start with an indicative fee.</h2>
          <p>
            Use the estimator for an initial guide, then request a tailored
            fixed-fee proposal based on your property and brief.
          </p>
          <Link href="/estimate" className="btn primary">
            Get an indicative fee <ArrowRight size={17} />
          </Link>
        </div>
      </div>
    </section>
  );
}
