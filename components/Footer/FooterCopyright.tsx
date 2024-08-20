import NavigationLink from "../UI/NavigationLink";

export default function FooterCopyright() {
  return (
    <div className="mt-12 flex w-full max-w-[1110px] flex-col items-center justify-between gap-12 sm:mt-20 sm:flex-row tab:mt-14">
      <p className="z-40 font-bold opacity-50">
        Copyright 2021. All Rights Reserved
      </p>
      <ul className="z-40 flex h-[24px] gap-[16px] transition-colors tab:hidden">
        <NavigationLink link="home" />
        <NavigationLink link="headphones" />
        <NavigationLink link="speakers" />
        <NavigationLink link="earphones" />
      </ul>
    </div>
  );
}
