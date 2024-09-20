import Checkout from "@/components/Checkout/Checkout";
import FormGoBack from "@/components/Checkout/FormGoBack";

export default function Home() {
  return (
    <section className="paddings heightHighRes relative bg-gray pb-[142px] pt-20">
      <FormGoBack />
      <Checkout />;
    </section>
  );
}
