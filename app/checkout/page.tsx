import Form from "@/components/Checkout/Form/Form";
import Summary from "@/components/Checkout/Summary/Summary";

export default function Home() {
  return (
    <section className="paddings bg-gray">
      <Form />
      <Summary />
    </section>
  );
}
