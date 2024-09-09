import Counter from "./Counters/Counter";
import ProductInfo from "./Product/ProductInfo";

type Props = CartCounterProps & { quantity?: number };

export default function Product({ name, price, id, quantity }: Props) {
  return (
    <li
      className={`flex flex-wrap ${!quantity ? "items-start mob:items-center" : "items-center"} justify-between gap-3`}
    >
      <ProductInfo id={id} name={name} quantity={quantity} price={price} />
      {quantity !== undefined ? (
        <p>x{quantity}</p>
      ) : (
        <Counter id={id} name={name} price={price} />
      )}
    </li>
  );
}
