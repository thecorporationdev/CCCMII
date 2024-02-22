import HeroGrid from "@/app/(Home)/_components/Hero/HeroGrid";
import HeaderText from "@/components/ui/HeaderText";
import React from "react";

type Props = {};

const page = (props: Props) => {
  return (
    <div>
      <div className="">
        <HeaderText title="courses" />
      </div>
      <div className="mt-10">
        <HeroGrid />
      </div>
    </div>
  );
};

export default page;
