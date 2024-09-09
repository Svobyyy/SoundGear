import BestAudioImages from "./BestAudioImages";
import BestAudioText from "./BestAudioText";

export default function BestAudio() {
  return (
    <section className="paddings flex items-center justify-center">
      <div className="flex w-full max-w-[1110px] flex-col-reverse items-center justify-between gap-10 py-[120px] sm:gap-[64px] md:py-[96px] tab:py-[120px] lg:flex-row lg:gap-5">
        <BestAudioText />
        <BestAudioImages />
      </div>
    </section>
  );
}
