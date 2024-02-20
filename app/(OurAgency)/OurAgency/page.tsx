import TeamDetails from "@/app/(Home)/_components/Team/TeamDetails";
import HeaderText from "@/components/ui/HeaderText";
import React from "react";
import { InfiniteMovingCards } from "../_components/TestimonialCards";

type Props = {};

const page = (props: Props) => {
  return (
    <div>
      <HeaderText title="our agency" className="mb-16 " />

      <div className="w-full flex justify-end max-lg:px-4 ">
        <p className="w-full lg:w-1/2 font-semibold text-base lg:text-xl ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
          nisi animi quam temporibus sequi? Eum repellendus debitis facere
          minima fuga laudantium, laboriosam eveniet temporibus harum eaque
          provident mollitia? Voluptatem, optio. laboriosam eveniet temporibus
          harum eaque provident mollitia? Voluptatem, optio.
        </p>
      </div>

      <div className="mt-10 border-t-[1px] border-black py-4 ">
        <HeaderText title="who we are" className="text-xl xl:text-4xl" />
        <p className=" lg:px-8 font-semibold  mt-10 max-lg:px-4 ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
          nisi animi quam temporibus sequi? Eum repellendus debitis facere
          minima fuga laudantium, laboriosam eveniet temporibus harum eaque
          provident mollitia? Voluptatem, optio. laboriosam eveniet temporibus
          harum eaque provident mollitia? Voluptatem, optio. minima fuga
          laudantium, laboriosam eveniet temporibus harum eaque provident
          mollitia? Voluptatem, optio. laboriosam eveniet temporibus harum eaque
          provident mollitia? Voluptatem, optio.
        </p>
      </div>

      <div className="mt-10 border-t-[1px] border-black py-4 ">
        <HeaderText title="why choose CCCMII" className="text-xl xl:text-4xl" />
        <p className=" lg:px-8 font-semibold  mt-10 max-lg:px-4 ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
          nisi animi quam temporibus sequi? Eum repellendus debitis facere
          minima fuga laudantium, laboriosam eveniet temporibus harum eaque
          provident mollitia? Voluptatem, optio. laboriosam eveniet temporibus
          harum eaque provident mollitia? Voluptatem, optio. minima fuga
          laudantium, laboriosam eveniet temporibus harum eaque provident
          mollitia? Voluptatem, optio. laboriosam eveniet temporibus harum eaque
          provident mollitia? Voluptatem, optio.
        </p>
      </div>

      {/* our team */}
      <div className="mt-10 border-t-[1px] border-black py-4 ">
        <HeaderText title="Our experts" className="text-xl xl:text-4xl" />
        <TeamDetails />
      </div>

      {/* our tetimonials */}
      <div className="my-10 border-t-[1px] border-black py-4 ">
        <HeaderText
          title="Our testimonies"
          className="text-xl xl:text-4xl py-4 "
        />
        <InfiniteMovingCards />
      </div>
    </div>
  );
};

export default page;
