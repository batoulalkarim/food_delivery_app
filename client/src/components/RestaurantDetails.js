import React, {useEffect, useState} from 'react';
import ItemCard from './ItemCard';
import {useParams} from 'react-router-dom'



function RestaurantDetails(){
    let {restaurant_id} = useParams()
    console.log(restaurant_id)
    const [restrs, setRestrs] = useState([])
    const [items, setItems] = useState([])
    console.log(restrs)
    
    useEffect(() => {
        fetch(`http://localhost:3000/restaurants/${restaurant_id}`)
        .then(res => res.json())
        .then(data => {
            setRestrs(data)
            setItems(data)
            console.log(data)
        })
        .catch(err => console.log(err))
    }, [])

    // const displayItems = items.filter(item => {
    //    return(item.restaurant.id === restaurant.id)
    // })
    
    const displayItems = restrs.items.map((rest, item) => {
        return <ItemCard key={rest.item.id} rest={rest} item={item}/>
    })
        return(
        <div>
             <h1>Menu</h1>
            {displayItems}
           
           {/* <ItemCard restaurant={restaurant}/> */}
          
        </div>
    )
};

export default RestaurantDetails;