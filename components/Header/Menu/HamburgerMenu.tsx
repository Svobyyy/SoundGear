"use client";

import { useState } from "react";
import CategoriesMenu from "./CategoriesMenu";
import BackgroundOverlay from "../../UI/BackgroundOverlay";
import Hamburger from "../../icons/Hamburger";

const showMenu = (menuState: boolean) => {
  return menuState ? "visible" : "opacity-0 invisible";
};

export default function HamburgerMenu() {
  const [Menu, setMenu] = useState(false);

  return (
    <>
      <Hamburger
        onClick={() => {
          setMenu((value) => !value);
        }}
      />

      <div
        className={`rounded-b-lg absolute left-0 top-[90px] z-20 inline-block w-full bg-white pb-[35px] pt-[87px] md:pb-[67px] md:pt-[108px] tab:hidden ${showMenu(Menu)} flex items-center justify-center transition-all`}
      >
        <CategoriesMenu setMenu={setMenu} />
      </div>

      <BackgroundOverlay showSwitch={Menu} isMenu />
    </>
  );
}
