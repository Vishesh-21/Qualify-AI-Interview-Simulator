import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { InterviewCardProps } from "@/types/InterviewType";
import { Calendar, User, FileQuestion } from "lucide-react";
import { formateDate } from "@/utils/questionsGenerationPrompt";
import Link from "next/link";

const InterviewCard: React.FC<InterviewCardProps> = ({ interview }) => {
  return (
    <Card
      className="
        w-full rounded-2xl shadow-md relative overflow-hidden
        bg-gradient-to-br from-white via-gray-50 to-gray-100 
        dark:from-neutral-900 dark:via-neutral-950 dark:to-black
      "
    >
      {/* Header */}
      <CardHeader>
        <CardTitle className="flex justify-between items-center">
          <span>{interview.role || "Unknown Role"}</span>
          <Badge variant="outline" className="capitalize">
            {interview.level || "N/A"}
          </Badge>
        </CardTitle>
      </CardHeader>

      {/* Content */}
      <CardContent className="space-y-3">
        <div className="flex items-center text-sm">
          <User className="w-4 h-4 mr-2" />
          <span>Type: {interview.type || "N/A"}</span>
        </div>

        <div className="flex items-center text-sm">
          <Calendar className="w-4 h-4 mr-2" />
          <span>{formateDate(interview.createdAt || "N/A")}</span>
        </div>

        <div className="flex items-center text-sm ">
          <FileQuestion className="w-4 h-4 mr-2" />
          <span>{interview?.questions?.length || 0} Questions</span>
        </div>

        <div className="text-sm ">
          <strong>Techstack:</strong> {interview.techstack || "N/A"}
        </div>

        <div>
          <strong>Status:</strong>{" "}
          <Badge
            variant={interview.status === "pending" ? "secondary" : "default"}
          >
            {interview.status}
          </Badge>
        </div>
      </CardContent>

      {/* Footer */}
      <CardFooter className="flex justify-end">
        <Link href={`/interview/${interview.id}`}>
          <Button size="sm" className="cursor-pointer rounded-2xl">
            View Details
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default InterviewCard;
