// app/interview/[id]/page.tsx
import { prisma } from "@/utils/prismaClient";
import InterviewDetailCard from "./_component/InterviewDetialCard";
import { notFound } from "next/navigation";

interface InterviewPageProps {
  params: { id: string };
}

export default async function InterviewPage({ params }: InterviewPageProps) {
  try {
    const interview = await prisma.interview.findUnique({
      where: { id: params.id },
    });

    if (!interview) {
      return (
        <div className="flex justify-center items-center min-h-[50vh]">
          <p className="text-gray-500 text-3xl font-semibold">Interview not found.</p>
        </div>
      );
    }

    return (
      <div className="md:px-10 px-3 my-8">
        <InterviewDetailCard interview={interview} />
      </div>
    );
  } catch (error) {
    console.error("Interview fetch error:", error);
    notFound();
  }
}
