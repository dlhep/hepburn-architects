import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, XCircle } from "lucide-react";
import type { ServicePageData } from "@/lib/seo-data";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FaqList } from "@/components/FaqList";
import { StructuredData } from "@/components/StructuredData";

export function ServicePage({ service }: { service: ServicePageData }) {
  const url = `https://www.hepburnarchitects.net/services/${service.slug}`;
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: service.title,
      description: service.metaDescription,
      provider: { "@id": "https://www.hepburnarchitects.net/#architect" },
      areaServed: ["Birmingham", "West Midlands", "Teesside", "England", "Wales"],
      url
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.hepburnarchitects.net" },
        { "@type": "ListItem", position: 2, name: "Services", item: "https://www.hepburnarchitects.net/#services" },
        { "@type": "ListItem", position: 3, name: service.title, item: url }
      ]
    }
  ];

  return (
    <>
      <StructuredData data={schema}/>
      <section className="seo-hero">
        <div className="shell seo-hero-grid">
          <div>
            <Breadcrumbs items={[{label:"Home",href:"/"},{label:"Services",href:"/#services"},{label:service.title}]}/>
            <div className="eyebrow">{service.eyebrow}</div>
            <h1>{service.title}</h1>
            <p className="seo-lead">{service.intro}</p>
            <div className="actions">
              <Link href="/estimate" className="btn primary">Get an indicative fee <ArrowRight size={17}/></Link>
              <a href="mailto:info@hepburnarchitects.com" className="btn secondary">Discuss your project</a>
            </div>
          </div>
          <Image src={service.image} alt={service.imageAlt} width={1200} height={900} priority/>
        </div>
      </section>

      <section className="section seo-content-section">
        <div className="shell seo-section-grid">
          <aside>
            <span className="section-code">HEPBURN / SERVICE</span>
            <h2>What the service covers.</h2>
          </aside>
          <div className="seo-prose-grid">
            {service.sections.map((section) => (
              <article key={section.title}>
                <h2>{section.title}</h2>
                <p>{section.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section sand">
        <div className="shell scope-grid">
          <div className="scope-card included">
            <h2><CheckCircle2/> Typical deliverables</h2>
            <ul>{service.deliverables.map((item)=><li key={item}>{item}</li>)}</ul>
          </div>
          <div className="scope-card excluded">
            <h2><XCircle/> Normally excluded</h2>
            <ul>{service.exclusions.map((item)=><li key={item}>{item}</li>)}</ul>
          </div>
        </div>
        <div className="shell indicative-disclaimer">
          <strong>Important:</strong> Exact services, assumptions and exclusions are confirmed in the written fee proposal. Online fee figures are indicative only.
        </div>
      </section>

      <section className="section">
        <div className="shell seo-section-grid">
          <aside><span className="section-code">HEPBURN / FAQ</span><h2>Common questions.</h2></aside>
          <FaqList faqs={service.faqs}/>
        </div>
      </section>

      <section className="section related-section">
        <div className="shell">
          <span className="section-code">HEPBURN / NEXT</span>
          <h2>Related information</h2>
          <div className="related-links">
            {service.related.map((item)=><Link key={item.href} href={item.href}>{item.label}<ArrowRight size={16}/></Link>)}
          </div>
        </div>
      </section>
    </>
  );
}
