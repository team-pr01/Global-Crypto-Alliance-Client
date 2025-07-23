"use client"
import { IMAGES } from "@/assets";
import Container from "@/components/Reusable/Container/Container";
import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const PlatformOffers = () => {
  const platformOffers = [
    {
      title: "PRIME STARTER BONUS",
      image: IMAGES.primeStarter,
    },
    {
      title: "PERSONAL PARTNER BOUNDS",
      image: IMAGES.personalPartner,
    },
    {
      title: "LIMITELESS GENERATION REWARDS",
      image: IMAGES.limitlessGeneration,
    },
    {
      title: "PRIME STARTER BONUS",
      image: IMAGES.primeStarter2,
    },
    {
      title: "ELITE LEVEL REAWARDS",
      image: IMAGES.eliteLevel,
    },
    {
      title: "ROYALTY CROWN BOUNDS",
      image: IMAGES.royaltyBrown,
    },
  ];

  return (
    <Container>
      <div className="flex flex-col items-center justify-center">
        <h2 className="text-xl md:text-[40px] text-center font-bold max-w-[530px] mx-auto">
          <span
            className="text-transparent bg-clip-text"
            style={{
              backgroundImage:
                "linear-gradient(90deg, #FF7800 51.71%, #FFE601 100%)",
            }}
          >
            Our Platform Offers 6 Types Of Income Strems
          </span>{" "}
        </h2>

        {/* Desktop Grid View (hidden on mobile) */}
        <div className="hidden md:grid md:grid-cols-3 gap-[30px] mt-12 w-full">
          {platformOffers?.map((item, index) => (
            <div
              key={`desktop-${index}`}
              className="bg-neutral-10 rounded-t-2xl rounded-b-3xl border-b-2 xl:border-b-8 border-primary-10 p-6 h-[217px] flex flex-col gap-4"
            >
              <Image src={item.image} alt="" className="w-[122px] mx-auto" />
              <h1 className="text-white text-xl font-semibold font-Jost leading-4 xl:leading-8 text-center">
                {item.title}
              </h1>
            </div>
          ))}
        </div>

        {/* Mobile Carousel (visible only on mobile) */}
        <div className="md:hidden w-full mt-8 px-4">
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={20}
            slidesPerView={1.2}
            centeredSlides={true}
            navigation
            pagination={{ clickable: true }}
            breakpoints={{
              640: {
                slidesPerView: 1.5,
              }
            }}
          >
            {platformOffers?.map((item, index) => (
              <SwiperSlide key={`mobile-${index}`}>
                <div className="bg-neutral-10 rounded-t-2xl rounded-b-3xl border-b-4 border-primary-10 p-6 h-[200px] flex flex-col gap-4 mx-auto max-w-[280px]">
                  <Image src={item.image} alt="" className="w-[100px] mx-auto" />
                  <h1 className="text-white text-lg font-semibold font-Jost leading-5 text-center">
                    {item.title}
                  </h1>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <Image src={IMAGES.rocket} alt="" className="mt-12 md:mt-[100px]" />
      </div>
    </Container>
  );
};

export default PlatformOffers;