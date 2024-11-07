import { useContext } from "react";
import { SoundContext } from "../../context/SoundContext";

function Sound({
  soundName,
  soundFilePath,
}: {
  sound: string;
  soundFilePath: string;
}) {
  const { sound, setSound } = useContext(SoundContext);

  const colourStyle =
    soundName === sound
      ? "bg-blue-400 hover:bg-blue-500 text-white text-3xl font-bold py-2 px-4 mx-2 border rounded"
      : "bg-blue-200 hover:bg-blue-300 text-white text-3xl font-bold py-2 px-4 mx-2 border rounded";

  return (
    <button
      className={`${colourStyle} transform transition-transform duration-300 ease-in-out active:scale-110 hover:scale-110`}
      onClick={() => setSound(soundName)}
    >
      {soundName}
    </button>
  );
}
export default Sound;
