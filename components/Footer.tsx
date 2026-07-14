import Link from "next/link";
export function Footer(){
  return <footer><div className="shell footgrid">
    <div><div className="footlogo">HEPBURN ARCHITECTS</div><p>Residential architecture, planning and Building Regulations across Birmingham, the Midlands and Teesside.</p></div>
    <div><h3>Services</h3><Link href="/#services">Extensions</Link><Link href="/#services">Lofts</Link><Link href="/#services">New homes</Link><Link href="/#services">HMOs</Link></div>
    <div><h3>Contact</h3><a href="mailto:hello@hepburnarchitects.net">hello@hepburnarchitects.net</a><span>Birmingham & Teesside</span></div>
  </div><div className="shell copyright">© {new Date().getFullYear()} Hepburn Architects Ltd</div></footer>
}
