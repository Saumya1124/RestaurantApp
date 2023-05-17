import { useState } from "react";
import Header from "./component/Layout/Header";
import Meals from "./component/Meals/Meals";
import Cart from "./component/Cart/Cart";
import CartProvider from "./context/CartProvider";

function App() {
  const [cartIsShown , setCartIsShown] = useState(false)

  const showCartHandler = ()=> {
    setCartIsShown(true)
  }

  const hideCartHandler = ()=> {
    setCartIsShown(false)
  }

  return (
    <CartProvider>
        {cartIsShown && <Cart onHideCart={hideCartHandler}></Cart>}
        <Header onShowCart={showCartHandler}></Header>
        <main>
              <Meals></Meals>
        </main>
    </CartProvider>
  );
}

export default App;
