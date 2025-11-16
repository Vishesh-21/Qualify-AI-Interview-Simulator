import { parseQuestions } from "@/utils/apiHelperFunctions";
import { prisma } from "@/utils/prismaClient";
import { questionsGenerationPrompt } from "@/utils/questionsGenerationPrompt";
import { google } from "@ai-sdk/google";
import { generateText } from "ai";
import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

async function generateInterviewQuestions({
  type,
  techstack,
  role,
  level,
  amount,
}: {
  type: string;
  techstack: string;
  role: string;
  level: string;
  amount: number;
}) {
  const result = await generateText({
    model: google("gemini-2.0-flash-001"),
    prompt: questionsGenerationPrompt({ type, techstack, role, level, amount }),
  });

  const questions = parseQuestions(result.text);
  if (!questions.length) throw new Error("No questions generated");
  return questions;
}

export async function POST(request: Request) {
  const { type, techstack, role, level, amount, userid } = await request.json();

  if (!type || !techstack || !role || !level || !amount || !userid) {
    return NextResponse.json(
      { status: "error", message: "Missing required fields" },
      { status: 400 }
    );
  }

  try {
    const questions = await generateInterviewQuestions({
      type,
      techstack,
      role,
      level,
      amount,
    });

    const interview = await prisma.interview.create({
      data: {
        type,
        techstack,
        role,
        level,
        amount,
        status: "pending",
        userId: userid,
        questions,
      },
    });

    // Revalidate page after DB write
    revalidatePath("/interview");

    return NextResponse.json(
      {
        status: "success",
        message: "Interview generated successfully!",
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("POST /api/vapi/generate error:", error);
    return NextResponse.json(
      {
        status: "error",
        message: error.message ?? "Unexpected error",
      },
      { status: 500 }
    );
  }
}
