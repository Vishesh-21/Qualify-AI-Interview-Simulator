"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Github, Linkedin, Twitter, Globe } from "lucide-react";
import React from "react";
import { motion } from "framer-motion";
import { teamMembers } from "@/utils/data";

export const TeamSection = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <div className="mb-12 w-full">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-12 text-center"
      >
        <h2 className="mb-3 text-3xl font-bold text-neutral-900 dark:text-neutral-100">
          Meet the Team
        </h2>
        <p className="mx-auto max-w-2xl text-sm text-neutral-500 dark:text-neutral-500">
          The passionate individuals behind QualifyAI, dedicated to transforming
          your interview preparation journey
        </p>
      </motion.div>

      {/* Team Grid */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="grid gap-8 md:grid-cols-2"
      >
        {teamMembers.map((member, idx) => (
          <motion.div key={idx} variants={item}>
            <Card className="group relative h-full overflow-hidden rounded-2xl border border-neutral-200/60 bg-gradient-to-br from-white via-gray-50 to-gray-100 shadow-md transition-all duration-300 hover:shadow-xl dark:border-neutral-800 dark:from-neutral-900 dark:via-neutral-950 dark:to-black">
              <CardContent className="relative z-10 p-8">
                {/* Profile Section */}
                <div className="mb-6 flex items-start gap-6">
                  {/* Avatar */}
                  <motion.div
                    className="relative"
                    whileHover={{ scale: 1.05, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="relative h-24 w-24 overflow-hidden rounded-2xl border-2 border-violet-200 bg-gradient-to-br from-violet-100 to-purple-100 shadow-lg dark:border-violet-800 dark:from-violet-900/30 dark:to-purple-900/30">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  </motion.div>

                  {/* Info */}
                  <div className="flex-1">
                    <h3 className="mb-1 text-xl font-bold text-neutral-900 dark:text-neutral-100">
                      {member.name}
                    </h3>
                    <p className="mb-2 text-sm font-medium text-violet-600 dark:text-violet-400">
                      {member.role}
                    </p>
                    <p className="text-xs italic text-neutral-500 dark:text-neutral-500">
                      "{member.tagline}"
                    </p>
                  </div>
                </div>

                {/* Bio */}
                <p className="mb-6 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
                  {member.bio}
                </p>

                {/* Skills */}
                <div className="mb-6">
                  <div className="mb-3 text-xs font-semibold uppercase tracking-wide text-neutral-500 dark:text-neutral-500">
                    Expertise
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {member.skills.map((skill, i) => (
                      <motion.div
                        key={i}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Badge
                          variant="secondary"
                          className="border border-violet-200 bg-violet-50 text-xs text-violet-700 transition-colors hover:bg-violet-100 dark:border-violet-800 dark:bg-violet-900/30 dark:text-violet-300 dark:hover:bg-violet-900/50"
                        >
                          {skill}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Social Links */}
                <div className="flex items-center gap-3 border-t border-neutral-200 pt-6 dark:border-neutral-800">
                  {member.socials.github && (
                    <motion.a
                      href={member.socials.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-9 w-9 items-center justify-center rounded-lg bg-neutral-100 text-neutral-600 transition-all hover:bg-violet-100 hover:text-violet-600 dark:bg-neutral-800 dark:text-neutral-400 dark:hover:bg-violet-900/30 dark:hover:text-violet-400"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Github className="h-4 w-4" />
                    </motion.a>
                  )}
                  {member.socials.linkedin && (
                    <motion.a
                      href={member.socials.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-9 w-9 items-center justify-center rounded-lg bg-neutral-100 text-neutral-600 transition-all hover:bg-violet-100 hover:text-violet-600 dark:bg-neutral-800 dark:text-neutral-400 dark:hover:bg-violet-900/30 dark:hover:text-violet-400"
                      whileHover={{ scale: 1.1, rotate: -5 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Linkedin className="h-4 w-4" />
                    </motion.a>
                  )}
                  {member.socials.twitter && (
                    <motion.a
                      href={member.socials.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-9 w-9 items-center justify-center rounded-lg bg-neutral-100 text-neutral-600 transition-all hover:bg-violet-100 hover:text-violet-600 dark:bg-neutral-800 dark:text-neutral-400 dark:hover:bg-violet-900/30 dark:hover:text-violet-400"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Twitter className="h-4 w-4" />
                    </motion.a>
                  )}
                  {member.socials.website && (
                    <motion.a
                      href={member.socials.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-9 w-9 items-center justify-center rounded-lg bg-neutral-100 text-neutral-600 transition-all hover:bg-violet-100 hover:text-violet-600 dark:bg-neutral-800 dark:text-neutral-400 dark:hover:bg-violet-900/30 dark:hover:text-violet-400"
                      whileHover={{ scale: 1.1, rotate: -5 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Globe className="h-4 w-4" />
                    </motion.a>
                  )}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};
