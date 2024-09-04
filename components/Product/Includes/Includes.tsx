type Props = {
  includes: ProductIncludeItem[];
  features: string;
};

export default function Includes({ includes, features }: Props) {
  return (
    <section className="flex w-full max-w-[934px] flex-col justify-between gap-[120px] tab:flex-row tab:gap-5">
      <div className="flex-1">
        <h3 className="mb-8">FEATURES</h3>
        <ul className="flex flex-col gap-8 opacity-50 tab:max-w-[635px]">
          {checkNewLinesFeatures(features)}
        </ul>
      </div>

      <div className="flex max-w-none flex-col sm:max-w-[560px] sm:flex-row sm:justify-between tab:max-w-none tab:flex-col tab:justify-start">
        <h3 className="mb-8">IN THE BOX</h3>
        <ul className="flex flex-col gap-2">
          {includes.map(({ quantity, item }) => (
            <li key={item} className="flex gap-5">
              <p className="font-bold text-orange">{quantity}x</p>
              <p className="opacity-50">{item}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

const checkNewLinesFeatures = (features: string) => {
  return features
    .split("\n")
    .filter((feature) => feature.trim() !== "")
    .map((feature, index) => (
      <li key={index}>
        <p className="opacity-50">{feature}</p>
      </li>
    ));
};
