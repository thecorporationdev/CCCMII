import Image, { StaticImageData } from "next/image";
import React from "react";

type Props = {
  imagesrc: {
    imageurl: string | StaticImageData;
  };
};

// 7r0TAZiWVc22ownv

const BlogImage = (props: Props) => {
  const { imagesrc } = props;
  return (
    <div className="">
      <div className="relative w-full h-[350px] lg:h-[600px] mb-14 bg-slate-100 ">
        <Image
          alt="CCCMII IMAGE"
          src={imagesrc.imageurl}
          fill
          className="h-full w-full object-cover object-center transition-all ease-in-out duration-300"
          loading="eager"
        />
      </div>
    </div>
  );
};

export default BlogImage;
