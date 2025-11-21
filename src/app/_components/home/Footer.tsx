"use client";

import { TextHoverEffect } from "@/components/ui/text-hover-effect";
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
  IconBrandGithubFilled,
  IconBrandLinkedinFilled,
  IconCode,
  IconUser,
} from "@tabler/icons-react";
import { FlipWords } from "@/components/ui/flip-words";

const Footer = () => {
  return (
    <div className="w-full max-h-screen">
      <div className="flex items-center justify-center">
        <TextHoverEffect text="Qualify AI" />
      </div>
      <HelpingFooter />
    </div>
  );
};

export default Footer;

export function HelpingFooter() {
  return (
    <footer className="w-full dark:bg-black bg-white">
      <div className="max-w-7xl mx-auto md:px-6 ">
        <Card className="w-full rounded-2xl shadow-sm ">
          <CardContent className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center md:flex-row flex-col gap-2">
              <div className="text-xl font-semibold tracking-wide gradient-title">
                Qualify AI
              </div>
              <p className="md:text-base text-sm text-muted-foreground">
                Helping you ace interviews —
                <FlipWords
                  words={[
                    "Anytime",
                    "Anywhere",
                    "Confidently",
                    "Seamlessly",
                    "Fearlessly",
                  ]}
                />
              </p>
            </div>
            <FloatingDockDemo />
          </CardContent>
        </Card>
      </div>
    </footer>
  );
}

export function FloatingDockDemo() {
  const links = [
    {
      title: "LinkedIn",
      icon: (
        <IconBrandLinkedinFilled className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://www.linkedin.com/in/vishesh-verma-35b31b279/",
    },

    {
      title: "GitHub",
      icon: (
        <IconBrandGithubFilled className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://github.com/Vishesh-21",
    },
    {
      title: "Portfolio",
      icon: (
        <IconUser className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://vishesh-s-developer-portfolio.vercel.app/",
    },
    {
      title: "Leet-Code",
      icon: (
        <IconCode className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://leetcode.com/u/vishu_verma_21/",
    },
  ];
  return (
    <div className="md:flex items-center justify-center hidden">
      <FloatingDock items={links} />
    </div>
  );
}
