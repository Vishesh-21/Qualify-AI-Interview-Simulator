// app/interview/[id]/page.tsx
import { prisma } from "@/utils/prismaClient";
import InterviewDetailCard from "./_component/InterviewDetialCard";

interface InterviewPageProps {
  params: { id: string };
}

export default async function InterviewPage({ params }: InterviewPageProps) {
  const interview = await prisma.interview.findUnique({
    where: { id: params.id },
  });

  if (!interview) {
    return (
      <div className="flex justify-center items-center h-[80vh]">
        <p className="text-gray-500 text-lg">Interview not found.</p>
      </div>
    );
  }

  return (
    <div className="md:px-10 px-3 my-8">
      <InterviewDetailCard interview={interview} />
    </div>
  );
}
