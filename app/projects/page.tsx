import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Residential Architecture Projects | Hepburn Architects",
  description:
    "Selected extension, loft conversion, new-build and residential remodelling projects across Birmingham, the Midlands and Teesside.",
  alternates: { canonical: "/projects" }
};

const projects = [
  {
    type: "Rear extension",
    title: "A brighter kitchen and garden room",
    location: "Birmingham",
    status: "Concept case study",
    image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1600&q=88",
    summary: "A contemporary extension strategy focused on daylight, family space and a more useful connection to the garden."
  },
  {
    type: "New home",
    title: "A compact dwelling with a clear plan",
    location: "Midlands",
    status: "Concept case study",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=88",
    summary: "Simple massing and a disciplined plan developed around site constraints, privacy and planning context."
  },
  {
    type: "Loft conversion",
    title: "Making the roof space work harder",
    location: "Teesside",
    status: "Concept case study",
    image: "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?auto=format&fit=crop&w=1600&q=88",
    summary: "A practical loft strategy balancing stair position, headroom, daylight and the external roof form."
  },
  {
    type: "Internal remodelling",
    title: "A calmer ground-floor plan",
    location: "Solihull",
    status: "Concept case study",
    image: "https://images.unsplash.com/photo-1600566753051-f0b89df2dd90?auto=format&fit=crop&w=1600&q=88",
    summary: "Reconfigured circulation and fewer wasted spaces to create a more legible everyday plan."
  }
];

export default function ProjectsPage() {
  return (
    <>
      <section className="projects-page-hero">
        <div className="shell projects-page-head">
          <div className="section-code">HEPBURN / PROJECTS</div>
          <div>
            <h1>Residential projects shaped by useful decisions.</h1>
            <p>
              Extensions, lofts, new homes and remodelling work developed around planning,
              context, budget and how the spaces will actually be used.
            </p>
          </div>
        </div>
      </section>

      <section className="section projects-page-list">
        <div className="shell projects-grid-page">
          {projects.map((project, index) => (
            <article key={project.title}>
              <div className="projects-page-image">
                <Image src={project.image} alt={project.title} width={1400} height={1000}/>
                <span>{String(index + 1).padStart(2, "0")}</span>
              </div>
              <div className="projects-page-copy">
                <div className="eyebrow">{project.type}</div>
                <h2>{project.title}</h2>
                <div className="project-place"><MapPin size={15}/>{project.location}</div>
                <p>{project.summary}</p>
                <small>{project.status}</small>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section closing-editorial">
        <div className="shell">
          <span className="section-code">HEPBURN / YOUR PROJECT</span>
          <h2>Start with the constraints.</h2>
          <p>Tell us what you are considering and we will help define a sensible next step.</p>
          <Link href="/estimate" className="btn primary">Get an indicative fee <ArrowRight size={17}/></Link>
        </div>
      </section>
    </>
  );
}
