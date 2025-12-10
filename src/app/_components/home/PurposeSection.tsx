"use client";

import { BackgroundRippleEffect } from "@/components/ui/background-ripple-effect";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { IconArrowRightRhombus } from "@tabler/icons-react";
import { useRouter } from "next/navigation";
import React from "react";

const PurposeSection = () => {
  const navigate = useRouter();

  const handleOnClick = () => {
    navigate.push("/interview");
  };
  return (
    <div className="relative flex min-h-screen md:mt-8 mt-2 w-full flex-col items-start justify-start overflow-hidden">
      <BackgroundRippleEffect />
      <div className="mt-18 w-full flex items-center flex-col justify-center">
        <h2 className="relative z-10 mx-auto max-w-4xl text-center text-2xl font-bold text-neutral-800 md:text-4xl lg:text-7xl dark:text-neutral-100">
          Empowering You to Crack Every Interview
        </h2>
        <p className="relative z-10 mx-auto mt-4 max-w-[600px] text-center text-neutral-800 dark:text-neutral-500">
          Enhance your interview readiness with AI-driven mock sessions that
          simulate real scenarios, deliver real-time analytics, and provide
          personalized feedback—refining your responses and building the
          confidence to secure your ideal role.
        </p>

        <div className="md:mt-24">
          <HoverBorderGradient
            containerClassName="rounded-full"
            as="button"
            className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2 cursor-pointer"
            onClick={handleOnClick}
          >
            <span className="flex items-center gap-2">
              Get Started <IconArrowRightRhombus />
            </span>
          </HoverBorderGradient>
        </div>
      </div>
    </div>
  );
};

export default PurposeSection;
