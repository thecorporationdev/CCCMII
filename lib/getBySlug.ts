import fs from "fs";
import path from "path";
import { compileMDX } from "next-mdx-remote/rsc";
import BlogImage from "@/components/Footer/ui/BlogImage";

const rootDirectory = path.join(process.cwd(), "Data", "Articles");

export const getBySlug = async (slug: string) => {
  const realSlug = slug.replace(/\.mdx$/, "");
  const filePath = path.join(rootDirectory, `${realSlug}.mdx`);

  const fileContent = fs.readFileSync(filePath, { encoding: "utf8" });

  const { content, frontmatter } = await compileMDX<{
    Coursetitle: string;
    blurb: string;
    image: {
      imageurl: string;
    };
  }>({
    source: fileContent,
    options: { parseFrontmatter: true },
    components: {
      BlogImage,
    },
  });

  return { meta: { ...frontmatter, slug: realSlug }, content };
};
