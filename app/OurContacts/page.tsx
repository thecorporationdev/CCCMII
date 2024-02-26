import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";
import React from "react";
import { FiArrowUpRight } from "react-icons/fi";
import image from "@/public/OURCONTACTS.jpg";
import { Link2Icon } from "lucide-react";
import Reveal from "@/Animations/Reveal";

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

        <div className="lg:px-8 px-4">
          <div className="">
            <div className="w-full">
              <div className=" w-full lg:w-1/2 text-3xl lg:text-7xl font-semibold uppercase ">
                Our contact
              </div>
            </div>

            <div className="h-[1px] bg-black w-full my-10"></div>

            <div className="w-full flex justify-end my-10">
              <div className="w-full lg:w-1/2 text-xl ">
                <Reveal>
                  <p>
                    Connecting with the Three C&apos;s Met International
                    Institute of Mediation, Negotiation, Counseling, and
                    Conciliation (CCCMII) is the gateway to exploring a world
                    where conflict resolution and communication are
                    revolutionized. We have streamlined our contact information
                    to ensure that you can reach out to us with ease for any
                    inquiries, support, or feedback that you may have.
                    Here&apos;s how you can get in touch with us:
                  </p>
                </Reveal>

                <div className="bg-black h-[1px] w-full mt-6"></div>
                <Reveal>
                  <div className="flex flex-col  divide-y-[1px] divide-black gap-y-4 ">
                    <div className="mt-2 ">
                      <span className="font-semibold mr-1 uppercase">
                        Address:
                      </span>
                      13 Mungo Park Close , 90021
                    </div>
                    <div className="mt-2 flex items-center">
                      <span className="font-semibold mr-1 uppercase">
                        Contact Numbers:
                      </span>
                      0802 361 8078
                    </div>

                    <div className="mt-2">
                      <div className="font-semibold mr-1 uppercase mb-2">
                        {" "}
                        Office Hours:
                      </div>
                      Monday to Friday: 9:00 AM - 5:00 PM <br />
                      Saturday: 10:00 AM - 3:00 PM Sunday: Closed
                    </div>

                    <div className="flex flex-col mt-2 ">
                      <ul className="flex flex-col gap-y-2">
                        <li className="mb-2">
                          <span className="font-semibold mr-1 uppercase ">
                            Email Correspondence
                          </span>
                        </li>
                        <li>
                          <span className="font-semibold mr-1">
                            For general inquiries
                          </span>
                          info@cccmii.org
                        </li>
                        <li>
                          <span className="font-semibold mr-1">
                            For career opportunities:
                          </span>
                          careers@cccmii.org
                        </li>
                        <li>
                          <span className="font-semibold mr-1">
                            For admissions:
                          </span>
                          admissions@cccmii.org
                        </li>
                      </ul>
                    </div>

                    <div className="mt-2">
                      <div className="font-semibold mr-1 uppercase">
                        Stay connected with CCCMII and join our vibrant
                        community on social media:
                      </div>
                      <ul className="flex flex-col gap-y-2 mt-4">
                        <li className="flex items-center">
                          <span className="font-semibold mr-1">Facebook:</span>
                          <a
                            className="hover:underline-offset-4 hover:underline transition duration-150 text-xl flex items-center"
                            href="https://web.facebook.com/cccmiiAfrica"
                            target="_blank"
                          >
                            <span className="mr-2">@CCCMIIAFRICA </span>
                            <Link2Icon size={15} />
                          </a>
                        </li>
                        <li className="flex items-center">
                          <span className="font-semibold mr-1">Twitter:</span>
                          <a
                            className="hover:underline-offset-4 hover:underline transition duration-150 text-xl flex items-center"
                            href="https://twitter.com/cccmiiAfrica"
                            target="_blank"
                          >
                            <span className="mr-2">@CCCMIIAFRICA </span>
                            <Link2Icon size={15} />
                          </a>
                        </li>
                        <li className="flex items-center">
                          <span className="font-semibold mr-1">
                            {" "}
                            LinkedIn :
                          </span>
                          <a
                            className="hover:underline-offset-4 hover:underline transition duration-150  text-xl flex items-center"
                            href="https://www.linkedin.com/company/cccmiiAfrica"
                            target="_blank"
                          >
                            <span className="mr-2">@CCCMIIAFRICA </span>
                            <Link2Icon size={15} />
                          </a>
                        </li>
                        <li className="flex items-center">
                          <span className="font-semibold mr-1">Youtube :</span>
                          <a
                            className="hover:underline-offset-4 hover:underline flex transition duration-150 text-xl items-center"
                            href="https://www.youtube.com/@cccmiiAfrica"
                            target="_blank"
                          >
                            <span className="mr-2">@CCCMIIAFRICA </span>
                            <Link2Icon size={15} />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
          <Reveal>
            <div className="w-full flex justify-end py-6 ">
              <div className="w-full ">
                <div className="w-full flex items-center  justify-end ">
                  <div className="w-full">
                    <form className="w-full py-10   border-t-[1px] border-b-2 border-black flex  justify-end">
                      <div className="flex justify-between md:w-1/2 flex-col gap-y-4 mt-10  text-xl">
                        <p className="text-2xl md:text-3xl font-bold  pb-4 uppercase ">
                          ready to enroll?
                        </p>
                        <p>
                          For your convenience, we also provide an online
                          contact form on our website. Fill in your details and
                          submit your message, and one of our representatives
                          will get back to you promptly.
                        </p>

                        <p className="mb-8">
                          At CCCMII, we value every interaction and are eager to
                          support your journey toward mastering the arts of
                          mediation, negotiation, counseling, and conciliation.
                          Whether you&apos;re a prospective student, a
                          professional looking for advanced training, or an
                          individual seeking guidance in conflict resolution,
                          we&apos;re here to assist. Reach out today and take
                          your first step towards making a positive change in
                          the world.
                        </p>
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
                        <button className="border-b-2 text-left flex items-center justify-center text-xl border-black bg-ransparent w-2/12 bg-transparent mt-8 text-black px-0 py-0 hover:bg-transparent hover:text-black hover:border-b-2 hover:border-black">
                          send
                          <FiArrowUpRight className="text-2xl font-semibold transition-all ease-in duration-300" />
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
};

export default page;
