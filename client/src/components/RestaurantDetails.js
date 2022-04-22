import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom'
import ItemCard from './ItemCard';




function RestaurantDetails({onAddToCart,}){
    let {restaurant_id} = useParams()
    console.log(restaurant_id)
    const [restrs, setRestrs] = useState(null)
 
    useEffect(() => {
        fetch(`http://localhost:3000/restaurants/${restaurant_id}`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setRestrs(data)
        })
    }, [])


    const display = restrs ? 
    restrs.items.map((item) => {
          return(
              <div>
                  
              <ItemCard key={item.id} item={item} onItemClicked={onAddToCart} restrs={restrs}/>
              </div>
    )
    }) : null 
    
        return(
        <div className = 'menu'>
             <h1> Menu</h1>
             {display}
             
        </div>
    )
};

export default RestaurantDetails;