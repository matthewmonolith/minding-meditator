import { Header } from "../components/UI/Header";

function Guide() {
  return (
    <div className="flex flex-col items-center">
      <Header title="Minding Meditator User Guide" bgColor="bg-soft-4" />
      <div className="max-w-md rounded overflow-hidden bg-soft-4 text-white mt-3">
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">About</div>
          <p className="text-white text-base">
            Minding Meditator is a simple yet user-friendly app that helps you stay
            focused during meditation. It has gentle reminder sounds that will
            bring your focus back on your breath if your mind starts to wander.
          </p>
          <div className="font-bold text-xl mb-2 mt-2">Types of Timers</div>
          <p className="text-white text-base">
            There are two timers available for use.
            <br />
            <div className="font-bold text-l mb-2 mt-2">Meditation:</div>
            One for counting timing how long you wish to meditate for.
            <br />
            <div className="font-bold text-l mb-2 mt-2">Reminder:</div>
            Has a countdown to repeat a sound each time it ends, bringing you
            return to focus. Can be used with or without the meditation timer.
          </p>
          <div className="font-bold text-xl mb-2 mt-2">Sounds</div>
          <p>
            Both timers have their own sounds available. When a timer ends, it
            will play a sound of your choice. On desktop you are able to adjust
            the volume or mute/unmute using the speaker icon found at the bottom
            right corner.
          </p>
          <div className="font-bold text-xl mb-2 mt-2">How to use</div>
          <ul>
            <li>Click on the bubble timer to select it.
              The outer ring shows much time is left
            </li>
            <li>
              Press the play button to start. Pause button to pause, and restart to start over.
              Both timers can run at the same time
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
export default Guide;
