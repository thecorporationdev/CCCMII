import Image from "next/image";
import image from "@/public/10011.png";
import Logo1 from "@/public/SVGLOGOS/AfricanOmbudsmanAndMediatorsAssociation.svg";
import Logo2 from "@/public/SVGLOGOS/AsianLawStudentsAssociation.svg";
import Logo3 from "@/public/SVGLOGOS/BlackWomenForPositiveChange.svg";
import Logo4 from "@/public/SVGLOGOS/EssentialMediationSolutions.svg";
import Logo5 from "@/public/SVGLOGOS/GMNInstitute.svg";
import Logo6 from "@/public/SVGLOGOS/INTERNATIONALMEDIATIONINSTITUTE.svg";
import Logo7 from "@/public/SVGLOGOS/MediationBeyondBordersInternational.svg";
import Logo8 from "@/public/SVGLOGOS/RectitudeAlternativeDisputeResolution.svg";

type Props = {};

export const Sponsors = [
  { id: 1, image: Logo1 },
  { id: 2, image: Logo2 },
  { id: 3, image: Logo3 },
  { id: 4, image: Logo4 },
  { id: 5, image: Logo5 },
  { id: 1, image: Logo6 },
  { id: 1, image: Logo7 },
  { id: 1, image: Logo8 },
];

const SponsosGrid = (props: Props) => {
  return (
    <div className="grid grid-cols-2 xl:grid-cols-4 place-content-center mt-10 lg:mt-16 mb-5 lg:mb-8  border-t-[1px] border-black  border-b-[1px] ">
      {Sponsors.map((partner, idx) => (
        <div
          key={idx}
          className="items-center flex justify-center p-10 lg:p-20 lg:border-r-[0.1px] lg:border-black last:border-r-[0]"
        >
          <div className="relative h-36 w-44">
            <Image
              src={partner.image}
              alt="partners company"
              fill
              className="h-full w-full "
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default SponsosGrid;
