"use client";

import ButtonOnCLick from "@/components/UI/ButtonOnClick";

export default function Pay() {
  return (
    <ButtonOnCLick
      text="CONTINUE & PAY"
      onClickAction={() => alert("Checkout")}
    />
  );
}
