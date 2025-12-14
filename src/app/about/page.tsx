import React from "react";
import { MissionStatement } from "./_components/mission-statement";
import { DeveloperCard } from "./_components/developer-card";
import { Projects } from "./_components/projects";
import { TechStack } from "./_components/tech-stack";
import { Header } from "./_components/header";
import { Features } from "./_components/what-we-offer";
import { TeamSection } from "./_components/other-developer-card";

const AboutUs = () => {
  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 ">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <Header />

        {/* Mission Statement */}
        <MissionStatement />

        {/* What We Offer */}
        <Features />

        {/* Developer Section */}
        {/* <DeveloperCard /> */}
        <TeamSection />

        {/* Related Projects */}
        <Projects />

        {/* Technology Stack */}
        <TechStack />
      </div>
    </div>
  );
};

export default AboutUs;
