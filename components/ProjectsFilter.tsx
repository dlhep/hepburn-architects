"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { ArrowRight, MapPin } from "lucide-react";

type Project = {
  category: "Extensions" | "Lofts" | "New Builds" | "HMOs" | "Remodelling";
  title: string;
  location: string;
  status: string;
  image: string;
  summary: string;
};

const projects: Project[] = [
  {
    category: "Extensions",
    title: "A brighter kitchen and garden room",
    location: "Birmingham",
    status: "Concept case study",
    image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1600&q=88",
    summary: "A contemporary rear extension focused on daylight, family space and a more useful garden connection."
  },
  {
    category: "Extensions",
    title: "A restrained side-and-rear addition",
    location: "Solihull",
    status: "Concept case study",
    image: "https://images.unsplash.com/photo-1600585152915-d208bec867a1?auto=format&fit=crop&w=1600&q=88",
    summary: "A simple massing strategy designed to improve circulation without overwhelming the original house."
  },
  {
    category: "New Builds",
    title: "A compact dwelling with a clear plan",
    location: "Midlands",
    status: "Concept case study",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=88",
    summary: "Simple massing and a disciplined plan developed around privacy, context and planning constraints."
  },
  {
    category: "Lofts",
    title: "Making the roof space work harder",
    location: "Teesside",
    status: "Concept case study",
    image: "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?auto=format&fit=crop&w=1600&q=88",
    summary: "A practical loft strategy balancing stair position, headroom, daylight and the external roof form."
  },
  {
    category: "HMOs",
    title: "A compliant shared-house layout",
    location: "Middlesbrough",
    status: "Concept case study",
    image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1600&q=88",
    summary: "A layout study balancing room standards, shared amenity, fire strategy and planning considerations."
  },
  {
    category: "Remodelling",
    title: "A calmer ground-floor plan",
    location: "Solihull",
    status: "Concept case study",
    image: "https://images.unsplash.com/photo-1600566753051-f0b89df2dd90?auto=format&fit=crop&w=1600&q=88",
    summary: "Reconfigured circulation and fewer wasted spaces to create a more legible everyday plan."
  }
];

const filters = ["All", "Extensions", "Lofts", "New Builds", "HMOs", "Remodelling"] as const;

export function ProjectsFilter() {
  const [active, setActive] = useState<(typeof filters)[number]>("All");

  const visible = useMemo(
    () => active === "All" ? projects : projects.filter((project) => project.category === active),
    [active]
  );

  return (
    <>
      <div className="project-filters" role="group" aria-label="Filter projects by type">
        {filters.map((filter) => (
          <button
            type="button"
            key={filter}
            className={active === filter ? "active" : ""}
            onClick={() => setActive(filter)}
            aria-pressed={active === filter}
          >
            {filter}
          </button>
        ))}
      </div>

      <div className="projects-filter-grid" aria-live="polite">
        {visible.map((project, index) => (
          <article key={`${project.category}-${project.title}`}>
            <div className="filter-project-image">
              <Image src={project.image} alt={project.title} width={1200} height={900}/>
              <span>{String(index + 1).padStart(2, "0")}</span>
            </div>
            <div className="filter-project-copy">
              <div className="eyebrow">{project.category}</div>
              <h2>{project.title}</h2>
              <div className="project-place"><MapPin size={15}/>{project.location}</div>
              <p>{project.summary}</p>
              <div className="project-card-foot">
                <small>{project.status}</small>
                <span>View project <ArrowRight size={15}/></span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </>
  );
}
