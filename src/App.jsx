import Page from "@/layout/Page";
import { useReducer, useState } from "react";
import { ToastContainer } from "react-toastify";
import { CartContext, ThemeContext } from "./context";
import { cartReducer, initialState } from "./reducer/reducer";

function App() {
  const [theme, setTheme] = useState("dark");
  const [state, dispatch] = useReducer(cartReducer, initialState);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <CartContext.Provider value={{ state, dispatch }}>
        <div className="dark:bg-body bg-white font-[Sora] dark:text-white text-dark">
          <Page />
        </div>
        <ToastContainer />
      </CartContext.Provider>
    </ThemeContext.Provider>
  );
}

export default App;
