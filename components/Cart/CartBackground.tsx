type props = {
  CartState: boolean;
};

const showCart = (CartState: boolean) => {
  return CartState ? "z-10 opacity-40" : "-z-10 opacity-0";
};

export default function CartBackground({ CartState }: props) {
  return (
    <div
      className={`min-w-screen fixed bottom-0 left-0 right-0 top-0 inline-block min-h-screen bg-black ${showCart(CartState)} transition-opacity`}
    />
  );
}
