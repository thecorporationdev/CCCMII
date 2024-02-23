import Image from "next/image";
import { PiArrowRightThin } from "react-icons/pi";
import image from "@/public/10004.jpg";
import { AriticleData, AriticleDataTwo } from "@/Data/Articlesdata";
import Readmore from "../Hero/Readmore";

type Props = {};

const Connect = (props: Props) => {
  return (
    <div className="w-full flex flex-col lg:px-8 pt-6 text-white">
      <div className="bg-purple p-6 flex  flex-col gap-y-4 lg:h-[350px]">
        <h3 className="text-xl lg:text-3xl uppercase font-semibold">
          {AriticleDataTwo[0]?.CourseTitle}
        </h3>

        <div className="w-full flex flex-col">
          <div className="w-full  font-medium">
            <p>{AriticleDataTwo[0]?.CourseBlurb}</p>
          </div>
          <Readmore title="read more" slug={AriticleDataTwo[0]?.slug} />
        </div>
      </div>
      <div className="relative h-[350px]">
        <Image
          src={AriticleDataTwo[0]?.image}
          alt="brandservices image"
          fill
          className="object-cover object-center "
        />
      </div>
    </div>
  );
};

export default Connect;
