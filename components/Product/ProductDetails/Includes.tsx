type Props = {
  includes: ProductIncludeItem[];
};

export default function Includes({ includes }: Props) {
  return (
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
  );
}
