import { Component } from "solid-js";
import { Title } from "@solidjs/meta";
import LandingLayout from "@layouts/LandingLayout";
import HeroSection from "@components/landing/HeroSection";
import FeaturesSection from "@components/landing/FeaturesSection";
import TechStackSection from "@components/landing/TechStackSection";
import QuickStartSection from "@components/landing/QuickStartSection";
import ArchitectureSection from "@components/landing/ArchitectureSection";
import RoadmapSection from "@components/landing/RoadmapSection";
import CTASection from "@components/landing/CTASection";

const Home: Component = () => {
  return (
    <>
      <Title>Solid Native — Ultra-Lightweight Cross-Platform Mobile Framework</Title>
      <LandingLayout>
        <HeroSection />
        <FeaturesSection />
        <TechStackSection />
        <QuickStartSection />
        <ArchitectureSection />
        <RoadmapSection />
        <CTASection />
      </LandingLayout>
    </>
  );
};

export default Home;
