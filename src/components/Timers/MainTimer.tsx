import { useTimer } from "react-timer-hook";
import { ActionButton } from "../UI/Buttons";
import {
  CircularProgressbar,
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import { useCalculateMaxTime } from "../../utils/hooks/useCalculateMaxTime";
import { useConvertToDate } from "../../utils/hooks/useConvertToDate";

function MainTimer({
  timeStamp,
  time,
}: {
  timeStamp: string;
  time: string;
}) {

  const expiryTimestamp = useConvertToDate(timeStamp)

  const { seconds, minutes, start, pause, restart } = useTimer({
    expiryTimestamp,
    autoStart: false,
    onExpire: () => console.warn("onExpire called"),
  });

  const maxTime = useCalculateMaxTime(time);

  const minsToSeconds = minutes * 60 + seconds;

  const currentTimeString = `${String(minutes)}:${String(seconds)}`;

  return (
    <div style={{width: "230px"}}>
      <CircularProgressbarWithChildren
        value={minsToSeconds}
        maxValue={maxTime}
        // text={currentTimeString}
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
            <ActionButton action="start"  handleClick={start} />
            <ActionButton action="pause" handleClick={pause} />
            {/* <ActionButton action="restart" type="main" handleClick={restart} /> */}
          </div>
        </div>
      </CircularProgressbarWithChildren>
    </div>
  );
}

export default MainTimer;
