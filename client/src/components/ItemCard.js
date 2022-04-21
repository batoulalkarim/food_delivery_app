import React from 'react';
import {Link} from 'react-router-dom';

function ItemCard({restrs, restaurant, item}){
    
    return(
        <div className="itemcard_container" key={restaurant.item.id} >
            <div className="itemcard" key={item.name} restrs={restrs}>
            <h3>item name:{item.name}</h3>
            <h4>$ {item.price}</h4>
            <h4>item id: {item.id}</h4>
            <Link to="/cart">Add to cart</Link>
        </div>
        </div>
    )
}

export default ItemCard;