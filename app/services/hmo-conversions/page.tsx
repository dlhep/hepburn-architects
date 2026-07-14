import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Breadcrumbs } from "@/components/Breadcrumbs";

const data = {"title": "HMO Conversion Architects", "meta": "HMO conversion architects for planning, layouts, licensing support and Building Regulations across Birmingham and Teesside.", "h1": "HMO conversions planned around compliance and viability.", "intro": "We help landlords and developers assess planning, licensing, space standards, fire strategy and practical layout before purchase or conversion.", "sections": [["Planning route", "We review use class, Article 4 controls, planning history and local policy."], ["Layout and standards", "Room sizes, amenity, circulation, refuse, cycle storage and fire safety are considered together."], ["Technical coordination", "Building Regulations information can be coordinated with fire, structural and specialist consultant input."]]};

export const metadata: Metadata = {
  title: data.title,
  description: data.meta,
  alternates: { canonical: `/services/hmo-conversions` },
  openGraph: {
    title: `${data.title} | Hepburn Architects`,
    description: data.meta,
    url: `https://www.hepburnarchitects.net/services/hmo-conversions`
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
