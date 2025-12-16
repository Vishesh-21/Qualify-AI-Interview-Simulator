"use server";

import { FeedbackSchema } from "@/types/InterviewType";
import { prisma } from "@/utils/prismaClient";
import { google } from "@ai-sdk/google";
import { generateObject, generateText } from "ai";

type CreateFeedbackParams = {
  interviewId: string;
  userId: string;
  transcript: string[];
};

export default async function generateFeedback({
  interviewId,
  userId,
  transcript,
}: CreateFeedbackParams) {
  try {
    const formattedTranscript = transcript.join("\n");
    console.log(formattedTranscript);

    const {
      object: {
        totalScore,
        categoryScores,
        strengths,
        areasForImprovement,
        finalAssignment,
      },
    } = await generateObject({
      model: google("gemini-2.0-flash-001"),
      schema: FeedbackSchema,
      prompt: `
    You are an AI interviewer analyzing a mock interview. Your task is to evaluate the candidate's based on structured categories. Be through and detailed in your analysis, don't be lenient with the candidate and if there are mistakes or areas fro improvement, point them out based on the following transcript:
    ${formattedTranscript}

    please score the candidate from 0 to 100 in the following areas. Do not add categories other than ones provided :
    - **Communication Skills** : clarity, articulation, structured response.
    - **Technical Skills** : understand the key concepts for the role.
    - **Problem Solving** : ability to analyze the problem and come up with a solution.
    - **Cultural Fit** : alignment with company values and job role.
    - **Confidence and Clarity** : ability to communicate effectively and clearly. confidence in responses, engagement, and overall presentation.
    `,
      system:
        "You are a professional interviewer analyzing the mock interview. Your task is to evaluate the candidate based on structured categories.",
    });

    const feedback = await prisma.feedback.create({
      data: {
        interviewId,
        userId,
        totalScore,
        categoryScores,
        strengths,
        areasForImprovement,
        finalAssignment,
      },
    });

    return {
      success: true,
      message: "Feedback generated successfully.",
      feedbackId: feedback.id,
      data: feedback,
    };
  } catch (error) {
    console.error("Error generating feedback:", error);
    return {
      success: false,
      message: "Failed to generate feedback. Please try again later.",
      error: error,
    };
  }
}

export async function check() {
  console.log(process.env.GOOGLE_GENERATIVE_AI_API_KEY);
  try {
    const result = await generateText({
      model: google("gemini-2.0-flash"),
      prompt: "Tell me a joke.",
      system: "You are a helpful assistant.",
    });

    console.log(result.text);
    return result.text;
  } catch (error: any) {
    console.log(error);
  }
}
