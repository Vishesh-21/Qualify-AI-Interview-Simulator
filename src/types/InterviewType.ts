import { z } from "zod";
export interface Interview {
  id: string;
  role: string | null;
  level: string | null;
  type: string | null;
  techstack: string | null;
  status: string | null;
  amount: number | null;
  userId: string;
  questions: string[];
  createdAt: Date;
  updatedAt: Date;
}

export interface InterviewCardProps {
  interview: Interview;
}

export interface InterviewProps {
  interviews: Interview[];
}

export const FeedbackSchema = z.object({
  totalScore: z.number(),

  categoryScores: z.array(
    z.object({
      name: z.enum([
        "Communication Skills",
        "Technical Skills",
        "Problem Solving",
        "Cultural Fit",
        "Confidence and Clarity",
      ]),
      score: z.number(),
      comment: z.string(),
    })
  ),

  strengths: z.array(z.string()),
  areasForImprovement: z.array(z.string()),
  finalAssignment: z.string(),
});

