import { Button } from "@/components/ui/button";
import { IconPhoneRinging } from "@tabler/icons-react";
import { Loader, PhoneOff } from "lucide-react";

type Props = {
  callStarted: boolean;
  onStart: () => void;
  onEnd: () => void;
  loading: boolean;
};

const CallButton = ({ callStarted, onStart, onEnd, loading }: Props) => (
  <div className="w-full flex justify-center">
    {!callStarted ? (
      loading ? (
        <Button variant="destructive" className="cursor-pointer" disabled>
          <span className="flex items-center">
            <Loader className="mr-2 animate-spin" />
            <span>Calling...</span>
          </span>
        </Button>
      ) : (
        <Button
          className="cursor-pointer bg-green-500 text-white hover:bg-green-600"
          onClick={onStart}
        >
          <span className="flex items-center">
            <IconPhoneRinging />
            <span className="ml-2">Start Call</span>
          </span>
        </Button>
      )
    ) : (
      <Button variant="destructive" className="cursor-pointer" onClick={onEnd}>
        {loading ? (
          <span className="flex items-center">
            <Loader className="mr-2 animate-spin" />
            <span>Ending...</span>
          </span>
        ) : (
          <span className="flex items-center">
            <PhoneOff className="mr-2" />
            <span>End Call</span>
          </span>
        )}
      </Button>
    )}
  </div>
);

export default CallButton;
