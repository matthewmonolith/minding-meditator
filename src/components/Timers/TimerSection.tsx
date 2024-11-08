import MainTimer from "./MainTimer";
import { TimerButton } from "../UI/Buttons";
import Reminder from "./Reminder";

export const TimerSection = ({
  times,
  selectedTime,
  handleClick,
  type,
}: any) => (
  <div className="flex flex-wrap justify-center mt-6 mb-4">
    {times.map((time: string) => {
      const isSelected = selectedTime === time;
      return isSelected ? (
        type === "main" ? (
          <MainTimer timeStamp={time} time={time} key={time} />
        ) : (
          <Reminder timeStamp={time} key={time} />
        )
      ) : (
        <TimerButton
          key={time || time}
          type={type === "reminder" ? "reminder" : undefined}
          expiryTimestamp={time || time}
          isSelected={isSelected}
          handleClick={() => handleClick(time || time, type)}
        />
      );
    })}
  </div>
);
