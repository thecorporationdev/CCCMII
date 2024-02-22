import React from "react";
import { BlogItem } from "../(Home)/_components/Hero/BlogItem";
import Image from "next/image";
import image from "@/public/CCCMIIIMAGES/dl.beatsnoop.com-3000-8auWx6lwOXcopy.jpg";
import { AriticleData } from "@/Data/Articlesdata";

type Props = {};

const page = (props: Props) => {
  return (
    <section className="px-4 lg:px-8">
      <div className="relative w-full h-[350px] lg:h-[700px] mb-14 bg-slate-100 px-8">
        <Image
          alt="CCCMII IMAGE"
          src={image}
          fill
          className="h-full w-full object-cover object-top transition-all ease-in-out duration-300"
          loading="eager"
        />
      </div>

      <div className="">
        <div className="w-full">
          <div className=" w-full lg:w-1/2 text-3xl lg:text-7xl font-semibold uppercase">
            Our events
          </div>
        </div>

        <div className="h-[1px] bg-black w-full my-10"></div>

        <div className="w-full flex justify-end my-10">
          <div className="w-full lg:w-1/2 text-xl ">
            <h3 className="text-xl lg:text-2xl font-bold mb-4 uppercase">
              first event
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit,
              eius? Reprehenderit, totam inventore dolorem rem magnam similique
              deleniti impedit, ipsa sint sequi velit architecto cumque,
              expedita praesentium officiis possimus vero?
            </p>
          </div>
        </div>
        <div className="w-full flex justify-end my-10">
          <div className="w-full lg:w-1/2 text-xl">
            <h3 className="text-xl lg:text-2xl font-bold mb-4 uppercase">
              secondevent
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
              maiores quod dolorem deserunt harum placeat, incidunt iste eveniet
              consectetur. Impedit quam magnam nam sapiente. Quo quae quia
              assumenda explicabo numquam?
            </p>
          </div>
        </div>
        <div className="w-full flex justify-end my-10">
          <div className="w-full lg:w-1/2 text-xl ">
            <h3 className="text-xl lg:text-2xl font-bold mb-4 uppercase">
              third event
            </h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Doloribus dignissimos voluptatum libero a aspernatur temporibus
              perspiciatis natus laborum accusamus, veritatis magni aperiam ad
              cum, iure perferendis quis voluptatem fugiat odit.
            </p>
          </div>
        </div>
      </div>

      <div className="mb-10 space-y-4 ">
        {AriticleData.map((courses) => (
          <BlogItem
            key={courses.slug}
            color={courses.color}
            image={courses.image}
            slug={courses.slug}
            courseblurb={courses.CourseBlurb}
            coursetitle={courses.CourseTitle}
          />
        ))}
      </div>
    </section>
  );
};

export default page;
