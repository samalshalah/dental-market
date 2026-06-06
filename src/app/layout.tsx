import type { Metadata } from "next";
import "./globals.css";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { JsonLd } from "@/components/JsonLd";
import { organizationSchema, professionalServiceSchema } from "@/lib/schema";
import { pageMeta, site } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: pageMeta.home.title,
    template: "%s"
  },
  description: pageMeta.home.description,
  applicationName: site.name,
  alternates: {
    canonical: site.url
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: site.url,
    siteName: site.name,
    title: pageMeta.home.title,
    description: pageMeta.home.description,
    images: [
      {
        url: site.socialImage,
        width: 1200,
        height: 630,
        alt: site.socialImageAlt
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: pageMeta.home.title,
    description: pageMeta.home.description,
    images: [
      {
        url: site.socialImage,
        alt: site.socialImageAlt
      }
    ]
  },
  icons: {
    icon: [
      { url: "/favicon.png", sizes: "32x32", type: "image/png" },
      { url: "/brand/dental-market-icon-192.png", sizes: "192x192", type: "image/png" }
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }]
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <JsonLd data={organizationSchema()} />
        <JsonLd data={professionalServiceSchema()} />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
