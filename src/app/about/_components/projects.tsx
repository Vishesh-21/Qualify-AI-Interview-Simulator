"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { projects } from "@/utils/data";
import React from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export const Projects = () => {
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
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-8 text-center"
      >
        <h2 className="text-3xl font-bold">Related Projects</h2>

        <p className="text-muted-foreground">
          A collection of AI-powered and full-stack applications
        </p>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 md:grid-cols-6 gap-4"
      >
        {projects.map((project, idx) => {
          // Create bento grid layout pattern
          const isLarge = idx === 0 || idx === 3;
          const spanClass = isLarge ? "col-span-4" : "col-span-2";

          return (
            <motion.div
              key={idx}
              variants={item}
              whileHover={{
                scale: 1.02,
                transition: { duration: 0.2 },
              }}
              whileTap={{ scale: 0.98 }}
              className={`md:${spanClass} h-full`}
            >
              <Card className="relative h-full overflow-hidden group rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white via-gray-50 to-gray-100 dark:from-neutral-900 dark:via-neutral-950 dark:to-black border-gray-200 dark:border-neutral-800">
                <CardHeader className="relative z-10">
                  <CardTitle className="flex items-start justify-between gap-2">
                    <motion.span
                      className="text-lg font-semibold"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      {project.name}
                    </motion.span>
                    <motion.div
                      className="w-2 h-2 rounded-full bg-green-500 flex-shrink-0 mt-2"
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [1, 0.5, 1],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />
                  </CardTitle>
                </CardHeader>

                <CardContent className="relative z-10 space-y-4">
                  <motion.p
                    className="text-sm text-muted-foreground leading-relaxed"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    {project.description}
                  </motion.p>

                  {project.features && (
                    <motion.div
                      className="flex flex-wrap gap-2"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                    >
                      {project.features.map((feature, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.5 + i * 0.05 }}
                          whileHover={{ scale: 1.05 }}
                        >
                          <Badge
                            variant="secondary"
                            className="text-xs backdrop-blur-sm bg-white/50 dark:bg-neutral-800/50 border border-gray-200 dark:border-neutral-700"
                          >
                            {feature}
                          </Badge>
                        </motion.div>
                      ))}
                    </motion.div>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
};
