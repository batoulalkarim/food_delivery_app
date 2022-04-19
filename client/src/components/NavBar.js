import React from "react";
import {NavLink} from 'react-router-dom';

function NavBar() {
    return(
       <nav className="navbar">
           <NavLink exact to="/home">Home</NavLink>
           {/* past orders needs to only exist for current users */}
           <NavLink exact to="/past-orders">Past Orders</NavLink>
           <NavLink exact to="/deliver">Become a Savior</NavLink> 
       </nav>
    )
}

export default NavBar;