"use client";

import { Cover } from "@/components/ui/cover";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { Spotlight } from "@/components/ui/spotlight-new";
import { IconArrowRightRhombus } from "@tabler/icons-react";
import { useRouter } from "next/navigation";
import React from "react";

const Banner = () => {
  const navigate = useRouter();

  const handleOnClick = () => {
    navigate.push("/interview");
  };

  return (
    <div className="w-full max-h-screen flex items-center mt-24 flex-col gap-4">
      <Spotlight />
      <h3 className="md:text-2xl text-xl font-medium">
        Crack Your Next Interview with
      </h3>
      <Cover className="group">
        <h1
          id="title"
          className="md:text-[6rem] text-[4rem] font-bolder gradient-title md:leading-25 leading-15 uppercase tracking-wide group-hover:text-gray-300"
        >
          Qualify AI
        </h1>
      </Cover>
      <p className="max-w-3xl text-center text-neutral-800 dark:text-neutral-500">
        Practice with an AI Voice Interviewer that simulates real interview
        scenarios — sharpen your skills, get instant feedback, and boost your
        confidence.
      </p>
      <div className="mt-10">
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
  );
};

export default Banner;
