import SocialLink from "@/components/UI/SocialLink";
import React from "react";

export default function FooterText() {
  return (
    <div className="tab:mt-9a mt-12 flex w-full max-w-[1110px] items-end justify-between gap-10 sm:mt-8">
      <p className="z-20 max-w-[680px] flex-1 text-center opacity-50 sm:text-start tab:max-w-[540px]">
        Audiophile is an all in one stop to fulfill your audio needs. We&apos;re
        a small team of music lovers and sound specialists who are devoted to
        helping you get the most out of personal audio. Come and visit our demo
        facility - we’re open 7 days a week.
      </p>

      <ul className="z-40 hidden h-[24px] gap-[16px] transition-colors tab:flex">
        <SocialLink social="facebook" />
        <SocialLink social="twitter" />
        <SocialLink social="instagram" />
      </ul>
    </div>
  );
}
