"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { workExperience } from "@/utils/data";
import { Briefcase, GraduationCap, Sparkles } from "lucide-react";
import React from "react";
import { motion } from "framer-motion";

export const DeveloperCard = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, x: -20 },
    show: { opacity: 1, x: 0 },
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      initial="hidden"
      animate="show"
      variants={fadeInUp}
      transition={{ duration: 0.5 }}
      className="mb-12 w-full"
    >
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-8"
      >
        <h2 className="text-3xl font-bold text-center">About Me</h2>
      </motion.div>
      <Card className="bg-gradient-to-br from-white via-gray-50 to-gray-100 dark:from-neutral-900 dark:via-neutral-950 dark:to-black border-gray-200 dark:border-neutral-800">
        <CardContent className="relative z-10 space-y-10">
          {/* Developer Info */}
          <motion.section
            variants={container}
            initial="hidden"
            animate="show"
            className="space-y-3"
          >
            <motion.h3
              variants={item}
              className="text-xl font-semibold text-neutral-900 dark:text-neutral-100"
            >
              Vishesh Verma
            </motion.h3>

            <motion.p
              variants={item}
              className="text-sm text-neutral-600 dark:text-neutral-400"
            >
              AI-Driven Full-Stack Developer focused on building intelligent,
              scalable, and performance-oriented web applications.
            </motion.p>

            <motion.div
              variants={item}
              className="flex items-start gap-2 text-sm text-neutral-600 dark:text-neutral-400"
            >
              <GraduationCap className="mt-0.5 h-4 w-4 shrink-0" />
              <span>
                B.Tech in Computer Science Engineering · Geeta Engineering
                College · CGPA 7.9 · Class of 2026
              </span>
            </motion.div>
          </motion.section>

          {/* Work Experience */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="space-y-6"
          >
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="flex items-center gap-2 text-sm font-medium text-neutral-900 dark:text-neutral-100"
            >
              <Briefcase className="h-4 w-4" />
              Work Experience
            </motion.div>

            <div className="space-y-6">
              {workExperience.map((exp, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 + idx * 0.1 }}
                  whileHover={{ x: 4 }}
                  className="group/item relative pl-6 before:absolute before:left-0 before:top-1 before:h-full before:w-px before:bg-neutral-200 dark:before:bg-neutral-800"
                >
                  {/* Animated dot indicator */}
                  <motion.div
                    className="absolute left-[-3px] top-2 h-1.5 w-1.5 rounded-full bg-violet-600 dark:bg-violet-400"
                    animate={{
                      scale: [1, 1.3, 1],
                      opacity: [1, 0.7, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: idx * 0.3,
                    }}
                  />

                  <div className="mb-1 flex flex-wrap items-center gap-2">
                    <h5 className="text-sm font-semibold text-neutral-900 dark:text-neutral-100">
                      {exp.title}
                    </h5>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Badge
                        variant="outline"
                        className="border-neutral-300 text-xs text-neutral-600 transition-colors hover:border-violet-400 hover:text-violet-600 dark:border-neutral-700 dark:text-neutral-400 dark:hover:border-violet-500 dark:hover:text-violet-400"
                      >
                        {exp.type}
                      </Badge>
                    </motion.div>
                  </div>

                  <p className="mb-3 text-xs text-neutral-500 dark:text-neutral-500">
                    {exp.company} · {exp.period}
                  </p>

                  <ul className="list-disc space-y-1 pl-4 text-sm text-neutral-600 dark:text-neutral-400">
                    {exp.points.map((point, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.7 + idx * 0.1 + i * 0.05 }}
                        className="transition-colors group-hover/item:text-neutral-700 dark:group-hover/item:text-neutral-300"
                      >
                        {point}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.section>
        </CardContent>
      </Card>
    </motion.div>
  );
};
