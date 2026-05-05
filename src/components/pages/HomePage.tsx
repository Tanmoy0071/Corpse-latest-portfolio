"use client";
import Hero from "@/components/home/Hero";
import StatsStrip from "@/components/home/StatsStrip";
import FeaturedArenas from "@/components/home/FeaturedArenas";
import HomeManifesto from "@/components/home/HomeManifesto";
import FeaturesGrid from "@/components/home/FeaturesGrid";
import EventsPreview from "@/components/home/EventsPreview";
import TopLadderPreview from "@/components/home/TopLadderPreview";
import ArenaPillars from "@/components/home/ArenaPillars";
import QuoteSection from "@/components/home/QuoteSection";
import BigCta from "@/components/home/BigCta";
import Marquee from "@/components/ui/Marquee";
import Footer from "@/components/layout/Footer";
import { MARQUEE_ITEMS_HOME } from "@/lib/data";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Marquee items={MARQUEE_ITEMS_HOME} />
      <FeaturedArenas />
      <HomeManifesto />
      <TopLadderPreview />
      <EventsPreview />
      <ArenaPillars />
      <Footer />
    </>
  );
}
