import React from "react";

type Props = {};

const TeamDescription = (props: Props) => {
  return (
    <div className="py-8 lg:pr-8 w-full h-full flex items-center justify-center">
      <div className=" bg-purple p-5 h-auto  pb-20 text-white ">
        <div className="w-full">
          <div className="flex">
            <div className="w-full font-semibold text-xl lg:text-3xl uppercase">
              WE HAVE EXCEPTIONAL ARRAY OF THINKERS BACKING UP OUR INSTITUTE.
            </div>
          </div>
          <div className="flex mt-20 flex-col gap-y-4">
            <p className="w-full  font-semibold">
              The Advisory Board of the CCCMII plays a crucial role in guiding
              and supporting the organization&apos;s mission of empowering
              individuals and organizations with the skills and knowledge
              necessary for effective mediation, negotiation, counseling, and
              conciliation.
            </p>
            <p className="w-full  font-semibold">
              Comprised of experienced and knowledgeable professionals in the
              field, the Advisory Board provides strategic direction, expertise,
              and valuable insights to ensure the CCCMII&apos;s programs and
              initiatives meet the highest standards of excellence.
            </p>
            <p className="w-full  font-semibold">
              Through their collective wisdom and guidance, the Advisory Board
              contributes to the continued growth and success of the CCCMII in
              promoting peaceful conflict resolution and fostering positive
              relationships in various settings.
            </p>
          </div>
        </div>

        {/* <div className="bg-white h-[1px] w-fu" />
        <div className="">
          <div className="w-full  font-semibold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
            quidem repudiandae
          </div>
          <div className="w-full  font-semibold mt-10 uppercase text-base">
            Lorem ipsum dolor
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default TeamDescription;
