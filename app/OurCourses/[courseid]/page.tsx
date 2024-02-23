import React from "react";
import { courseDes } from "@/Data/Course";
import Image from "next/image";
import image from "@/public/CCCMIIIMAGES/ARTICLE2.jpg";
import { pickRandomObjects } from "@/lib/utils";
import Link from "next/link";
import Courseitem from "../_Components/Courseitem";

type Props = {
  params: { courseid: string };
};

const page = (props: Props) => {
  const { params } = props;

  const randomObjects = pickRandomObjects(courseDes, 3);

  const course = courseDes.find((insight) => insight.slug === params.courseid);

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
            {course?.coursename}
          </div>
        </div>

        <div className="h-[1px] bg-black w-full my-10"></div>

        <div className="w-full flex justify-end my-10">
          <div className="w-full lg:w-1/2 text-xl space-y-4 ">
            <h3 className="text-xl font-bold mb-4 capitalize">
              {course?.courseDescription}
            </h3>
            <p>
              <span className="font-semibold text-xl capitalize mr-1">
                course structure :
              </span>
              {course?.courseturcture}
            </p>
            <p>
              <span className="font-semibold text-xl capitalize mr-1">
                course curator :
              </span>
              {course?.courseCurator}
            </p>
            <p>
              <span className="font-semibold text-xl capitalize mr-1">
                course cost :
              </span>
              {course?.coursecost}
            </p>
          </div>
        </div>

        {/* <div className="flex flex-col">
          {[1, 2, 3, 4, 5, 6].map((courses, i) => (
            <Courseitem key={i} />
          ))}
        </div> */}
      </div>

      <div className="mt-20">
        <p className="mb-6 uppercase font-bold">other courses</p>

        <div className="flex flex-col items-end justify-center">
          <div className="w-full ">
            {randomObjects.map((course: any) => (
              <Courseitem
                key={course.id}
                coursetitle={course.coursename}
                slug={course.slug}
                tagline={course.taglines}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;