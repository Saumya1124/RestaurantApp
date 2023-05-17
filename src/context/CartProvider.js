import { useState } from "react";
import CartContext from "./cart-context";

const CartProvider = (props)=> {

    const[item,setItem] = useState([])

    const addItemHandler = (e)=> {
        e.preventDefault()
        setItem([ 1,...item])
    }

    const removeItemHandler = (id)=> {

    }

    const cartContext = {
        items : [...item],
        totalAmount : 0,
        addItem : addItemHandler ,
        removeItem : removeItemHandler

    }
    return<CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>
}

export default CartProvider