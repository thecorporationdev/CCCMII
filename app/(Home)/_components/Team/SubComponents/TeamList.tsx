import TeamMemberImage from "./TeamMemberImage";
import firstimage from "@/public/Experts/ChijiokeNnannaIbeku.jpg";
import secondimage from "@/public/Experts/JoyBorum.jpg";
import thirdimage from "@/public/Experts/LisaSingh.jpg";
import fourthimage from "@/public/Experts/new.jpg";
import fifthimage from "@/public/Experts/OritAsnin.jpg";
import sixthimage from "@/public/Experts/PatrickMcphilamy.jpg";
import seventhimage from "@/public/Experts/kim.jpg";
import Eighthimage from "@/public/Experts/SuzannaNorbeck.jpg";
import Reveal from "@/Animations/Reveal";

const ExpertsImage = [
  {
    id: 1,
    image: firstimage,
  },
  {
    id: 2,
    image: secondimage,
  },
  {
    id: 4,
    image: fourthimage,
  },
  {
    id: 3,
    image: thirdimage,
  },
  {
    id: 3,
    image: Eighthimage,
  },

  {
    id: 5,
    image: fifthimage,
  },
  {
    id: 6,
    image: sixthimage,
  },
  {
    id: 7,
    image: seventhimage,
  },
];
type Props = {};

const TeamList = (props: Props) => {
  return (
    <div className=" py-8 lg:pl-8 w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2">
        {ExpertsImage.map((item, i) => (
          <Reveal delay={i * 0.2} key={i}>
            <div className="border-[0.02px] border-black p-4" key={i}>
              <TeamMemberImage key={item.id} image={item.image} />
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
};

export default TeamList;
