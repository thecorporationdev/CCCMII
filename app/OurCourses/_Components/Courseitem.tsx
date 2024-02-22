import { ArrowRight } from "lucide-react";
import React from "react";

type Props = {};

const Courseitem = (props: Props) => {
  return (
    <div className="border-t-[1px] border-b-[1px] border-black w-full py-10 flex justify-between items-center">
      <div className="w-full">
        <div className=" text-3xl lg:text-7xl font-semibold uppercase">
          commercial mediation
        </div>

        <p className="lg:px-4 text-xl font-semibold mt-2">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis
          eveniet ex veniam consectetur
        </p>
      </div>

      <ArrowRight size={50} />
    </div>
  );
};

export default Courseitem;
