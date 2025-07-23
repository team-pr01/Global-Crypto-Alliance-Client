import { IMAGES } from "@/assets";
import Image from "next/image";

const UserStats = () => {
  const platformOffers = [
    {
      title: "Members Total",
      description: <>876,32,658</>,
      image: IMAGES.members,
    },
    {
      title: "Members Received",
      description: (
        <>
          876 326 258.64 <span className="text-primary-10">BNB</span>
        </>
      ),
      image: IMAGES.membersReceived,
    },
    {
      title: "Members Received",
      description: <>876,32,658</>,
      image: IMAGES.membersTransfered,
    },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-7 xl:gap-[30px] mt-12 w-full">
      {platformOffers.map((item, index) => (
        <div
          key={index}
          className="bg-neutral-10 rounded-t-2xl rounded-b-3xl border-b-2 xl:border-b-8 border-primary-10 p-6 flex flex-col font-Inter h-[209px] md:h-[260px] relative"
        >
          <Image src={IMAGES.linnerBg} alt="" className="absolute right-0" />
          <Image
            src={IMAGES.linnerBg}
            alt=""
            className="absolute left-0 rotate-180 h-full"
          />
          <Image src={item.image} alt="" className="size-[76px] md:size-[116px] mx-auto" />
          <p className="text-white text-sm md:text-lg text-center mt-3 md:mt-[18px]">
            {item.title}
          </p>
          <h1 className="text-white text-2xl md:text-[32px] font-medium text-center mt-3 md:mt-2">
            {item.description}
          </h1>
        </div>
      ))}
    </div>
  );
};

export default UserStats;
