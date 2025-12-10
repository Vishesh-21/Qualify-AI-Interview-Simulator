"use client";

import { motion } from "framer-motion";

export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] bg-white dark:bg-black">
      {/* 3-dot loader */}
      <div className="flex items-center space-x-3">
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className="w-4 h-4 rounded-full bg-neutral-800/40 dark:bg-neutral-200/40"
            animate={{ y: [0, -15, 0] }}
            transition={{
              duration: 1,
              repeat: Infinity,
              repeatType: "loop",
              delay: i * 0.4,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Optional Loading Text */}
      <motion.span
        className="mt-6 text-neutral-800 dark:text-neutral-200 text-lg font-medium"
        animate={{ opacity: [0.3, 1, 0.3] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        Loading...
      </motion.span>
    </div>
  );
}
