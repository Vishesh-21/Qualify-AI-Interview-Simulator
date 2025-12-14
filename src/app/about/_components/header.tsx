"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export const Header = () => {
  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight * 0.8,
      behavior: "smooth",
    });
  };

  return (
    <header className="relative flex min-h-[80vh] flex-col items-center justify-center overflow-hidden text-center">
      <div className="flex-1 flex flex-col items-center justify-start mt-0 md:mt-8">
        {/* Logo */}
        <motion.div
          className="relative mb-4 flex justify-center"
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 15,
            duration: 0.8,
          }}
        >
          <motion.div
            className="relative"
            whileHover={{ scale: 1.05, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Image
              src="/logo.svg"
              alt="QualifyAI logo"
              width={72}
              height={72}
              priority
              className="relative rounded-xl shadow-lg"
            />
          </motion.div>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          className="mb-4 text-4xl font-semibold tracking-wide text-neutral-900 md:text-5xl dark:text-neutral-100"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <span className="inline-block font-bold bg-linear-to-tr from-purple-600 via-purple-900 to-orange-500 bg-clip-text text-transparent">
            QualifyAI
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="mb-2 text-base font-medium text-neutral-600 dark:text-neutral-400"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          AI-Driven Interview Preparation Platform
        </motion.p>

        {/* Description */}
        <motion.p
          className="mx-auto max-w-2xl text-sm leading-relaxed text-neutral-500 dark:text-neutral-500"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
        >
          Crafting intelligent, scalable solutions to help you prepare
          effectively, perform confidently, and grow your career with clarity.
        </motion.p>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.6 }}
      >
        <motion.button
          onClick={scrollToContent}
          className="group flex flex-col items-center gap-2 cursor-pointer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {/* Text label */}
          <motion.span
            className="text-xs font-medium text-neutral-500 dark:text-neutral-400"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            Scroll to explore
          </motion.span>

          {/* Animated chevron container */}
          <motion.div
            className="relative flex h-12 w-8 items-center justify-center rounded-full border-2 border-neutral-300 bg-white/50 backdrop-blur-sm transition-colors group-hover:border-violet-600 dark:border-neutral-700 dark:bg-neutral-900/50 dark:group-hover:border-violet-500"
            animate={{
              y: [0, 8, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            {/* Chevron icon */}
            <motion.div
              animate={{
                y: [0, 4, 0],
                opacity: [1, 0.5, 1],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <ChevronDown className="h-5 w-5 text-neutral-600 transition-colors group-hover:text-violet-600 dark:text-neutral-400 dark:group-hover:text-violet-500" />
            </motion.div>
          </motion.div>
        </motion.button>

        {/* Decorative dots */}
        <div className="absolute -left-8 top-1/2 flex -translate-y-1/2 gap-1">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={`left-${i}`}
              className="h-1 w-1 rounded-full bg-neutral-300 dark:bg-neutral-700"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.3, 1, 0.3],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: i * 0.2,
              }}
            />
          ))}
        </div>
        <div className="absolute -right-8 top-1/2 flex -translate-y-1/2 gap-1">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={`right-${i}`}
              className="h-1 w-1 rounded-full bg-neutral-300 dark:bg-neutral-700"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.3, 1, 0.3],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: i * 0.2,
              }}
            />
          ))}
        </div>
      </motion.div>
    </header>
  );
};
