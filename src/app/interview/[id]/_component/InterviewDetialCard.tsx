"use client";

import React, { useMemo, useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { format } from "date-fns";
import { useRouter } from "next/navigation";

type Interview = {
  id: string;
  type: string | null;
  techstack: string | null;
  role: string | null;
  level: string | null;
  amount: number | null;
  status: string | null;
  questions: string[];
  createdAt: string | Date;
  updatedAt: string | Date;
  userId: string;
};

type Props = {
  interview: Interview;
  maxPreviewQuestions?: number;
};

export default function InterviewCard({
  interview,
  maxPreviewQuestions = 3,
}: Props) {
  const [expanded, setExpanded] = useState(false);
  const router = useRouter();

  // make sure createdAt is a Date object
  const createdAt = useMemo(() => {
    return interview.createdAt instanceof Date
      ? interview.createdAt
      : new Date(interview.createdAt);
  }, [interview.createdAt]);

  const formattedDate = useMemo(() => {
    try {
      return format(createdAt, "MMM d, yyyy · h:mm a");
    } catch {
      return createdAt.toLocaleString();
    }
  }, [createdAt]);

  const previewQuestions = interview.questions.slice(0, maxPreviewQuestions);
  const remainingCount = interview.questions.length - previewQuestions.length;

  return (
    <Card className="w-full md:max-w-7xl">
      <CardHeader className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <div>
          <CardTitle className="flex items-center gap-3">
            <span className="text-lg font-medium">{interview.role}</span>
            <Badge className="uppercase text-xs">{interview.level}</Badge>
            <Badge variant="secondary" className="ml-2">
              {interview.type}
            </Badge>
          </CardTitle>

          <div className="mt-1 text-sm text-muted-foreground">
            <span>{interview.techstack}</span>
            <span className="mx-2">•</span>
            <span>{interview.amount} questions</span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <div>
            <div className="text-xs text-muted-foreground">Interview ID</div>
            <div className="text-sm break-words">{interview.id}</div>
          </div>

          <div className="flex flex-col items-start">
            <div className="text-xs text-muted-foreground">Status</div>
            <div className="mt-1">
              <Badge
                className={
                  interview.status === "pending"
                    ? "bg-yellow-100 text-yellow-800"
                    : interview.status === "approved"
                    ? "bg-green-100 text-green-800"
                    : "bg-neutral-100 text-neutral-800"
                }
              >
                {interview.status}
              </Badge>
            </div>
          </div>
        </div>
      </CardHeader>

      <CardContent className="pt-2">
        <div className="mb-4">
          <div className="text-sm font-semibold mb-2">Questions</div>

          {interview.questions.length === 0 ? (
            <div className="text-sm text-muted-foreground">
              No questions available.
            </div>
          ) : (
            <ul className="space-y-2">
              {previewQuestions.map((q, idx) => (
                <li key={idx} className="text-sm">
                  <span className="font-medium mr-2 text-muted-foreground">
                    {idx + 1}.
                  </span>
                  <span className="break-words">{q}</span>
                </li>
              ))}

              {expanded &&
                interview.questions.slice(maxPreviewQuestions).map((q, i) => (
                  <li key={`extra-${i}`} className="text-sm">
                    <span className="font-medium mr-2 text-muted-foreground">
                      {maxPreviewQuestions + i + 1}.
                    </span>
                    <span className="break-words">{q}</span>
                  </li>
                ))}

              {!expanded && remainingCount > 0 && (
                <li className="text-sm text-muted-foreground">
                  + {remainingCount} more
                </li>
              )}
            </ul>
          )}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div>
            <div className="text-xs text-muted-foreground">Tech Stack</div>
            <div className="text-sm">{interview.techstack}</div>
          </div>
        </div>
      </CardContent>

      <CardFooter className="flex items-center justify-between gap-2">
        <div className="text-sm text-muted-foreground">
          Created: {formattedDate}
        </div>

        <div className="flex items-center gap-2">
          {interview.questions.length > maxPreviewQuestions && (
            <Button
              size="sm"
              variant="outline"
              onClick={() => setExpanded((s) => !s)}
              className="cursor-pointer"
            >
              {expanded
                ? "Show less"
                : `Show ${remainingCount > 0 ? remainingCount : "more"}`}
            </Button>
          )}

          <Button
            size="sm"
            className="cursor-pointer"
            onClick={() => router.push(`/interview/${interview.id}/start`)}
          >
            Start Interview
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}
