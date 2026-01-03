import sun from "@/assets/icons/sun.svg";
import logo from "@/assets/logo.svg";
import ring from "@/assets/ring.svg";
import shoppingCart from "@/assets/shopping-cart.svg";
import { useMemo } from "react";
import { useCartContext } from "../hooks/useCartContext";

function Header() {
  const { state } = useCartContext();
  const cartData = state.cart;
  const cardCount = useMemo(() => cartData.length, [cartData]);

  return (
    <header>
      <nav className="container flex items-center justify-between space-x-10 py-6">
        <a href="index.html">
          <img src={logo} width="139" height="26" alt="" />
        </a>

        <ul className="flex items-center space-x-5">
          <li>
            <a
              className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
              href="#"
            >
              <img src={ring} width="24" height="24" alt="" />
            </a>
          </li>
          <li>
            <a
              className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
              href="#"
            >
              <img src={sun} width="24" height="24" alt="" />
            </a>
          </li>
          <li>
            <button className="bg-primary/20 dark:bg-primary/[7%] relative rounded-lg backdrop-blur-[2px] p-1 inline-block">
              <img src={shoppingCart} width="24" height="24" alt="" />
              {cardCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-primary text-dark text-xs w-5 h-5 flex items-center justify-center rounded-full ring-2 ring-body">
                  {cardCount}
                </span>
              )}
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
