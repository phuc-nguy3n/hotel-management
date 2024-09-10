import Gallery from "@/components/Gallery/Gallery";
import HeroSection from "@/components/HeroSection/HeroSection";
import PageSearch from "@/components/PageSearch/PageSearch";

export default function Home() {
  return (
    <>
      <HeroSection />
      {/* PAGE SEARCH */}
      <PageSearch />
      {/* Featured Room */}
      <Gallery />
      {/* New Letter */}
    </>
  );
}
