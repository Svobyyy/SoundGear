import Canceled from "@/components/icons/Canceled";
import Confirmation from "@/components/icons/Confirmation";

type Props = {
  isCanceled: boolean;
};

export default function FinishedOrderText({ isCanceled }: Props) {
  return (
    <>
      {isCanceled ? <Canceled /> : <Confirmation />}

      <h3 className="mb-6 mt-[32px]">
        {isCanceled ? "ORDER CANCELED" : "THANK YOU"}

        {!isCanceled && (
          <>
            <br />
            FOR YOUR ORDER
          </>
        )}
      </h3>
      <p className="opacity-50">
        {isCanceled ? (
          <>
            Please verify your payment details and try again,
            <br />
            or contact our support team for assistance.
          </>
        ) : (
          "You will receive an email confirmation shortly."
        )}
      </p>
    </>
  );
}
