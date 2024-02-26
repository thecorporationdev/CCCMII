import React from "react";
import { BlogItem } from "../(Home)/_components/Hero/BlogItem";
import Image from "next/image";
import image from "@/public/OUREVENTS.jpg";
import { AriticleData } from "@/Data/Articlesdata";
import ParallaxImage from "@/Animations/ParallaxImage";
import RevealOpacity from "@/Animations/RevealOpacity";
import Reveal from "@/Animations/Reveal";

type Props = {};

const page = (props: Props) => {
  return (
    <section className="">
      <ParallaxImage image={image} />

      <div className="px-4 lg:px-8">
        <div className="">
          <div className="w-full">
            <RevealOpacity>
              <div className=" w-full lg:w-1/2 text-3xl lg:text-7xl font-semibold uppercase">
                Our events
              </div>
            </RevealOpacity>
          </div>

          <div className="h-[1px] bg-black w-full my-10"></div>

          <div className="w-full flex justify-end my-10">
            <div className="w-full lg:w-1/2 text-xl ">
              <Reveal>
                <p>
                  Stay informed about the latest events and initiatives at the
                  Three C&apos;s Met International Institute of Mediation,
                  Negotiation, Counseling, and Conciliation (CCCMII) as we
                  continue to make strides in the fields of dispute resolution
                  and human relations. Our institution is bustling with
                  activity, and we&apos;re excited to share some of the
                  noteworthy developments that have recently taken place within
                  our academic community.
                </p>
              </Reveal>
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
      </div>
    </section>
  );
};

export default page;
