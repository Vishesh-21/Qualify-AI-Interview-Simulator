import { Button } from "@/components/ui/button";
import { IconPhoneRinging } from "@tabler/icons-react";
import { PhoneOff } from "lucide-react";

type Props = { callStarted: boolean; onStart: () => void; onEnd: () => void };

const CallButton = ({ callStarted, onStart, onEnd }: Props) => (
  <div className="w-full flex justify-center">
    {!callStarted ? (
      <Button
        className="cursor-pointer bg-green-500 text-white hover:bg-green-600"
        onClick={onStart}
      >
        <span className="flex items-center">
          <IconPhoneRinging />
          <span className="ml-2">Start Call</span>
        </span>
      </Button>
    ) : (
      <Button variant="destructive" className="cursor-pointer" onClick={onEnd}>
        <span className="flex items-center">
          <PhoneOff className="mr-2" />
          <span>End Call</span>
        </span>
      </Button>
    )}
  </div>
);

export default CallButton;
