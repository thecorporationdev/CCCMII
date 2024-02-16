import React from "react";

type Props = {};

const Banner = (props: Props) => {
  return (
    <div className=" border-b-[1px] border-b-black">
      <div className="flex items-center lg:divide-x-[1px] lg:divide-black">
        <div className="hidden lg:block lg:w-[20%] ">
          <div className="text-2xl font-medium w-full">
            Engaging Conversations
          </div>
        </div>

        <div className="flex-1  overflow-hidden flex-nowrap whitespace-nowrap ">
          <div className="flex  max-lg:py-6 font-medium text-xl gap-x-4 w-full py-8">
            <span>Lorem ipsum dolor sit amet</span>
            <span>consectetur adipisicing elit.</span>
            <span>Earum fuga accusantium nemo molestias sapiente,</span>
            <span>Earum fuga accusantium nemo molestias sapiente,</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
