'use client';
import AboutHero from '@/components/about/AboutHero';
import Marquee from '@/components/ui/Marquee';
import Manifesto from '@/components/about/Manifesto';
import { ValuesSection, TeamSection } from '@/components/about/ValueTeam';
import BigCta from '@/components/home/BigCta';
import Footer from '@/components/layout/Footer';
import { MARQUEE_ITEMS_ABOUT } from '@/lib/data';

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <Marquee items={MARQUEE_ITEMS_ABOUT} />
      <Manifesto />
      <ValuesSection />
      <TeamSection />
      <BigCta
        title="JOIN THE<br/>ARENA"
        body="Season 3 is live. Register now and compete against the best in the world."
        buttonLabel="Compete now →"
        buttonPage="compete"
      />
      <Footer />
    </>
  );
}
