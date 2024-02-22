"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";

export const coursesWithTestimonies = [
  {
    course: "Web Development Fundamentals",
    testimony:
      "The Web Development Fundamentals course was fantastic! It covered all the basics of HTML, CSS, and JavaScript in a clear and concise manner. The instructors were knowledgeable and supportive",
    name: "John Smith",
  },
  {
    course: "Data Science Essentials",
    testimony:
      "I'm amazed at how this course simplified complex concepts. The hands-on projects were particularly enlightening!",
    name: "Emily Johnson",
  },
  {
    course: "Data Science Essentials",
    testimony:
      "The Data Science Essentials course exceeded my expectations. The content was well-structured and easy to follow, even for someone with a non-technical background like myself. The practical exercises were particularly helpful in applying the concepts learned in real-world scenarios. I feel much more confident about pursuing a career in data science after completing this course.",
    name: "Emily Johnson",
  },
  {
    course: "Graphic Design Mastery",
    testimony:
      "Graphic Design Mastery course was a game-changer for me. The instructors were incredibly knowledgeable and provided valuable insights into the world of graphic design. The hands-on projects challenged me to think creatively and sharpened my design skills. I'm thrilled with what I've learned and highly recommend this course to anyone passionate about design.",
    name: "Michael Brown",
  },
  {
    course: "Digital Marketing Strategies",
    testimony:
      "The Digital Marketing Strategies course was exactly what I needed to boost my marketing skills. The instructors were engaging, and the course content was up-to-date with industry trends. The practical exercises and case studies provided a real-world perspective on digital marketing tactics. I'm excited to implement what I've learned in my marketing campaigns.",
    name: "Sophia Miller",
  },
  // Add more objects as needed
];

export const InfiniteMovingCards = ({
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  //   items: {
  //     quote: string;
  //     name: string;
  //     title: string;
  //   }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  useEffect(() => {
    addAnimation();
  }, []);
  const [start, setStart] = useState(false);
  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }
  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards"
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse"
        );
      }
    }
  };
  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };
  return (
    <div
      ref={containerRef}
      className={cn("scroller relative z-20  overflow-hidden ", className)}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          " flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap",
          start && "animate-scroll ",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {coursesWithTestimonies.map((item, idx) => (
          <li
            className="w-[350px] max-w-full relative bg-black border border-b-0 flex-shrink-0 border-slate-700 px-8 py-6 md:w-[450px]"
            // style={{
            //   background:
            //     "linear-gradient(180deg, var(--slate-800), var(--slate-900)",
            // }}
            key={item.name}
          >
            <blockquote>
              <div
                aria-hidden="true"
                className="user-select-none -z-1 pointer-events-none absolute -left-0.5 -top-0.5 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]"
              ></div>
              <span className=" relative z-20  leading-[1.6] text-gray-100 font-normal">
                {item.testimony}
              </span>
              <div className="relative z-20 mt-6 flex flex-row items-center">
                <span className="flex flex-col gap-1">
                  <span className=" text-base leading-[1.6] text-gray-400 font-normal">
                    {item.name}
                  </span>
                  <span className=" text-base leading-[1.6] text-gray-400 font-normal">
                    {item.course}
                  </span>
                </span>
              </div>
            </blockquote>
          </li>
        ))}
      </ul>
    </div>
  );
};
