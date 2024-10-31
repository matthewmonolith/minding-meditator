import { useTimer } from "react-timer-hook";
import { ActionButton } from "../UI/Buttons";
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import { useCalculateMaxTime } from "../../utils/hooks/useCalculateMaxTime";
import { useConvertToDate } from "../../utils/hooks/useConvertToDate";
import { useEffect } from "react";

function Reminder({
  timeStamp,
}: {
  timeStamp: string;
}) {
  const expiryTimestamp = useConvertToDate(timeStamp)

  const { seconds, minutes, start, pause, restart } = useTimer({
    expiryTimestamp,
    autoStart: false,
    onExpire: () => {
      const [minutes, seconds] = timeStamp.split(":").map(Number);
      const now = new Date();
      now.setSeconds(now.getSeconds() + minutes * 60 + seconds);
      restart(now, true)
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
            <ActionButton action="start" handleClick={start} />
            <ActionButton action="pause" handleClick={pause} />
            <ActionButton action="restart" handleClick={() => (restart(expiryTimestamp, false))} />
          </div>
        </div>
      </CircularProgressbarWithChildren>
    </div>
  );
}

export default Reminder;
