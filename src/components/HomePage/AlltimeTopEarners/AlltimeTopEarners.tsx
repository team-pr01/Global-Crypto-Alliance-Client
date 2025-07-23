import { IMAGES } from "@/assets";
import Container from "@/components/Reusable/Container/Container";
import ReusableHeading from "@/components/Reusable/Heading/Heading";
import Image from "next/image";
import AllTimeLeaderBoard from "./AllTimeLeaderBoard";

const AlltimeTopEarners = () => {
    return (
        <div className="mt-6 xl:mt-12">
      <Container>
        <div className="flex justify-center mt-4 mb-8">
          <ReusableHeading highlight="All Time Top Earners" />
        </div>

        <AllTimeLeaderBoard />
        <div className="relative md:hidden w-full mt-2 px-[39px] py-[14px] xl:py-[17px] text-lg text-neutral-10 font-Jost rounded-full font-semibold flex flex-col justify-center items-center gap-1 bg-gradient-button ">
          <Image
            src={IMAGES.buttonDesign}
            alt=""
            className="absolute top-0 right-0 h-full "
          />
          <button className="flex flex-row justify-center items-center gap-2">
            View More
          </button>
        </div>
      </Container>
    </div>
    );
};

export default AlltimeTopEarners;