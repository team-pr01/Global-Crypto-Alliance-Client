import Container from "@/components/Reusable/Container/Container";
import ReusableHeading from "@/components/Reusable/Heading/Heading";
import AllTimeLeaderBoard from "./AllTimeLeaderBoard";
import PrimaryButton from "@/components/Reusable/PrimaryButton/PrimaryButton";
import Image from "next/image";
import { IMAGES } from "@/assets";

const AlltimeTopEarners = () => {
  return (
    <div className="mt-6 xl:mt-12 bg-neutral-10 relative p-3 xl:p-6">
      <Image
        src={IMAGES.linnerBg2}
        alt=""
        className="absolute top-3 xl:top-6 right-3 xl:right-6"
      />
      <Image
        src={IMAGES.linnerBg2}
        alt=""
        className="absolute bottom-3 xl:bottom-6 left-3 xl:left-6 rotate-180"
      />
      <div className="absolute top-0 left-0 rounded-l-2xl">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="224"
          height="209"
          viewBox="0 0 224 209"
          fill="none"
        >
          <g clip-path="url(#clip0_3_4250)">
            <g filter="url(#filter0_f_3_4250)">
              <circle
                cx="20.5"
                cy="18.5"
                r="93.5"
                fill="#FF7800"
                fill-opacity="0.1"
              />
            </g>
          </g>
          <defs>
            <filter
              id="filter0_f_3_4250"
              x="-174"
              y="-176"
              width="389"
              height="389"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="50.5"
                result="effect1_foregroundBlur_3_4250"
              />
            </filter>
            <clipPath id="clip0_3_4250">
              <path
                d="M0 16C0 7.16344 7.16344 0 16 0H224V209H0V16Z"
                fill="white"
              />
            </clipPath>
          </defs>
        </svg>
      </div>
      <Container>
        <div className="flex justify-center mt-4 mb-8">
          <ReusableHeading highlight="All Time Top Earners" />
        </div>

        <div className="pb-4 xl:pb-0">
          <AllTimeLeaderBoard />
          <PrimaryButton label="View More" className="mt-2 w-full" />
        </div>
      </Container>
    </div>
  );
};

export default AlltimeTopEarners;
