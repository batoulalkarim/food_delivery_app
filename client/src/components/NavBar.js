import React from "react";
import { Link } from "react-router-dom";

function NavBar({ user, setUser }) {
    function handleLogoutClick() {
        fetch("/logout", { method: "DELETE" }).then((r) => {
            if (r.ok) {
              setUser(null);
            }
          });
    }

    return(
        <>
        <h1>
            <Link to="/home">Home</Link>
        </h1>
        <nav>
            <button as={Link} to="/restaurants">
                Restaurants
            </button>
            <button onClick={handleLogoutClick}>
                Logout
            </button>
        </nav>
        </>
    )
}

export default NavBar;