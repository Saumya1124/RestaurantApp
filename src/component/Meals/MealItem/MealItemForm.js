import classes from './MealItemForm.module.css';
import Input from '../../UI/Input';
import { useContext, useState } from 'react';
import CartContext from '../../../context/cart-context';
const MealItemForm = (props)=> {

    const cartCtx = useContext(CartContext);

    const [item , setItem] = useState('')

    const items = (e)=> {
      e.preventDefault()
      setItem(e.target.value)
    }

    return(

        <form className={classes.form}>
              <Input label='Amount' onChange = {items} input={{
                id:'amount',
                type:'number', 
                min: '1',
                max: '5',
                step :'1',
                defaultValue: '1',
                
              }}/>
              <button onClick={cartCtx.addItem}> + Add</button>
        </form>

    )
}
export default MealItemForm