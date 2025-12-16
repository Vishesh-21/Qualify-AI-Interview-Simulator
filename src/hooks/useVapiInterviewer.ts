"use client";

import { useEffect, useState, useCallback, useRef } from "react";
import Vapi from "@vapi-ai/web";
import { useRouter } from "next/navigation";
import generateFeedback from "@/lib/actions/generateFeedback";

const formatMessage = (message: any): string => {
  return `${message.role.toUpperCase()}: ${message.transcript}`;
};

type InterviewDetails = {
  role: string | null;
  type: string | null;
  level: string | null;
  id: string;
};

export const useVapiInterviewer = (
  questions: string[],
  interviewDetails: InterviewDetails,
  userId: string
) => {
  const router = useRouter();
  const [vapi] = useState(
    () => new Vapi(process.env.NEXT_PUBLIC_VAPI_API_KEY!)
  );

  const [callStarted, setCallStarted] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [messages, setMessages] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  const messagesRef = useRef<string[]>([]);

  // -------------------------------
  // MESSAGE HANDLER
  // -------------------------------
  const onMessage = useCallback((message: any) => {
    if (message.type !== "transcript") return;

    setMessages((prev) => {
      const updated = [...prev, formatMessage(message)];
      messagesRef.current = updated;
      return updated;
    });
  }, []);

  // -------------------------------
  // CALL START HANDLER
  // -------------------------------
  const onCallStart = useCallback(() => {
    setCallStarted(true);
    setLoading(false);
  }, []);

  // -------------------------------
  // CALL END HANDLER
  // -------------------------------
  const onCallEnd = useCallback(async () => {
    setCallStarted(false);

    try {
      const feedback = await generateFeedback({
        interviewId: interviewDetails.id,
        userId,
        transcript: messagesRef.current,
      });

      console.log("Feedback:", feedback);
      console.log("Transcript:", messagesRef.current);

      console.log(feedback.data);

      // if (feedback.success) {
      //   router.push(`/interview/${interviewDetails.id}/feedback`);
      // }
    } catch (error) {
      console.error(error);
    }
  }, [interviewDetails.id, router, userId]);

  // -------------------------------
  // START CALL
  // -------------------------------
  const startCall = useCallback(() => {
    const assistantId = process.env.NEXT_PUBLIC_VAPI_INTERVIEWER_TAKER_ID;

    if (!assistantId) {
      console.error("Missing NEXT_PUBLIC_VAPI_INTERVIEWER_TAKER_ID");
      return;
    }

    setLoading(true);

    const formattedQuestions = questions
      .map((q) => `Question: ${q}`)
      .join("\n");

    // Start the call
    vapi.start(assistantId, {
      variableValues: {
        questions: formattedQuestions,
        ...interviewDetails,
      },
    });

    // Register listeners
    vapi.on("call-start", onCallStart);
    vapi.on("call-end", onCallEnd);
    vapi.on("message", onMessage);
  }, [vapi, questions, interviewDetails, onCallStart, onCallEnd, onMessage]);

  // -------------------------------
  // STOP CALL
  // -------------------------------
  const stopCall = useCallback(() => {
    vapi.stop();
    setCallStarted(false);
    setIsSpeaking(false);
    setLoading(false);
  }, [vapi]);

  // -------------------------------
  // UPDATE SPEAKING STATE
  // -------------------------------
  useEffect(() => {
    setIsSpeaking(callStarted);
  }, [callStarted]);

  // -------------------------------
  // CLEAN UP EVENT LISTENERS
  // -------------------------------
  useEffect(() => {
    // Cleanup on unmount
    return () => {
      vapi.off("call-start", onCallStart);
      vapi.off("call-end", onCallEnd);
      vapi.off("message", onMessage);
    };
  }, [vapi, onCallStart, onCallEnd, onMessage]);

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

