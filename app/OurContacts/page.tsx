import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";
import React from "react";
import { FiArrowUpRight } from "react-icons/fi";
import image from "@/public/CCCMIIIMAGES/ARTICLE2.jpg";

type Props = {};

const page = (props: Props) => {
  return (
    <>
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
        <div className="">
          <div className="w-full">
            <div className=" w-full lg:w-1/2 text-3xl lg:text-7xl font-semibold uppercase">
              Our contact
            </div>
          </div>

          <div className="h-[1px] bg-black w-full my-10"></div>

          <div className="w-full flex justify-end my-10">
            <div className="w-full lg:w-1/2 text-xl ">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
                excepturi, quisquam temporibus placeat illo quibusdam eaque
                possimus nulla magnam quis earum repellendus numquam eum
                delectus? Dolore unde error corporis. Error. Lorem ipsum dolor
                sit amet consectetur adipisicing elit. Assumenda nulla et qui id
                praesentium deserunt, vitae quaerat ad quo optio hic fugit
                velit, ipsa ullam, suscipit molestiae possimus. Aliquid,
                debitis? Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Eos quia non sit error perspiciatis! Ipsam saepe eligendi
                eum! Reiciendis facere, voluptatum provident quod cum cupiditate
                iste praesentium sed culpa aut!
              </p>
            </div>
          </div>
        </div>

        <div className="w-full flex justify-end py-6 ">
          <div className="w-full ">
            <div className="w-full flex items-center  justify-end ">
              <div className="w-full">
                <form className="w-full py-10  lg:px-8 border-t-[1px] border-b-2 border-black flex flex-col justify-between">
                  <p className="text-2xl md:text-3xl font-bold  pb-4 uppercase ">
                    ready to enroll?
                  </p>
                  <div className="flex justify-between md:w-1/2 flex-col gap-y-10 mt-10 ">
                    <Input
                      placeholder="your fullname"
                      className="border-gray-500 rounded-none"
                    />

                    <Input
                      placeholder="your phone number"
                      className="border-gray-500 rounded-none"
                    />

                    <Input
                      placeholder="your email"
                      className="border-gray-500 rounded-none"
                    />

                    <Textarea
                      className="resize-none border-gray-400 rounded-none"
                      placeholder="message"
                    />
                  </div>

                  <button className="border-b-2 text-left flex items-center justify-center text-sm border-black bg-ransparent w-2/12 bg-transparent mt-8 text-black px-0 py-0 hover:bg-transparent hover:text-black hover:border-b-2 hover:border-black">
                    send
                    <FiArrowUpRight className="text-2xl font-semibold transition-all ease-in duration-300" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
