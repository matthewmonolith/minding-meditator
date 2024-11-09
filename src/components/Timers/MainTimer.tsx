import { useTimer } from "react-timer-hook";
import { ActionButton } from "../UI/Buttons";
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import { useCalculateMaxTime } from "../../utils/hooks/useCalculateMaxTime";
import { newTimeStamp } from "../../utils/times";
import { useContext } from "react";
import { SoundContext } from "../../context/SoundContext";
import { PLAY_SOUND } from "../../context/SoundContext";

function MainTimer({ timeStamp }: { timeStamp: string }) {
  const expiryTimestamp = newTimeStamp(timeStamp);

  const { seconds, minutes, pause, restart, resume } = useTimer({
    expiryTimestamp,
    autoStart: false,
    onExpire: () => {
      dispatch({ type: PLAY_SOUND, payload: { isMeditation: true } });
    },
  });

  const { dispatch } = useContext(SoundContext);

  const maxTime = useCalculateMaxTime(timeStamp);
  const minsToSeconds = minutes * 60 + seconds;
  const currentTimeString = `${String(minutes)}:${String(seconds)}`;

  return (
    <div style={{ width: "230px" }}>
      <CircularProgressbarWithChildren
        value={minsToSeconds}
        maxValue={maxTime}
        background
        styles={buildStyles({
          textColor: "#FFF",
          backgroundColor: "#746CC7",
          pathColor: "#9D92E9",
          trailColor: "#F3F2F7",
        })}
      >
        <div className="flex flex-col">
          <div className=" text-white text-4xl font-bold text-center">
            {currentTimeString}
          </div>
          <div className="flex">
            <ActionButton action="start" handleClick={resume} />
            <ActionButton action="pause" handleClick={pause} />
            <ActionButton
              action="restart"
              handleClick={() => restart(expiryTimestamp, false)}
            />
          </div>
        </div>
      </CircularProgressbarWithChildren>
    </div>
  );
}

export default MainTimer;
