import OthersItem from "./OthersItem";

export default function Others({ others }: { others: Others[] }) {
  return (
    <section>
      <h3 className="text-center text-[24px] tracking-[0.86px] sm:text-[32px] sm:tracking-[1.15px]">
        YOU MAY ALSO LIKE
      </h3>
      <ul className="flex flex-col items-center justify-center gap-[56px] gap-x-[10px] pt-10 text-black sm:flex-row sm:pt-[56px] tab:justify-between tab:pt-[64px]">
        {others.map((other) => (
          <OthersItem key={other.name} other={other} />
        ))}
      </ul>
    </section>
  );
}
