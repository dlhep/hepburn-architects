"use client";
import { useMemo,useState } from "react";
const rates:any={extension:[2200,3400],loft:[1800,2800],newbuild:[2400,3800],hmo:[1400,2200],remodel:[1200,2000],garden:[1600,2600]};
const finish:any={standard:1,high:1.2,premium:1.45};
export function BuildCostCalculator(){
 const [type,setType]=useState("extension"); const [area,setArea]=useState(30); const [level,setLevel]=useState("standard");
 const result=useMemo(()=>{const [l,h]=rates[type]; const m=finish[level]; return [Math.round(l*area*m/500)*500,Math.round(h*area*m/500)*500]},[type,area,level]);
 return <div className="calc">
  <label>Project type<select value={type} onChange={e=>setType(e.target.value)}><option value="extension">House extension</option><option value="loft">Loft conversion</option><option value="newbuild">New build home</option><option value="hmo">HMO conversion</option><option value="remodel">Internal remodelling</option><option value="garden">Garden room</option></select></label>
  <label>Approximate floor area<div className="big">{area} m²</div><input type="range" min="10" max="250" step="5" value={area} onChange={e=>setArea(+e.target.value)}/></label>
  <label>Finish level<select value={level} onChange={e=>setLevel(e.target.value)}><option value="standard">Standard</option><option value="high">High</option><option value="premium">Premium</option></select></label>
  <div className="result"><small>Illustrative build cost</small><strong>£{result[0].toLocaleString()} – £{result[1].toLocaleString()}</strong><p>Indicative only. Excludes VAT, professional fees, statutory fees and abnormal costs.</p></div>
 </div>
}
