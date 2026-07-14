import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import type { LocationPageData } from "@/lib/seo-data";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FaqList } from "@/components/FaqList";
import { StructuredData } from "@/components/StructuredData";

export function LocationPage({ location }: { location: LocationPageData }) {
  const url = `https://www.hepburnarchitects.net/locations/${location.slug}`;
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: location.metaTitle,
      description: location.metaDescription,
      url,
      about: { "@id": "https://www.hepburnarchitects.net/#architect" }
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.hepburnarchitects.net" },
        { "@type": "ListItem", position: 2, name: "Locations", item: "https://www.hepburnarchitects.net/#locations" },
        { "@type": "ListItem", position: 3, name: location.place, item: url }
      ]
    }
  ];

  return (
    <>
      <StructuredData data={schema}/>
      <section className="location-hero">
        <div className="shell">
          <Breadcrumbs items={[{label:"Home",href:"/"},{label:"Locations",href:"/#locations"},{label:location.place}]}/>
          <div className="eyebrow">Residential architects</div>
          <h1>Residential Architects in {location.place}</h1>
          <p>{location.intro}</p>
          <div className="actions">
            <Link href="/estimate" className="btn primary">Get an indicative fee <ArrowRight size={17}/></Link>
            <a href="mailto:info@hepburnarchitects.com" className="btn editorial-link">Email the practice</a>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell seo-section-grid">
          <aside><span className="section-code">HEPBURN / LOCAL CONTEXT</span><h2>A property-specific approach.</h2></aside>
          <div className="location-copy">
            <p className="seo-lead">{location.localContext}</p>
            <div className="local-considerations">
              {location.considerations.map((item)=>(
                <article key={item.title}><h2>{item.title}</h2><p>{item.body}</p></article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section sand">
        <div className="shell seo-section-grid">
          <aside><span className="section-code">HEPBURN / SERVICES</span><h2>Residential services in {location.place}.</h2></aside>
          <div className="location-services">
            {location.services.map((item)=><div key={item}><CheckCircle2/>{item}</div>)}
            <div className="location-service-links">
              <Link href="/services/house-extensions">House extensions <ArrowRight size={15}/></Link>
              <Link href="/services/loft-conversions">Loft conversions <ArrowRight size={15}/></Link>
              <Link href="/services/planning-applications">Planning applications <ArrowRight size={15}/></Link>
              <Link href="/services/building-regulations">Building Regulations <ArrowRight size={15}/></Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell seo-section-grid">
          <aside><span className="section-code">HEPBURN / FAQ</span><h2>Questions about working locally.</h2></aside>
          <FaqList faqs={location.faqs}/>
        </div>
      </section>
    </>
  );
}
