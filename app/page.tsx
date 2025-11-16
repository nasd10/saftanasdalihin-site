// app/page.tsx
import { HeroSection } from "@/components/sections/HeroSection";
// import { FeaturedProjects } from "@/components/sections/FeaturedProjects";
// import { AboutSummary } from "@/components/sections/AboutSummary";

export default function Home() {
  return (
    // Use <Fragment> since <main> is already in layout.tsx
    <>
      <HeroSection />
      {/*
        <FeaturedProjects />
        <AboutSummary /> 
      */}
    </>
  );
}