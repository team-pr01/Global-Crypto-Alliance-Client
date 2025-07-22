import { GRADIENT_BG } from "@/assets";
import Container from "@/components/Reusable/Container/Container";
import Image from "next/image";
import React from "react";

const AccountPreviewMode = () => {
  return (
    <div>
      <Container>
        <div className="relative w-full rounded-2xl overflow-hidden mt-[90px] bg-secondary-10">
          {/* Gradient background as absolute layer */}
          <div className="absolute -top-10 -left-10 w-[552px] h-[552px] rounded-[276px] bg-[#FF7800] opacity-40 blur-[207.5px] z-0 pointer-events-none" />

          <div className="flex flex-col gap-8 items-center p-4 md:px-18 z-10 md:py-8 bg-black/30 backdrop-blur-md rounded-2xl">
            <h2 className="text-white text-center font-Jost text-xl md:text-5xl font-bold">
              Account Preview Mode
            </h2>
            <div className="flex flex-col md:flex-row w-full gap-3 md:gap-8 ">
              <div className="bg-secondary-10 w-full rounded-2xl py-6 px-5">
                <p className="font-Inter text-[22px] font-semibold text-center text-neutral-10">
                  Enter User ID Number
                </p>
                <div className="flex flex-col gap-5 mt-4">
                  <input
                    type="text"
                    placeholder="ex:R7YUHHI"
                    className="rounded-full bg-secondary-20 w-full py-4 text-center border border-secondary-30 text-neutral-10"
                  />
                  <button
                    className="w-full p-[1px] text-white font-semibold text-xl rounded-full"
                    style={{
                      background:
                        "linear-gradient(90deg, #FF7800 0%, #FFE601 100%)",
                    }}
                  >
                    <div className="bg-secondary-10 rounded-full relative">
                      <div
                        className="absolute h-full w-full rounded-full"
                        style={{
                          background:
                            "linear-gradient(90deg, rgba(254, 119, 1, 0.10) 0%, rgba(255, 230, 1, 0.10) 100%);",
                        }}
                      ></div>

                      <p
                        className="text-transparent bg-clip-text p-4 text-lg font-medium"
                        style={{
                          backgroundImage:
                            "linear-gradient(90deg, #FF7801 0%, #FFE601 100%)",
                        }}
                      >
                        kmkmo
                      </p>
                    </div>
                  </button>
                </div>
              </div>
              <div className=" relative flex flex-col items-center w-full bg-secondary-20 border border-primary-10 rounded-2xl ">
                <Image
                  src={GRADIENT_BG.accountPreview}
                  alt=""
                  className="absolute w-full h-full object-cover rounded-2xl"
                />
                <div className="py-6 px-5 h-full w-full flex flex-col gap-6 justify-between">
                  <p
                    className="text-transparent bg-clip-text text-center font-Jost text-[22px] font-bold "
                    style={{
                      backgroundImage:
                        " linear-gradient(90deg, #FF7800 57.15%, #FFE601 108.01%);",
                    }}
                  >
                    View a Random Account
                  </p>
                  <button
                    className="w-full p-[1px] text-white font-semibold text-xl rounded-full"
                    style={{
                      background:
                        "linear-gradient(90deg, #FF7800 0%, #FFE601 100%)",
                    }}
                  >
                    <div className="bg-secondary-10 rounded-full relative">
                      <div
                        className="absolute h-full w-full rounded-full"
                        style={{
                          background:
                            "linear-gradient(90deg, rgba(254, 119, 1, 0.10) 0%, rgba(255, 230, 1, 0.10) 100%);",
                        }}
                      ></div>

                      <p
                        className="text-transparent bg-clip-text p-4 text-lg font-medium"
                        style={{
                          backgroundImage:
                            "linear-gradient(90deg, #FF7801 0%, #FFE601 100%)",
                        }}
                      >
                        kmkmo
                      </p>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default AccountPreviewMode;
