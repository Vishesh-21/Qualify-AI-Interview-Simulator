import { GeneratePayload } from "@/types/generatDetailsPayload";

// helpers function
export const generateInterview = async (payload: GeneratePayload) => {
  try {
    const res = await fetch(
      process.env.NEXT_PUBLIC_VAPI_GENERATE_API_URL || "/api/vapi/generate",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      }
    );

    const data = await res.json();
    console.log("Interview generation response:", data);
    return data;
  } catch (error) {
    console.error("Interview generation failed:", error);
    throw error;
  }
};
