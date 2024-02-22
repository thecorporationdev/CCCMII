import React from "react";
import TeamDescription from "./SubComponents/TeamDescription";
import TeamList from "./SubComponents/TeamList";

type Props = {};

const TeamDetails = (props: Props) => {
  return (
    <div className="flex lg:divide-x-[1px] divide-black flex-col lg:flex-row max-lg:ContainerPadding py-6">
      <TeamDescription />
      <TeamList />
    </div>
  );
};

export default TeamDetails;
