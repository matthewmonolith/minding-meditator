import { Header } from "../components/UI/Header";

function Guide() {
  return (
    <div className="flex flex-col items-center">
      <Header title="Mind The Gap User Guide" bgColor="bg-soft-4" />
      <div className="max-w-md rounded overflow-hidden bg-soft-4 text-white mt-3">
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">About</div>
          <p className="text-white text-base">
            Mind The Gap is a simple and user friendly app to keep you focused
            during your mindful meditations. When meditating, it can be easy
            sometimes to get lost in thinking, Mind The Gap's Reminder Timer
            helps you keep focused by playing a sound to bring you back into the
            focus and onto your breathing.
          </p>
          <div className="font-bold text-xl mb-2 mt-2">Types of Timers</div>
          <p className="text-white text-base">
            There are two types of timers, a meditation timer and a reminder
            timer.
            <br />
            The <strong>meditation timer</strong> is an optional timer to
            countdown how long you wish to meditate for.
            <br />
            The <strong>reminder timer</strong> will countdown and play your
            selected sound once it runs out, then restarts itself. You can turn
            on your reminder timer whilst the meditation timer is counting down. When the reminder timer runs out, it will reset the time and begin its countdown again.
          </p>
          <div className="font-bold text-xl mb-2 mt-2">Sounds</div>
          <p>
            The meditation and reminder timer have their own sounds you can pick
            from. They will play when the timer runs out. As well, on desktop,
            there is a audio control on the bottom right corner to adjust the
            volume. You can click on the speaker icon to mute and unmute
          </p>
          <div className="font-bold text-xl mb-2 mt-2">Using Timers</div>
          <p>
           Click on one of the timer bubbles to select one. The outer ring colour represents the countdown. Press the play button to start the timer. If the timer is playing, you can press the pause button to pause the timer. The meditation timer and reminder time can run at the same time. Pressing the reset button will reset the timer.
          </p>
        </div>
      </div>
    </div>
  );
}
export default Guide;
