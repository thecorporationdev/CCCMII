import Image from "next/image";

import Logo1 from "@/public/SVGLOGONLY/EssentialMediationSolutions.svg";
import Logo2 from "@/public/SVGLOGONLY/MediatorsBeyondBorders.svg";
import Logo3 from "@/public/SVGLOGONLY/AsianLawStudentsAssociation.svg";
import Logo4 from "@/public/SVGLOGONLY/BlackWomenForPositiveChange.svg";
import Logo5 from "@/public/SVGLOGONLY/GMNInstitute.svg";
import Logo6 from "@/public/SVGLOGONLY/INTERNATIONALMEDIATIONINSTITUTE.svg";
import Logo7 from "@/public/SVGLOGONLY/AfricanOmbudsmanAndMediatorsAssociation.svg";
import Logo8 from "@/public/SVGLOGONLY/Rectitude.svg";

export const Sponsors = [
  { id: 1, image: Logo1, name: "Essential Mediation Solutions" },
  { id: 6, image: Logo6, name: "International Mediation Institute" },
  { id: 5, image: Logo5, name: "GMN Institute" },
  { id: 8, image: Logo8, name: "Rectitude" },
  { id: 4, image: Logo4, name: "Black Women for Positive Change" },
  { id: 2, image: Logo2, name: "Mediators Beyond    Borders" },
  { id: 3, image: Logo3, name: "Asian Law Students'​ Association" },
  { id: 7, image: Logo7, name: "African Ombudsman and Mediators Association" },
];

type Props = {};

const SponsorDark = (props: Props) => {
  return (
    <>
      <div className="bg-purple p-8 flex items-center justify-center flex-col pb-16 ">
        <div className="flex items-center justify-center w-full py-10">
          <p className="font-semibold text-base uppercase text-white text-center">
            MEET OUR STELLAR ALLIANCE: OUR INCREDIBLE PARTNERS!
          </p>
        </div>

        <div className="w-full lg:w-[65%] grid gap-x-2 gap-y-4  grid-cols-2 xl:grid-cols-4 lg:p-10 lg:item-center justify-center  items-center max-lg:mt-10 max-lg:mb-10">
          {Sponsors.map((sponsor) => (
            <div key={sponsor.id}>
              <div className="p-6 lg:p-10 border-[1px] border-white flex items-center justify-center h-[200px]">
                <Image
                  src={sponsor.image}
                  alt="sponsor"
                  height={200}
                  width={200}
                  className=""
                />
              </div>

              <div className="text-center h-10 text-white font-semibold text-sm lg:text-base mt-1 lg:px-2">
                {sponsor.name}
              </div>
            </div>
          ))}

          {/* <div
            key={sponsor.id}
            className="relative max-lg:w-[150px] max-lg:h-[110px] lg:h-[110px] lg:w-[120px] p-10  "
          >
            <Image src={sponsor.image} alt="sponsor" fill className="" />
          </div> */}

          {/* <div className="relative max-lg:w-[150px] max-lg:h-[110px] lg:h-[100px] lg:w-[200px] p-10 ">
            <Image src={Logo2} alt="sponsor" fill className="" />
          </div>
          <div className="relative max-lg:w-[150px] max-lg:h-[110px] lg:h-[90px] lg:w-[170px] p-10 ">
            <Image src={Logo3} alt="sponsor" fill className="" />
          </div>
          <div className="relative max-lg:w-[150px] max-lg:h-[90px] lg:h-[80px] lg:w-[200px] p-10">
            <Image src={Logo4} alt="sponsor" fill className="" />
          </div>
          <div className="relative max-lg:w-[150px] max-lg:h-[150px] lg:h-[90px] lg:w-[200px] p-10 ">
            <Image src={Logo5} alt="sponsor" fill className="" />
          </div>
          <div className="relative max-lg:w-[150px] max-lg:h-[90px] lg:h-[90px] lg:w-[200px] p-10 ">
            <Image src={Logo6} alt="sponsor" fill className="" />
          </div>
          <div className="relative max-lg:w-[170px] max-lg:h-[130px] lg:h-[90px] lg:w-[200px] p-10 ">
            <Image src={Logo7} alt="sponsor" fill className="" />
          </div>
          <div className="relative max-lg:w-[150px] max-lg:h-[90px] lg:h-[90px] lg:w-[200px] p-10 ">
            <Image src={Logo8} alt="sponsor" fill className="" />
          </div> */}
        </div>
      </div>
    </>
  );
};

export default SponsorDark;
