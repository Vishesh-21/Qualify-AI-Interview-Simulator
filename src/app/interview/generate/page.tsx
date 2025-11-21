"use client";

import React from "react";
import Agent from "../_components/Agent";
import { useUser } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { Loader2, LogIn } from "lucide-react";
import { useRouter } from "next/navigation";

const InterviewGenerationPage = () => {
  const router = useRouter();
  const { user, isLoaded } = useUser();

  if (!isLoaded) {
    return (
      <div className="h-[60vh] w-full flex items-center justify-center">
        <Loader2 className="w-52 h-52 text-gray-300 animate-spin direction-reverse" />
      </div>
    );
  }

  if (!user) {
    return (
      <div className="h-[50vh] w-full flex flex-col items-center justify-center">
        <h1 className="text-[4rem] font-bold text-gray-600/50">
          No user found
        </h1>
        <p className="text-medium">Please login to generate an interview</p>
        <Button
          variant={"ghost"}
          className="mt-4 cursor-pointer min-w-[200px]"
          onClick={() => router.push("/sign-in")}
        >
          Login <LogIn />
        </Button>
      </div>
    );
  }

  return (
    <div className="md:px-10 px-3 my-8 max-w-5xl mx-auto md:mb-8 mb-4">
      <h2 className="text-xl font-semibold">Generate Your Interview with AI</h2>
      <Agent
        username={user.fullName || "User"}
        userId={user.id} 
        imageUrl={user.imageUrl || "/userAvtar.jpeg"}
      />
    </div>
  );
};

export default InterviewGenerationPage;
