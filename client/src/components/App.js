import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./Login";
// import Home from "./components/Home";
import NavBar from "./NavBar";

function App() {
  const [user, setUser] = useState(null)

  useEffect(() => {
    //this is so you can auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  if (!user) return <Login onLogin={setUser} />

  return (
    <>
    {/* <Home /> */}
      <NavBar user={user} setUser={setUser} />
      <Routes>
        {/* <Route path="/home" render={Home} /> */}
       </Routes>
    </>
  );
}

export default App;