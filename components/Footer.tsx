import Link from "next/link";

export function Footer(){
  return (
    <footer>
      <div className="shell footgrid footer-expanded">
        <div>
          <div className="footlogo">HEPBURN ARCHITECTS</div>
          <p>Founder-led residential architecture, planning and Building Regulations across Birmingham, the Midlands and Teesside.</p>
          <a href="mailto:info@hepburnarchitects.com">info@hepburnarchitects.com</a>
        </div>
        <div>
          <h3>Services</h3>
          <Link href="/services/house-extensions">House extensions</Link>
          <Link href="/services/loft-conversions">Loft conversions</Link>
          <Link href="/services/hmo-conversions">HMO conversions</Link>
          <Link href="/services/new-build-homes">New homes</Link>
          <Link href="/services/planning-applications">Planning</Link>
          <Link href="/services/building-regulations">Building Regulations</Link>
        </div>
        <div>
          <h3>Locations</h3>
          <Link href="/locations/birmingham">Birmingham</Link>
          <Link href="/locations/solihull">Solihull</Link>
          <Link href="/locations/sutton-coldfield">Sutton Coldfield</Link>
          <Link href="/locations/middlesbrough">Middlesbrough</Link>
          <Link href="/locations/teesside">Teesside</Link>
          <Link href="/locations/stockton-on-tees">Stockton-on-Tees</Link>
        </div>
        <div>
          <h3>Resources</h3>
          <Link href="/projects">Projects</Link>
          <Link href="/guides">Guides</Link>
          <Link href="/estimate">Fee estimator</Link>
          <Link href="/privacy">Privacy</Link>
        </div>
      </div>
      <div className="shell copyright">© {new Date().getFullYear()} Hepburn Architects Ltd</div>
    </footer>
  );
}
