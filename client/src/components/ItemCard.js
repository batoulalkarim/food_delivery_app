import React from 'react';

function ItemCard({item}){
    
    return(
        <div className="itemcard_container" >
            <div className="itemcard">
                <h5>item name</h5>
                <h4>$ item price</h4>

                {/* <h1>{restaurant.item.name}</h1>
                <h4>{restaurant.item.price}</h4> */}
                {/* <ul>
                    <li>item names and prices in here</li>
                </ul> */}
            </div>
        </div>
    )
}

export default ItemCard;