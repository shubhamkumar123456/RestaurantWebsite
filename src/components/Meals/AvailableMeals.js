import React from 'react'
import classes from './AvailableMeals.module.css'
const DUMMY_MEALS=[
{
    id:'m1',
    name:'Sushi',
    description:'Finest Fish and Veggies',
    price:22.99,
},
{
    id:'m2',
    name:'Schnitzel',
    description:'A german Specialty',
    price:16.5,
},
{
    id:'m3',
    name:'Barbecue Burger',
    description:'American,Raw,meaty',
    price:12.99,
},
{
    id:'m4',
    name:'Green Bowl',
    description:'Healthy... and green...',
    price:18.99,
},
]
const AvailableMeals = () => {
  return (
    <section className={classes.meals}>
      <ul>
        {DUMMY_MEALS.map((meal)=>{
            return <li>{meal.name}</li>
        })}
      </ul>
    </section>
  )
}

export default AvailableMeals