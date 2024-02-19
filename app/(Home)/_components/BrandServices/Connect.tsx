import Image from "next/image";
import { PiArrowRightThin } from "react-icons/pi";
import image from "@/public/10004.jpg";

type Props = {};

const Connect = (props: Props) => {
  return (
    <div className="w-full flex flex-col lg:px-8 pt-6 text-white">
      <div className="bg-purple p-3 pb-6 h-[300px]">
        <h3 className="text-xl lg:text-3xl uppercase font-semibold">
          co-creating a new design framework
        </h3>

        <div className="w-full flex  mt-20">
          <div className="w-full md:w-[70%] xl:w-[50%]  text-base lg:text-xl font-medium">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

            <div className="flex mt-4 gap-x-2 items-center uppercase font-semibold text-base ">
              <PiArrowRightThin />
              <h2 className="">explore sessions</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="relative h-[350px]">
        <Image
          src={image}
          alt="brandservices image"
          fill
          className="object-cover object-center "
        />
      </div>
    </div>
  );
};

export default Connect;
