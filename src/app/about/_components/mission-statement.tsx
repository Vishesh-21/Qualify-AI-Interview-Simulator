import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Target } from "lucide-react";

export const MissionStatement = () => {
  return (
    <Card className="mb-12 bg-gradient-to-br from-white via-gray-50 to-gray-100 dark:from-neutral-900 dark:via-neutral-950 dark:to-black border-gray-200 dark:border-neutral-800">
      <CardHeader className="pb-1">
        <CardTitle className="flex items-center gap-3 text-lg font-semibold text-neutral-900 dark:text-neutral-100">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-neutral-200 bg-neutral-50 dark:border-neutral-800 dark:bg-neutral-900">
            <Target className="h-5 w-5 text-neutral-700 dark:text-neutral-300" />
          </span>
          Our Mission
        </CardTitle>
      </CardHeader>

      <CardContent className="space-y-5 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
        <p>
          QualifyAI was built from real-world experience in today’s competitive
          job market. Having navigated technical interviews firsthand, we
          understand the pressure, uncertainty, and preparation required to
          succeed.
        </p>

        <p>
          By combining AI-driven insights with proven interview strategies,
          QualifyAI delivers personalized preparation tailored to your role,
          experience level, and technology stack—helping you approach interviews
          with clarity and confidence.
        </p>
      </CardContent>
    </Card>
  );
};
