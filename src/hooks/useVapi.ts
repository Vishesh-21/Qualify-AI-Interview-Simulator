"use client";
import { useEffect, useState } from "react";
import Vapi from "@vapi-ai/web";

export const useVapi = () => {
  const [vapi] = useState(
    () => new Vapi(process.env.NEXT_PUBLIC_VAPI_API_KEY!)
  );
  const [callStarted, setCallStarted] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [messages, setMessages] = useState<string[]>([]);

  const startCall = () => {
    const assistantId = process.env.NEXT_PUBLIC_VAPI_VOICE_ASSISTANT_ID;
    if (!assistantId) {
      console.error("Missing NEXT_PUBLIC_VAPI_VOICE_ASSISTANT_ID");
      return;
    }

    vapi.start(assistantId);
    vapi.on("call-start", () => setCallStarted(true));
    vapi.on("call-end", () => setCallStarted(false));
    // Capture transcript messages
    vapi.on("message", (message) => {
      if (message.type === "transcript") {
        setMessages((prev) => [
          ...prev,
          `${message.role.toUpperCase()}: ${message.transcript}`,
        ]);
      }
    });
  };

  useEffect(() => {
    callStarted ? setIsSpeaking(true) : setIsSpeaking(false);
  }, [callStarted]);

  const stopCall = () => vapi.stop();
  return { vapi, callStarted, isSpeaking, startCall, stopCall, messages };
};
