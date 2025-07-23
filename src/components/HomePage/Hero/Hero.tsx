import { ICONS, IMAGES } from "@/assets";
import Container from "@/components/Reusable/Container/Container";
import Image from "next/image";

const Hero = () => {
  return (
    <Container>
      <div className="relative w-full h-full mt-10 ">
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
          <div className="relative z-10 py-3 gap-6 flex flex-col-reverse md:flex-row justify-between backdrop-blur-md rounded-2xl items-center w-full">
            <div className="flex w-full md:w-[60%] flex-col gap-3 md:py-10 md:pl-21 justify-center items-center md:items-start">
              <p className="text-xl text-white leading-[26px] font-semibold">
                Welcome To
              </p>
              <Image
                src={IMAGES.companyNameLogo}
                alt="Global Crypto Alliance"
                className="w-64 md:w-105 h-14 px-3 md:h-20 object-contain"
              />
              <p className="mt-1 font-Inter text-sm md:text-lg text-center md:text-start font-medium leading-1.4 text-white text-shadow-2xs px-3 md:px-0">
                Unique and Revolutionary Business Model of 21st Century
                SUSTAINABILITY-SCALABILITY TRANSPARENCY & SECURITY Limitless
                Opportunities.
              </p>
              <div className="flex flex-col-reverse lg:flex-row gap-3 items-center md:items-baseline w-full mt-3">
                <div className="relative w-[300px] px-[39px] py-[17px] text-lg text-neutral-10 font-Jost rounded-full font-medium flex flex-col justify-center items-center gap-1 bg-gradient-button ">
                  <Image
                    src={IMAGES.buttonDesign}
                    alt=""
                    className="absolute top-0 right-0 h-full "
                  />
                  <button className="flex flex-row justify-center items-center gap-2">
                    <Image src={ICONS.gMeet} alt=" " className="size-5" />
                    Watch Tutorial
                  </button>
                </div>
                <div
                  className="w-[300px] p-[1px] text-white font-semibold text-xl rounded-full"
                  style={{
                    background:
                      "linear-gradient(90deg, #FF7800 0%, #FFE601 100%)",
                  }}
                >
                  <div className="bg-secondary-10 flex justify-center rounded-full relative">
                    <div
                      className="absolute h-full w-full rounded-full"
                      style={{
                        background:
                          "linear-gradient(90deg, rgba(254, 119, 1, 0.10) 0%, rgba(255, 230, 1, 0.10) 100%)",
                      }}
                    ></div>

                    <button
                      className="text-transparent flex flex-row items-center justify-center bg-clip-text p-4 text-lg font-medium gap-2"
                      style={{
                        backgroundImage:
                          "linear-gradient(90deg, #FF7801 0%, #FFE601 100%)",
                      }}
                    >
                      <Image src={ICONS.wallet} alt=" " className="size-5" />
                      <span>Connect Wallet</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full md:w-[40%] z-20 flex justify-center ">
              <Image
                src={IMAGES.heroImage}
                alt="Global Crypto Alliance Hero Image"
                className="w-full h-full md:block hidden object-contain"
              />
              <Image
                src={IMAGES.heroImage2}
                alt="Global Crypto Alliance Hero Image"
                className="w-[300px] h-full pt-4 px-20 md:hidden object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Hero;
