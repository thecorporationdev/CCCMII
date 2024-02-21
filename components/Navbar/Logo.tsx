"use client";
import Image from "next/image";
import logo from "@/public/LOGO2.svg";
import Link from "next/link";
import { useRouter } from "next/navigation";

type Props = {};

const Logo = (props: Props) => {
  const router = useRouter();
  return (
    <div
      onClick={() => {
        router.push("/");
      }}
      className="uppercase md:font-semibold sticky z-[40000300] lg:w-[10%] underline underline-offset-4 text-xl md:text-2xl cursor-pointer"
    >
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
