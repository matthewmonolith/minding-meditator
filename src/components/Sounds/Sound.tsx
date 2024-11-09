import { useContext } from "react";
import { SoundContext } from "../../context/SoundContext";
import {
  SET_MEDITATION_SOUND,
  SET_REMINDER_SOUND,
} from "../../context/SoundContext";

function Sound({
  soundName,
  isMeditationSound,
}: {
  soundName: string;
  isMeditationSound: boolean;
}) {
  const { meditationSound, reminderSound, dispatch } = useContext(SoundContext);

  const soundToUse = isMeditationSound ? meditationSound : reminderSound;

  const colourStyle =
    soundName === soundToUse
      ? "bg-blue-500 hover:bg-blue-600 text-white text-3xl font-bold py-2 px-4 mx-2 border rounded"
      : "bg-blue-300 hover:bg-blue-400 text-white text-3xl font-bold py-2 px-4 mx-2 border rounded";

  return (
    <button
      className={`${colourStyle} transform transition-transform duration-300 ease-in-out active:scale-110 hover:scale-110`}
      onClick={() =>
        dispatch({
          type: isMeditationSound ? SET_MEDITATION_SOUND : SET_REMINDER_SOUND,
          payload: soundName,
        })
      }
    >
      {soundName}
    </button>
  );
}
export default Sound;
