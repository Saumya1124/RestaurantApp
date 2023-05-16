import { Fragment } from "react";
import Header from "./component/Layout/Header";
import Meals from "./component/Meals/Meals";
import Cart from "./component/Cart/Cart";

function App() {
  return (
    <Fragment>
        <Cart></Cart>
        <Header></Header>
        <main>
              <Meals></Meals>
        </main>
    </Fragment>
  );
}

export default App;
