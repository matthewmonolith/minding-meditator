import { mainTimes, reminderTimes } from "../utils/times";
import { useReducer } from "react";
import { sounds } from "../utils/sounds";
import { Header } from "../components/UI/Header";
import { TimerSection } from "../components/Timers/TimerSection";
import { SoundSection } from "../components/Sounds/SoundSection";
import SoundAndVol from "../components/UI/SoundAndVol";

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
      <Header title="Meditation Timers" bgColor="bg-soft-4" />
      <TimerSection
        times={mainTimes}
        selectedTime={state.selectedTimer}
        handleClick={handleClick}
        type="main"
      />

      <Header title="Reminders" bgColor="bg-soft-2" />
      <TimerSection
        times={reminderTimes}
        selectedTime={state.selectedReminder}
        handleClick={handleClick}
        type="reminder"
      />

      <Header title="Reminder Sounds" bgColor="bg-blue-200" />
      <SoundSection sounds={sounds} />
      <SoundAndVol />
    </div>
  );
}

export default Timer;
