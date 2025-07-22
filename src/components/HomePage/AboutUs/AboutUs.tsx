import { IMAGES } from "@/assets";
import Container from "@/components/Reusable/Container/Container";
import ReusableHeading from "@/components/Reusable/Heading/Heading";
import Image from "next/image";
import React from "react";

const AboutUs = () => {
  return (
    <div>
      <Container>
        <div className="bg-project-bg-gradient flex flex-col-reverse md:flex-row w-full h-fit rounded-2xl mt-[90px]  p-5 md:px-17">
          <div className="w-full md:w-[60%] flex-col justify-center items-center ">
            <ReusableHeading highlight="About Global Crypto Alliance" />
            <p className="text-lg font-Inter text-center md:text-start text-white font-medium leading-[1.6] mt-6">Global Crypto Alliance is the leading decentralized platform of the world, designed to transform the landscape of blockchain technology through innovation, transparency, and financial empowerment. Built on the robust BNB Chain through opbnb network and seamlessly integrated with USDT, it offers a secure, scalable, and globally accessible ecosystem that places users in full control of their digital assets.</p>
            <button className="w-full md:w-[150px] mt-10 md:mt-0 text-white font-medium text-center bg-gradient-to-r ">kjbjn</button>
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
