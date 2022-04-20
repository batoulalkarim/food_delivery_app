import React, {useState, useEffect} from "react"
import ResCard from "./Card";

const RestaurantPage = () => {
    const [restrs, setRestrs] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/restaurants')
        .then(res => res.json())
        .then(data => {
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
        // <div>
        //     {restrs.map(r => {
        //         return(
        //             <div>
        //                 <h1>{r.name}</h1>
        //             </div>
        //         )
        //     })}
        // </div>
    )
  };

  export default RestaurantPage;