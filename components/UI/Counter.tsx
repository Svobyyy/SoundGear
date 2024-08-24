// "use client";

// import { useCartContext } from "@/contexts/CartContextProvider";
// import { Dispatch, SetStateAction } from "react";

// const substractOneCart = (
//   setCart: Dispatch<SetStateAction<CartItem[]>>,
// ) => {
//   setCart((previous) => {
//     return { value: previous.value-- };
//   });
// };

// const addOneCart = (setCart: Dispatch<SetStateAction<{ value?: number }>>) => {
//   setCart((previous) => {
//     return { value: previous.value++ };
//   });
// };

// const counter = (
//   setCart: Dispatch<SetStateAction<CartItem[]>>,
//   quantity: number,
// ) => {
//   return (
//     <div className="flex max-h-10 items-center bg-gray">
//       <p
//         className="w-10 cursor-pointer select-none py-[7.5px] text-center leading-none opacity-50"
//         onClick={() => substractOneCart(setCart)}
//       >
//         -
//       </p>
//       <p className="font-bold leading-none">{quantity}</p>
//       <p
//         className="w-10 cursor-pointer select-none py-[7.5px] text-center leading-none opacity-50"
//         onClick={() => addOneCart(setCart)}
//       >
//         +
//       </p>
//     </div>
//   );
// };

// export default function Counter({ quantity }: { quantity?: boolean }) {
//   const { cart, setCart } = useCartContext();
//   return (
//     <>
//       {quantity ? (
//         <p className="font-bold leading-none opacity-50">x{cart.value}</p>
//       ) : (
//         counter(setCart, cart.value)
//       )}
//     </>
//   );
// }
