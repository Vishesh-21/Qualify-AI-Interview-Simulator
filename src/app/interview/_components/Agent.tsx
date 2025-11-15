"use client";

import React, { useState } from "react";
import AgentCard from "./AgentCard";
import UserCard from "./UserCard";
import TranscriptCard from "./TranscriptCard";
import CallButton from "./CallButton";
import { useVapi } from "@/hooks/useVapi";

type Props = {
  username: string;
  userId: string;
  type: string;
  imageUrl: string;
};

const Agent = ({ username, userId, type, imageUrl }: Props) => {
  const { callStarted, isSpeaking, startCall, stopCall, messages, loading } =
    useVapi();

  return (
    <div className="p-4 space-y-5 md:mt-4">
      <div className="grid grid-cols-2 items-center justify-between gap-6">
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

export default Agent;
