"use client";

import { useState } from "react";
import CategoriesMenu from "./CategoriesMenu";
import BackgroundOverlay from "../../UI/BackgroundOverlay";
import Hamburger from "../../icons/Hamburger";

export default function HamburgerMenu() {
  const [menu, setMenu] = useState(false);

  return (
    <>
      <Hamburger
        onClick={() => {
          setMenu((value) => !value);
        }}
      />

      <CategoriesMenu setMenu={setMenu} menu={menu} />

      <BackgroundOverlay showSwitch={menu} isMenu />
    </>
  );
}
