import React from "react";
import Image from "next/image";
import { ICONS } from "@/assets";

interface UserData {
  position: number;
  name: string;
  id: string;
  avatar: string;
  profit: string;
}

interface LeaderboardProps {
  data: UserData[];
  onJoinClick?: (user: UserData) => void;
}

const LeaderboardTable: React.FC<LeaderboardProps> = ({
  data,
  onJoinClick,
}) => {
  return (
    <div className="w-full">
      {/* Table Header */}
      <div className="flex justify-between text-[8px] sm:text-[12px] md:text-sm text-neutral-40 mb-4 px-6">
        <span className="w-fit">Position</span>
        <span className="w-fit mr-5">User</span>
        <span className="w-fit text-center">Weekly Profit</span>
        <span className="w-fit text-right">Profile</span>
      </div>

      {/* Table Rows */}
      <div className="flex flex-col gap-[1px] md:gap-4">
        {data.map((user, index) => (
          <div
            key={index}
            className="flex justify-between items-center bg-neutral-900 rounded-full px-7 py-3 gap-4"
          >
            {/* Position */}
            <span className="text-white text-[8px] sm:text-[12px] md:text-base font-semibold w-fit">
              {user.position}
            </span>

            {/* User Details */}
            <div className="flex items-center gap-3 flex-1 min-w-[150px] max-w-[200px]">
              <Image
                src={user.avatar}
                alt={user.name}
                width={36}
                height={36}
                className="rounded-full size-5 md:size-9"
              />
              <div>
                <p className="text-white text-[8px] sm:text-[12px] md:text-base font-normal flex items-center gap-1">
                  {user.name}
                </p>
                <span className="text-neutral-40 text-[8px] sm:text-[12px] md:text-base">
                  ID: {user.id}
                </span>
              </div>
              <Image
                src={ICONS.medel}
                alt="Medal"
                className="w-[9px] md:w-[17px] h-4 md:h-[24px]"
              />
            </div>

            {/* Profit */}
            <span className="text-white text-[8px] sm:text-[12px] md:text-base font-semibold text-center w-fit">
              {user.profit}
            </span>

            {/* Button */}
            <div className="flex justify-end w-fit">
              <div
                className="flex p-[2px] w-fit rounded-full"
                style={{
                  backgroundImage:
                    "linear-gradient(90deg, #FF7800 0%, #FFE601 100%)",
                }}
              >
                <div className="bg-neutral-10 rounded-full">
                  <button
                    onClick={() => onJoinClick?.(user)}
                    className="px-4 py-2 text-white rounded-full text-sm font-medium  text-[8px] sm:text-[12px] md:text-base"
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
  );
};

export default LeaderboardTable;
