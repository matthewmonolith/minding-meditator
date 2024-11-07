import { createContext, useState } from "react";

const SoundContext = createContext();

function Provider({ children }: { children: React.ReactNode }) {
  const [sound, setSound] = useState<string | null>(null);
  const [soundPath, setSoundPath] = useState<string | null>(null);

  const playSound = (path:string) => {
    setSoundPath(path);
    const audio = new Audio(path);
    audio.play();
  };

  const store = {
    sound,
    setSound,
    soundPath,
    playSound,
  };

  return (
    <SoundContext.Provider value={store}>{children}</SoundContext.Provider>
  );
}

export {SoundContext, Provider}