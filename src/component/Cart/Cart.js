import { useContext } from 'react';
import Modal from '../UI/Modal';
import classes from './Cart.module.css';
import CartContext from '../../context/cart-context';
import Card from '../UI/Card';


const Cart = (props)=> {

    const cartCtx = useContext(CartContext)

    const cartItems = 
    <ul className={classes['cart-items']}>
        {
            cartCtx.items.map((item)=><Card>

                <div >

                    <div>
                        <li>{item.name}</li>
                        <li>{item.price}</li>
                    </div>
                    <div>
                        <button onClick={cartCtx.removeItem} id={item.id}>-</button>
                        <button>+</button>
                    </div>

                </div>
                  
                </Card>)
        }
    </ul>
    

    return(
        <Modal onClose={props.onHideCart}>
            {cartItems}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>35</span>
            </div>
            <div className={classes.actions}>
                <button className={classes['button--alt']} onClick={props.onHideCart}>Close</button>
                <button className={classes.button}>Order Now</button>
            </div>
        </Modal>
    )
}
export default Cart