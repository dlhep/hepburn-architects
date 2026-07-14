"use client";
import { useMemo,useState } from "react";
import { CheckCircle2, XCircle } from "lucide-react";
const services=[["survey","Measured survey",450],["feasibility","Feasibility / concept design",350],["planning","Planning drawings & submission",1650],["building","Building Regulations package",1500]] as const;
export function ArchitectFeeCalculator(){
 const [type,setType]=useState("extension"),[area,setArea]=useState(30),[route,setRoute]=useState("straightforward");
 const [selected,setSelected]=useState<string[]>(services.map(s=>s[0]));
 const breakdown=useMemo(()=>services.filter(s=>selected.includes(s[0])).map(s=>{let m=1;if(area>40&&area<=80)m*=1.1;else if(area<=150&&area>80)m*=1.2;else if(area>150)m*=1.35;if(type==="newbuild")m*=1.5;else if(type==="hmo")m*=1.2;if(route==="full")m*=1.1;else if(route==="appeal")m*=1.25;const adjusted=s[0]==="survey"?s[2]:Math.round(s[2]*m/50)*50;return {key:s[0],label:s[1],adjusted}}),[type,area,route,selected]);
 const total=breakdown.reduce((a,b)=>a+b.adjusted,0);
 return <div className="feetool">
  <div className="feeform">
   <label>Project type<select value={type} onChange={e=>setType(e.target.value)}><option value="extension">Extension / loft / remodelling</option><option value="hmo">HMO conversion</option><option value="newbuild">New build home</option></select></label>
   <label>Approximate floor area<div className="big">{area} m²</div><input type="range" min="10" max="250" step="5" value={area} onChange={e=>setArea(+e.target.value)}/></label>
   <label>Planning route<select value={route} onChange={e=>setRoute(e.target.value)}><option value="straightforward">Straightforward / PD</option><option value="full">Full planning</option><option value="appeal">Refusal / appeal complexity</option></select></label>
   <fieldset><legend>Services required</legend>{services.map(s=><label className="check" key={s[0]}><input type="checkbox" checked={selected.includes(s[0])} onChange={()=>setSelected(v=>v.includes(s[0])?v.filter(x=>x!==s[0]):[...v,s[0]])}/>{s[1]}</label>)}</fieldset>
  </div>
  <div className="feeresult"><small className="eyebrow">Indicative architect fee</small><strong className="total">{total?`£${total.toLocaleString()}`:"Select a service"}</strong>
   <p>Indicative guide only. A tailored fixed-fee proposal follows review of the property, brief and planning constraints.</p>
   <div className="breakdown">{breakdown.map(b=><div key={b.key}><span>{b.label}</span><strong>£{b.adjusted.toLocaleString()}</strong></div>)}</div>
   <div className="include"><h3><CheckCircle2/> What’s included</h3><ul><li>Architect consultation and project review</li><li>Selected survey, design, planning and technical drawing stages</li><li>Reasonable client revisions within the selected stage</li><li>Planning submission and authority coordination where selected</li></ul></div>
   <div className="include"><h3><XCircle/> What’s not included</h3><ul><li>Structural engineer fees</li><li>Planning application and Building Control fees</li><li>Topographical, ecology, tree, drainage and flood-risk reports</li><li>Party Wall, SAP, air testing and warranty costs</li></ul></div>
   <div className="notice">This estimate is an indicative guide only and is not a quotation or contractual offer.</div>
  </div>
 </div>
}
