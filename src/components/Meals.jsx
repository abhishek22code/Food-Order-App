import useHttp from "../hooks/useHttp.js";
import Mealitem from "./Mealitem.jsx";
import Error from "./Error.jsx";

const requestConfig = {}

export default function Meals(){

    const url = "https://food-order-app-backend-amy2.onrender.com"
    
     const {data : loadedMeals , isLoading , error} = 
     useHttp(url + "/meals" , requestConfig , []);

     console.log(loadedMeals);
    
     if(isLoading){
        return <p className="center"> Fetching Meals... </p>
     }
     if(error){
        return <Error title="Failed to Fetch Meals" message={error}/>
     }


    return (
        <ul id="meals">
            {loadedMeals.map((meal) => (
             <Mealitem key={meal.id} meal={meal}/>
            ))}
        </ul>
    )
}
