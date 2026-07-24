import AwardSection from "@/components/AwardSection";
import CTA from "@/components/CTA";
import Eighth from "@/components/Eighth";
import Fifth from "@/components/Fifth";
import First from "@/components/First";
import Footer from "@/components/Footer";
import Fourth from "@/components/Fourth";
import LatestInsights from "@/components/LatestInsights";
import Ninth from "@/components/Ninth";
import ResourceAuditSection from "@/components/ResourceAuditSection";
import Second from "@/components/Second";
import Seventh from "@/components/Seventh";
import Sixth from "@/components/Sixth";
import Tenth from "@/components/Tenth";
import Testimonials from "@/components/Testimonials";
import Third from "@/components/Third";

export default function Home() {
  return (
    <div className="flex flex-col bg-white">
      <First/>
      <Second/>
      <Third/>
      <Fourth/>
      <Fifth/>
      <Sixth/>
      <Seventh/>
      <Eighth/>
      <Ninth/>
      <Tenth/>
      <Testimonials/>
      <AwardSection/>
      <LatestInsights/>
      <ResourceAuditSection/>
      <CTA/>
      <Footer/>
    </div>
  );
}
