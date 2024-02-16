import Image from "next/image";
import image from "@/public/10008.png";

type Props = {};

const SponsorDark = (props: Props) => {
  return (
    <>
      <div className="bg-[#575966] p-8 flex items-center justify-center">
        <div className="lg:w-[70%] flex item-center flex-wrap justify-center gap-x-6 gap-y-10">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="relative h-[180px] w-[180px]">
              <Image src={image} alt="sponsor" fill className="" />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default SponsorDark;
