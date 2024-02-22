import { AriticleDataTwo } from "@/Data/Articlesdata";
import image from "@/public/10004.jpg";
import Image from "next/image";
import Readmore from "../Hero/Readmore";

const Experience = () => {
  return (
    <div className="w-full flex flex-col lg:px-8 text-white pt-6">
      <div className="bg-black p-6 flex  flex-col gap-y-4 h-[350px]">
        <h3 className="text-xl lg:text-3xl uppercase font-semibold">
          {AriticleDataTwo[1].CourseTitle}
        </h3>

        <div className="w-full flex">
          <div className="w-full  font-medium">
            <p>{AriticleDataTwo[1].CourseBlurb}</p>
            <Readmore title="explore more" slug={AriticleDataTwo[1]?.slug} />
          </div>
        </div>
      </div>
      <div className="relative h-[350px]">
        <Image
          src={AriticleDataTwo[1]?.image}
          alt="brandservices image"
          fill
          className="object-cover object-center "
        />
      </div>
    </div>
  );
};

export default Experience;
