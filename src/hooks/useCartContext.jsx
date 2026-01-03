import { useContext } from "react";
import { CartContext } from "../context";

export const useCartContext = () => {
  const context = useContext(CartContext);

  return context;
};
