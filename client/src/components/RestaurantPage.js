import React, {useState, useEffect} from "react"
import ResCard from "./Card";

const RestaurantPage = () => {
    const [restrs, setRestrs] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/restaurants')
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setRestrs(data)

        }) 
    }, [])
    

    const cards = restrs.map((restaurant) => {
        return(<ResCard key={restaurant.id} restaurant={restaurant} />)
    })
    return(
        <div>

            <h1>Restaurants</h1>
            {cards}
        </div>
        

    )
  };

  export default RestaurantPage;