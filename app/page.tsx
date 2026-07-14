import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight, CheckCircle2, Circle, MapPin, PenTool, Ruler,
  ShieldCheck, Sparkles
} from "lucide-react";
import { ProjectSelector } from "@/components/ProjectSelector";
import { BuildCostCalculator } from "@/components/BuildCostCalculator";

export const metadata: Metadata = {
  title: "Residential Architects Birmingham & Teesside",
  description:
    "Founder-led residential architecture for extensions, lofts, new homes and HMOs across Birmingham, the Midlands and Teesside.",
  alternates: { canonical: "/" }
};

const studioNotes = [
  ["01", "Planning before polish", "We test policy, constraints and risk before developing a design too far."],
  ["02", "Drawings that explain", "Plans, sections and details should make decisions easier, not simply look impressive."],
  ["03", "Fees with edges", "Each stage has a clear boundary, explicit exclusions and a defined next step."]
];

const projectCards = [
  {
    eyebrow: "Extension study",
    title: "Reworking a typical rear addition",
    place: "Birmingham",
    text: "A restrained intervention focused on light, circulation and a stronger garden connection.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=88"
  },
  {
    eyebrow: "New home",
    title: "A compact dwelling with a clear plan",
    place: "Midlands",
    text: "Site-led thinking, simple massing and a practical route through planning.",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=88"
  }
];

export default function Page() {
  return (
    <>
      <section className="editorial-hero">
        <div className="shell editorial-grid">
          <div className="hero-rail">
            <span>HEPBURN / 01</span>
            <span>RESIDENTIAL ARCHITECTURE</span>
            <span>BIRMINGHAM + TEESSIDE</span>
          </div>

          <div className="hero-main">
            <div className="eyebrow">Founder-led architecture practice</div>
            <h1>Residential architecture without the fog.</h1>
            <p className="hero-lede">
              Clear advice on planning, cost and buildability before you spend heavily on drawings.
            </p>
            <div className="actions">
              <Link href="/estimate" className="btn primary">
                Get an indicative fee <ArrowRight size={17}/>
              </Link>
              <a className="btn editorial-link" href="mailto:hello@hepburnarchitects.net">
                Book a consultation with David
              </a>
            </div>
            <div className="hero-proof">
              <span><ShieldCheck size={16}/> ARB Registered</span>
              <span><CheckCircle2 size={16}/> RIBA Chartered Practice</span>
              <span><MapPin size={16}/> Birmingham + Teesside</span>
            </div>
          </div>

          <div className="hero-canvas">
            <Image
              src="https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=1800&q=90"
              alt="Contemporary residential architecture"
              width={1200}
              height={1500}
              priority
            />
            <div className="drawing-overlay">
              <svg viewBox="0 0 600 780" aria-hidden="true">
                <rect x="42" y="48" width="516" height="684" rx="2"/>
                <line x1="88" y1="140" x2="512" y2="140"/>
                <line x1="88" y1="140" x2="88" y2="610"/>
                <line x1="188" y1="140" x2="188" y2="610"/>
                <line x1="360" y1="140" x2="360" y2="610"/>
                <line x1="512" y1="140" x2="512" y2="610"/>
                <line x1="88" y1="330" x2="512" y2="330"/>
                <line x1="88" y1="610" x2="512" y2="610"/>
                <path d="M188 330 Q274 250 360 330"/>
                <circle cx="474" cy="565" r="22"/>
                <text x="94" y="126">EXISTING</text>
                <text x="372" y="126">PROPOSED</text>
                <text x="104" y="682">SK-01 / NOT TO SCALE</text>
              </svg>
            </div>
            <div className="annotation note-a">01 / retain the original hierarchy</div>
            <div className="annotation note-b">02 / bring daylight deeper into plan</div>
          </div>
        </div>
      </section>

      <section className="marquee" aria-label="Practice values">
        <div className="marquee-track">
          <span>PLANNING CLARITY</span><Circle size={8} fill="currentColor"/>
          <span>FIXED FEES BY STAGE</span><Circle size={8} fill="currentColor"/>
          <span>DIRECT ARCHITECT ACCESS</span><Circle size={8} fill="currentColor"/>
          <span>TECHNICAL COORDINATION</span><Circle size={8} fill="currentColor"/>
          <span>PLANNING CLARITY</span><Circle size={8} fill="currentColor"/>
          <span>FIXED FEES BY STAGE</span>
        </div>
      </section>

      <section className="section studio-manifesto">
        <div className="shell manifesto-grid">
          <div className="manifesto-index">HEPBURN / METHOD</div>
          <div>
            <div className="eyebrow">How the studio works</div>
            <h2>Less theatre. More useful decisions.</h2>
          </div>
          <div className="manifesto-copy">
            <p>
              Good residential architecture is not about adding complexity.
              It is about making the right moves early enough to matter.
            </p>
          </div>
        </div>

        <div className="shell note-grid">
          {studioNotes.map(([n, title, body]) => (
            <article key={n} className="studio-note">
              <span>{n}</span>
              <h3>{title}</h3>
              <p>{body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section sand selector-wrap">
        <div className="shell selector-intro">
          <div className="eyebrow">Start with the project type</div>
          <h2>Tell us what you are building.</h2>
        </div>
        <div className="shell"><ProjectSelector/></div>
      </section>

      <section className="section project-editorial">
        <div className="shell project-heading">
          <span>HEPBURN / PROJECTS</span>
          <h2>Projects shown as decisions, not decoration.</h2>
        </div>

        <div className="shell editorial-projects">
          {projectCards.map((project, index) => (
            <article key={project.title} className={index % 2 ? "project-reverse" : ""}>
              <div className="project-image-wrap">
                <Image src={project.image} alt={project.title} width={1400} height={1000}/>
                <div className="project-datum">{index + 1 < 10 ? `0${index + 1}` : index + 1}</div>
              </div>
              <div className="project-copy">
                <div className="eyebrow">{project.eyebrow}</div>
                <h3>{project.title}</h3>
                <div className="project-place"><MapPin size={15}/>{project.place}</div>
                <p>{project.text}</p>
                <span className="text-link">Read the project logic <ArrowRight size={15}/></span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section founder-editorial">
        <div className="shell founder-grid">
          <div className="portrait-wrap">
            <Image
              src="/david-hepburn.jpeg"
              alt="David Hepburn, founder of Hepburn Architects"
              width={900}
              height={1100}
            />
            <div className="portrait-tag">DAVID HEPBURN / FOUNDER</div>
          </div>
          <div className="founder-copy">
            <div className="eyebrow">Founder-led practice</div>
            <h2>You work with the architect, not a sales layer.</h2>
            <p className="quote">
              “The aim is to remove uncertainty early—before clients have spent heavily on the wrong route.”
            </p>
            <p>
              David leads every project from first conversation through planning and technical design,
              keeping advice direct and the process legible.
            </p>
            <ul>
              <li><CheckCircle2/> ARB-registered architect</li>
              <li><CheckCircle2/> RIBA Chartered Practice</li>
              <li><CheckCircle2/> Residential specialist</li>
              <li><CheckCircle2/> Birmingham, Midlands and Teesside</li>
            </ul>
            <a href="mailto:hello@hepburnarchitects.net" className="btn editorial-link">Speak to David</a>
          </div>
        </div>
      </section>

      <section className="section process-strip">
        <div className="shell process-editorial">
          <div>
            <span className="section-code">HEPBURN / PROCESS</span>
            <h2>Four stages. One clear line of responsibility.</h2>
          </div>
          <ol>
            <li><span>01</span><div><Ruler/><h3>Measure</h3><p>Accurate existing information and a defined brief.</p></div></li>
            <li><span>02</span><div><PenTool/><h3>Test</h3><p>Options judged against planning, budget and use.</p></div></li>
            <li><span>03</span><div><Sparkles/><h3>Resolve</h3><p>A planning-ready proposal with clear intent.</p></div></li>
            <li><span>04</span><div><CheckCircle2/><h3>Detail</h3><p>Technical information for Building Control and pricing.</p></div></li>
          </ol>
        </div>
      </section>

      <section className="section sand">
        <div className="shell cost-layout">
          <div className="cost-copy">
            <span className="section-code">HEPBURN / COST</span>
            <h2>Early cost conversations should be useful, not falsely precise.</h2>
            <p>The calculator provides an indicative range for discussion. It is not a quotation or professional cost plan.</p>
          </div>
          <BuildCostCalculator/>
        </div>
      </section>

      <section className="section service-editorial" id="services">
        <div className="shell service-intro">
          <div>
            <span className="section-code">HEPBURN / SERVICES</span>
            <h2>Clear packages with defined edges.</h2>
          </div>
          <p>
            Structural engineering, statutory fees and specialist consultant fees are excluded unless expressly included.
          </p>
        </div>

        <div className="shell service-lines">
          <article>
            <span>01</span>
            <div><h3>Planning Package</h3><p>Measured survey, concept design, planning drawings and submission support.</p></div>
            <Link href="/estimate">Indicative fee <ArrowRight size={16}/></Link>
          </article>
          <article>
            <span>02</span>
            <div><h3>Planning + Building Regulations</h3><p>Planning services plus coordinated technical drawings for Building Control and contractor pricing.</p></div>
            <Link href="/estimate">Indicative fee <ArrowRight size={16}/></Link>
          </article>
          <article>
            <span>03</span>
            <div><h3>Full Pre-Construction Package</h3><p>Technical design, consultant coordination, tender information and contractor comparison support.</p></div>
            <Link href="/estimate">Tailored proposal <ArrowRight size={16}/></Link>
          </article>
        </div>
      </section>

      <section className="section closing-editorial">
        <div className="shell">
          <span className="section-code">HEPBURN / START</span>
          <h2>Begin with clarity.</h2>
          <p>Tell us what you are planning and we will help define the right next step.</p>
          <div className="actions">
            <Link href="/estimate" className="btn primary">Get an indicative fee</Link>
            <a href="mailto:hello@hepburnarchitects.net" className="btn editorial-link">Book a consultation</a>
          </div>
        </div>
      </section>
    </>
  );
}
