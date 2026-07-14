import type { Metadata } from "next";
import { ArchitectFeeCalculator } from "@/components/ArchitectFeeCalculator";


export const metadata: Metadata = {
  title: "Architect Fee Calculator",
  description:
    "Get an indicative fixed-fee estimate for measured survey, feasibility, planning and Building Regulations services.",
  alternates: { canonical: "/estimate" }
};

export default function Estimate(){return <section className="section"><div className="shell"><div className="estimatehead"><div className="eyebrow">Project estimate</div><h1>Get an indicative architect fee.</h1><p>Select your project type, approximate size and required services. The result is a guide only.</p></div><ArchitectFeeCalculator/></div></section>}
