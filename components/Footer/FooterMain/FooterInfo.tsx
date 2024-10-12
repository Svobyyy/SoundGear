import FooterCopyright from "./FooterCopyright";
import FooterNavigation from "./FooterNavigation";
import FooterText from "./FooterText";

export default function FooterInfo() {
  return (
    <section className="paddings flex w-full flex-col items-center bg-blacker pb-[38px] text-white sm:pb-[46px] tab:pb-[48px]">
      <FooterNavigation />
      <FooterText />
      <FooterCopyright />
    </section>
  );
}
