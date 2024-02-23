import Image from "next/image";
import React from "react";
import image from "@/public/OURCOURSES.jpg";
import Courseitem from "./_Components/Courseitem";
import TeamDetails from "../(Home)/_components/Team/TeamDetails";
import { courseDes } from "@/Data/Course";

type Props = {};

const page = (props: Props) => {
  return (
    <section className="">
      <div className="relative w-full h-[350px] lg:h-[700px] mb-14 bg-slate-100 px-8">
        <Image
          alt="CCCMII IMAGE"
          src={image}
          fill
          className="h-full w-full object-cover object-top transition-all ease-in-out duration-300"
          loading="eager"
        />
      </div>

      <div className="px-4 lg:px-8">
        <div className="">
          <div className="w-full">
            <div className=" w-full lg:w-1/2 text-3xl lg:text-7xl font-semibold uppercase">
              Our courses
            </div>
          </div>

          <div className="h-[1px] bg-black w-full my-10"></div>

          <div className="w-full flex justify-end my-10">
            <div className="w-full lg:w-1/2 text-xl ">
              <p>
                At the Three C&apos;s Met International Institute of Mediation,
                Negotiation, Counseling, and Conciliation (CCCMII), we are
                dedicated to providing skills and knowledge essential for
                conflict resolution and effective human interaction. Our
                curriculum is meticulously designed to foster professionals who
                advocate for peace and understanding through a well-rounded
                educational experience that emphasizes communication,
                psychology, and conflict dynamics. We combine theory with
                practice in a dynamic learning environment, led by a faculty
                renowned for their expertise. As the landscape of dispute
                resolution evolves, we remain current and interdisciplinary,
                preparing students to skillfully navigate complex issues.
              </p>
            </div>
          </div>

          <div className="flex flex-col">
            {courseDes.map((course, i) => (
              <Courseitem
                key={course.id}
                coursetitle={course.coursename}
                slug={course.slug}
                tagline={course.taglines}
              />
            ))}
          </div>
        </div>

        <div className="h-[1px] bg-black w-full mT-2 mb-6"></div>
      </div>
      <TeamDetails />
    </section>
  );
};

export default page;
