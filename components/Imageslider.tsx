"use client";
import Image, { StaticImageData } from "next/image";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import type SwiperType from "swiper";
import { Pagination } from "swiper/modules";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "./ui/button";

type Props = {
  image?: StaticImageData[];
};

const ARR = [1, 2, 3, 4, 5, 6, 7];

export const ImageSlider = ({ image }: Props) => {
  const [swiper, setSwiper] = useState<SwiperType | null>(null);
  const [activeindex, setActiveIndex] = useState(0);
  const [slideConfig, setSlideConfig] = useState({
    isBeginning: true,
    isEnd: activeindex === (ARR.length ?? 0) - 1,
  });

  useEffect(() => {
    swiper?.on("slideChange", ({ activeIndex }) => {
      setActiveIndex(activeIndex);
      setSlideConfig({
        isBeginning: activeIndex === 0,
        isEnd: activeIndex === (ARR.length ?? 0) - 1,
      });
    });
  }, [swiper]);

  const activeStyles =
    "active:scale-[0.97] grid opacity-100 hover:scale-105 absolute top-1/2 -translate-y-1/2 aspect-square h-8 w-8 z-50 place-items-center rounded-full bg-white border-2  border-zinc-300";
  const inactiveStyles = "hidden text-gray-400 ";

  return (
    <div className="relative bg-zinc-100 group aspect-square overflow-hidden h-[400px] w-full">
      <div className="absolute top-5 left-5 flex gap-x-4 z-[20]">
        <Button className="bg-[#E2D9FA]  text-primary font-semibold text-xs px-4 py-0 hover:text-white">
          Rent
        </Button>
        <Button
          size={"sm"}
          className="bg-[#E2D9FA]  text-primary font-semibold text-xs px-4 py-0 hover:text-white"
        >
          Sale
        </Button>
      </div>
      <div className="absolute z-10 inset-0 opacity-0 group-hover:opacity-100 transition">
        <button
          onClick={(e) => {
            e.preventDefault;
            swiper?.slideNext();
          }}
          className={cn(activeStyles, "right-3 transition ", {
            [inactiveStyles]: slideConfig.isEnd,
            "hover:bg-primary-300 text-primary opacity-100": !slideConfig.isEnd,
          })}
        >
          <ChevronRight className="h-4 w-4" />
        </button>
        <button
          onClick={(e) => {
            e.preventDefault;
            swiper?.slidePrev();
          }}
          className={cn(activeStyles, "left-3 transition ", {
            [inactiveStyles]: slideConfig.isBeginning,
            "hover:bg-primary-300 text-primary opacity-100":
              !slideConfig.isBeginning,
          })}
        >
          <ChevronLeft className="h-4 w-4" />
        </button>
      </div>

      <Swiper
        className="h-full w-full "
        onSwiper={(swiper) => {
          setSwiper(swiper);
        }}
        spaceBetween={50}
        slidesPerView={1}
        modules={[Pagination]}
        pagination={{
          renderBullet: (_, className) => {
            return `<span class="rounded-full transition ${className}" ></span>`;
          },
        }}
      >
        {image?.map((image, i) => (
          <SwiperSlide key={i}>
            <Image
              fill
              loading={"eager"}
              className="-z-10 h-full w-full object-cover object-center brightness-75"
              src={image}
              alt="sliderimage"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

// "use client";
// import React, { use, useLayoutEffect, useRef, useState } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules";
// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/effect-fade";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import Image from "next/image";
// import SwiperButtons from "./SwiperButtons";
// import gsap from "gsap";
// import edits from "../public/Blog/BLOG1.jpg";
// import edits2 from "../public/Blog/BLOG2.jpg";
// import edits3 from "../public/Blog/BLOG3.jpg";
// import edits4 from "../public/Blog/BLOG4.jpg";
// import { made } from "@/lib/utils";
// import { useRouter } from "next/navigation";

// const arraydata = [
//   {
//     id: 1,
//     text1:
//       "She Forum takes another big step in the women’s empowerment journey.",
//     text2:
//       "She Forum Africa, a pan-African women development organization, recently made a significant stride in bolstering women's empowerment across the continent by announcing the inauguration of regional hubs. This strategic move signifies a pivotal step towards amplifying the voices of women within local African communities.",
//     slug: "She-Forum-takes-another-big-step-in-the-women-empowerment-journey.",
//   },
//   {
//     id: 2,
//     text1: "Voices for Women's Health #ICommit Campaign in Nigeria",
//     text2:
//       "She Forum Africa has taken a significant step forward in advocating for women and girls' health rights as they take part in the Voices for Women's Health #ICommit campaign. Supported by Pathfinder International and the Bill and Melinda Gates Foundation, and a host of others, this initiative aims to bolster awareness and empowerment from a rights-based perspective.",
//     slug: "Voices-for-Womens-Health-ICommit-Campaign-in-Nigeria",
//   },
//   {
//     id: 3,
//     text1: "7th Edition of the Africa Women Conference",
//     text2:
//       "Originally slated for Mauritius, the conference venue was relocated following inputs from stakeholders and participants, as highlighted by Jummai Ahmadu, co-convener of the African Women Conference and Founder of Helpline Foundation for the Needy.",
//     slug: "7th-Edition-of-the-Africa-Women-Conference",
//   },
//   {
//     id: 4,
//     text1:
//       "She Forum Africa Celebrates Success of Women Lead Forum in Johannesburg",
//     text2:
//       "She Forum Africa extends heartfelt congratulations to Dr. Sindy Zemura-Bernard, Regional Chair of the Southern Africa Hub, and the Southern Africa Embrace Foundation (SAE) for orchestrating a remarkable Women Lead Forum held this week in Johannesburg, South Africa.",
//     slug: "She-Forum-Africa-Celebrates-Success-of-Women-Lead-Forum-in-Johannesburg",
//   },
// ];
// const array = [
//   { id: 1, image: edits },
//   { id: 2, image: edits2 },
//   { id: 2, image: edits3 },
//   { id: 2, image: edits4 },
// ];

// type Props = {};

// const HomeSlider = (props: Props) => {
//   const [activeSlideIndex, setActiveSlideIndex] = useState(0);
//   const paragraph = useRef(null);
//   const router = useRouter();
//   const mainimage = useRef(null);

//   return (
//     <section className="h-[60vh] lg:h-screen">
//       <Swiper
//         slidesPerView={1}
//         effect={"fade"}
//         onSlideChange={(swiper) => {
//           setActiveSlideIndex(swiper.realIndex);
//           const activeindex = swiper.activeIndex;
//           gsap.from(paragraph.current, {
//             y: -40,
//             opacity: 0,
//             ease: "power4.inOut",
//             duration: 0.2,
//             yoyo: true,
//           });
//           gsap.from(mainimage.current, {
//             scale: 1.2,
//             duration: 0.85,
//             ease: "power2.inOut",
//           });
//         }}
//         className="transition-all w-full h-full"
//         loop={true}
//         onChange={() => {}}
//         direction="horizontal"
//         initialSlide={0}
//         speed={1300}
//         autoplay={{
//           delay: 2000,
//         }}
//         modules={[Autoplay, Navigation, Pagination, EffectFade]}
//       >
//         {array.map((slide: any, I: any) => (
//           <SwiperSlide key={I} className="h-full w-full">
//             <Image
//               ref={mainimage}
//               alt="heroimage"
//               src={slide.image}
//               height={0}
//               width={0}
//               placeholder="blur"
//               sizes="100vw"
//               loading="lazy"
//               className=" aspect-auto object-cover h-full w-full brightness-90"
//             />
//           </SwiperSlide>
//         ))}
//         <div className="absolute w-[90%] max-lg:bottom-16 lg:top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[900000]">
//           <SwiperButtons className="w-full" />
//         </div>

//         <div className="absolute h-full w-full max-sm:top-2 top-0 left-0 bg-black/40 z-[5000] text-white">
//           <div className="absolute top-2 left-0 max-md:py-2 py-10 w-full h-full">
//             <div className="w-full flex items-center justify-center py-8 max-md:py-2 ">
//               <p
//                 key={Math.random()}
//                 className="text-center smallheader text-white font-extended "
//                 ref={paragraph}
//               >
//                 {arraydata[activeSlideIndex]?.text1}
//               </p>
//             </div>

//             <div className=" absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 mx-auto w-[90%] lg:w-[72%]  ">
//               <p
//                 className={`text-center  text-base lg:text-3xl leading-[24px] lg:leading-[38px] lg:tracking-wide  ${made} font-[100]`}
//               >
//                 {arraydata[activeSlideIndex].text2}
//               </p>
//             </div>

//             <div
//               className="w-full flex items-center justify-center py-8 absolute max-sm:bottom-2  bottom-2"
//               onClick={() => {
//                 router.push(`/OurNews/${arraydata[activeSlideIndex].slug}`);
//               }}
//             >
//               <p className="text-center smallheader text-white font-extended tracking-widest cursor-pointer">
//                 read more
//               </p>
//             </div>
//           </div>
//         </div>
//       </Swiper>
//     </section>
//   );
// };

// export default HomeSlider;
