import BlogImage from "@/components/ui/BlogImage";
import { getBySlug } from "@/lib/getBySlug";

import { notFound } from "next/navigation";
import React from "react";

type Props = {
  params: {
    courseid: string;
  };
};

const page = async ({ params: { courseid } }: Props) => {
  const course = await getBySlug(`${courseid}`);

  if (!course) notFound();
  const { meta, content } = course;

  return (
    <section className=" w-full  bg-white  text-grey ">
      <BlogImage imagesrc={meta.image} />
      <div className="px-5 my-10">
        <div className="flex flex-col  gap-y-4">
          <h1 className=" text-2xl lg:text-3xl font-semibold items-center">
            {meta.Coursetitle}
          </h1>
          <div className="flex items-center gap-x-1"></div>
        </div>
        <div className=""></div>
      </div>
      <div className="prose w-full mx-auto  mb-10 max-lg:px-5">{content}</div>
    </section>
  );
};

export default page;
