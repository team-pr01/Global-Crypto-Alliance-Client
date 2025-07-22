import { IMAGES } from "@/assets";
import Container from "@/components/Reusable/Container/Container";
import Image from "next/image";

const Hero = () => {
  return (
    <Container>
      <div className="relative w-full h-full ">
        {/* Blurred background layer */}
        <Image
          src={IMAGES.heroBg}
          alt="Blurred Background"
          fill
          className="object-fit h-full absolute inset-0 z-0"
        />

        {/* Content above the blurred background */}
        <div className="p-[2px]">
        <div className="relative z-10 flex justify-between backdrop-blur-md rounded-2xl items-center w-full">
          <div className="flex w-[60%] flex-col gap-3 p-21 justify-start items-start">
            <p className="text-xl text-white leading-[26px] font-semibold">Welcome To</p>
            <Image
              src={IMAGES.companyNameLogo}
              alt="Global Crypto Alliance"
              className="w-105 h-20 object-contain"
            />
            <p className="mt-1 font-Inter text-lg font-medium leading-1.4 text-white text-shadow-2xs ">
              Unique and Revolutionary Business Model of 21st Century –
              <br />
              <strong>SUSTAINABILITY · SCALABILITY · TRANSPARENCY · SECURITY</strong>
              <br />
              Limitless Opportunities.
            </p>
            <div className="flex flex-row gap-3"></div>
          </div>

          <div className="w-[40%] z-20">
            <Image
              src={IMAGES.heroImage}
              alt="Global Crypto Alliance Hero Image"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
        </div>
      </div>
    </Container>
  );
};

export default Hero;
