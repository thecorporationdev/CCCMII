import localFont from "next/font/local";

export const syne = localFont({
  src: [
    // {
    //   path: "../public/Fonts/DystopianFont/DystopianBlack.ttf",
    //   weight: "800",
    //   style: "normal",
    // },
    {
      path: "../public/Fonts/syne/Syne-Bold.otf",
      weight: "700",
      style: "normal",
    },
    // {
    //   path: "../public/Fonts/DystopianFont/DystopianLight.ttf",
    //   weight: "300",
    //   style: "normal",
    // },
    {
      path: "../public/Fonts/syne/Syne-Regular.otf",
      weight: "500",
      style: "normal",
    },
  ],
  display: "swap",
  variable: "--font-syne",
});
