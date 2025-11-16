import Banner from "./_components/Banner";
import AllInterviewPage from "./_components/AllInterviewPage";
import { prisma } from "@/utils/prismaClient";
import { Loader } from "lucide-react";

export const revalidate = 0; // or set to a number like 60 for ISR

const InterviewDashBoardPage = async () => {
  let interviews = [];

  try {
    interviews = await prisma.interview.findMany();
  } catch (error) {
    console.error("Prisma Error:", error);
    return (
      <div className="md:px-10 px-3 my-8">
        <Banner />
        <h1 className="text-4xl mt-16 text-center  text-red-600 font-semibold">
          <Loader className="animate-spin w-8 h-8 inline" />
          <span className="ml-2">Failed to load interviews.</span>
        </h1>
      </div>
    );
  }

  return (
    <div className="md:px-10 px-3 my-8">
      <Banner />

      {interviews.length === 0 ? (
        <div className="mt-10">
          <h1 className="text-5xl font-semibold text-neutral-700">
            No Interviews
          </h1>
        </div>
      ) : (
        <AllInterviewPage interviews={interviews} />
      )}
    </div>
  );
};

export default InterviewDashBoardPage;
