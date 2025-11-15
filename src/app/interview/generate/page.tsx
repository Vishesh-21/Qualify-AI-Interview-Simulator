"use client";

import React from "react";
import Agent from "../_components/Agent";
import { useUser } from "@clerk/nextjs";


const InterviewGenerationPage = () => {
  const { user } = useUser();
  return (
    <div className="md:px-10 px-3 my-8">
      <h2 className="text-xl font-semibold">Generate Your Interview with AI</h2>
      <Agent
        username={user?.fullName || "User"}
        userId="user1"
        imageUrl={user?.imageUrl || "/userAvtar.jpeg"}
        type="generate"
      />
    </div>
  );
};

export default InterviewGenerationPage;
