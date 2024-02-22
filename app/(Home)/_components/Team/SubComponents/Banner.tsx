import React from "react";
import Marquee from "react-fast-marquee";

type Props = {};

const Banner = (props: Props) => {
  return (
    <div className=" border-b-[1px] border-b-black ">
      <div className="flex items-center divide-x-[1px] divide-black container">
        <div className="w-[30%] max-lg:mr-2 lg:w-[20%]">
          <div className=" text-sm lg:text-2xl font-medium w-full uppercase  lg:px-4">
            cccmii news
          </div>
        </div>

        <div className="flex-1 overflow-hidden">
          <div className="flex  max-lg:py-6 font-medium overflow-hidden text-sm lg:text-xl gap-x-4 w-full py-8 ">
            <Marquee className="space-x-4 w-full">
              <a
                href="https://www.trustmediation.org.uk/mediations-set-to-increase-as-civil-court-backlogs-hit-an-all-time-high/
"
                target="_blank"
                className=" ml-0 mr-1 "
              >
                • Mediations set to increase as Civil Court backlogs hit an
                all-time high
              </a>
              <a
                href="https://www.trustmediation.org.uk/the-economic-benefits-of-mediation-for-a-law-firm/
"
                target="_blank"
                className=""
              >
                • The economic benefits of mediation for a law firm
              </a>

              <a
                href="https://www.trustmediation.org.uk/mediation-in-clinical-negligence-claims-is-now-business-as-usual/"
                target="_blank"
                className="ml-1 mr-0"
              >
                • Mediation in clinical negligence claims is now “business as
                usual”
              </a>
            </Marquee>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
