import { FiPlay, FiPause, FiRefreshCw } from "react-icons/fi";

export const ActionButton = ({
  action,
  type,
  handleClick
}: {
  action: "start" | "pause" | "restart";
  type: "reminder" | "main";
  handleClick
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
    >
      {getIcon()}
    </button>
  );
};


export const MainTimerButton = ({
  expiryTimestamp,
  isSelected,
  handleClick,
}: {
  expiryTimestamp: string;
  isSelected: boolean;
  handleClick: () => void;
}) => {
  return (
    <div className="relative group">
      <button
        className={`
          mx-5 my-3 w-40 h-40 rounded-full 
          inline-flex items-center justify-center 
          text-white text-2xl font-bold 
          transform transition-transform duration-300 ease-in-out 
          hover:scale-110
          ${
            isSelected
              ? "bg-northernLights-5 ring-4 ring-northernLights-5"
              : "bg-northernLights-3 hover:bg-northernLights-5"
          }
        `}
        onClick={handleClick}
      >
        {expiryTimestamp}
      </button>
    </div>
  );
};
