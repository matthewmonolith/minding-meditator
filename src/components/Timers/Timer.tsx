import { useEffect, useState, useContext } from "react";
import { useTimer } from "react-timer-hook";
import { ActionButton } from "../UI/Buttons";
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import { useCalculateMaxTime } from "../../utils/hooks/useCalculateMaxTime";
import { newTimeStamp } from "../../utils/times";
import { SoundContext, PLAY_SOUND } from "../../context/SoundContext";

function Timer({
  timeStamp,
  isMeditation,
}: {
  timeStamp: string;
  isMeditation: boolean;
}) {
  const expiryTimestamp = newTimeStamp(timeStamp);
  const { dispatch } = useContext(SoundContext);
  const [disabled, setDisabled] = useState(false);
  const [userInteracted, setUserInteracted] = useState(false);

  const { seconds, minutes, pause, restart, resume } = useTimer({
    expiryTimestamp,
    autoStart: false,
    onExpire: () => {
      if (userInteracted) {
        dispatch({ type: PLAY_SOUND, payload: { isMeditation } });
      } else {
        console.warn("Sound blocked due to missing user interaction (chrome).");
      }

      if (!isMeditation) {
        const now = newTimeStamp(timeStamp, true);
        setTimeout(() => restart(now), 1000);
      }
    },
  });

  const maxTime = useCalculateMaxTime(timeStamp);
  const minsToSeconds = minutes * 60 + seconds;
  const currentTimeString = `${String(minutes)}:${String(seconds)}`;

  useEffect(() => {
    setDisabled(minsToSeconds < 1);
  }, [minsToSeconds]);

  const handleUserInteraction = () => {
    setUserInteracted(true);
  };

  const handleRestart = () => {
    const newTime = newTimeStamp(timeStamp);
    restart(newTime, false);
    handleUserInteraction(); // Mark interaction
  };

  return (
    <div style={{ width: "230px" }} onClick={handleUserInteraction}>
      <CircularProgressbarWithChildren
        value={minsToSeconds}
        maxValue={maxTime}
        background
        styles={buildStyles({
          textColor: "#FFF",
          backgroundColor: isMeditation ? "#746CC7" : "#9D92E9",
          pathColor: isMeditation ? "#9D92E9" : "#746CC7",
          trailColor: "#F3F2F7",
        })}
      >
        <div className="flex flex-col">
          <div className="text-white text-4xl font-bold text-center">
            {currentTimeString}
          </div>
          <div className="flex">
            <ActionButton
              action="start"
              handleClick={() => {
                resume();
                handleUserInteraction();
              }}
              disabled={disabled}
              isMeditation={isMeditation}
            />
            <ActionButton
              action="pause"
              handleClick={() => {
                pause();
                handleUserInteraction();
              }}
              disabled={disabled}
              isMeditation={isMeditation}
            />
            <ActionButton action="restart" handleClick={handleRestart} />
          </div>
        </div>
      </CircularProgressbarWithChildren>
    </div>
  );
}

export default Timer;
