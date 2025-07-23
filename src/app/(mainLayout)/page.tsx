
import FutureRoadMap from "@/components/FutureRoadMap/FutureRoadMap";

import AboutUs from "@/components/HomePage/AboutUs/AboutUs";
import AccountPreviewMode from "@/components/HomePage/AccountPreviewMode/AccountPreviewMode";

import Hero from "@/components/HomePage/Hero/Hero";
import LifetimeIncome from "@/components/HomePage/LifetimeIncome/LifetimeIncome";
import PlatformOffers from "@/components/HomePage/PlatformOffers/PlatformOffers";
import MonthlyTopEarners from "@/components/HomePage/MonthlyTopEarners/MonthlyTopEarners";

export default function Home() {
  return (
    <div>
      <Hero />
      <AboutUs/>
      <AccountPreviewMode/>
      <LifetimeIncome/>
      <PlatformOffers/>
      <MonthlyTopEarners/>
       <FutureRoadMap/>

    </div>
  );
}
