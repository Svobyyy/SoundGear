import BackgroundOverlay from "@/components/UI/BackgroundOverlay";
import { setVisibility } from "@/lib/utils/utils";

export default function LoadingDelivery({
  showSwitch: LoadingDeliveryState,
}: {
  showSwitch: boolean;
}) {
  return (
    <>
      <BackgroundOverlay showSwitch={LoadingDeliveryState} isCheckout />
      <section
        className={`${setVisibility(LoadingDeliveryState)} absolute left-[20px] right-[20px] top-1/2 z-50 -translate-y-1/2 rounded-lg bg-white p-[32px] text-black transition-all sm:left-1/2 sm:w-full sm:max-w-[540px] sm:-translate-x-1/2 sm:p-12`}
      >
        <h3>Processing your delivery, please wait...</h3>
      </section>
    </>
  );
}
