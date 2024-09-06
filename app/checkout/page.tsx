import Form from "@/components/Checkout/Form";
import Summary from "@/components/Checkout/Summary";

export default function Home() {
  return (
    <section className="paddings flex flex-col justify-center gap-[30px] bg-gray py-[142px] pt-12 tab:flex-row">
      <Form />
      <Summary />
    </section>
  );
}
