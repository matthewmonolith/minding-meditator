import Sound from "./Sound";

export const SoundSection = ({
  sounds,
  isMeditationSound
}: {
  sounds: { name: string }[];
  isMeditationSound: boolean;
}) => (
  <div className="flex flex-wrap justify-center mt-6 mb-4">
    {sounds.map((sound) => (
      <Sound soundName={sound.name} key={sound.name} isMeditationSound={isMeditationSound} />
    ))}
  </div>
);
