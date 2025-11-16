import { Button } from "@/components/ui/button";
import { IconPhoneRinging } from "@tabler/icons-react";
import { Loader, PhoneOff } from "lucide-react";

type Props = {
  callStarted: boolean;
  onStart: () => void;
  onEnd: () => void;
  loading: boolean;
  generating: boolean;
};

const CallButton = ({
  callStarted,
  onStart,
  onEnd,
  loading,
  generating,
}: Props) => {
  // Determine button state and label
  const renderButtonContent = () => {
    if (!callStarted) {
      if (loading) {
        return (
          <span className="flex items-center">
            <Loader className="mr-2 animate-spin" />
            Calling...
          </span>
        );
      } else {
        return (
          <span className="flex items-center">
            <IconPhoneRinging />
            <span className="ml-2">Start Call</span>
          </span>
        );
      }
    } else {
      // Call started
      if (loading && generating) {
        return (
          <span className="flex items-center">
            <Loader className="mr-2 animate-spin" />
            Generating...
          </span>
        );
      } else {
        return (
          <span className="flex items-center">
            <PhoneOff className="mr-2" />
            End Call
          </span>
        );
      }
    }
  };

  // Determine button props
  const buttonProps = {
    className: callStarted
      ? "bg-red-500 hover:bg-red-600 text-white cursor-pointer"
      : "bg-green-500 hover:bg-green-600 text-white cursor-pointer",
    onClick: callStarted ? onEnd : onStart,
    disabled: loading && !callStarted, 
  };

  return (
    <div className="w-full flex justify-center">
      <Button {...buttonProps}>{renderButtonContent()}</Button>
    </div>
  );
};

export default CallButton;
