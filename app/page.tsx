import Hero from "@/components/Hero";
import ModelCarousel from "@/components/ModelCarousel";
import CapabilityTabs from "@/components/CapabilityTabs";
import ToolsGrid from "@/components/ToolsGrid";
import ShowcaseCarousel from "@/components/ShowcaseCarousel";
import FAQ from "@/components/FAQ";

export default function Home() {
  return (
    <>
      <Hero />
      <ModelCarousel />
      <CapabilityTabs />
      <ToolsGrid />
      <ShowcaseCarousel />
      <FAQ />
    </>
  );
}
