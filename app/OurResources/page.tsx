import Image from "next/image";
import React from "react";
import image from "@/public/OURRESOURCES.jpg";
import MainBrandServices from "../(Home)/_components/BrandServices/MainBrandServices";
import Reveal from "@/Animations/Reveal";

type Props = {};

const page = (props: Props) => {
  return (
    <section className="pb-10">
      <div className="relative w-full h-[350px] lg:h-[700px] mb-14 bg-slate-100 px-8">
        <Image
          alt="CCCMII IMAGE"
          src={image}
          fill
          className="h-full w-full object-cover object-top transition-all ease-in-out duration-300"
          loading="eager"
        />
      </div>

      <div className="px-4 lgpx-8">
        <div className="w-full">
          <Reveal>
            <div className=" w-full lg:w-1/2 text-3xl lg:text-7xl font-semibold uppercase">
              Our resources
            </div>
          </Reveal>
        </div>

        <div className="h-[1px] bg-black w-full my-10"></div>

        <div className="w-full flex justify-end my-10">
          <div className="w-full lg:w-1/2 text-xl ">
            <Reveal>
              <p>
                The Three C&apos;s Met International Institute of Mediation,
                Negotiation, Counseling, and Conciliation (CCCMII) is not only a
                hub for academic programs and professional training but also a
                wellspring of valuable resources. Our resources serve to enhance
                the educational experience of our community members and aid in
                the pursuit of excellence in their respective practices. At
                CCCMII, we are committed to providing an environment that
                encourages learning, fosters growth, and supports the
                advancement of every individual who seeks to make a positive
                impact through mediation, negotiation, counseling, and
                conciliation. Whether you are a student, practitioner, or
                enthusiast in the field, our resources are tailored to meet your
                needs and propel you toward your goals.
              </p>
            </Reveal>
          </div>
        </div>
        <div className="h-[1px] bg-black w-full my-10"></div>
      </div>
      <MainBrandServices />
    </section>
  );
};

export default page;
