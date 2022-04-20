import React from 'react';
import {BsFillCartCheckFill} from 'react-icons/bs'
import {Link} from 'react-router-dom';

function Cart(){
    return(
        <div className="cart">
            <Link to="" className="cart"><BsFillCartCheckFill size="20px" /></Link>
     
        </div>
    )
}
export default Cart;