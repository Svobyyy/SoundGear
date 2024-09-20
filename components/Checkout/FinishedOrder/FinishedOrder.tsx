"use client";

import BackgroundOverlay from "@/components/UI/BackgroundOverlay";
import FinishedOrderBody from "./FinishedOrder/FinishedOrderBody";
import { useSearchParams } from "next/navigation";

export default function FinishedOrder() {
  const searchParams = useSearchParams();
  const isSuccessful = searchParams.get("checkout") === "success";

  return (
    <>
      <FinishedOrderBody orderState={isSuccessful} />
      <BackgroundOverlay showSwitch={isSuccessful} isCheckout />
    </>
  );
}
