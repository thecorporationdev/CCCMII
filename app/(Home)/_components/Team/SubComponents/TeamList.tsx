import TeamMemberImage from "./TeamMemberImage";

type Props = {};

const TeamList = (props: Props) => {
  return (
    <div className=" py-8 lg:pl-8 w-full">
      <div className="grid grid-cols-1 lg:grid-cols-2 ">
        {[1, 2, 3, 4, 5, 6].map((item, i) => (
          <div className="border-[0.02px] border-black p-4" key={i}>
            <TeamMemberImage />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamList;
