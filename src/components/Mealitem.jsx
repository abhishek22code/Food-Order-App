import { useContext } from 'react'
import {currencyFormatter} from '../util/formatting.js'
import Button from './UI/Button.jsx'
import CartContext from '../store/CartContext.jsx'

export default function Mealitem({meal}){

    const cartCtx = useContext(CartContext)
   
    function handleAddMealToCart(){
        cartCtx.addItem(meal);
    }

    const url = "https://food-order-app-backend-amy2.onrender.com"

    return (
        <li className="meal-item"> 
             <article>
                <img src={`{url}/${meal.image}`} alt={meal.name} />
                <div>
                    <h3>{meal.name}</h3>
                    <p className="meal-item-price">
                        {currencyFormatter.format(meal.price)}</p>
                    <p className="meal-item-description">{meal.description}</p>
                </div>
                <p className="meal-item-actions">
                    <Button onClick={handleAddMealToCart}>Add to Cart</Button>
                </p>
             </article>
        </li>
    )
}
