import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.hepburnarchitects.net"),
  title: "Hepburn Architects | Residential Architects",
  description: "Fixed-fee residential architecture, planning and Building Regulations across Birmingham, the Midlands and Teesside."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const schema = {
    "@context":"https://schema.org","@type":"Architect","name":"Hepburn Architects Ltd",
    "url":"https://www.hepburnarchitects.net","email":"hello@hepburnarchitects.net",
    "areaServed":["Birmingham","Solihull","Worcestershire","Warwickshire","Staffordshire","Middlesbrough","Teesside"]
  };
  return (
    <html lang="en">
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema)}} />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
