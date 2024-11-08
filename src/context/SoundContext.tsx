import { createContext, useState } from "react";
import { sounds } from "../utils/sounds";

const SoundContext = createContext({
  sound: null as string | null,
  setSound: (sound: string | null) => {},
  playSound: () => {},
  volume: 1,
  setVolume: (vol: number) => {},
  mute: () => {},
  unMute: () => {}
});

function Provider({ children }: { children: React.ReactNode }) {
  const [sound, setSound] = useState<string | null>(null);
  const [volume, setVolume] = useState<number>(1);

  const playSound = () => {
    const currentSound = sound ? sounds.find((s) => s.name === sound) : null;
    if (!currentSound) return;

    const audio = new Audio(currentSound.soundPath);
    audio.volume = volume;
    audio.play();
  };

  const mute = () => {
    setVolume(0)
  }

  const unMute = () => {
    setVolume(1)
  }

  const store = {
    sound,
    setSound,
    playSound,
    volume,
    setVolume,
    mute,
    unMute
  };

  return (
    <SoundContext.Provider value={store}>{children}</SoundContext.Provider>
  );
}

export { SoundContext, Provider };
