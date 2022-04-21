import React from 'react';

function ItemCard({restaurant}){
    
    return(
        <div className="itemcard_container" key={restaurant.item.id} >
            <div className="itemcard">
                <h3>{restaurant.item.name}</h3>
                <h4>$ {restaurant.item.price}</h4>
                <h4>item id: {restaurant.item.id}</h4>
                <button>Add to Cart</button>
            </div>
        </div>
    )
}

export default ItemCard;