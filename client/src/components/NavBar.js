import React from "react";
import {Link} from 'react-router-dom';
import Cart from "./Cart";

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
       <nav className="navbar">
           <ul className="navul">
                {/* <li className="navli">Flavor Savior</li>
                <li className="navli"><a href="/home">Home</a></li>
                <li className="navli"><a href="/restaurants">Restaurants</a></li>
                <li className="navli"><a href="/become-a-savior">Become a Savior</a></li> */}
            
           <Link to="/home" className="navli">Home</Link>
           {/* past orders needs to only exist for current users */}
           <Link to="/past-orders" className="navli">Past Orders</Link>
           <Link to="/restaurants" className="navli">Restaurants</Link>
           <Link to="/become-a-savior" className="navli">Become a Savior</Link> 
           <Cart />
           <button className="logout" onClick={handleLogoutClick}>Logout</button>
           </ul>
           
    </nav>
    )
}

export default NavBar;