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
        </div>
    )
}
export default Cart;