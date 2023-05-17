import { useState } from "react";
import CartContext from "./cart-context";

const data = [
    { id : 1 , name : 'Maggie' , description: 'constant for a hostler' , price: 30},
    { id : 2 , name : 'Pizza' , description: 'late night things' , price: 90},
    { id : 3, name : 'ColdDrink' , description: 'chilling with frnds stuff' , price: 30},
    { id : 4, name : 'ColdCoffee' , description: 'some great drink' , price: 40}
]

const CartProvider = (props)=> {

    const[item ,setItem] = useState([])

    const addItemHandler = (e)=> {
        e.preventDefault()
        const pos = e.target.id
        console.log(pos)
        data.map((data)=>{
            return data.id == pos && 
            setItem([data,...item])
            
        }
          
        )

        
        
    }

    const removeItemHandler = (e)=> {
        e.preventDefault()
        const id1 = e.target.id
        setItem(()=> {
            return item.filter(detail => detail.id != id1 )
        })

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