import Image from "next/image";
import React from "react";
import image from "@/public/CCCMIIIMAGES/dl.beatsnoop.com-3000-0j4ELKg5P7 copy.jpg";
import Courseitem from "./_Components/Courseitem";

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
            Our courses
          </div>
        </div>

        <div className="h-[1px] bg-black w-full my-10"></div>

        <div className="w-full flex justify-end my-10">
          <div className="w-full lg:w-1/2 text-base lg:text-xl ">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
              excepturi, quisquam temporibus placeat illo quibusdam eaque
              possimus nulla magnam quis earum repellendus numquam eum delectus?
              Dolore unde error corporis. Error. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Assumenda nulla et qui id
              praesentium deserunt, vitae quaerat ad quo optio hic fugit velit,
              ipsa ullam, suscipit molestiae possimus. Aliquid, debitis? Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Eos quia non
              sit error perspiciatis! Ipsam saepe eligendi eum! Reiciendis
              facere, voluptatum provident quod cum cupiditate iste praesentium
              sed culpa aut!
            </p>
          </div>
        </div>

        <div className="flex flex-col">
          {[1, 2, 3, 4, 5, 6].map((courses, i) => (
            <Courseitem key={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default page;
