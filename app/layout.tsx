import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import { Syne } from "next/font/google";
import FooterMain from "@/components/Footer/FooterMain";
import SponsorMain from "./(Home)/_components/Sponsors/SponsorMain";
import SmoothScrolling from "@/Animations/SmoothScrolling";
import { SeoKeywords } from "@/Data/SEOKEYWORDS";

const syne = Syne({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.cccmii.org"),
  description:
    "WELCOME TO THE OFFICIAL WEBSITE OF THREE C'S MET INTERNATIONAL INSTITUTE OF MEDIATION, NEGOTIATION COUNSELING AND CONCILIATION (CCCMII)",
  title: {
    default: "CCCMII",
    template: "%s | CCCMII",
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "CCCMII",
    description:
      "At CCCMII, we are dedicated to empowering individuals and organizations with the skills and knowledge necessary for effective mediation, negotiation, counselling, and conciliation",
    url: "https://www.cccmii.org",
    siteName: "CCCMII",
    locale: "en_US",
    type: "website",
  },
  keywords: SeoKeywords,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: "CCCMII",
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${syne.className} antialiased`}>
        <Navbar />
        <main className="lg:border-[1px]  container lg:border-black  lg:border-t-[0] mt-16 lg:mt-20 border-b-[0]">
          <SmoothScrolling> {children}</SmoothScrolling>
        </main>
        <SponsorMain />
        <FooterMain />
      </body>
    </html>
  );
}

// export const metadata = constructMetadata();

// export const metadata: Metadata = {
//   metadataBase: new URL("hostedurl"),
//   title: {
//     default: "sitename",
//     template: "%s | sitename",
//   },
//   robots: {
//     index: true,
//     follow: true,
//     googleBot: {
//       index: true,
//       follow: true,
//       "max-video-preview": -1,
//       "max-image-preview": "large",
//       "max-snippet": -1,
//     },
//   },
//   twitter: {
//     title: "sitename",
//     card: "summary_large_image",
//   },

//   description: "site description",

//   openGraph: {
//     title: "sitename",
//     description: "site description",
//     url: "hosted url",
//     siteName: "sitename",
//     locale: "en_US",
//     type: "website",
//   },
// };
