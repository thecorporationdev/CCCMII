import Image, { StaticImageData } from "next/image";
type Props = {
  image: StaticImageData;
};

const TeamMemberImage = (props: Props) => {
  const { image } = props;
  return (
    <div className=" w-full h-[300px] relative bg-gray-100 ">
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
