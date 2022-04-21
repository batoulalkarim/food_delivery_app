import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom'
import {Link} from 'react-router-dom';




function RestaurantDetails(){
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
        <div className="itemcard" key={item.name} restrs={restrs}>
        <h3>item name:{item.name}</h3>
        <h4>$ {item.price}</h4>
        <h4>item id: {item.id}</h4>
        <Link to="/cart">Add to cart</Link>
    </div>
    )
    }) : null 
    
        return(
        <div>
             <h1>Menu</h1>
             {display}
        </div>
    )
};

export default RestaurantDetails;