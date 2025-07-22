import { IMAGES } from "@/assets";
import Container from "@/components/Reusable/Container/Container";
import Image from "next/image";
import React from "react";

const AboutUs = () => {
  return (
    <div>
      <Container>
        <div className="bg-project-bg-gradient w-full h-fit rounded-2xl mt-[90px] px-17">
          <div className="w-full md:w-[60%] flex justify-center">fvdv</div>
          <div className="w-full md:w-[40%]">
             <Image
                            src={IMAGES.coinImage}
                            alt="Global Crypto Alliance Hero Image"
                            className="w-full h-full object-contain"
                          />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default AboutUs;
