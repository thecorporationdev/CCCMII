import Image from "next/image";
import image from "@/public/10011.png";

type Props = {};

const SponsosGrid = (props: Props) => {
  return (
    <div className="grid grid-cols-2 xl:grid-cols-4 place-content-center mt-10 lg:mt-16 border-t-[0.1px] border-b-[0.1px] border-green   ">
      {[1, 2, 3, 4].map((partner, idx) => (
        <div
          key={idx}
          className="items-center flex justify-center p-10 lg:p-20 lg:border-[0.1px] lg:border-black"
        >
          <div className="relative h-36 w-44">
            <Image
              src={image}
              alt="partners company"
              fill
              className="h-full w-full "
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default SponsosGrid;
