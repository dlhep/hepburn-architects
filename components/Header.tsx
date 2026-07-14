"use client";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export function Header(){
  const [open,setOpen]=useState(false);
  return <>
    <div className="trust"><div className="shell"><span>ARB Registered</span><span>RIBA Chartered Practice</span><span>Fixed fees by stage</span></div></div>
    <header>
      <div className="shell nav">
        <Link href="/" className="logo">HEPBURN<small>ARCHITECTS</small></Link>
        <nav className="desktop"><Link href="/#services">Services</Link><Link href="/projects">Projects</Link><Link href="/#process">Process</Link><Link href="/estimate" className="btn primary">Get an indicative fee</Link></nav>
        <button className="menu" onClick={()=>setOpen(!open)} aria-label="Toggle navigation">{open?<X/>:<Menu/>}</button>
      </div>
      {open && <nav className="mobile shell"><Link href="/#services">Services</Link><Link href="/projects">Projects</Link><Link href="/#process">Process</Link><Link href="/estimate" className="btn primary">Get an indicative fee</Link></nav>}
    </header>
  </>
}
