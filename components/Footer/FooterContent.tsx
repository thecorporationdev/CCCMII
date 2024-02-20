import Image from "next/image";
import React from "react";
import BarCode from "@/public/QRCODE.png";

type Props = {};

const FooterContent = (props: Props) => {
  return (
    <div
      className="mt-4 border-t-[1px] border-b-[1px] border-white flex items-center justify-center w-full py-10"
      id="#footer"
    >
      <Image
        src={BarCode}
        alt="barcode"
        height={400}
        width={400}
        priority
        className="object-cover"
      />
    </div>
  );
};

export default FooterContent;
