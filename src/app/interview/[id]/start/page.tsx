// THIS IS NOW A SERVER COMPONENT (no "use client")
import { currentUser } from "@clerk/nextjs/server";
import { prisma } from "@/utils/prismaClient";
import { Badge } from "@/components/ui/badge";
import Assemble from "./_component/Assemble";
import { Interview } from "@/types/InterviewType";

export default async function InterviewTakingPage({
  params,
}: {
  params: { id: string };
}) {
  const { id: interviewId } = await params;
  const user = await currentUser();
  const interview = await prisma.interview.findUnique({
    where: { id: interviewId },
  });

  if (!user) {
    return (
      <div className="flex justify-center items-center h-[80vh]">
        <h1 className="text-[4rem] font-bold text-gray-600/50">
          No user found
        </h1>
        <p className="text-medium">Please login to start an interview.</p>
      </div>
    );
  }

  if (!interview) {
    return (
      <div className="flex justify-center items-center h-[80vh]">
        <h1 className="text-[4rem] font-bold text-gray-600/50">
          No interviews found
        </h1>
        <p className="text-medium">Please create an interview first.</p>
      </div>
    );
  }

  return (
    <div className="md:px-10 px-3 my-8">
      <Banner interview={interview} />
      <Assemble
        userId={user.id}
        id={interviewId}
        username={user?.fullName || "User"}
        imageUrl={user?.imageUrl || "/userAvtar.jpeg"}
        questions={interview?.questions}
        type={interview?.type}
        role={interview?.role}
        level={interview?.level}
      />
    </div>
  );
}

const Banner = ({ interview }: { interview: Interview }) => {
  return (
    <div className="flex items-start gap-2 justify-start md:mb-0 mb-4">
      <div>
        <h2 className="text-2xl font-semibold">
          {interview.role} /{" "}
          <span className="text-primary/50">
            {interview.type &&
              interview?.type?.split("")[0].toUpperCase() +
                interview?.type?.slice(1)}
          </span>
        </h2>
        <p className="text-base">
          TechStack :{" "}
          <span className="text-primary/60 text-base">
            {interview.techstack}
          </span>
        </p>
      </div>
      <Badge>
        {interview.level &&
          interview?.level?.split("")[0].toUpperCase() +
            interview?.level?.slice(1)}
      </Badge>
    </div>
  );
};
