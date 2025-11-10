"use client";

import { Card, CardContent } from "@/components/ui/card";

type TranscriptCardProps = {
  messages: string[];
};

export default function TranscriptCard({ messages }: TranscriptCardProps) {
  if (messages.length === 0) return null;

  const lastMessage = messages[messages.length - 1];

  return (
    <Card className="bg-transparent">
      <CardContent>
        <p className="tracking-wider text-center md:text-md text-sm animate-fade-in">
          {lastMessage}
        </p>
      </CardContent>
    </Card>
  );
}
