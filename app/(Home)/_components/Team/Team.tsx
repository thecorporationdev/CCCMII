import React from "react";
import Banner from "./SubComponents/Banner";
import TeamDetails from "./TeamDetails";

type Props = {};

const Team = (props: Props) => {
  return (
    <div className="border-t-[1px] border-b-[1px] border-black">
      <div className="lg:px-8">
        <Banner />
        <TeamDetails />
      </div>
    </div>
  );
};

export default Team;
