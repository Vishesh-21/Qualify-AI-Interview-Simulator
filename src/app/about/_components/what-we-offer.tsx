"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import React from "react";
import { motion } from "framer-motion";
import { features } from "@/utils/data";

export const Features = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <div className="mb-12">
      {/* Header */}
      <div className="mb-10 text-center">
        <h2 className="mb-3 text-3xl font-bold text-neutral-900 dark:text-neutral-100">
          What We Offer
        </h2>
        <p className="mx-auto max-w-2xl text-sm text-neutral-500 dark:text-neutral-500">
          Everything you need to ace your next technical interview
        </p>
      </div>

      {/* Features Grid */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
      >
        {features.map((feature, idx) => {
          const Icon = feature.icon;

          return (
            <motion.div
              key={idx}
              variants={item}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <Card className="group relative h-full overflow-hidden rounded-2xl border border-neutral-200/60 bg-gradient-to-br from-white via-gray-50 to-gray-100 shadow-md transition-all duration-300 hover:shadow-xl dark:border-neutral-800 dark:from-neutral-900 dark:via-neutral-950 dark:to-black">
                {/* Animated border glow */}
                <motion.div
                  className="absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  style={{
                    background:
                      "linear-gradient(90deg, rgba(139, 92, 246, 0.4), rgba(168, 85, 247, 0.4))",
                    filter: "blur(12px)",
                    zIndex: -1,
                  }}
                />

                <CardHeader className="relative z-10">
                  <CardTitle className="flex items-center gap-3 text-lg">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-violet-100 text-violet-600 transition-colors group-hover:bg-violet-600 group-hover:text-white dark:bg-violet-900/30 dark:text-violet-100 dark:group-hover:bg-violet-500">
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="text-neutral-900 dark:text-neutral-100">
                      {feature.title}
                    </span>
                  </CardTitle>
                </CardHeader>

                <CardContent className="relative z-10">
                  <p className="text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
};
