type Props = {
  name: string;
  value: string;
  orange?: boolean;
};

export default function TotalText({ name, value, orange }: Props) {
  return (
    <div className="mb-6 flex justify-between">
      <p className="opacity-50">{name}</p>
      <h6 className={`${orange && "text-orange"}`}>$&nbsp;{value}</h6>
    </div>
  );
}
