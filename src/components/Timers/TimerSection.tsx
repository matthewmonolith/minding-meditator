import Timer from "./Timer";
import { TimerButton } from "../UI/Buttons";

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
          <Timer timeStamp={time} key={time} isMeditation={true}/>
        ) : (
          <Timer timeStamp={time} key={time} isMeditation={false}/>
        )
      ) : (
        <TimerButton
          key={time || time}
          type={type === "reminder" ? "reminder" : undefined}
          expiryTimestamp={time || time}
          handleClick={() => handleClick(time || time, type)}
        />
      );
    })}
  </div>
);
