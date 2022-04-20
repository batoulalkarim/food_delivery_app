import React, { useEffect, useState } from 'react';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Login from './Login';
import Home from './Home';
import NavBar from './NavBar';
import BecomeASavior from './BecomeASavior';
import RestaurantPage from './RestaurantPage'



// import LoginForm from './LoginForm';

function App() {
  const [currentUser, setCurrentUser] = useState('');
  // const navigate = useNavigate();

  useEffect(() => {
    fetch('/auth')
    .then(res => {
      if(res.ok){
        res.json().then(user => setCurrentUser(user))
      } 
    })
  }, [])

  console.log(currentUser);
  if(!currentUser) return <Login setCurrentUser={setCurrentUser} />


  return (

 <>

  
 <Router>
 <NavBar setCurrentUser={setCurrentUser} />

    <Switch>
      
      <Route exact path="/become-a-savior">
        <BecomeASavior />
      </Route>
      <Route path="/restaurants">
        <RestaurantPage />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
    </Router>
</>
   
  );
}

export default App;