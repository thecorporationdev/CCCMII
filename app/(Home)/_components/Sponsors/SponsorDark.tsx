import Image from "next/image";

import Logo1 from "@/public/SVGLOGOS/AfricanOmbudsmanAndMediatorsAssociation.svg";
import Logo2 from "@/public/SVGLOGOS/AsianLawStudentsAssociation.svg";
import Logo3 from "@/public/SVGLOGOS/BlackWomenForPositiveChange.svg";
import Logo4 from "@/public/SVGLOGOS/EssentialMediationSolutions.svg";
import Logo5 from "@/public/SVGLOGOS/GMNInstitute.svg";
import Logo6 from "@/public/SVGLOGOS/INTERNATIONALMEDIATIONINSTITUTE.svg";
import Logo7 from "@/public/SVGLOGOS/MediationBeyondBordersInternational.svg";
import Logo8 from "@/public/SVGLOGOS/RectitudeAlternativeDisputeResolution.svg";

export const Sponsors = [
  // { id: 1, image: Logo1 },
  { id: 2, image: Logo2 },
  { id: 3, image: Logo3 },
  // { id: 4, image: Logo4 },
  { id: 5, image: Logo5 },
  { id: 6, image: Logo6 },
  // { id: 7, image: Logo7 },
  { id: 8, image: Logo8 },
];

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

        <div className="w-full lg:w-[85%] max-lg:grid max-lg:gap-x-7 max-lg:grid-cols-2 lg:flex lg:item-center lg:flex-wrap justify-center  lg:gap-x-16 max-lg:gap-y-10 lg:gap-y-16 items-center max-lg:mt-10">
          <div className="relative max-lg:w-[150px] max-lg:h-[110px] lg:h-[110px] lg:w-[120px] p-10 ">
            <Image src={Logo1} alt="sponsor" fill className="" />
          </div>
          <div className="relative max-lg:w-[150px] max-lg:h-[110px] lg:h-[100px] lg:w-[200px] p-10 ">
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
          </div>
        </div>
      </div>
    </>
  );
};

export default SponsorDark;
