import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Breadcrumbs } from "@/components/Breadcrumbs";

const data = {"title": "Residential Architects Middlesbrough", "meta": "Residential architects in Middlesbrough for extensions, HMOs, planning applications and Building Regulations drawings.", "h1": "Residential architects in Middlesbrough.", "intro": "Hepburn Architects provides clear, fixed-fee residential architectural services across Middlesbrough and the wider Teesside area.", "areas": "Including Linthorpe, Nunthorpe, Acklam, Marton and surrounding areas."};

export const metadata: Metadata = {
  title: data.title,
  description: data.meta,
  alternates: { canonical: `/locations/middlesbrough` },
  openGraph: {
    title: `${data.title} | Hepburn Architects`,
    description: data.meta,
    url: `https://www.hepburnarchitects.net/locations/middlesbrough`
  }
};

export default function LocationPage() {
  return (
    <section className="section">
      <div className="shell content-page">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Locations" },
            { label: data.title }
          ]}
        />
        <div className="eyebrow">Local residential architecture</div>
        <h1>{data.h1}</h1>
        <p className="lead">{data.intro}</p>
        <p>{data.areas}</p>

        <div className="content-grid">
          {[
            ["House extensions", "Feasibility, planning and technical drawings for rear, side and wrap-around extensions."],
            ["Loft conversions", "Permitted Development advice, planning applications and Building Regulations information."],
            ["Planning applications", "Planning strategy, drawings, submissions and supporting statements."],
            ["Building Regulations", "Technical drawings coordinated with structural and specialist consultant information."]
          ].map((section: string[]) => {
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
          <h2>Discuss your project.</h2>
          <p>
            Start with an indicative fee or contact Hepburn Architects to discuss
            the property, brief and likely next steps.
          </p>
          <Link href="/estimate" className="btn primary">
            Get an indicative fee <ArrowRight size={17} />
          </Link>
        </div>
      </div>
    </section>
  );
}
