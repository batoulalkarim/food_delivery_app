import React from 'react';

function ItemCard({item}){
    
    return(
        <div className="itemcard_container" key={item.id} >
            <div className="itemcard">
                <h3>{item.name}</h3>
                <h4>$ {item.price}</h4>
                <h4>item id: {item.id}</h4>
                <button>Add to Cart</button>
            </div>
        </div>
    )
}

export default ItemCard;