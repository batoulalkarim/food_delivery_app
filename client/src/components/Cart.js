import React from 'react';



function Cart({cartList, onItemRemove, user}){

   const itemsInCart = cartList ?
   cartList.map((item) => {
       return <div key={item.id} item={item} className="cartitem">
           <h3>{item.name} : ${item.price}</h3>
           <h4>{item.description}</h4>
           <button onClick={() => onItemRemove(item)} className='bttn'>Remove from cart</button>
       </div>

    })
     : null

    console.log(itemsInCart)
    return(
        <div className="cartcontainer">
        <div className="cart">
            <h1>{user.username}'s Cart</h1>
            </div>
        
        <div className="shift">
        <p className="left">{itemsInCart}</p>
        </div>
        <div>
            <img src="/images/kisspng-fast-food-delivery-online-food-ordering-fried-chic-5af99aea8ccb65.2444905915263075625767-removebg-preview.png" alt="oh no" className="driverimg2"/>
            <img src="/images/kisspng-fast-food-delivery-online-food-ordering-fried-chic-5af99aea8ccb65.2444905915263075625767-removebg-preview.png" alt="oh no" className="driverimg3"/>
            <img src="/images/kisspng-fast-food-delivery-online-food-ordering-fried-chic-5af99aea8ccb65.2444905915263075625767-removebg-preview.png" alt="oh no" className="driverimg4"/>
            </div>
        </div>
    )
}
export default Cart;