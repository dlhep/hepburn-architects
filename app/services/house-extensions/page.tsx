import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Breadcrumbs } from "@/components/Breadcrumbs";

const data = {"title": "House Extension Architects", "meta": "House extension architects for feasibility, planning permission, design and Building Regulations across Birmingham, the Midlands and Teesside.", "h1": "House extension architects who make the process clear.", "intro": "From rear and side extensions to wrap-around schemes, we help homeowners understand feasibility, planning risk, likely costs and the right design route before committing.", "sections": [["Feasibility first", "We review the property, planning context, constraints and likely route before design work begins."], ["Planning and design", "We prepare measured survey information, concept options, planning drawings and the application submission."], ["Technical information", "Where required, we prepare Building Regulations drawings and coordinate structural information for the construction stage."]]};

export const metadata: Metadata = {
  title: data.title,
  description: data.meta,
  alternates: { canonical: `/services/house-extensions` },
  openGraph: {
    title: `${data.title} | Hepburn Architects`,
    description: data.meta,
    url: `https://www.hepburnarchitects.net/services/house-extensions`
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
