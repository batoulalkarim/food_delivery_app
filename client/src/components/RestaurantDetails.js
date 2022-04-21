import React, {useEffect, useState} from 'react';
import ItemCard from './ItemCard';



function RestaurantDetails({restaurant}){
    const [items, setItems] = useState([])
    console.log(items)
    
    useEffect(() => {
        fetch(`http://localhost:3000/restaurants/?id=${restaurant.id}`)
        .then(res => res.json())
        .then(data => {
            setItems(data)
            console.log(data)
        })
        .catch(err => console.log(err))
    }, [])

    // const displayItems = items.filter(item => {
    //    return(item.restaurant.id === restaurant.id)
    // })
    
    const displayItems = items.map((item) => {
        return <ItemCard key={items.indexOf(item)} item={item}/>
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