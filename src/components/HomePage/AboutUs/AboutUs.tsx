import { IMAGES } from "@/assets";
import Container from "@/components/Reusable/Container/Container";
import ReusableHeading from "@/components/Reusable/Heading/Heading";
import Image from "next/image";
import React from "react";

const AboutUs = () => {
  return (
    <div>
      <Container>
        <div className="bg-project-bg-gradient flex flex-col-reverse md:flex-row w-full rounded-2xl mt-0 xl:mt-[90px] px-5 md:px-17 h-fit xl:h-[511px]">
          <div className="w-full md:w-[60%] flex flex-col justify-center items-center md:items-baseline gap-6">
            <ReusableHeading highlight="About Global Crypto Alliance" />
            <p className="text-lg font-Inter text-center md:text-start text-white font-medium leading-[1.6]">
              Global Crypto Alliance is the leading decentralized platform of
              the world, designed to transform the landscape of blockchain
              technology through innovation, transparency, and financial
              empowerment. Built on the robust BNB Chain through opbnb network
              and seamlessly integrated with USDT, it offers a secure, scalable,
              and globally accessible ecosystem that places users in full
              control of their digital assets.
            </p>
            <div className="relative w-[300px] px-[39px] py-[14px] xl:py-[17px] mt-1 text-lg text-neutral-10 font-Jost rounded-full font-semibold flex flex-col justify-center items-center gap-1 bg-gradient-button ">
              <Image
                src={IMAGES.buttonDesign}
                alt=""
                className="absolute top-0 right-0 h-full "
              />
              <button className="flex flex-row justify-center items-center gap-2">
                View More
              </button>
            </div>
          </div>

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
