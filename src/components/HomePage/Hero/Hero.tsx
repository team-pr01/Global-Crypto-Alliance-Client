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
          className="object-fit hidden md:block h-full absolute inset-0 z-0"
        />
        <Image
          src={IMAGES.heroBgSmall}
          alt="Blurred Background"
          fill
          className="object-fit md:hidden h-full absolute inset-0 z-0"
        />

        {/* Content above the blurred background */}
        <div className="p-[2px]">
        <div className="relative z-10 flex flex-col-reverse md:flex-row justify-between backdrop-blur-md rounded-2xl items-center w-full">
          <div className="flex w-[60%] flex-col gap-3 md:py-10 md:pl-21 justify-start items-start">
            <p className="text-xl text-white leading-[26px] font-semibold">Welcome To</p>
            <Image
              src={IMAGES.companyNameLogo}
              alt="Global Crypto Alliance"
              className="w-105 h-20 object-contain"
            />
            <p className="mt-1 font-Inter text-lg font-medium leading-1.4 text-white shadow-custom ">
              Unique and Revolutionary Business Model of 21st Century –
              <br />
              <strong>SUSTAINABILITY · SCALABILITY · TRANSPARENCY · SECURITY</strong>
              <br />
              Limitless Opportunities.
            </p>
            <div className="flex flex-row gap-3 mt-3">
              <button className="px-4 py-2 rounded-full text-white bg-blue-500 hover:bg-blue-400">
                Get Started
              </button>
              <button className="px-4 py-2 rounded-full text-white bg-gray-500 hover:bg-gray-400">
                Learn More
              </button>
            </div>
          </div>

          <div className="w-[40%]  z-20 ">
            <Image
              src={IMAGES.heroImage}
              alt="Global Crypto Alliance Hero Image"
              className="w-full h-full md:hidden object-contain"
            />
            <Image
              src={IMAGES.heroImage}
              alt="Global Crypto Alliance Hero Image"
              className="w-full h-full md:hidden object-contain"
            />
          </div>
        </div>
        </div>
      </div>
    </Container>
  );
};

export default Hero;
