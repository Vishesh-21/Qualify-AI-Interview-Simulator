"use client";

import { useEffect, useState, useCallback } from "react";
import Vapi from "@vapi-ai/web";
import { GeneratePayload } from "@/types/generatDetailsPayload";
import { generateInterview } from "@/utils/generateInterivewQuestions";
import { useRouter } from "next/navigation";

const formatMessage = (message: any): string => {
  return `${message.role.toUpperCase()}: ${message.transcript}`;
};

export const useVapi = (generatePayload?: GeneratePayload) => {
  const router = useRouter();
  const [vapi] = useState(
    () => new Vapi(process.env.NEXT_PUBLIC_VAPI_API_KEY!)
  );
  const [callStarted, setCallStarted] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [messages, setMessages] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [generating, setGenerating] = useState(false);

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
    const assistantId = process.env.NEXT_PUBLIC_VAPI_VOICE_ASSISTANT_ID;
    if (!assistantId) {
      console.error("Missing NEXT_PUBLIC_VAPI_VOICE_ASSISTANT_ID");
      return;
    }

    setLoading(true);
    vapi.start(assistantId);

    vapi.on("call-start", () => {
      setCallStarted(true);
      setLoading(false);
    });

    vapi.on("call-end", async () => {
      setCallStarted(false);

      if (generatePayload) {
        try {
          setGenerating(true);
          const result = await generateInterview(generatePayload);

          if (result.status === "success") {
            setGenerating(false);
            router.push("/interview");
          }
        } catch (error) {
          console.error(error);
        } finally {
          setGenerating(false);
        }
      }
    });

    vapi.on("message", handleMessage);
  }, [vapi, generatePayload, handleMessage]);

  // ---------------------------
  // Stop Call
  // ---------------------------
  const stopCall = useCallback(() => {
    vapi.stop();
    setCallStarted(false);
    setIsSpeaking(false);
    setLoading(false);
    setGenerating(false);
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
    generating,
  };
};
