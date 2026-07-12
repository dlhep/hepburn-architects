"use client";
import Link from "next/link";
import { ArrowRight, Building2, Gavel, Home, Layers, PenSquare, TreePine, Warehouse } from "lucide-react";
import { useState } from "react";

const items=[
 {key:"extension",label:"House extension",icon:Home,blurb:"Rear, side or wrap-around extensions with planning strategy resolved first."},
 {key:"loft",label:"Loft conversion",icon:Layers,blurb:"Dormer, mansard and hip-to-gable designs based on an accurate survey."},
 {key:"newbuild",label:"New build home",icon:Building2,blurb:"Self-build and replacement dwellings with a clear site strategy."},
 {key:"hmo",label:"HMO conversion",icon:Warehouse,blurb:"Compliant layouts supported by planning and licensing advice."},
 {key:"remodel",label:"Internal remodelling",icon:PenSquare,blurb:"Structural changes and plan reconfiguration."},
 {key:"garden",label:"Garden room",icon:TreePine,blurb:"Studios and home offices designed around permitted development."},
 {key:"appeal",label:"Planning appeal",icon:Gavel,blurb:"A considered review of refusals worth challenging."}
];

export function ProjectSelector(){
 const [selected,setSelected]=useState(items[0].key);
 const current=items.find(i=>i.key===selected)!; const Icon=current.icon;
 return <div className="selector">
   <div><div className="eyebrow">Design consultation · Step 01</div><h2>Tell us what you’re building.</h2><p>Select the closest match and we’ll take you to an indicative fee estimate.</p>
     <div className="selected"><Icon/><div><small>Your selection</small><h3>{current.label}</h3><p>{current.blurb}</p><Link href={"/estimate?type="+current.key}>Continue <ArrowRight size={16}/></Link></div></div>
   </div>
   <div className="options">{items.map((item,i)=>{const I=item.icon;return <button key={item.key} className={selected===item.key?"active":""} onClick={()=>setSelected(item.key)}><span>{String(i+1).padStart(2,"0")}</span><I/><div><strong>{item.label}</strong><small>{item.blurb}</small></div><ArrowRight size={17}/></button>})}</div>
 </div>
}
