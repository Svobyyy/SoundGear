import { useCartContext } from "@/contexts/CartContextProvider";

type Props = {
  isSubmitting: boolean;
};

export default function Pay({ isSubmitting }: Props) {
  const { cart } = useCartContext();

  return (
    <>
      <button
        className={`${cart.length === 0 ? "cursor-not-allowed bg-orangeLight" : "bg-orange"} subtitle inline-block w-full cursor-pointer py-[17.5px] text-center uppercase leading-none text-white transition-colors hover:bg-orangeLight`}
        type="submit"
        disabled={isSubmitting}
      >
        CONTINUE & PAY
      </button>
    </>
  );
}
