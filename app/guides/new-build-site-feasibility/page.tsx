import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { guides } from "@/lib/seo-data";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { StructuredData } from "@/components/StructuredData";

const guide = guides.find((item) => item.slug === "new-build-site-feasibility");

export const metadata: Metadata = guide ? {
  title: guide.metaTitle,
  description: guide.metaDescription,
  alternates: { canonical: `/guides/new-build-site-feasibility` },
  openGraph: {
    title: guide.metaTitle,
    description: guide.metaDescription,
    url: `https://www.hepburnarchitects.net/guides/new-build-site-feasibility`,
    type: "article"
  }
} : {};

export default function Page() {
  if (!guide) notFound();
  const url = `https://www.hepburnarchitects.net/guides/new-build-site-feasibility`;
  return (
    <>
      <StructuredData data={{
        "@context":"https://schema.org",
        "@type":"Article",
        headline:guide.title,
        description:guide.metaDescription,
        author:{"@id":"https://www.hepburnarchitects.net/#architect"},
        publisher:{"@id":"https://www.hepburnarchitects.net/#architect"},
        mainEntityOfPage:url
      }}/>
      <article className="guide-article">
        <header className="guide-hero">
          <div className="shell">
            <Breadcrumbs items={[{label:"Home",href:"/"},{label:"Guides",href:"/guides"},{label:guide.title}]}/>
            <div className="eyebrow">Residential architecture guide</div>
            <h1>{guide.title}</h1>
            <p>{guide.intro}</p>
          </div>
        </header>
        <div className="shell guide-body">
          <nav aria-label="On this page">
            <span>On this page</span>
            {guide.sections.map(([title])=><a key={title} href={`#${title.toLowerCase().replace(/[^a-z0-9]+/g,"-")}`}>{title}</a>)}
          </nav>
          <div>
            {guide.sections.map(([title,body])=>(
              <section key={title} id={title.toLowerCase().replace(/[^a-z0-9]+/g,"-")}>
                <h2>{title}</h2>
                <p>{body}</p>
              </section>
            ))}
            <div className="guide-cta">
              <h2>Apply this to your property.</h2>
              <p>General guidance cannot replace a property-specific feasibility and planning review.</p>
              <Link href="/estimate" className="btn primary">Get an indicative fee <ArrowRight size={17}/></Link>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
