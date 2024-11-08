import Sound from "./Sound";

export const SoundSection = ({ sounds }: { sounds: { name: string; soundPath: string }[] }) => (
    <div className="flex flex-wrap justify-center mt-6 mb-4">
      {sounds.map((sound) => (
        <Sound soundName={sound.name} key={sound.name} />
      ))}
    </div>
  );