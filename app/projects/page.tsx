import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ProjectsFilter } from "@/components/ProjectsFilter";

export const metadata: Metadata = {
  title: "Residential Architecture Projects | Hepburn Architects",
  description:
    "Filter extension, loft conversion, new-build, HMO and remodelling projects across Birmingham, the Midlands and Teesside.",
  alternates: { canonical: "/projects" }
};

export default function ProjectsPage() {
  return (
    <>
      <section className="projects-page-hero">
        <div className="shell projects-page-head">
          <div className="section-code">HEPBURN / PROJECTS</div>
          <div>
            <h1>Find projects relevant to what you are planning.</h1>
            <p>
              Filter the work by project type to focus on the examples, constraints and design
              questions most relevant to your property.
            </p>
          </div>
        </div>
      </section>

      <section className="section projects-page-list">
        <div className="shell">
          <ProjectsFilter/>
        </div>
      </section>

      <section className="section closing-editorial">
        <div className="shell">
          <span className="section-code">HEPBURN / YOUR PROJECT</span>
          <h2>Start with the constraints.</h2>
          <p>Tell us what you are considering and we will help define a sensible next step.</p>
          <Link href="/estimate" className="btn primary">
            Get an indicative fee <ArrowRight size={17}/>
          </Link>
        </div>
      </section>
    </>
  );
}
