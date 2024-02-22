import React from "react";
import Marquee from "react-fast-marquee";

type Props = {};

const Banner = (props: Props) => {
  return (
    <div className=" border-b-[1px] border-b-black">
      <div className="flex items-center lg:divide-x-[1px] lg:divide-black">
        <div className="hidden lg:block lg:w-[20%] ">
          <div className="text-2xl font-medium w-full uppercase">
            cccmii news
          </div>
        </div>

        <div className="flex-1  ">
          <div className="flex  max-lg:py-6 font-medium text-xl gap-x-4 w-full py-8">
            <Marquee>
              <a href="">
                I can be a React component, multiple React components, or just
                some text.
              </a>
              <a href="">
                🛠️ yo can be a React component, multiple React components, or
                just some text.
              </a>
            </Marquee>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
