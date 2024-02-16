import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
