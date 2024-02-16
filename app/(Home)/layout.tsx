import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import Navbar from "@/components/Navbar/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "CCCMII",
    template: "%s | CCCMIII",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} container antialiased`}>
        <Navbar />

        <div className="lg:border-[1px] lg:border-black  lg:border-t-[0] mt-16 lg:mt-20 ">
          {children}
        </div>
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
