import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { StructuredData } from "@/components/StructuredData";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.hepburnarchitects.net"),
  title: {
    default: "Residential Architects Birmingham & Teesside | Hepburn Architects",
    template: "%s"
  },
  description: "Founder-led residential architecture, planning and Building Regulations services for extensions, lofts, HMOs and new homes.",
  applicationName: "Hepburn Architects",
  authors: [{ name: "Hepburn Architects Ltd" }],
  creator: "Hepburn Architects Ltd",
  publisher: "Hepburn Architects Ltd",
  category: "Architecture",
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1
    }
  },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://www.hepburnarchitects.net",
    siteName: "Hepburn Architects",
    title: "Residential Architects Birmingham & Teesside | Hepburn Architects",
    description: "Architect-led residential design, planning and Building Regulations services."
  },
  twitter: {
    card: "summary_large_image",
    title: "Hepburn Architects",
    description: "Founder-led residential architecture, planning and technical design."
  }
};

const organisationSchema = [
  {
    "@context": "https://schema.org",
    "@type": ["Architect", "ProfessionalService", "LocalBusiness"],
    "@id": "https://www.hepburnarchitects.net/#architect",
    name: "Hepburn Architects Ltd",
    url: "https://www.hepburnarchitects.net",
    email: "info@hepburnarchitects.com",
    founder: { "@type": "Person", name: "David Hepburn", jobTitle: "Architect" },
    priceRange: "££",
    description: "Founder-led residential architecture practice providing feasibility, design, planning and Building Regulations services.",
    areaServed: [
      "Birmingham","Solihull","Sutton Coldfield","Harborne","Edgbaston","Moseley",
      "Middlesbrough","Teesside","Stockton-on-Tees","Yarm","England","Wales"
    ],
    knowsAbout: [
      "House extensions","Loft conversions","HMO conversions","New build homes",
      "Planning applications","Building Regulations drawings","Residential feasibility"
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://www.hepburnarchitects.net/#website",
    url: "https://www.hepburnarchitects.net",
    name: "Hepburn Architects",
    publisher: { "@id": "https://www.hepburnarchitects.net/#architect" },
    inLanguage: "en-GB"
  }
];

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-GB">
      <body>
        <StructuredData data={organisationSchema}/>
        <Header/>
        <main>{children}</main>
        <Footer/>
      </body>
    </html>
  );
}
