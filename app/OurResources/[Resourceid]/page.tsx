import Image from "next/image";
import React from "react";
import image from "@/public/CCCMIIIMAGES/ARTICLE2.jpg";
import { ResourceCard } from "../_components/ResourceCard";

type Props = {};

const page = (props: Props) => {
  return (
    <>
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
              Resource name
            </div>
          </div>

          <div className="h-[1px] bg-black w-full my-10"></div>

          <div className="w-full flex justify-end my-10">
            <div className="w-full lg:w-1/2 text-xl space-y-8">
              <p>
                To empower individuals and organizations with the essential
                skills and knowledge to effectively resolve conflicts, engage in
                meaningful negotiations, provide insightful counselling, and
                achieve harmonious conciliation.
              </p>
              <p>
                To empower individuals and organizations with the essential
                skills and knowledge to effectively resolve conflicts, engage in
                meaningful negotiations, provide insightful counselling, and
                achieve harmonious conciliation.
              </p>
              <p>
                To empower individuals and organizations with the essential
                skills and knowledge to effectively resolve conflicts, engage in
                meaningful negotiations, provide insightful counselling, and
                achieve harmonious conciliation.
              </p>
            </div>
          </div>

          <div className="h-[1px] bg-black w-full mb-10"></div>
        </div>

        <p className="mb-6 uppercase font-bold">other resources</p>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-2 mb-10 max-lg:px-4">
        {[1, 3, 4, 5].map((resource, i) => (
          <ResourceCard key={i} />
        ))}
      </div>
    </>
  );
};

export default page;
