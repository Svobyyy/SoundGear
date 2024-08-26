import Form from "@/components/Checkout/Form/Form";
import Summary from "@/components/Checkout/Summary/Summary";

export default function Home() {
  return (
    <section className="paddings flex flex-col justify-center gap-[30px] bg-gray tab:flex-row pt-12 py-[142px]">
      <Form />
      <Summary />
    </section>
  );
}
