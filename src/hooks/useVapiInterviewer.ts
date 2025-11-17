"use client";

import { useEffect, useState, useCallback } from "react";
import Vapi from "@vapi-ai/web";
import { generateInterview } from "@/utils/generateInterivewQuestions";

const formatMessage = (message: any): string => {
  return `${message.role.toUpperCase()}: ${message.transcript}`;
};

export const useVapiInterviewer = (questions: string[]) => {
  const [vapi] = useState(
    () => new Vapi(process.env.NEXT_PUBLIC_VAPI_API_KEY!)
  );
  const [callStarted, setCallStarted] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [messages, setMessages] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  // ---------------------------
  // Handle incoming messages
  // ---------------------------
  const handleMessage = useCallback((message: any) => {
    if (message.type === "transcript") {
      setMessages((prev) => [...prev, formatMessage(message)]);
    }
  }, []);

  // ---------------------------
  // Start Call
  // ---------------------------
  const startCall = useCallback(() => {
    const assistantId = process.env.NEXT_PUBLIC_VAPI_INTERVIEWER_TAKER_ID;
    if (!assistantId) {
      console.error("Missing NEXT_PUBLIC_VAPI_VOICE_ASSISTANT_ID");
      return;
    }

    setLoading(true);
    vapi.start(assistantId, {
      metadata: {
        interviewQuestions: questions,
      },
    });

    vapi.on("call-start", () => {
      setCallStarted(true);
      setLoading(false);
    });

    vapi.on("call-end", async () => {
      setCallStarted(false);
    });

    vapi.on("message", handleMessage);
  }, [vapi, handleMessage, questions]);

  // ---------------------------
  // Stop Call
  // ---------------------------
  const stopCall = useCallback(() => {
    vapi.stop();
    setCallStarted(false);
    setIsSpeaking(false);
    setLoading(false);
  }, [vapi]);

  // ---------------------------
  // Update speaking state
  // ---------------------------
  useEffect(() => {
    setIsSpeaking(callStarted);
  }, [callStarted]);

  return {
    vapi,
    callStarted,
    isSpeaking,
    startCall,
    stopCall,
    messages,
    loading,
  };
};
