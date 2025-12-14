"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

export default function Loading() {
  return (
    <div className="w-full md:max-w-7xl space-y-4 mt-24">
      <Card className="p-4 space-y-3">
        <motion.div
          className="h-5 w-56 rounded-md bg-muted"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.2, repeat: Infinity }}
        />

        <motion.div
          className="h-4 w-40 rounded-md bg-muted"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.2, repeat: Infinity }}
        />

        <div className="space-y-2 pt-2">
          <motion.div
            className="h-4 w-full rounded-md bg-muted"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1.2, repeat: Infinity }}
          />
          <motion.div
            className="h-4 w-[90%] rounded-md bg-muted"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1.2, repeat: Infinity }}
          />
        </div>

        <div className="flex justify-between pt-3">
          <motion.div
            className="h-4 w-32 rounded-md bg-muted"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1.2, repeat: Infinity }}
          />
          <motion.div
            className="h-9 w-28 rounded-md bg-muted"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1.2, repeat: Infinity }}
          />
        </div>
      </Card>
    </div>
  );
}
