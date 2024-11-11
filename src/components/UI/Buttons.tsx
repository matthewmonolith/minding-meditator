import { FiPlay, FiPause, FiRefreshCw } from "react-icons/fi";

export const ActionButton = ({
  action,
  handleClick,
  disabled,
  isMeditation
}: {
  action: "start" | "pause" | "restart";
  handleClick: () => void;
  disabled?: boolean;
  isMeditation?: boolean;
}) => {
  const getIcon = () => {
    switch (action) {
      case "start":
        return <FiPlay size={26} />;
      case "pause":
        return <FiPause size={26} />;
      case "restart":
        return <FiRefreshCw size={26} />;
      default:
        return null;
    }
  };

  const getButtonStyles = () => {
    return action === "start"
      ? "text-white"
      : action === "pause"
      ? "text-white"
      : "text-white";
  };

  return (
    <button
      type="button"
      className={`${getButtonStyles()} flex items-center justify-center focus:outline-none focus:ring-4 font-medium rounded-full text-sm p-3 text-center mb-2`}
      onClick={handleClick}
      disabled={disabled && isMeditation}
    >
      {getIcon()}
    </button>
  );
};

export const TimerButton = ({
  expiryTimestamp,
  handleClick,
  type = "main",
}: {
  expiryTimestamp: string;
  handleClick: () => void;
  type?: "main" | "reminder";
}) => {
  const colourStyles = type === "main" ? "bg-soft-6": "bg-soft-4"

  return (
    <div className="relative">
      <button
        className={`
          mx-5 my-3 w-40 h-40 rounded-full 
          inline-flex items-center justify-center 
          text-white text-2xl font-bold 
          transform transition-transform duration-300 ease-in-out 
          hover:scale-110
          ${colourStyles}
        `}
        onClick={handleClick}
      >
        {expiryTimestamp}
      </button>
    </div>
  );
};
