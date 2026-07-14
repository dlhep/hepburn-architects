import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Breadcrumbs } from "@/components/Breadcrumbs";

const data = {"title": "Loft Conversion Architects", "meta": "Architect-led loft conversion design, Permitted Development advice, planning applications and Building Regulations drawings.", "h1": "Loft conversion design with planning and technical clarity.", "intro": "We assess headroom, roof form, access, fire strategy and planning constraints before developing dormer, hip-to-gable or mansard proposals.", "sections": [["Permitted Development review", "We establish whether the proposed loft conversion may proceed under Permitted Development or requires planning permission."], ["Measured survey and design", "Accurate survey information underpins layouts, sections, stair design and external alterations."], ["Building Regulations", "Technical drawings address structure, fire safety, insulation, ventilation and access."]]};

export const metadata: Metadata = {
  title: data.title,
  description: data.meta,
  alternates: { canonical: `/services/loft-conversions` },
  openGraph: {
    title: `${data.title} | Hepburn Architects`,
    description: data.meta,
    url: `https://www.hepburnarchitects.net/services/loft-conversions`
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
