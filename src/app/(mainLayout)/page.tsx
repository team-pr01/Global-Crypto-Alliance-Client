
import FutureRoadMap from "@/components/FutureRoadMap/FutureRoadMap";

import AboutUs from "@/components/HomePage/AboutUs/AboutUs";
import AccountPreviewMode from "@/components/HomePage/AccountPreviewMode/AccountPreviewMode";

import Hero from "@/components/HomePage/Hero/Hero";
import LifetimeIncome from "@/components/HomePage/LifetimeIncome/LifetimeIncome";

export default function Home() {
  return (
    <div>
      <Hero />
      <AboutUs/>
      <AccountPreviewMode/>
      <LifetimeIncome/>
       <FutureRoadMap/>

    </div>
  );
}
