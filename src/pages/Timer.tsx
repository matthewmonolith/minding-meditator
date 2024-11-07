import MainTimer from "../components/Timers/MainTimer";
import Reminder from "../components/Timers/Reminder";
import { mainTimes, reminderTimes } from "../utils/times";
import { TimerButton } from "../components/UI/Buttons";
import { useReducer } from "react";
import { sounds } from "../utils/sounds";
import Sound from "../components/Sounds/Sound";

function Timer() {
  type TimerAction =
    | { type: "SET_SELECTED_TIMER"; payload: string }
    | { type: "SET_SELECTED_REMINDER"; payload: string }
    | { type: "RESET" };

  const reducer = (
    state: { selectedTimer: string; selectedReminder: string },
    action: TimerAction
  ) => {
    switch (action.type) {
      case "SET_SELECTED_TIMER":
        return {
          ...state,
          selectedTimer: action.payload,
        };
      case "SET_SELECTED_REMINDER":
        return {
          ...state,
          selectedReminder: action.payload,
        };
      case "RESET":
        return {
          ...state,
          selectedTimer: "",
          selectedReminder: "",
        };
      default:
        throw new Error("Invalid action type passed into reducer");
    }
  };

  const [state, dispatch] = useReducer(reducer, {
    selectedTimer: "",
    selectedReminder: "",
  });

  const handleClick = (time: string, type: string) => {
    if (type == "main") {
      dispatch({ type: "SET_SELECTED_TIMER", payload: time });
    } else {
      dispatch({ type: "SET_SELECTED_REMINDER", payload: time });
    }
  };

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-4xl font-bold text-white text-center bg-soft-4 inline-block py-3 px-5 rounded-full">
        Meditation Timers
      </h1>
      <div className="flex flex-wrap justify-center mt-6 mb-4">
        {mainTimes.map((time) => {
          const isSelectedTimer = state.selectedTimer === time.strTime;
          return isSelectedTimer ? (
            <MainTimer
              timeStamp={time.strTime}
              time={time.strTime}
              key={time.strTime}
            />
          ) : (
            <TimerButton
              key={time.strTime}
              expiryTimestamp={time.strTime}
              isSelected={isSelectedTimer}
              handleClick={() => handleClick(time.strTime, "main")}
            />
          );
        })}
      </div>
      <h2 className="text-4xl font-bold text-white text-center bg-soft-2 inline-block py-3 px-5 rounded-full">
        Reminders
      </h2>
      <div className="flex flex-wrap justify-center mt-6 mb-4">
        {reminderTimes.map((time) => {
          const isSelectedTimer = state.selectedReminder === time;
          return isSelectedTimer ? (
            <Reminder timeStamp={time} key={time} />
          ) : (
            <TimerButton
              type="reminder"
              key={time}
              expiryTimestamp={time}
              isSelected={isSelectedTimer}
              handleClick={() => handleClick(time, "reminder")}
            />
          );
        })}
      </div>
      <h2 className="text-4xl font-bold text-white text-center bg-blue-200 inline-block py-3 px-5 rounded-full">
        Reminder Sounds
      </h2>
      <div className="flex flex-wrap justify-center mt-6 mb-4">
        {sounds.map((sound: { name: string; soundPath: string }) => {
          return (
            <Sound
              soundName={sound.name}
              soundFilePath={sound.soundPath}
              key={sound.name}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Timer;
