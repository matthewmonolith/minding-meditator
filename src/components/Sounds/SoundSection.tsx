import SoundButton from "./SoundButton";

export const SoundSection = ({
  sounds,
  isMeditationSound
}: {
  sounds: { name: string }[];
  isMeditationSound: boolean;
}) => (
<div className="flex flex-col mt-6 mb-4 gap-2 sm:flex-row sm:flex-wrap sm:justify-center">

    {sounds.map((sound) => (
      <SoundButton soundName={sound.name} key={sound.name} isMeditationSound={isMeditationSound} />
    ))}
  </div>
);
