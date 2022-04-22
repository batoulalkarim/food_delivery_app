import React from 'react';


function ItemCard({onItemClicked, item, restrs}){
    
    return(
      <div>

        <div className="itemcard" key={item.name} restrs={restrs}>
          <h3>{item.name} : ${item.price}</h3>
          <h3>{item.description}</h3>
          <button className="button" onClick={() => onItemClicked(item)}>Add to cart</button>
        </div>
        </div>
    )
}

export default ItemCard;