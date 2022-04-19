import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Login from './Login';
import Home from './Home';
import NavBar from './NavBar';


// import LoginForm from './LoginForm';

function App() {
  const [currentUser, setCurrentUser] = useState('');


  useEffect(() => {
    fetch('/auth')
    .then(res => {
      if(res.ok){
        res.json().then(user => setCurrentUser(user))
      } 
    })
  }, [])

  if(!currentUser) return <Login setCurrenUser={setCurrentUser} />
  return (
    <>

    <Router>
  <NavBar />
    <Routes>
      <Route path="/">
        <Home />
      </Route>
    </Routes>

  </Router>
   
    </>
  );
}

export default App;