import React, { useReducer } from "react";
import {Link} from 'react-router-dom';

import {BsFillCartCheckFill} from 'react-icons/bs'

function NavBar({ setUser, user }) {

    function handleLogoutClick(){
        fetch("/logout", {
            method: "DELETE",
        }).then(() => setUser(null));
    }
        


            
    

    return(
    <div>
        <div>
        <p>user: {user.username}   ~
        </p>   
        {/* <button className="logout" onClick={handleLogoutClick}>Logout</button> */}
        </div>
       <nav className="navbar">
           <p className="navul">
            
           <Link to="/home" className="navli">Home</Link>
           {/* past orders needs to only exist for current users */}
           <Link to="/restaurants" className="navli">Restaurants</Link>
           <Link to="/become-a-savior" className="navli">Become a Savior</Link>
           <Link to="/contact" className="navli">Contact Us</Link> 
           <Link to="/cart" className="cart"><BsFillCartCheckFill size="20px" /></Link>
           <button className="logout" onClick={handleLogoutClick}>Logout</button>


           </p>
           </nav>
      <div className="home_left"> 
         {/* <Link to="/cart" className="cart"><BsFillCartCheckFill size="20px" /></Link> */}
         
         {/*<button className="logout" onClick={handleLogoutClick}>Logout</button> */}
      </div> 
    </div>
    )
}

export default NavBar;