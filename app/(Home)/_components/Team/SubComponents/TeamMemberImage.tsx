import Image from "next/image";
import image from "@/public/10006.jpg";

type Props = {};

const TeamMemberImage = (props: Props) => {
  return (
    <div className=" w-full h-[300px] relative ">
      <Image
        src={image}
        fill
        className="object-cover object-top"
        alt="team member profile picture"
      />
    </div>
  );
};

export default TeamMemberImage;
