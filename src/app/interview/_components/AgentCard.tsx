import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import HologramImage from "../../../../public/hologarm.jpeg";

type Props = { isSpeaking: boolean };

const AgentCard = ({ isSpeaking }: Props) => {
  return (
    <Card className="rounded-sm md:min-h-[400px] flex items-center justify-center max-h-[300px] bg-gradient-to-br from-indigo-100 via-gray-50 to-white dark:from-violet-900 dark:via-neutral-950 dark:to-black border-primary/40">
      <CardContent className="flex items-center justify-center flex-col gap-10">
        <div className="relative md:w-[150px] md:h-[150px] w-[100px] h-[100px] rounded-full">
          <Image
            src={HologramImage}
            alt="agent"
            width={200}
            height={200}
            className="object-cover w-full h-full rounded-full relative z-10"
          />
          {[0, 0.6, 1.1].map((delay, i) => (
            <div
              key={i}
              className={`speaking bg-accent-foreground/${30 - i * 10} z-0`}
              style={{
                animationDelay: `${delay}s`,
                display: isSpeaking ? "block" : "none",
              }}
            ></div>
          ))}
        </div>
        <p className="md:font-medium mt-4 text-sm md:text-lg">AI Interviewer</p>
      </CardContent>
    </Card>
  );
};

export default AgentCard;
