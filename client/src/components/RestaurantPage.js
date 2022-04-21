import React, {useState, useEffect} from "react"
import ResCard from "./Card";

function RestaurantPage() {
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
        <div className="restaurantpageContainer">
            <h1 className="title">Flavor Savior</h1>
            <div className="resheader">
            <h1>Crave it? Get it.</h1>
            <p className="restext">Search for your favorite restaurant, cuisine, or dish.</p>
            </div>
            <div className="cardcont">
            {cards}
            </div>
        </div>
        

    )
  };

  export default RestaurantPage;