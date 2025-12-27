import Page from "@/layout/Page";
import { useReducer, useState } from "react";
import { CartContext, ThemeContext } from "./context";
import { cartReducer, initialState } from "./reducer/reducer";

function App() {
  const [theme, setTheme] = useState("dark");
  const [cart, dispatch] = useReducer(cartReducer, initialState);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <CartContext.Provider value={{ cart, dispatch }}>
        <div className="dark:bg-body bg-white font-[Sora] dark:text-white text-dark">
          <Page />
        </div>
      </CartContext.Provider>
    </ThemeContext.Provider>
  );
}

export default App;
