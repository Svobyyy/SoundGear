import BackgroundOverlay from "../../UI/BackgroundOverlay";
import FinishedOrderBody from "./FinishedOrderBody";

type Props = {
  setOrderState: React.Dispatch<React.SetStateAction<boolean>>;
  orderState: boolean;
};

export default function FinishedOrder({ setOrderState, orderState }: Props) {
  return (
    <>
      <FinishedOrderBody
        setOrderState={setOrderState}
        orderState={orderState}
      />
      <BackgroundOverlay showSwitch={orderState} />
    </>
  );
}
