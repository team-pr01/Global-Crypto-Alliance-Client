"use client"
import { IMAGES } from "@/assets";
import LeaderboardTable from "../Tables/LeadrerBoardTble";

const leaderboardData = [
  { position: 1, name: "Marco Jens", id: "481029", avatar: IMAGES.user, profit: "$942" },
  { position: 2, name: "Jane Doe", id: "481045", avatar: IMAGES.user, profit: "$890" },
  { position: 1, name: "Marco Jens", id: "481029", avatar: IMAGES.user, profit: "$942" },
  { position: 2, name: "Jane Doe", id: "481045", avatar: IMAGES.user, profit: "$890" },
  { position: 1, name: "Marco Jens", id: "481029", avatar: IMAGES.user, profit: "$942" },
  { position: 2, name: "Jane Doe", id: "481045", avatar: IMAGES.user, profit: "$890" },
];

export default function MonthlyLeaderBoard() {
  const mobileData = leaderboardData.slice(0, 4); // Only first 4 rows

  return (
    <>
      {/* Mobile (< md) */}
      <div className="block md:hidden">
        <LeaderboardTable
          data={mobileData}
          onJoinClick={(user) => console.log("Join clicked", user)}
        />
      </div>

      {/* Desktop (>= md) */}
      <div className="hidden md:block">
        <LeaderboardTable
          data={leaderboardData}
          onJoinClick={(user) => console.log("Join clicked", user)}
        />
      </div>
    </>
  );
}
