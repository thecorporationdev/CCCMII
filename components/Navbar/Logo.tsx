import Image from "next/image";
import logo from "@/public/LOGO2.svg";

type Props = {};

const Logo = (props: Props) => {
  return (
    <div className="uppercase md:font-semibold lg:w-[10%] underline underline-offset-4 text-xl md:text-2xl">
      <Image
        src={logo}
        alt="CCCMII logo"
        height={300}
        width={200}
        priority
        className="object-cover"
      />
    </div>
  );
};

export default Logo;
