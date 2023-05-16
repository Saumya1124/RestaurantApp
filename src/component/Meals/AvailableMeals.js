import classes from './AvailableMeals.module.css';

const data = [
    { id : 1 , name : 'Maggie' , description: 'constant for a hostler' , price: 30},
    { id : 2 , name : 'Pizza' , description: 'late night things' , price: 90},
    { id : 3, name : 'ColdDrink' , description: 'chilling with frnds stuff' , price: 30},
    { id : 4, name : 'ColdCoffee' , description: 'some great drink' , price: 40}
]
const AvailableMeals = ()=> {
    const mealList = data.map(meal =><li>{meal.name}</li>)
    return(
        <section className={classes.meals}>
        <ul>
             {mealList}
        </ul>
        </section>

    )
}
export default AvailableMeals