import React from "react";
import {Link} from 'react-router-dom';

import {BsFillCartCheckFill} from 'react-icons/bs'

function NavBar({ setCurrentUser }) {

    function handleLogoutClick(){
        fetch("/logout", { method: "DELETE"}).then((r) => {
            if (r.ok) {
                // console.log(r)
                setCurrentUser(null);
            }
        });
    }
    return(

    <div>
       <nav className="navbar">
           <p className="navul">
           <Link to="/home" className="navli">Home</Link>
           {/* past orders needs to only exist for current users */}
           <Link to="/past-orders" className="navli">Past Orders</Link>
           <Link to="/restaurants" className="navli">Restaurants</Link>
           <Link to="/become-a-savior" className="navli">Become a Savior</Link> 
           {/* <Cart /> */}
           <button className="logout" onClick={handleLogoutClick}>Logout</button>
           </p>
        </nav>
      <div className="home_left"> 
         <Link to="/cart" className="cart"><BsFillCartCheckFill size="20px" /></Link>
         {/*<button className="logout" onClick={handleLogoutClick}>Logout</button> */}
      </div> 
    </div>
    )
}

export default NavBar;