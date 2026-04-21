import { Hero } from '../components/Hero';
import { TrustBar } from '../components/TrustBar';
import { DirectorStory } from '../components/DirectorStory';
import { CenterOfExcellence } from '../components/CenterOfExcellence';
import { TexasRisingStar } from '../components/TexasRisingStar';
import { CurriculumTeachers } from '../components/CurriculumTeachers';
import { Philosophy } from '../components/Philosophy';
import { DailyEnrichments } from '../components/DailyEnrichments';
import { ParentEngagement } from '../components/ParentEngagement';
import { OutdoorPlay } from '../components/OutdoorPlay';
import { SafetyCleanliness } from '../components/SafetyCleanliness';
import { ProgramsGrid } from '../components/ProgramsGrid';
import { DiscoveryDayCTA } from '../components/DiscoveryDayCTA';
import { Testimonials } from '../components/Testimonials';
import { FAQAccordion } from '../components/FAQAccordion';

export function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <DirectorStory />
      <CenterOfExcellence />
      <TexasRisingStar />
      <CurriculumTeachers />
      <Philosophy />
      <DailyEnrichments />
      <ParentEngagement />
      <OutdoorPlay />
      <SafetyCleanliness />
      <ProgramsGrid />
      <DiscoveryDayCTA />
      <Testimonials />
      <FAQAccordion />
    </>
  );
}
