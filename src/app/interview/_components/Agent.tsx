"use client";

import React from "react";
import AgentCard from "./AgentCard";
import UserCard from "./UserCard";
import TranscriptCard from "./TranscriptCard";
import CallButton from "./CallButton";
import { useVapi } from "@/hooks/useVapi";
import { Loader2 } from "lucide-react";

type Props = {
  username: string;
  userId: string;
  imageUrl: string;
};

const Agent = ({ username, userId, imageUrl }: Props) => {
  const generatePayload = {
    type: "behavioral",
    techstack: "React",
    role: "Frontend Developer",
    level: "Junior",
    amount: 6,
    userid: userId,
  };

  const {
    callStarted,
    isSpeaking,
    startCall,
    stopCall,
    messages,
    loading,
    generating,
  } = useVapi(generatePayload);

  return (
    <div className="md:py-4 space-y-5 md:mt-4">
      <div className="grid grid-cols-2 items-center justify-between  gap-6">
        <AgentCard isSpeaking={isSpeaking} />
        <UserCard imageUrl={imageUrl} username={username} />
      </div>

      <TranscriptCard messages={messages} />

      {generating && (
        <div className="w-full h-screen flex items-center justify-center fixed top-0 bg-background/70 z-[100] left-0 flex-col backdrop-blur-md">
          <Loader2 className="w-10 mb-8 h-10 text-gray-500 animate-spin " />
          <h1 className="text-3xl font-semibold text-primary/70 ">
            Generating Interview
          </h1>
          <p className="text-primary/40 font-medium">
            This may take a few seconds
          </p>
        </div>
      )}

      <CallButton
        callStarted={callStarted}
        onEnd={stopCall}
        onStart={startCall}
        loading={loading}
        generating={generating}
      />
    </div>
  );
};

export default Agent;
