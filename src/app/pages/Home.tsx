import { Hero } from '../components/Hero';
import { TrustBar } from '../components/TrustBar';
import { ProgramsGrid } from '../components/ProgramsGrid';
import { DiscoveryDayCTA } from '../components/DiscoveryDayCTA';

export function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <ProgramsGrid />
      <DiscoveryDayCTA />
    </>
  );
}
