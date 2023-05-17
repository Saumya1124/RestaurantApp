import CartIcon from '../Cart/CartIcon';
import classes from './HeaderCart.module.css';
const HeaderCart = (props)=> {
    return(
        <button className={classes.button} onClick={props.onClick}>
               <span className={classes.icon}>
                    <CartIcon></CartIcon>
               </span>
               <span>Your Cart</span>
               <span className={classes.badge}>0</span>
        </button>
    )
}
export default HeaderCart