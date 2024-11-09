import { HiSpeakerWave, HiSpeakerXMark } from "react-icons/hi2";
import { useContext } from "react";
import { SoundContext } from "../../context/SoundContext";
import { SET_VOLUME, MUTE, UNMUTE } from "../../context/SoundContext";

function SoundAndVol() {
  const { volume, dispatch } = useContext(SoundContext);

  return (
    <div
      className="hidden md:flex bg-soft-4 p-3 w-[240px] text-white text-2xl fixed bottom-5 right-5 
                    rounded-lg shadow-lg"
    >
      <div className="flex justify-around items-center gap-3 w-full">
        {volume > 0 ? (
          <HiSpeakerWave
            onClick={() => {
              dispatch({ type: MUTE });
            }}
            className="cursor-pointer"
          />
        ) : (
          <HiSpeakerXMark
            onClick={() => {
              dispatch({ type: UNMUTE });
            }}
            className="cursor-pointer"
          />
        )}
        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={volume}
          onChange={(e) =>
            dispatch({ type: SET_VOLUME, payload: parseFloat(e.target.value) })
          }
          className="w-full"
        />
      </div>
    </div>
  );
}

export default SoundAndVol;
