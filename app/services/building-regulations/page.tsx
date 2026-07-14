import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Breadcrumbs } from "@/components/Breadcrumbs";

const data = {"title": "Building Regulations Drawings", "meta": "Building Regulations drawings and technical design for house extensions, loft conversions, new homes and residential alterations.", "h1": "Building Regulations drawings prepared for construction.", "intro": "Technical information should be coordinated, buildable and clear. We develop the approved design into a package suitable for Building Control review and contractor pricing.", "sections": [["Technical drawings", "Plans, sections and details address structure, fire safety, insulation, drainage, ventilation and access."], ["Consultant coordination", "We coordinate architectural information with structural engineers and other specialists where required."], ["Clear exclusions", "Building Control charges, structural engineering and specialist consultant fees are normally separate unless expressly included."]]};

export const metadata: Metadata = {
  title: data.title,
  description: data.meta,
  alternates: { canonical: `/services/building-regulations` },
  openGraph: {
    title: `${data.title} | Hepburn Architects`,
    description: data.meta,
    url: `https://www.hepburnarchitects.net/services/building-regulations`
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
