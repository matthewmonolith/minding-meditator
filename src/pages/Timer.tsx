import MainTimer from "../components/Timers/MainTimer";
import { times } from "../utils/times";
import { MainTimerButton } from "../components/UI/Buttons";
import { useState } from "react";

function Timer() {
  const [selectedTimer, setSelectedTimer] = useState<string>("");
  const handleClick = (time: string) => {
    setSelectedTimer((currentTimer) => (currentTimer === time ? "" : time));
  };
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-4xl font-bold text-white text-center bg-northernLights-3 inline-block py-3 px-5 rounded-full">
        Meditation Timers
      </h1>
      <div className="flex flex-wrap justify-center mt-6 mb-4">
        {times.map((time) => {
          const isSelectedTimer = selectedTimer === time.strTime;
          return isSelectedTimer ? (
            <MainTimer
              timeStamp={time.strTime}
              time={time.strTime}
              key={time.strTime}
            />
          ) : (
            <MainTimerButton
              key={time.strTime}
              expiryTimestamp={time.strTime}
              isSelected={isSelectedTimer}
              handleClick={() => handleClick(time.strTime)}
            />
          );
        })}
      </div>
      <h2 className="text-4xl font-bold text-white text-center bg-northernLights-3 inline-block py-3 px-5 rounded-full">
        Reminders
      </h2>
    </div>
  );
}

export default Timer;
