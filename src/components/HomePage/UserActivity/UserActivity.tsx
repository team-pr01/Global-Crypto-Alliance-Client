import Container from "@/components/Reusable/Container/Container";
import UserStats from "./UserStats";
import { GRADIENT_BG, IMAGES } from "@/assets";
import Image from "next/image";

const UserActivity = () => {
  const leaderboardData = [
    {
      position: 1,
      time: "26 Min",
      program: "Starter",
      id: "481029",
      avatar: IMAGES.user,
      profit: "+10 USDT",
    },
    {
      position: 2,
      time: "26 Min",
      program: "Starter",
      id: "481045",
      avatar: IMAGES.user,
      profit: "+10 USDT",
    },
    {
      position: 1,
      time: "26 Min",
      program: "Starter",
      id: "481029",
      avatar: IMAGES.user,
      profit: "+10 USDT",
    },
    {
      position: 2,
      time: "26 Min",
      program: "Starter",
      id: "481045",
      avatar: IMAGES.user,
      profit: "+10 USDT",
    },
    {
      position: 1,
      time: "26 Min",
      program: "Starter",
      id: "481029",
      avatar: IMAGES.user,
      profit: "+10 USDT",
    },
    {
      position: 2,
      time: "26 Min",
      program: "Starter",
      id: "481045",
      avatar: IMAGES.user,
      profit: "+10 USDT",
    },
  ];
  return (
    <Container>
      <div>
        <UserStats />

        <div className="bg-neutral-10 px-3 py-[10px] rounded-t-2xl rounded-b-3xl border-b-2 xl:border-b-8 border-primary-10 relative flex flex-col items-center mt-[30px]">
          <Image
            src={GRADIENT_BG.gradientCircle}
            alt=""
            className="absolute top-0 left-0 rounded-tl-2xl"
          />
          <h1 className="text-white text-2xl md:text-[30px] font-medium text-center">
            User Activity
          </h1>

          <div className="w-full max-w-[1000px] mx-auto mt-10">
            {/* Table Header */}
            <div className="flex justify-between text-xs md:text-lg text-neutral-40 mb-7">
              <span className="w-fit">User ID</span>
              <span className="w-fit mr-5">Profit</span>
              <span className="w-fit text-center">Time</span>
              <span className="w-fit text-center">Program</span>
              <span className="w-fit text-right">User Profile</span>
            </div>

            {/* Table Rows */}
            <div className="flex flex-col gap-2 md:gap-4">
              {leaderboardData.map((user, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center gap-4"
                >
                  {/* Position */}
                  <div className="text-white text-xs sm:text-[12px] md:text-base font-semibold w-fit p-[10px] bg-primary-10 rounded-md">
                    {user.id}
                  </div>

                  {/* Profit */}
                  <span className="text-white text-xs md:text-base font-semibold text-center w-fit">
                    {user.profit}
                  </span>

                  {/* Time */}
                  <span className="text-white text-xs md:text-base font-semibold text-center w-fit">
                    {user.time}
                  </span>

                  {/* Program */}
                  <span className="text-white text-xs md:text-base font-semibold text-center w-fit">
                    {user.program}
                  </span>

                  {/* Button */}
                  <div className="flex justify-end w-fit">
                    <div
                      className="flex p-[2px] w-fit rounded-[25px]"
                      style={{
                        backgroundImage:
                          "linear-gradient(90deg, #FF7800 0%, #FFE601 100%)",
                      }}
                    >
                      <div className="bg-neutral-10 rounded-[25px]">
                        <button
                          className="px-4 py-2 text-white rounded-[25px] text-sm font-medium text-[8px] sm:text-[12px] md:text-base text-nowrap"
                          style={{
                            backgroundImage:
                              "linear-gradient(90deg, rgba(255, 120, 0, 0.40) 0%, rgba(255, 230, 1, 0.40) 100%)",
                          }}
                        >
                          View Profile
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <button className="bg-gradient-button py-[14px] md:py-[10px] text-white font-Jost font-medium text-center rounded-[90px] w-full max-w-[1000px] mx-auto mt-8 cursor-pointer">
            View More
          </button>
        </div>
      </div>
    </Container>
  );
};

export default UserActivity;
