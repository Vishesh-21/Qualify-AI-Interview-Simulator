"use client";

import { motion } from "framer-motion";

export default function Loading() {
  return (
    <div className="my-10 px-4 md:px-8 space-y-10">
      {/* Banner Skeleton */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="rounded-xl h-36 w-full bg-neutral-200/50 dark:bg-neutral-800/60 animate-pulse"
      />

      {/* Interview Cards Skeleton */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <motion.div
            key={item}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: item * 0.05, duration: 0.4 }}
            className="rounded-2xl p-5 bg-neutral-200/50 dark:bg-neutral-900/40 border border-neutral-300/30 dark:border-neutral-700/40"
          >
            {/* Title */}
            <div className="h-5 w-1/2 bg-neutral-300 dark:bg-neutral-700 rounded-md mb-4 animate-pulse" />

            {/* Rows */}
            <div className="space-y-3">
              <div className="h-4 w-2/3 bg-neutral-300 dark:bg-neutral-700 rounded-md animate-pulse" />
              <div className="h-4 w-1/3 bg-neutral-300 dark:bg-neutral-700 rounded-md animate-pulse" />
              <div className="h-4 w-1/2 bg-neutral-300 dark:bg-neutral-700 rounded-md animate-pulse" />
            </div>

            {/* Footer Button */}
            <div className="mt-6 h-9 w-24 rounded-md bg-neutral-300 dark:bg-neutral-700 animate-pulse" />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
