import { useTimer } from "react-timer-hook";
import { ActionButton } from "../UI/Buttons";
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import { useCalculateMaxTime } from "../../utils/hooks/useCalculateMaxTime";
import { newTimeStamp } from "../../utils/times";

function Reminder({
  timeStamp,
}: {
  timeStamp: string;
}) {


  const expiryTimestamp = newTimeStamp(timeStamp)

  const { seconds, minutes, pause, restart, resume } = useTimer({
    expiryTimestamp,
    autoStart: false,
    onExpire: () => {
      const now = newTimeStamp(timeStamp, true)
      setTimeout(() => {
        restart(now);
        }, 1000)        
    },
  });

  const maxTime = useCalculateMaxTime(timeStamp);
  const minsToSeconds = minutes * 60 + seconds;
  const currentTimeString = `${String(minutes)}:${String(seconds)}`;

  return (
    <div>
      <CircularProgressbarWithChildren
        value={minsToSeconds}
        maxValue={maxTime}
        background
        styles={buildStyles({
          textColor: "#FFF",
          backgroundColor: "#04BF8A",
          pathColor: "#024059",
          trailColor: "#FFF",
        })}
      >
        <div className="flex flex-col">
          <div className=" text-white text-4xl font-bold text-center">
            {currentTimeString}
          </div>
          <div className="flex">
            <ActionButton action="start" handleClick={resume} />
            <ActionButton action="pause" handleClick={pause} />
            <ActionButton action="restart" handleClick={() => (restart(expiryTimestamp, false))} />
          </div>
        </div>
      </CircularProgressbarWithChildren>
    </div>
  );
}

export default Reminder;
