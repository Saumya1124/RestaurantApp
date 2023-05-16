import classes from './AvailableMeals.module.css';
import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';

const data = [
    { id : 1 , name : 'Maggie' , description: 'constant for a hostler' , price: 30},
    { id : 2 , name : 'Pizza' , description: 'late night things' , price: 90},
    { id : 3, name : 'ColdDrink' , description: 'chilling with frnds stuff' , price: 30},
    { id : 4, name : 'ColdCoffee' , description: 'some great drink' , price: 40}
]
const AvailableMeals = ()=> {
    const mealsList = data.map(meal =><MealItem key = {meal.id} name = {meal.name} description = {meal.description} price = {meal.price} ></MealItem>)
    return(
        <section className={classes.meals}>
        <Card>
            <ul>
                {mealsList}
            </ul>
        </Card>
        </section>

    )
}
export default AvailableMeals