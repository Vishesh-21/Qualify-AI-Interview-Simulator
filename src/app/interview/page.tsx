import Banner from "./_components/Banner";
import AllInterviewPage from "./_components/AllInterviewPage";
import { prisma } from "@/utils/prismaClient";

export const revalidate = 0; // or set to a number like 60 for ISR

const InterviewDashBoardPage = async () => {
  let interviews = [];

  try {
    interviews = await prisma.interview.findMany();
  } catch (error) {
    console.error("Prisma Error:", error);
    return (
      <div className="my-8">
        <Banner />
        <h1 className="text-2xl mt-16 text-center  text-red-600/70 font-semibold">
          <span className="ml-2">Failed to load interviews.</span>
        </h1>
      </div>
    );
  }

  return (
    <div className="my-8">
      <Banner />

      {interviews.length === 0 ? (
        <div className="my-24 text-center">
          <h1 className="text-2xl text-center font-semibold">
            No Interviews
          </h1>
          <p className="text-medium text-foreground/50">Please generate an interview to start practice.</p>
        </div>
      ) : (
        <AllInterviewPage interviews={interviews} />
      )}
    </div>
  );
};

export default InterviewDashBoardPage;
