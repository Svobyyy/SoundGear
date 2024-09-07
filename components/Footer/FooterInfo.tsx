import FooterNavigation from "./FooterNavigation";
import FooterText from "./FooterText";
import FooterCopyright from "./FooterCopyright";

export default function FooterInfo() {
  return (
    <section className="paddings flex flex-col items-center bg-black pb-[38px] text-white sm:pb-[46px] tab:pb-[48px] w-full">
      <FooterNavigation />
      <FooterText />
      <FooterCopyright />
    </section>
  );
}
