"use client";
import RegisterPanel from "@/components/compete/RegisterPanel";
import EventsGrid from "@/components/compete/EventsGrid";
import BracketViz from "@/components/compete/BracketViz";
import Footer from "@/components/layout/Footer";
import { useBreakpoint } from "@/hooks/useBreakpoint";
import FeaturesGrid from "../home/FeaturesGrid";

export default function CompetePage() {
  const bp = useBreakpoint();
  const isMobile = bp === "mobile";
  const isTablet = bp === "tablet";
  const px = isMobile ? "24px" : isTablet ? "40px" : "80px";

  return (
    <>
      <FeaturesGrid />

      <EventsGrid />
      <BracketViz />
      <Footer />
    </>
  );
}
