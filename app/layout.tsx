import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.hepburnarchitects.net"),
  title: {
    default: "Residential Architects Birmingham & Teesside | Hepburn Architects",
    template: "%s | Hepburn Architects"
  },
  description:
    "Fixed-fee residential architects for house extensions, loft conversions, new homes, HMOs, planning applications and Building Regulations across Birmingham, the Midlands and Teesside.",
  alternates: {
    canonical: "/"
  },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://www.hepburnarchitects.net",
    siteName: "Hepburn Architects",
    title: "Residential Architects Birmingham & Teesside | Hepburn Architects",
    description:
      "Architect-led residential design, planning and Building Regulations services across Birmingham, the Midlands and Teesside."
  },
  twitter: {
    card: "summary_large_image",
    title: "Hepburn Architects",
    description:
      "Fixed-fee residential architecture, planning and Building Regulations support."
  },
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
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": ["Architect", "LocalBusiness"],
    "@id": "https://www.hepburnarchitects.net/#architect",
    name: "Hepburn Architects Ltd",
    url: "https://www.hepburnarchitects.net",
    email: "hello@hepburnarchitects.net",
    priceRange: "££",
    description:
      "Residential architecture practice providing feasibility, design, planning and Building Regulations services.",
    areaServed: [
      "Birmingham",
      "Solihull",
      "Worcestershire",
      "Warwickshire",
      "Staffordshire",
      "Middlesbrough",
      "Teesside",
      "England",
      "Wales"
    ],
    serviceType: [
      "House extensions",
      "Loft conversions",
      "New build homes",
      "HMO conversions",
      "Planning applications",
      "Building Regulations drawings"
    ]
  };

  return (
    <html lang="en-GB">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
