"use client";

import React from "react";
import AgentCard from "@/app/interview/_components/AgentCard";
import UserCard from "@/app/interview/_components/UserCard";
import TranscriptCard from "@/app/interview/_components/TranscriptCard";
import CallButton from "@/app/interview/_components/CallButton";
import { useVapiInterviewer } from "@/hooks/useVapiInterviewer";

type Props = {
  username: string;
  imageUrl: string;
  questions: string[];
  role: string | null;
  type: string | null;
  level: string | null;
  id: string;
  userId: string;
};

const Assemble = ({
  userId,
  id,
  username,
  imageUrl,
  questions,
  role,
  type,
  level,
}: Props) => {
  const interviewDetails = { id, role, type, level };
  const { callStarted, isSpeaking, startCall, stopCall, messages, loading } =
    useVapiInterviewer(questions, interviewDetails, userId);

  return (
    <div className="md:py-4 space-y-5 md:mt-4">
      <div className="grid md:grid-cols-2 grid-cols-1 gap-10 items-center justify-between">
        <AgentCard isSpeaking={isSpeaking} />
        <UserCard imageUrl={imageUrl} username={username} />
      </div>

      <TranscriptCard messages={messages} />

      <CallButton
        callStarted={callStarted}
        onEnd={stopCall}
        onStart={startCall}
        loading={loading}
      />
    </div>
  );
};

export default Assemble;
