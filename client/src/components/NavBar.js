import React from "react";
import {Link} from 'react-router-dom';

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
           <Link to="/home">Home</Link>
           {/* past orders needs to only exist for current users */}
           <Link to="/past-orders">Past Orders</Link>
           <Link to="/restaurants">Restaurants</Link>
           <Link to="/become-a-savior">Become a Savior</Link> 
           <button onClick={handleLogoutClick}>Logout</button>
       </nav>
    )
}

export default NavBar;