import fs from "fs";
import { type ClassValue, clsx } from "clsx";
import { Metadata } from "next";
import { twMerge } from "tailwind-merge";

import path from "path";
import { compileMDX } from "next-mdx-remote/rsc";
import BlogImage from "@/components/Footer/ui/BlogImage";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const rootDirectory = path.join(process.cwd(), "Data", "Courses");

export function constructMetadata({
  title = "DigitalHippo - the marketplace for digital assets",
  description = "DigitalHippo is an open-source marketplace for high-quality digital goods.",
  image = "/thumbnail.png",
  icons = "/favicon.ico",
  noIndex = false,
}: {
  title?: string;
  description?: string;
  image?: string;
  icons?: string;
  noIndex?: boolean;
} = {}): Metadata {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [
        {
          url: image,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
      creator: "@joshtriedcoding",
    },
    icons,
    metadataBase: new URL("https://digitalhippo.up.railway.app"),
    ...(noIndex && {
      robots: {
        index: false,
        follow: false,
      },
    }),
  };
}

export function pickRandomObjects(arr: any, numObjectsToPick: number) {
  if (numObjectsToPick >= arr.length) {
    return [...arr];
  }

  const shuffledArray = arr.slice();
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    // Shuffle the array using Fisher-Yates shuffle algorithm
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }

  // Pick the first numObjectsToPick elements from the shuffled array
  return shuffledArray.slice(0, numObjectsToPick);
}

// export const getArticleBySlug = async (slug: string) => {
//   const realSlug = slug.replace(/\.mdx$/, "");
//   const filePath = path.join(rootDirectory, `${realSlug}.mdx`);

//   const fileContent = fs.readFileSync(filePath, { encoding: "utf8" });

//   const { content, frontmatter } = await compileMDX<{
//     Coursetitle: string;
//     Blurb: string;
//     image: {
//       imageurl: string;
//     };
//   }>({
//     source: fileContent,
//     options: { parseFrontmatter: true },
//     components: {
//       BlogImage,
//     },
//   });

//   return { meta: { ...frontmatter, slug: realSlug }, content };
// };

// export const getArticlesMeta = async () => {
//   const files = fs.readdirSync(rootDirectory);

//   let posts = [];

//   for (const file of files) {
//     const { meta } = await getArticleBySlug(file);
//     posts.push(meta);
//   }
//   return posts;
// };
