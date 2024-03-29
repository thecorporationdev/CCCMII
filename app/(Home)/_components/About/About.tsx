import { Parallax } from "@/Animations/Parallax";
import Reveal from "@/Animations/Reveal";
import { TextGenerateEffect } from "@/Animations/Text-generate";

import React from "react";

type Props = {};

const About = (props: Props) => {
  return (
    <Reveal>
      <div className="lg:px-10  py-20 lg:py-32 text-[25px] max-lg:font-semibold md:text-5xl uppercase flex lg:justify-end font-medium  ContainerPadding">
        <div className="w-full lg:w-[65%] leading-snug">
          <Parallax speed={0.6}>
            <TextGenerateEffect
              words=" At CCCMII, we are dedicated to empowering individuals and organizations
        with the skills and knowledge necessary for effective mediation,
        negotiation, counselling, and conciliation"
            />
          </Parallax>
        </div>
      </div>
    </Reveal>
  );
};

export default About;
