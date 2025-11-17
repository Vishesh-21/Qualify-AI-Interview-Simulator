"use client";

import { useEffect, useState, useCallback } from "react";
import Vapi from "@vapi-ai/web";

const formatMessage = (message: any): string => {
  return `${message.role.toUpperCase()}: ${message.transcript}`;
};

type InterviewDetails = {
  role: string | null;
  type: string | null;
  level: string | null;
};
export const useVapiInterviewer = (
  questions: string[],
  interviewDetails: InterviewDetails
) => {
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
    let formattedQuestions = "";

    if (questions) {
      formattedQuestions = questions
        .map((question) => {
          return `Question: ${question}`;
        })
        .join("\n");
    }

    vapi.start(assistantId, {
      variableValues: { questions: formattedQuestions, ...interviewDetails },
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
