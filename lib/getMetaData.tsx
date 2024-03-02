import fs from "fs";
import path from "path";
import { getBySlug } from "./getBySlug";

const rootDirectory = path.join(process.cwd(), "Data", "Articles");

export const getMetaData = async () => {
  const files = fs.readdirSync(rootDirectory);

  let posts = [];

  for (const file of files) {
    const { meta } = await getBySlug(file);
    posts.push(meta);
  }
  return posts;
};
