import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { guides } from "@/lib/seo-data";

export const metadata: Metadata = {
  title: "Residential Architecture Guides | Hepburn Architects",
  description: "Practical guides to planning permission, architect fees, Building Regulations, lofts, HMOs and new-build feasibility.",
  alternates: { canonical: "/guides" }
};

export default function GuidesPage() {
  return (
    <section className="section guides-index">
      <div className="shell">
        <div className="eyebrow">Residential architecture knowledge</div>
        <h1>Practical guides before you commit.</h1>
        <p className="seo-lead">Clear explanations of the planning, fee and technical questions that commonly affect residential projects.</p>
        <div className="guides-grid">
          {guides.map((guide)=>(
            <Link href={`/guides/${guide.slug}`} key={guide.slug}>
              <span>GUIDE</span>
              <h2>{guide.title}</h2>
              <p>{guide.metaDescription}</p>
              <strong>Read guide <ArrowRight size={16}/></strong>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
