import React from "react";
import image from "@/public/CCCMIIIMAGES/dl.beatsnoop.com-3000-8auWx6lwOXcopy.jpg";
import Image from "next/image";
import HeaderText from "@/components/ui/HeaderText";

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

      <div className="w-full">
        <div className=" w-full lg:w-1/2 text-3xl lg:text-7xl font-semibold">
          INTERNATIONAL ARTS + MIND LAB
        </div>
      </div>

      <div className="w-full flex justify-end my-10">
        <div className=" w-full lg:w-1/2 text-xl font-semibold">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
          laboriosam odio ratione{" "}
          <span className="underline underline-offset-2">
            perferendis eum quod
          </span>{" "}
          earum maiores impedit, officiis, totam et dolores. Sint possimus{" "}
          <span className="underline underline-offset-2">
            perferendis eum quod
          </span>{" "}
          ad vel maxime reiciendis voluptate modi!officiis, totam et dolores.
          Sint possimus ad vel maxime reiciendis voluptate modi!
        </div>
      </div>

      <div className="w-full flex justify-end my-10">
        <div className="w-full lg:w-1/2 text-xl font-semibold">
          <h3 className="text-xl lg:text-2xl font-bold mb-4">ANFA MISSION</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
            laboriosam odio ratione{" "}
            <span className="underline underline-offset-2">
              perferendis eum quod
            </span>{" "}
          </p>
        </div>
      </div>
      <div className="w-full flex justify-end my-10">
        <div className="w-full lg:w-1/2 text-xl font-semibold">
          <h3 className="text-xl lg:text-2xl font-bold mb-4">ANFA MISSION</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
            laboriosam odio ratione{" "}
            <span className="underline underline-offset-2">
              perferendis eum quod
            </span>{" "}
          </p>
        </div>
      </div>

      <div className="h-[1px] bg-black w-full mb-10"></div>

      <div className="relative w-full h-[350px] lg:h-[700px] mb-14 bg-slate-100 px-8">
        <Image
          alt="CCCMII IMAGE"
          src={image}
          fill
          className="h-full w-full object-cover object-top transition-all ease-in-out duration-300"
          loading="eager"
        />
      </div>

      <div className="w-full">
        <div className=" w-full lg:w-1/2 text-3xl lg:text-7xl font-semibold">
          INTERNATIONAL ARTS + MIND LAB
        </div>
      </div>

      <div className="w-full flex justify-end my-10">
        <div className=" w-full lg:w-1/2 text-xl font-semibold">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
          laboriosam odio ratione{" "}
          <span className="underline underline-offset-2">
            perferendis eum quod
          </span>{" "}
          earum maiores impedit, officiis, totam et dolores. Sint possimus{" "}
          <span className="underline underline-offset-2">
            perferendis eum quod
          </span>{" "}
          ad vel maxime reiciendis voluptate modi!officiis, totam et dolores.
          Sint possimus ad vel maxime reiciendis voluptate modi!
        </div>
      </div>

      <div className="w-full flex justify-end my-10">
        <div className="w-full lg:w-1/2 text-xl font-semibold">
          <h3 className="text-xl lg:text-2xl font-bold mb-4">ANFA MISSION</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
            laboriosam odio ratione{" "}
            <span className="underline underline-offset-2">
              perferendis eum quod
            </span>{" "}
          </p>
        </div>
      </div>
      <div className="w-full flex justify-end my-10">
        <div className="w-full lg:w-1/2 text-xl font-semibold">
          <h3 className="text-xl lg:text-2xl font-bold mb-4">ANFA MISSION</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
            laboriosam odio ratione{" "}
            <span className="underline underline-offset-2">
              perferendis eum quod
            </span>{" "}
          </p>
        </div>
      </div>
    </section>
  );
};

export default page;
