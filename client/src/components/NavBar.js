import React from "react";
import {Link} from 'react-router-dom';

function NavBar() {
    return(
       <nav className="navbar">
           <Link to="/home">Home</Link>
           {/* past orders needs to only exist for current users */}
           <Link to="/past-orders">Past Orders</Link>
           <Link to="/become-a-savior">Become a Savior</Link> 
       </nav>
    )
}

export default NavBar;