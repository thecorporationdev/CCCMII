import React from "react";
import Marquee from "react-fast-marquee";

type Props = {};

const Banner = (props: Props) => {
  return (
    <div className=" border-b-[1px] border-b-black">
      <div className="flex items-center lg:divide-x-[1px] lg:divide-black">
        <div className="w-56">
          <div className=" text-base lg:text-2xl font-medium w-full uppercase px-4">
            cccmii news
          </div>
        </div>

        <div className="flex-1  ">
          <div className="flex  max-lg:py-6 font-medium text-xl gap-x-4 w-full py-8 container">
            <Marquee className="space-x-4 container">
              <a
                href="https://www.trustmediation.org.uk/mediations-set-to-increase-as-civil-court-backlogs-hit-an-all-time-high/
"
                target="_blank"
                className="mr-4"
              >
                • Mediations set to increase as Civil Court backlogs hit an
                all-time high
              </a>
              <a
                href="https://www.trustmediation.org.uk/the-economic-benefits-of-mediation-for-a-law-firm/
"
                target="_blank"
                className="mr-4"
              >
                • The economic benefits of mediation for a law firm
              </a>

              <a
                href="https://www.trustmediation.org.uk/mediation-in-clinical-negligence-claims-is-now-business-as-usual/"
                target="_blank"
                className="mr-4"
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
