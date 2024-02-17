import Image from "next/image";
import image from "@/public/WhiteLogo.svg";

type Props = {};

const SponsorDark = (props: Props) => {
  return (
    <>
      <div className="bg-purple p-8 flex items-center justify-center flex-col">
        <div className="flex items-center justify-center w-full py-10">
          <p className="font-semibold text-base uppercase text-white">
            thanks to our sponsors
          </p>
        </div>

        <div className="w-full lg:w-[80%] max-lg:grid gap-x-4 max-lg:grid-cols-2 lg:flex item-center flex-wrap justify-center lg:gap-x-10 gap-y-10">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="relative h-[200px] w-[200px]">
              <Image src={image} alt="sponsor" fill className="" />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default SponsorDark;
