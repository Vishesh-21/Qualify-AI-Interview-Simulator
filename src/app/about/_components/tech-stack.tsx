"use client";

import { Badge } from "@/components/ui/badge";
import { skills } from "@/utils/data";
import React from "react";
import { motion } from "framer-motion";
import { Code2, Zap } from "lucide-react";

export const TechStack = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, scale: 0.5, y: 20 },
    show: { opacity: 1, scale: 1, y: 0 },
  };

  return (
    <motion.div className="relative text-center">
      {/* Background gradient effects */}
      <motion.div
        className="absolute left-1/2 top-0 h-32 w-32 -translate-x-1/2 rounded-full bg-blue-500/10 blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-6"
      >
        <div className="mb-3 flex items-center justify-center gap-2">
          <Code2 className="h-6 w-6 text-violet-600 dark:text-violet-400" />

          <h3 className="text-3xl font-bold text-neutral-900 dark:text-neutral-100">
            Powered By Modern Technology
          </h3>
        </div>

        <p className="text-medium text-neutral-500 dark:text-neutral-500">
          Built with cutting-edge tools and frameworks
        </p>
      </motion.div>

      {/* Tech Stack Badges */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative flex flex-wrap justify-center gap-3"
      >
        {skills.map((skill, i) => (
          <motion.div
            key={`skill-${i}`}
            variants={item}
            whileHover={{
              scale: 1.1,
              rotate: [0, -5, 5, -5, 0],
              transition: {
                rotate: {
                  duration: 0.5,
                  ease: "easeInOut",
                },
                scale: {
                  duration: 0.2,
                },
              },
            }}
            whileTap={{ scale: 0.95 }}
          >
            <Badge
              variant="outline"
              className="group relative overflow-hidden border-neutral-300 bg-white px-4 py-2 text-sm transition-all duration-300 hover:border-violet-400 hover:shadow-lg dark:border-neutral-700 dark:bg-neutral-900 dark:hover:border-violet-500"
            >
              {/* Badge text */}
              <span className="relative z-10 transition-colors group-hover:text-violet-600 dark:group-hover:text-violet-400">
                {skill}
              </span>

              {/* Shine effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                initial={{ x: "-100%" }}
                animate={{ x: "200%" }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatDelay: 5,
                  ease: "easeInOut",
                }}
              />
            </Badge>
          </motion.div>
        ))}
      </motion.div>

      {/* Bottom accent line */}
      <motion.div
        className="mx-auto mt-8 h-0.5 w-[90%] bg-gradient-to-r from-violet-500 via-transparent to-violet-500"
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{ scaleX: 1, opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.8, ease: "easeOut" }}
      />
    </motion.div>
  );
};
